import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";

export const metadata = {
  title: "Épicerie fine",
};

export default function EpicerieFine() {
  return (
    <>
      <HeroSection 
        headline="L&apos;épicerie fine du Sud-Ouest"
        subline="Une sélection rigoureuse des meilleurs producteurs du terroir, directement chez vous."
        backgroundImage="/epicerie-hero.jpg"
      />

      {/* Terrines COIN-COIN */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">Les terrines COIN-COIN</h2>
              <p className="text-xl text-text-muted mb-8 leading-relaxed">
                Une sélection de canard de dégustation en provenance des meilleurs éleveurs du Sud-Ouest.
              </p>
              <p className="text-2xl font-bold text-primary mb-8">Terrine 100g — 6,90 €</p>
              <a href="/contact" className="bg-primary hover:bg-primary-dark text-surface px-8 py-4 rounded-full font-bold inline-block transition-colors shadow-lg shadow-primary/20">
                Commandes et informations
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/la-cartouche-high-97iiil.png" width={300} height={300} alt="Terrine" className="rounded-2xl object-cover w-full aspect-square bg-background shadow-sm" />
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/projet-x-high-sxv2a6.png" width={300} height={300} alt="Terrine" className="rounded-2xl object-cover w-full aspect-square bg-background shadow-sm" />
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/au-bar-masque-high-5kgkny.png" width={300} height={300} alt="Terrine" className="rounded-2xl object-cover w-full aspect-square bg-background shadow-sm" />
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/l-armaguedon-high-bvsoo8.png" width={300} height={300} alt="Terrine" className="rounded-2xl object-cover w-full aspect-square bg-background shadow-sm hidden md:block" />
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/commissaire-magret-high-xgknc8.png" width={300} height={300} alt="Terrine" className="rounded-2xl object-cover w-full aspect-square bg-background shadow-sm hidden md:block" />
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/pique-bec-high-vwlu62.png" width={300} height={300} alt="Terrine" className="rounded-2xl object-cover w-full aspect-square bg-background shadow-sm hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Foie gras CHAPITRE */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">Le foie gras CHAPITRE</h2>
              <p className="text-xl text-text-muted mb-8 leading-relaxed">
                Foie gras entier de dégustation
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-2xl font-bold text-primary">100g — 29,90 €</p>
                <p className="text-2xl font-bold text-primary">180g — 49,90 €</p>
              </div>
              <a href="/contact" className="bg-primary hover:bg-primary-dark text-surface px-8 py-4 rounded-full font-bold inline-block transition-colors shadow-lg shadow-primary/20">
                Commandes et informations
              </a>
            </div>
            <div className="lg:w-1/2">
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/capture-d-cran-2025-11-18-073524-high-87v5q5-high.png" width={800} height={600} alt="Foie Gras CHAPITRE" className="rounded-[2rem] object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vins COIN-COIN */}
      <section className="section-padding bg-dark text-surface">
        <div className="container-custom">
          <div className="mb-16 max-w-4xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-surface mb-6">Les vins COIN-COIN <br/><span className="text-accent">100% Gama GT</span></h2>
            <p className="text-xl text-surface/80 leading-relaxed mb-8">
              Ces cuvées GAMA GT ROUGE et BLANC sont le fruit d&apos;une sélection minutieuse des meilleures grappes du piémont pyrénéen. Mises en bouteille et élaborées en collaboration avec nos amis de la Famille Laplace.
            </p>
            <p className="text-3xl font-bold text-accent">14 € l&apos;unité — 39,90 € le lot de 3</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface/5 border border-border/10 p-8 md:p-12 rounded-[2rem] hover:bg-surface/10 transition-colors">
              <h3 className="font-display font-bold text-3xl text-surface mb-4">CUVÉE GAMA GT ROUGE</h3>
              <p className="text-accent font-medium mb-8 text-lg">Cépage : 100% Tannat — Degré : 13,5%</p>
              <ul className="space-y-4 text-lg text-surface/90">
                <li className="flex justify-between border-b border-border/10 pb-4"><span>Teneur en raisin</span> <span className="text-accent font-semibold">100%</span></li>
                <li className="flex justify-between border-b border-border/10 pb-4"><span>Goût de vin</span> <span className="text-accent font-semibold">Excellent</span></li>
                <li className="flex justify-between pb-2"><span>Convivialité</span> <span className="text-accent font-semibold">Maximum</span></li>
              </ul>
            </div>
            <div className="bg-surface/5 border border-border/10 p-8 md:p-12 rounded-[2rem] hover:bg-surface/10 transition-colors">
              <h3 className="font-display font-bold text-3xl text-surface mb-4">CUVÉE GAMA GT BLANC</h3>
              <p className="text-accent font-medium mb-8 text-lg">Cépages : 90% Gros Manseng – 10% Petit Manseng — Degré : 12%</p>
              <ul className="space-y-4 text-lg text-surface/90">
                <li className="flex justify-between border-b border-border/10 pb-4"><span>Euphorisant</span> <span className="text-accent font-semibold">Garanti</span></li>
                <li className="flex justify-between pb-2"><span>Fait dire la vérité</span> <span className="text-accent font-semibold">100%</span></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
             <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/capture-d-cran-2025-11-21-113254-high-qfmhgx.png" width={500} height={500} alt="Vin" className="rounded-[2rem] object-cover w-full aspect-square bg-surface/5" />
             <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/capture-d-cran-2025-11-21-112545-high-i25qjq.png" width={500} height={500} alt="Vin" className="rounded-[2rem] object-cover w-full aspect-square bg-surface/5" />
             <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/capture-d-cran-2025-11-21-113216-high-v8q9sk.png" width={500} height={500} alt="Vin" className="rounded-[2rem] object-cover w-full aspect-square bg-surface/5" />
          </div>

          <div className="text-center">
            <a href="/contact" className="bg-primary hover:bg-primary-dark text-surface px-10 py-5 rounded-full font-bold text-lg inline-block transition-colors mb-8 shadow-xl shadow-primary/20">
              Commandes et informations
            </a>
            <p className="text-sm text-surface/50 italic tracking-wide">L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération.</p>
          </div>
        </div>
      </section>

      {/* Porc Noir de Bigorre */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-12">Porc Noir de Bigorre</h2>
              
              <div className="mb-12 bg-background p-8 rounded-[2rem] border border-border/50">
                <h3 className="font-display font-bold text-2xl text-dark mb-3">Pétales de jambon de Porc Noir de Bigorre</h3>
                <p className="text-lg text-text-muted mb-6">Fines tranches délicatement affinées, à la texture fondante et aux arômes intenses.</p>
                <p className="text-2xl font-bold text-primary">80 g — 18 €</p>
              </div>

              <div className="bg-background p-8 rounded-[2rem] border border-border/50">
                <h3 className="font-display font-bold text-2xl text-dark mb-3">Saucisson sec de Porc Noir de Bigorre</h3>
                <p className="text-lg text-text-muted mb-6">Élaboré artisanalement, au goût profond et authentique, reflet d&apos;un terroir d&apos;exception.</p>
                <p className="text-2xl font-bold text-primary">Environ 250 g — 100 €/kg<br/><span className="text-lg text-text-muted font-medium">(soit environ 25 € la pièce)</span></p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/pasted-image-tue-feb-03-2026-11-44-12-gmt-0100-heure-normale-d-europe-centrale-high.png" width={800} height={600} alt="Porc Noir de Bigorre" className="rounded-[2rem] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Les chocolats Pécou */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">Les chocolats Pécou <span className="text-primary italic">depuis 1880</span></h2>
            <p className="text-xl text-text-muted leading-relaxed">
              La MAISON PÉCOU, fondée en 1880, est une entreprise familiale. Cinq générations se sont succédées, préservant la tradition et le savoir-faire d&apos;antan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-surface rounded-[2rem] p-8 text-center border border-border shadow-sm hover:-translate-y-2 transition-transform">
              <div className="aspect-square relative mb-8 rounded-[1.5rem] overflow-hidden bg-background">
                <Image
                  src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/produit-foret-enchante-standard.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Forêt enchantée"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-dark">Forêt enchantée 110g</h3>
              <p className="text-primary font-bold text-2xl">8,90 €</p>
            </div>
            <div className="bg-surface rounded-[2rem] p-8 text-center border border-border shadow-sm hover:-translate-y-2 transition-transform">
              <div className="aspect-square relative mb-8 rounded-[1.5rem] overflow-hidden bg-background">
                <Image
                  src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/nounourslait-high-3iyhhj.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Oursons guimauves"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-dark">Oursons guimauves 100g</h3>
              <p className="text-primary font-bold text-2xl">9,90 €</p>
            </div>
            <div className="bg-surface rounded-[2rem] p-8 text-center border border-border shadow-sm hover:-translate-y-2 transition-transform">
              <div className="aspect-square relative mb-8 rounded-[1.5rem] overflow-hidden bg-background">
                <Image
                  src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/produit-casse-noissette-high-im2ct5.webp"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Casse noisette"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 text-dark">Casse noisette 110g</h3>
              <p className="text-primary font-bold text-2xl">8,90 €</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="bg-primary hover:bg-primary-dark text-surface px-10 py-5 rounded-full font-bold text-lg inline-block transition-colors shadow-xl shadow-primary/20">
              Commandes et informations
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
