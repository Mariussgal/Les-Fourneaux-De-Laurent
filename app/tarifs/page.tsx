import { HeroSection } from "@/components/HeroSection";
import { PricingCard } from "@/components/PricingCard";

export const metadata = {
  title: "Tarifs",
};

export default function Tarifs() {
  return (
    <>
      <HeroSection 
        headline="Plaisirs et Partages"
        subline="Bienvenue dans l'univers des Fourneaux de Laurent, où chaque plat raconte une histoire et chaque prestation devient un moment unique. Inspirée du Sud-Ouest, notre cuisine est généreuse, conviviale et authentique. Nous mettons un point d'honneur à vous offrir des produits frais, de saison, et un service chaleureux, à votre image."
        ctaPrimary={{ label: "Demandez un devis", href: "/contact" }}
        backgroundImage="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/1000099150-high-0fgjn6.jpg"
      />

      <section className="section-padding bg-background relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Formules à emporter"
              items={[
                { name: "Hachis parmentier à l'effiloché de canard confit", price: "15 €/pers." },
                { name: "Butternut rôtis, fêta, miel et poulet marinés", price: "15 €/pers." },
                { name: "Truffades et saucisse de Toulouse", price: "15 €/pers." },
                { name: "Paëlla", price: "20 €/pers." }
              ]}
              className="md:col-span-2 lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />
            
            <PricingCard 
              title="Buffet dînatoire ou déjeunatoire"
              description="Assortiment de tapas, plateaux de fromages, plateaux de charcuterie, foccacia garnies, brochettes de crevettes marinées, poulet mariné, mini burger, croque monsieur, assortiments de mignardises sucrées..."
              basePrice="15 €/pers."
              className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />

            <PricingCard 
              title="Repas format buffet"
              description="Tapas, planches, légumes grillés ou rôtis, viandes grillées, assortiments de mignardises sucrées..."
              basePrice="25 €/pers."
              className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />

            <PricingCard 
              title="Repas service à l'assiette"
              description="Tapas, planches, légumes grillés ou rôtis, viandes grillées, assortiments de mignardises sucrées..."
              basePrice="35 €/pers."
              className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-surface tracking-tight">
            Un moment qui vous ressemble
          </h2>
          <p className="text-xl md:text-2xl text-surface/80 leading-relaxed mb-12">
            Chez Les Fourneaux de Laurent, chaque projet est unique, comme vous. Que vous soyez amateur de traditions, curieux de découvertes ou en quête d&apos;alternatives, nous nous adaptons à vos envies. Notre cuisine est modulable, notre écoute est entière. Ici, tout est fait pour créer un moment à votre image, en toute simplicité et avec beaucoup de cœur.
          </p>
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-surface px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-primary/20 hover:scale-105 inline-block"
          >
            Demandez un devis personnalisé
          </a>
        </div>
      </section>
    </>
  );
}
