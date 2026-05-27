"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  bgColorClass: string;
  textColorClass: string;
  accentColorClass: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Nous avons fait appel à Laurent pour un dîner d'anniversaire à domicile, avec brasero et apéritif, et ce fut une réussite totale ! La viande était d'une qualité exceptionnelle, les légumes étaient frais. Professionnel du début à la fin.",
    author: "Sofia CAPESTRO",
    bgColorClass: "bg-[#2D2520]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#9E826C]",
  },
  {
    quote: "Prestation pour 50 personnes parfaite. Produits de grande qualité, cuisson géniale et service impeccable. Les tapas en apéritif étaient variés et excellents. L'ensemble de nos invités a été unanime : le goût était présent du début à la fin !",
    author: "Myriam ENAULT",
    bgColorClass: "bg-[#3E454F]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#C5B49F]",
  },
  {
    quote: "Très bonne cuisine, tout le monde s'est régalé. Je recommande vivement et je n'hésiterai pas à passer par Laurent pour un futur événement familial ou professionnel. Merci encore pour ce moment chaleureux.",
    author: "Anais S.",
    bgColorClass: "bg-[#7A624E]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#E5E2DC]",
  },
];

// Duplicate the array to support infinite scrolling seamlessly
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export function TestimonialSlider() {
  // Start in the middle copy (index 4 corresponds to Myriam)
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle infinite looping jumps silently after transition ends
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // If we go below the middle copy range
    if (currentIndex <= 2) {
      setCurrentIndex(currentIndex + testimonials.length);
    }
    // If we go above the middle copy range
    else if (currentIndex >= 6) {
      setCurrentIndex(currentIndex - testimonials.length);
    }
  };

  return (
    <section className="py-24 bg-background text-dark relative overflow-hidden flex flex-col items-center">
      {/* Badge */}
      <div className="mb-6 px-5 py-1.5 border border-border rounded-full text-xs font-bold tracking-widest uppercase">
        Témoignages
      </div>

      {/* Title */}
      <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl text-center max-w-4xl mb-16 tracking-normal uppercase">
        Pourquoi nos convives <br />
        reviennent toujours
      </h2>

      {/* Carousel Track Container */}
      <div 
        className="relative w-full overflow-hidden py-4"
        style={{
          // Define CSS variables for easier responsive calculations
          "--card-width": "min(85vw, 600px)",
          "--card-gap": "2rem",
          "--card-width-mobile": "85vw",
          "--card-width-desktop": "600px",
        } as React.CSSProperties}
      >
        <motion.div
          className="flex gap-[var(--card-gap)]"
          animate={{
            x: `calc(-${currentIndex} * (var(--card-width) + var(--card-gap)) + 50vw - (var(--card-width) / 2))`,
          }}
          transition={
            isTransitioning
              ? { type: "spring", stiffness: 200, damping: 25 }
              : { duration: 0 } // instant jump for loops
          }
          onAnimationComplete={handleTransitionEnd}
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((t, idx) => {
            const isCenter = idx === currentIndex;
            
            return (
              <motion.div
                key={idx}
                onClick={() => {
                  if (idx !== currentIndex && !isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                  }
                }}
                className={cn(
                  "flex flex-col justify-between p-8 md:p-12 rounded-[2.5rem] shrink-0 w-[var(--card-width)] h-[380px] transition-all duration-500 ease-out cursor-pointer",
                  t.bgColorClass,
                  t.textColorClass,
                  isCenter ? "scale-100 opacity-100 z-10" : "scale-90 opacity-100"
                )}
              >
                <p className="font-display text-xl md:text-2xl lg:text-[1.65rem] font-medium leading-relaxed italic text-center my-auto">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 justify-center mt-6">
                  <div className={cn("h-[2px] w-6", t.accentColorClass)} />
                  <p className="font-bold uppercase tracking-wider text-xs">
                    {t.author}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button
          onClick={handlePrev}
          className="w-16 h-16 rounded-full border border-border flex items-center justify-center hover:bg-dark hover:text-surface hover:border-transparent transition-all group active:scale-95"
          aria-label="Témoignage précédent"
        >
          <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
        </button>
        <button
          onClick={handleNext}
          className="w-16 h-16 rounded-full border border-border flex items-center justify-center hover:bg-dark hover:text-surface hover:border-transparent transition-all group active:scale-95"
          aria-label="Témoignage suivant"
        >
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
