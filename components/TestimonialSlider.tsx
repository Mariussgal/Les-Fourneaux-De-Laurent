"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  bgColorClass: string;
  textColorClass: string;
  accentColorClass: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Super expérience avec Laurent pour un anniversaire. Il nous a préparé un apéritif sur mesure, avec des plateaux de charcuterie et de fromages, des accras et des mini feuilletés de fromage. Des hot-dogs maison avec des patatoes maison cuite dans la graisse de canard. Un vrai régal pour les papilles. Il arrive avec tout son matériel et prépare devant vous. Le tout dans une ambiance conviviale.",
    author: "Jean maxime vachat",
    bgColorClass: "bg-[#2D2520]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#9E826C]",
    link: "https://share.google/aTPiBMxAebU6TsOxN",
  },
  {
    quote: "Prestation de qualité. Laurent a réalisé une prestation à mon domicile pour 20 personnes. Produits de qualité, quantité cohérente avec le nombre de convive et tout cela dans la bonne humeur et une grande sympathie. Je recommande les yeux fermés ! 👍🏻",
    author: "Quentin Legrou",
    bgColorClass: "bg-[#3E454F]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#C5B49F]",
    link: "https://share.google/rtBRaDjArGtPVYjYB",
  },
  {
    quote: "Excellente prestation du début à la fin ! Le repas était délicieux, et parfaitement présenté. Tous les invités se sont régalés et ont souligné la qualité du service. Organisation impeccable, ponctualité et grande attention aux détails. Un vrai plaisir d’avoir fait appel à ce traiteur à domicile, je recommande les yeux fermés !",
    author: "Lisa Coury",
    bgColorClass: "bg-[#7A624E]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#E5E2DC]",
    link: "https://share.google/LdTxwO7eWFhG1tV9E",
  },
  {
    quote: "Fait pour une soixantaine de personnes aujourd'hui malgré un temps couvert..... Qualité, maîtrise des cuissons, sourire et convivialité. Parfait, merci Laurent 👍 au top",
    author: "Tom de Made",
    bgColorClass: "bg-[#2D2520]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#9E826C]",
    link: "https://share.google/LD8a3K2K7prHdfziy",
  },
  {
    quote: "Très belle prestation, timing nickel, les invités se sont régalés le tout dans la joie et la bonne humeur !! Je recommande chaudement (nous avions pris la formule brasero pour 85 personnes c’était très réussi)",
    author: "Lucie Guinard",
    bgColorClass: "bg-[#3E454F]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#C5B49F]",
    link: "https://share.google/BCFoIsXY3OiFwWpXJ",
  },
  {
    quote: "Un grand merci aux Fourneaux de Laurent pour leur prestation exceptionnelle ! Un buffet pour 125 personnes. Des produits frais, des saveurs authentiques et une présentation soignée : tout était parfait. Le professionnalisme, la ponctualité et la gentillesse de l'équipe ont largement contribué à la réussite de notre événement. Nous recommandons les yeux fermés ! Bravo et à très bientôt !",
    author: "christian C",
    bgColorClass: "bg-[#7A624E]",
    textColorClass: "text-[#FAF9F6]",
    accentColorClass: "bg-[#E5E2DC]",
    link: "https://share.google/HrsDU3pS03MUO9Ul9",
  },
];

// Duplicate the array to support infinite scrolling seamlessly
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export function TestimonialSlider() {
  // Start in the middle copy
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
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
    if (currentIndex < testimonials.length) {
      setCurrentIndex(currentIndex + testimonials.length);
    }
    // If we go above the middle copy range
    else if (currentIndex >= testimonials.length * 2) {
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
                  if (idx !== currentIndex) {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(idx);
                    }
                  } else if (t.link) {
                    window.open(t.link, "_blank", "noopener,noreferrer");
                  }
                }}
                className={cn(
                  "relative group flex flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 rounded-[2.5rem] shrink-0 w-[var(--card-width)] h-auto min-h-[400px] sm:min-h-[430px] md:min-h-[460px] lg:min-h-[480px] transition-all duration-500 ease-out cursor-pointer",
                  t.bgColorClass,
                  t.textColorClass,
                  isCenter ? "scale-100 opacity-100 z-10 border border-white/5 hover:border-white/20" : "scale-90 opacity-100 border border-transparent"
                )}
              >
                {/* Google review link badge (only visible/interactable when centered) */}
                {isCenter && t.link && (
                  <div className="absolute top-6 right-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF9F6]/10 backdrop-blur-md border border-[#FAF9F6]/10 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#FAF9F6]/85 group-hover:text-[#FAF9F6] group-hover:bg-[#FAF9F6]/20 group-hover:border-[#FAF9F6]/20 transition-all duration-300">
                    <span>Avis Google</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                )}

                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium leading-relaxed italic text-center my-auto">
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

