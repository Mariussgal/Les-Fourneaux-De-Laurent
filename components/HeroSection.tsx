import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  headline: string | React.ReactNode;
  subline?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  backgroundImage?: string;
  backgroundPosition?: string;
  opacityClass?: string;
}

export function HeroSection({ 
  headline, 
  subline, 
  ctaPrimary, 
  ctaSecondary, 
  backgroundImage,
  backgroundPosition = "object-center",
  opacityClass = "opacity-100"
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden bg-background">
      {/* Optional Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            sizes="100vw"
            className={`object-cover ${opacityClass} ${backgroundPosition}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20" />
        </div>
      )}

      <div className="relative z-10 container-custom w-full flex flex-col">
        <h1 className="font-condensed text-6xl md:text-8xl lg:text-[9rem] tracking-normal text-dark leading-[0.95] mb-8 max-w-5xl whitespace-pre-line uppercase">
          {headline}
        </h1>

        {subline && (
          <p className="text-xl md:text-2xl text-dark font-semibold max-w-2xl mb-12 whitespace-pre-line leading-relaxed">
            {subline}
          </p>
        )}

        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="group flex items-center justify-between gap-3 sm:gap-6 bg-dark hover:bg-primary text-surface pl-5 sm:pl-8 pr-2 sm:pr-3 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{ctaPrimary.label}</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface text-dark flex items-center justify-center transition-transform group-hover:rotate-45 shrink-0">
                <ArrowUpRight size={16} className="stroke-[2.5] sm:size-[18px]" />
              </span>
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="group flex items-center justify-between gap-3 sm:gap-6 bg-[#E8DDD0] hover:bg-[#FAF7F2] text-dark pl-5 sm:pl-8 pr-2 sm:pr-3 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm border border-border hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{ctaSecondary.label}</span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dark text-surface flex items-center justify-center transition-transform group-hover:rotate-45 shrink-0">
                <ArrowUpRight size={16} className="stroke-[2.5] sm:size-[18px]" />
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
