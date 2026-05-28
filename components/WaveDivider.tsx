"use client";

import { cn } from "@/lib/utils";

interface WaveDividerProps {
  fromColor: string; // Tailwind class, e.g., "bg-primary" or "bg-dark"
  toColor: string;   // Tailwind class for the wave fill, e.g., "text-dark" or "text-background"
  flip?: boolean;    // Flip vertically if true
  className?: string;
  height?: string;
  speed?: "slow" | "normal" | "fast";
}

export function WaveDivider({
  fromColor,
  toColor,
  flip = false,
  className,
  speed = "normal",
  height = "100px",
}: WaveDividerProps) {
  const animClass = {
    slow: "animate-wave-slow",
    normal: "animate-wave-normal",
    fast: "animate-wave-fast",
  }[speed];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-[1px]",
        fromColor,
        className
      )}
      style={{ height }}
    >
      <div
        className={cn(
          "flex w-[200%] h-full",
          flip && "transform scale-y-[-1]",
          animClass
        )}
      >
        <svg
          viewBox="0 0 2880 80"
          className={cn("w-full h-full fill-current shrink-0", toColor)}
          preserveAspectRatio="none"
        >
          <path d="M 0 40 Q 180 0, 360 40 T 720 40 T 1080 40 T 1440 40 T 1800 40 T 2160 40 T 2520 40 T 2880 40 L 2880 80 L 0 80 Z" />
        </svg>
      </div>
    </div>
  );
}
