"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  src: string;
  type: string;
  title: string;
  tag: string;
}

const VIDEO_PLAYLIST: VideoItem[] = [
  {
    id: "brasero-grill",
    src: "/album-photo/20260508_185939.mp4",
    type: "video/mp4",
    title: "L'art du Brasero",
    tag: "Brasero",
  },
  {
    id: "ambiance-partage",
    src: "/album-photo/2026-03-08-110509674.mp4",
    type: "video/mp4",
    title: "Le sens du partage",
    tag: "Traiteur",
  },
  {
    id: "esprit-rugby",
    src: "/album-photo/VID-20251205-WA0007.mp4",
    type: "video/mp4",
    title: "Esprit Troisième Mi-temps",
    tag: "Convivialité",
  },
  {
    id: "soiree-festive",
    src: "/album-photo/VID_20260501_134305_696.mp4",
    type: "video/mp4",
    title: "Grande Fête au Grand Air",
    tag: "Événement",
  },
];

// Duplicate the playlist to support infinite scrolling seamlessly
const DUPLICATED_PLAYLIST = [
  ...VIDEO_PLAYLIST,
  ...VIDEO_PLAYLIST,
  ...VIDEO_PLAYLIST,
];

export function VideoWidget() {
  // Start on index 4 (first item of the middle copy) so that on first load
  // the Brasero video is in the center, with videos to its left and right.
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Pause all videos whenever index or playing state changes
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== currentIndex) {
        video.pause();
      }
    });
  }, [currentIndex]);

  const handlePrev = () => {
    if (isTransitioning) return;

    // Pause the active video before sliding
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.pause();
    }
    setIsPlaying(false);

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;

    // Pause the active video before sliding
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.pause();
    }
    setIsPlaying(false);

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle silent jumps after the transition animation ends
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // If we scroll into the first copy (below middle)
    if (currentIndex <= 3) {
      setCurrentIndex(currentIndex + VIDEO_PLAYLIST.length);
    }
    // If we scroll into the last copy (above middle)
    else if (currentIndex >= 8) {
      setCurrentIndex(currentIndex - VIDEO_PLAYLIST.length);
    }
  };

  const togglePlay = () => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            if (err.name !== "AbortError") {
              console.error("Playback error:", err);
            }
          });
      } else {
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-4 relative overflow-hidden select-none">
      {/* Carousel Track Container */}
      <div
        className="relative w-full overflow-hidden py-6"
        style={{
          "--card-width": "min(85vw, 640px)",
          "--card-gap": "2.5rem",
        } as React.CSSProperties}
      >
        <motion.div
          className="flex gap-[var(--card-gap)]"
          animate={{
            x: `calc(-${currentIndex} * (var(--card-width) + var(--card-gap)) + 50vw - (var(--card-width) / 2))`,
          }}
          transition={
            isTransitioning
              ? { type: "spring", stiffness: 180, damping: 24 }
              : { duration: 0 } // silent instant jump
          }
          onAnimationComplete={handleTransitionEnd}
          style={{ width: "max-content" }}
        >
          {DUPLICATED_PLAYLIST.map((video, idx) => {
            const isCenter = idx === currentIndex;

            return (
              <motion.div
                key={`${video.id}-${idx}`}
                onClick={() => {
                  if (idx !== currentIndex && !isTransitioning) {
                    // Pause playing video before sliding
                    const activeVideo = videoRefs.current[currentIndex];
                    if (activeVideo) {
                      activeVideo.pause();
                    }
                    setIsPlaying(false);

                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                  }
                }}
                className={cn(
                  "relative shrink-0 w-[var(--card-width)] aspect-video rounded-[2.5rem] overflow-hidden bg-black/50 border border-surface/5 shadow-2xl transition-all duration-500 ease-out cursor-pointer",
                  isCenter ? "scale-100 opacity-100 z-10" : "scale-90 opacity-40 hover:opacity-70"
                )}
              >
                {/* HTML5 Video Player */}
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  className={cn(
                    "w-full h-full pointer-events-auto transition-all duration-300",
                    isCenter && isPlaying ? "object-contain bg-black" : "object-cover"
                  )}
                  playsInline
                  onClick={(e) => {
                    if (isCenter) {
                      e.stopPropagation();
                      togglePlay();
                    }
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  controls={isCenter && isPlaying}
                >
                  <source src={video.src} type={video.type} />
                </video>

                {/* Big Center Play Icon Overlay (Fades out when playing) */}
                {isCenter && !isPlaying && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary hover:bg-primary-dark text-surface flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all z-20 pointer-events-auto"
                    aria-label="Lancer la vidéo"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 translate-x-0.5 fill-current" />
                  </button>
                )}


              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Arrow Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-16 h-16 rounded-full border border-border/20 bg-surface/5 flex items-center justify-center text-surface hover:bg-primary hover:text-surface hover:border-transparent transition-all group active:scale-95"
          aria-label="Vidéo précédente"
        >
          <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
        </button>
        <button
          onClick={handleNext}
          className="w-16 h-16 rounded-full border border-border/20 bg-surface/5 flex items-center justify-center text-surface hover:bg-primary hover:text-surface hover:border-transparent transition-all group active:scale-95"
          aria-label="Vidéo suivante"
        >
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
