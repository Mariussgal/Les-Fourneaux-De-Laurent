import { HeroSection } from "@/components/HeroSection";
import { PricingCard } from "@/components/PricingCard";
import Image from "next/image";

export const metadata = {
  title: "Food Truck",
};

export default function FoodTruck() {
  return (
    <>
      <HeroSection 
        headline="Le Food Truck des Fourneaux"
        subline="Gourmand, chaleureux et convivial : le Sud-Ouest s'invite à tous vos événements grâce à notre food truck privatisable."
        backgroundImage="/foodtruck-hero.png"
        ctaPrimary={{ label: "Privatiser le Food Truck", href: "/contact" }}
        ctaSecondary={{ label: "Voir les formules", href: "#formules" }}
      />

      {/* Le Concept */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">
                Une cuisine nomade, <br />
                <span className="text-primary italic">l&apos;esprit du terroir</span>
              </h2>
              <p className="text-xl text-text-muted mb-6 leading-relaxed">
                Apportez de l&apos;originalité et de la convivialité à vos rassemblements. Notre food truck se déplace directement sur le lieu de votre événement en Île-de-France pour régaler vos convives.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Nous préparons sous vos yeux des recettes inspirées du Sud-Ouest, à partir de produits frais et locaux soigneusement sélectionnés. Des burgers gourmands aux frites maison cuites dans la tradition, chaque bouchée est une célébration du partage.
              </p>
              <a href="/contact" className="bg-primary hover:bg-primary-dark text-surface px-8 py-4 rounded-full font-bold inline-block transition-colors shadow-lg shadow-primary/20">
                Demander un devis
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md">
                <Image 
                  src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-31-22-40-58_698a3e71-high.jpg" 
                  fill 
                  alt="Apéro planche gourmande" 
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md mt-6">
                <Image 
                  src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/1000099198-standard.jpg" 
                  fill 
                  alt="Événement convivial en extérieur" 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les Formules */}
      <section id="formules" className="section-padding bg-background relative z-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-5 py-1.5 border border-dark/20 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
              Nos menus nomades
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mt-6 mb-6">
              Des formules simples et savoureuses
            </h2>
            <p className="text-xl text-text-muted leading-relaxed">
              Découvrez nos trois formules phares élaborées pour s&apos;adapter à toutes vos envies et tous vos budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Formule « Le Canard Chic »"
              items={[
                { name: "Burger Landais (confit de canard, oignons caramélisés, brebis)", price: "Inclus" },
                { name: "Frites fraîches maison cuites à la graisse de canard", price: "Inclus" },
                { name: "Dessert au choix (Pastis landais perdu ou cookie artisanal)", price: "Inclus" },
                { name: "Boisson fraîche locale", price: "Inclus" }
              ]}
              basePrice="18 €/pers."
              className="shadow-md hover:-translate-y-2 transition-transform"
            />
            
            <PricingCard 
              title="Formule « Troisième Mi-temps »"
              items={[
                { name: "Véritable Saucisse de Toulouse grillée à la plancha", price: "Inclus" },
                { name: "Chiffonnade de jambon de pays ou cornet de charcuterie", price: "Inclus" },
                { name: "Frites fraîches maison et sauces artisanales", price: "Inclus" },
                { name: "Boisson fraîche locale", price: "Inclus" }
              ]}
              basePrice="15 €/pers."
              className="shadow-md hover:-translate-y-2 transition-transform"
            />

            <PricingCard 
              title="Formule « Brasero & Grillades »"
              items={[
                { name: "Brochettes de cœurs de canard et aiguillettes marinées", price: "Inclus" },
                { name: "Légumes de saison rôtis et pommes de terre grenailles", price: "Inclus" },
                { name: "Dessert gourmand du jour (Gâteau basque ou salade de fruits)", price: "Inclus" },
                { name: "Boisson fraîche locale", price: "Inclus" }
              ]}
              basePrice="25 €/pers."
              className="shadow-md hover:-translate-y-2 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Privatisation & Événements */}
      <section className="section-padding bg-dark text-surface relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-surface mb-6">
                Privatisez pour toutes les occasions
              </h2>
              <p className="text-xl text-surface/80 leading-relaxed mb-8">
                Que ce soit pour un anniversaire, un rebond de mariage, un événement d&apos;entreprise ou un tournoi de rugby, notre food truck s&apos;occupe de tout. Nous apportons notre équipement, notre bonne humeur et notre savoir-faire culinaire pour faire de votre fête une réussite.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-bold text-accent">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Devis sur-mesure</h4>
                    <p className="text-surface/70">Nous évaluons vos besoins en fonction du nombre d&apos;invités et de l&apos;emplacement.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-bold text-accent">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Choix du menu</h4>
                    <p className="text-surface/70">Sélectionnez la formule de votre choix ou demandez des ajustements personnalisés (options végétariennes disponibles).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-bold text-accent">3</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Service clés en main</h4>
                    <p className="text-surface/70">Nous installons le food truck, cuisinons en direct et servons vos invités dans une ambiance chaleureuse.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative h-[500px]">
              <Image
                src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-07-24-21-34-48_2db7041c-high.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Cuisson brasero et convivialité"
                className="rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-background text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mb-8 text-dark uppercase tracking-normal">
            Faites vibrer vos invités
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour vérifier nos disponibilités et réserver le food truck pour votre date.
          </p>
          <a
            href="/contact"
            className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Vérifier les disponibilités
          </a>
        </div>
      </section>
    </>
  );
}
