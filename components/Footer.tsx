import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-surface pt-12 pb-6 px-6 lg:px-24 md:min-h-[calc(100vh-250px)] flex flex-col justify-between">
      <div className="container-custom w-full flex-grow flex flex-col justify-between gap-6">
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
                    className="font-display font-black tracking-tighter"
                    style={{ fontSize: "110px" }}
                  >
                    LES FOURNEAUX
                  </text>
                  <text
                    x="50%"
                    y="260"
                    textAnchor="middle"
                    className="font-display font-black tracking-tighter"
                    style={{ fontSize: "110px" }}
                  >
                    DE LAURENT
                  </text>
                </clipPath>
              </defs>
              
              <g clipPath="url(#laurent-text-clip)">
                {/* Layer 1: Pink base */}
                <rect width="1000" height="350" fill="#FCDAD7" />

                {/* Layer 2: Mustard Wave sliding */}
                <g className="animate-footer-wave-slow">
                  <path d="M 0 100 Q 250 60, 500 100 T 1000 100 T 1500 100 T 2000 100 L 2000 350 L 0 350 Z" fill="#D4A843" />
                </g>

                {/* Layer 3: Terracotta Wave sliding in reverse */}
                <g className="animate-footer-wave-normal" style={{ animationDirection: "reverse" }}>
                  <path d="M 0 160 Q 250 120, 500 160 T 1000 160 T 1500 160 T 2000 160 L 2000 350 L 0 350 Z" fill="#C0392B" />
                </g>

                {/* Layer 4: Warm Terracotta Clay Wave sliding */}
                <g className="animate-footer-wave-fast">
                  <path d="M 0 220 Q 250 180, 500 220 T 1000 220 T 1500 220 T 2000 220 L 2000 350 L 0 350 Z" fill="#E59866" />
                </g>

                {/* Layer 5: Cream Wave sliding in reverse */}
                <g className="animate-footer-wave-slow" style={{ animationDirection: "reverse" }}>
                  <path d="M 0 280 Q 250 250, 500 280 T 1000 280 T 1500 280 T 2000 280 L 2000 350 L 0 350 Z" fill="#FAF7F2" />
                </g>
              </g>
            </svg>
          </div>

          {/* Sub-brand tagline */}
          <div className="text-center font-display font-bold text-base md:text-xl lg:text-2xl tracking-widest uppercase text-accent mb-6">
            Traiteur & Épicerie Fine du Sud-Ouest
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-6 border-t border-border/10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight text-surface">
              Les Fourneaux<br />de Laurent
            </Link>
            <p className="text-border/80 font-medium">
              La convivialité à chaque bouchée.
            </p>
            <p className="text-border/60 text-sm">
              Asnières-sur-Seine, Île-de-France
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-accent">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-border/80 hover:text-surface transition-colors">Accueil</Link>
              <Link href="/epicerie-fine" className="text-border/80 hover:text-surface transition-colors">Épicerie fine</Link>
              <Link href="/nos-services-traiteur" className="text-border/80 hover:text-surface transition-colors">Services traiteur</Link>
              <Link href="/tarifs" className="text-border/80 hover:text-surface transition-colors">Tarifs</Link>
              <Link href="/contact" className="text-border/80 hover:text-surface transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-accent">Contact</h4>
            <div className="text-border/80 space-y-2">
              <p>06 46 86 34 34</p>
              <p>lesfourneauxdelaurent@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-border/10 rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="https://wa.me/33646863434" target="_blank" rel="noopener noreferrer" className="p-2 bg-border/10 rounded-full hover:bg-primary transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Legal Info */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-accent">Informations</h4>
            <p className="text-border/60 text-sm">
              © 2025–{currentYear} Les Fourneaux de Laurent. Tous droits réservés.
            </p>
            <div className="pt-4 border-t border-border/20">
              <p className="text-xs text-border/40 italic">
                L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
