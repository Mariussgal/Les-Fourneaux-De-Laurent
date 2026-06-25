"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function MobileMenuSlider({ children, className }: { children: React.ReactNode, className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) {
      setScrollProgress(0);
      return;
    }
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <div className={cn("w-full max-w-6xl mx-auto mb-16", className)}>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex lg:grid lg:grid-cols-3 gap-4 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 pt-2 px-4 -mx-4 sm:px-0 sm:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {children}
      </div>
      
      {/* Custom Slider Indicator for Mobile */}
      <div className="mt-4 flex justify-center lg:hidden">
        <div className="w-24 h-1.5 bg-dark/10 rounded-full overflow-hidden flex">
          <div 
            className="h-full bg-primary rounded-full will-change-transform"
            style={{ 
              width: '33.33%', 
              transform: `translateX(${scrollProgress * 2}%)` 
            }}
          />
        </div>
      </div>
    </div>
  );
}
