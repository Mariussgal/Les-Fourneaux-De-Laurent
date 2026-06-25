import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-surface pt-4 pb-4 md:pt-8 md:pb-6 px-4 md:px-6 lg:px-24 md:min-h-[300px] flex flex-col justify-between -mt-1 relative z-20">
      <div className="container-custom w-full flex-grow flex flex-col justify-between gap-4 md:gap-6">
        <div>
          {/* Giant Animated Brand Wave Banner */}
          <div className="w-full max-w-5xl mx-auto relative overflow-hidden mb-2 select-none">
            <svg viewBox="0 0 1000 350" className="w-full h-auto select-none pointer-events-none">
              <defs>
                <clipPath id="laurent-text-clip">
                  <text
                    x="50%"
                    y="130"
                    textAnchor="middle"
                    className="font-cormorant font-bold uppercase tracking-wider"
                    style={{ fontSize: "115px" }}
                  >
                    LES FOURNEAUX
                  </text>
                  <text
                    x="50%"
                    y="260"
                    textAnchor="middle"
                    className="font-cormorant font-bold uppercase tracking-wider"
                    style={{ fontSize: "115px" }}
                  >
                    DE LAURENT
                  </text>
                </clipPath>
              </defs>

              <g clipPath="url(#laurent-text-clip)">
                {/* Layer 1: Champagne mineral base */}
                <rect width="1000" height="350" fill="#D5C7B8" />

                {/* Layer 2: Weathered wood wave sliding */}
                <g className="animate-footer-wave-slow">
                  <path d="M 0 100 Q 250 60, 500 100 T 1000 100 T 1500 100 T 2000 100 L 2000 350 L 0 350 Z" fill="#8E7B68" />
                </g>

                {/* Layer 3: Brushed steel wave sliding in reverse */}
                <g className="animate-footer-wave-normal" style={{ animationDirection: "reverse" }}>
                  <path d="M 0 160 Q 250 120, 500 160 T 1000 160 T 1500 160 T 2000 160 L 2000 350 L 0 350 Z" fill="#4A453F" />
                </g>

                {/* Layer 4: Bronze satin wave sliding */}
                <g className="animate-footer-wave-fast">
                  <path d="M 0 220 Q 250 180, 500 220 T 1000 220 T 1500 220 T 2000 220 L 2000 350 L 0 350 Z" fill="#B09B87" />
                </g>

                {/* Layer 5: Mineral silver wave sliding in reverse */}
                <g className="animate-footer-wave-slow" style={{ animationDirection: "reverse" }}>
                  <path d="M 0 280 Q 250 250, 500 280 T 1000 280 T 1500 280 T 2000 280 L 2000 350 L 0 350 Z" fill="#FAF9F6" />
                </g>
              </g>
            </svg>
          </div>

          {/* Sub-brand tagline */}
          <div className="text-center font-sans font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest uppercase text-accent mb-4 md:mb-6">
            Traiteur & Food Truck du Sud-Ouest
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 md:gap-8 pt-4 md:pt-6 border-t border-border/10">
          {/* Brand Info */}
          <div className="hidden md:block space-y-1.5 md:space-y-3 col-span-2 md:col-span-1">
            <Link href="/" className="font-cormorant font-bold text-lg sm:text-xl lg:text-2xl text-surface hover:text-accent transition-colors">
              Les Fourneaux de Laurent
            </Link>
            <p className="text-border/80 font-medium text-xs sm:text-sm leading-snug">
              La convivialité à chaque bouchée.
            </p>
            <p className="text-border/60 text-[11px] sm:text-xs">
              Asnières-sur-Seine, Île-de-France
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-1.5 md:space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-cormorant font-bold text-sm sm:text-base lg:text-lg hover:text-accent transition-colors">Navigation</h4>
            <nav className="flex flex-row flex-wrap md:flex-col gap-x-4 gap-y-2 md:gap-1.5 text-[11px] sm:text-sm">
              <Link href="/" className="text-border/80 hover:text-surface transition-colors">Accueil</Link>
              <Link href="/food-truck" className="text-border/80 hover:text-surface transition-colors">Food Truck</Link>
              <Link href="/nos-services-traiteur" className="text-border/80 hover:text-surface transition-colors">Services traiteur</Link>
              <Link href="/tarifs" className="text-border/80 hover:text-surface transition-colors">Tarifs</Link>
              <Link href="/album" className="text-border/80 hover:text-surface transition-colors">Album</Link>
              <Link href="/contact" className="text-border/80 hover:text-surface transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-1.5 md:space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-cormorant font-bold text-sm sm:text-base lg:text-lg hover:text-accent transition-colors">Contact</h4>
            <div className="text-border/80 space-y-1 md:space-y-1.5 text-[11px] sm:text-sm">
              <p>06 46 86 34 34</p>
              <p className="break-all">lesfourneauxdelaurent@gmail.com</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="space-y-1.5 md:space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-cormorant font-bold text-sm sm:text-base lg:text-lg hover:text-accent transition-colors">Informations</h4>
            <p className="text-border/60 text-[11px] sm:text-sm" suppressHydrationWarning>
              © 2025–{currentYear} Les Fourneaux de Laurent.
            </p>
            <div className="pt-2 md:pt-2 border-t border-border/10">
              <p className="text-[10px] sm:text-xs text-border/40 italic leading-snug">
                L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
