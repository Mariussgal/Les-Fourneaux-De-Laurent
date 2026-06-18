"use client";

import { useState } from "react";
import { AlbumCarousel } from "./AlbumCarousel";
import { cn } from "@/lib/utils";

interface AlbumImage {
  src: string;
  alt: string;
}

interface AlbumGalleryProps {
  foodtruckImages: AlbumImage[];
  serviceTraiteurImages: AlbumImage[];
}

export function AlbumGallery({ foodtruckImages, serviceTraiteurImages }: AlbumGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<"foodtruck" | "traiteur">("foodtruck");

  const imagesToDisplay = activeCategory === "foodtruck" ? foodtruckImages : serviceTraiteurImages;

  return (
    <div className="w-full flex flex-col gap-10 items-center">
      {/* Tab Selector */}
      <div className="flex bg-surface/10 p-1.5 rounded-full backdrop-blur-sm border border-surface/20 shadow-xl">
        <button
          onClick={() => setActiveCategory("foodtruck")}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all",
            activeCategory === "foodtruck"
              ? "bg-primary text-surface shadow-md"
              : "text-surface/60 hover:text-surface hover:bg-surface/10"
          )}
        >
          Food Truck
        </button>
        <button
          onClick={() => setActiveCategory("traiteur")}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-all",
            activeCategory === "traiteur"
              ? "bg-primary text-surface shadow-md"
              : "text-surface/60 hover:text-surface hover:bg-surface/10"
          )}
        >
          Service Traiteur
        </button>
      </div>

      {/* Carousel Container */}
      <div className="w-full">
        {/* Force re-mount of carousel when changing category so it resets to index 0 */}
        <AlbumCarousel key={activeCategory} images={imagesToDisplay} />
      </div>
    </div>
  );
}
