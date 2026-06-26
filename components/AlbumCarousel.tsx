"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

// Category Definitions
type Category = "all" | "brasero" | "food-truck" | "traiteur" | "cuisine";

interface AlbumImage {
  src: string;
  alt: string;
}

export function AlbumCarousel({ images }: { images: AlbumImage[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredImages = images;

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !lightboxOpen) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIdx, lightboxOpen, filteredImages.length]);

  // Scroll active thumbnail into center view
  useEffect(() => {
    const activeThumb = thumbnailRefs.current[activeIdx];
    const container = scrollContainerRef.current;
    if (activeThumb && container) {
      const containerWidth = container.offsetWidth;
      const thumbLeft = activeThumb.offsetLeft;
      const thumbWidth = activeThumb.offsetWidth;
      const scrollPosition = thumbLeft - containerWidth / 2 + thumbWidth / 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx, lightboxOpen, filteredImages.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > activeIdx ? 1 : -1);
    setActiveIdx(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const currentImage = filteredImages[activeIdx] || filteredImages[0];
  
  if (!filteredImages || filteredImages.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6 select-none overflow-hidden max-w-full">


      {/* Main Slider Display */}
      <div className="relative aspect-[4/3] sm:aspect-video w-full max-w-5xl mx-auto rounded-3xl md:rounded-[2rem] overflow-hidden bg-black/40 border border-surface/5 shadow-2xl flex items-center justify-center group/slider">
        {/* Backdrop Blur behind the active image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {currentImage && (
            <Image
              src={currentImage.src}
              alt="Backdrop blur shadow"
              fill
              sizes="100px"
              priority
              className="object-cover blur-3xl scale-125 opacity-30 select-none pointer-events-none"
            />
          )}
        </div>

        {/* Carousel Transition Area */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden z-10">
          <AnimatePresence initial={false} custom={direction}>
            {currentImage && (
              <motion.div
                key={currentImage.src}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -80) {
                    handleNext();
                  } else if (swipe > 80) {
                    handlePrev();
                  }
                }}
                className="absolute inset-0 flex items-center justify-center cursor-zoom-in"
                onClick={() => setLightboxOpen(true)}
              >
                <div className="relative w-full h-full p-4 md:p-8 flex items-center justify-center">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority
                    className="object-contain select-none pointer-events-none rounded-[1.5rem] md:rounded-[2rem]"
                  />
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls Overlay */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-primary border border-surface/15 flex items-center justify-center text-surface hover:border-transparent transition-all pointer-events-auto shadow-md hover:scale-105 active:scale-95 group"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 hover:bg-primary border border-surface/15 flex items-center justify-center text-surface hover:border-transparent transition-all pointer-events-auto shadow-md hover:scale-105 active:scale-95 group"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Utility Buttons Top-Right */}
        <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-primary/95 flex items-center justify-center text-surface transition-all shadow-md"
            title="Agrandir en plein écran"
          >
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Current Image Indicator */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-surface/10 rounded-full text-xs text-surface/90 font-bold z-20">
          {activeIdx + 1} / {filteredImages.length}
        </div>
      </div>

      {/* Thumbnails Navigation Strip */}
      <div className="relative w-full max-w-5xl mx-auto px-1 md:px-0">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto py-3 px-2 scrollbar-hide snap-x select-none scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {filteredImages.map((img, idx) => (
            <button
              key={img.src}
              ref={(el) => {
                thumbnailRefs.current[idx] = el;
              }}
              onClick={() => handleThumbnailClick(idx)}
              className={cn(
                "relative aspect-video w-20 md:w-28 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 snap-center outline-none",
                idx === activeIdx
                  ? "border-primary opacity-100 scale-105 shadow-md shadow-primary/20"
                  : "border-transparent opacity-40 hover:opacity-85"
              )}
            >
              <Image
                src={img.src}
                alt={`Miniature ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 80px, 112px"
                className="object-cover pointer-events-none"
              />
            </button>
          ))}
        </div>

        {/* Shadow indicators for scrolling */}
        <div className="absolute top-3 bottom-3 left-2 w-8 bg-gradient-to-r from-[#1E1B18] to-transparent pointer-events-none" />
        <div className="absolute top-3 bottom-3 right-2 w-8 bg-gradient-to-l from-[#1E1B18] to-transparent pointer-events-none" />
      </div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between"
          >
            {/* Header info / controls */}
            <div className="w-full flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent z-10">
              <div className="flex flex-col gap-1">
                <span className="text-surface/60 text-sm font-bold">
                  {activeIdx + 1} / {filteredImages.length}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark flex items-center justify-center text-surface transition-colors shadow-lg"
                  title="Fermer"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Main Fullscreen View */}
            <div className="flex-grow relative flex items-center justify-center overflow-hidden w-full px-4 md:px-12">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={`lightbox-${currentImage.src}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -80) {
                      handleNext();
                    } else if (swipe > 80) {
                      handlePrev();
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center p-4 md:p-12"
                >
                  <div className="relative w-full h-full max-w-7xl max-h-[80vh]">
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      sizes="100vw"
                      className="object-contain select-none pointer-events-none"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows for Lightbox */}
              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                <button
                  onClick={handlePrev}
                  className="w-14 h-14 rounded-full bg-surface/5 hover:bg-primary border border-surface/10 hover:border-transparent flex items-center justify-center text-surface transition-all pointer-events-auto shadow-md hover:scale-105 active:scale-95"
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-14 h-14 rounded-full bg-surface/5 hover:bg-primary border border-surface/10 hover:border-transparent flex items-center justify-center text-surface transition-all pointer-events-auto shadow-md hover:scale-105 active:scale-95"
                >
                  <ChevronRight size={36} />
                </button>
              </div>
            </div>

            {/* Bottom thumbnail indicator bar */}
            <div className="w-full py-6 bg-gradient-to-t from-black/80 to-transparent flex justify-center items-center gap-2 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-1.5 max-w-full overflow-x-auto pb-2">
                {filteredImages.map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      idx === activeIdx
                        ? "bg-primary w-8"
                        : "bg-surface/30 w-2 hover:bg-surface/50"
                    )}
                    aria-label={`Aller à la diapositive ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
