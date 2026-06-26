import { HeroSection } from "@/components/HeroSection";
import { PricingCard } from "@/components/PricingCard";
import { MobileMenuSlider } from "@/components/MobileMenuSlider";
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
        backgroundImage="/herosection-foodtruck.webp"
        backgroundPosition="object-top"
        opacityClass="opacity-80"
        ctaPrimary={{ label: "Privatiser le Food Truck", href: "/contact" }}
        ctaSecondary={{ label: "Voir les formules", href: "#formules" }}
      />

      {/* Le Concept */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-condensed text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-dark uppercase tracking-normal">
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
                  src="/album-photo/foodtruck/RXC01958.jpg"
                  fill
                  alt="Magrets de canard cuits à la perfection"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md mt-6">
                <Image
                  src="/album-photo/service-traiteur/IMG_20260408_202530_026.webp"
                  fill
                  alt="Laurent souriant au Food Truck"
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
            <h2 className="font-condensed text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-dark uppercase tracking-normal mt-10">
              Des formules sur mesure
            </h2>
            <p className="text-xl text-text-muted leading-relaxed">
              Chez Les Fourneaux de Laurent, chaque événement mérite son devis personnalisé en fonction de vos besoins. Nous n&apos;imposons pas de formules figées et concevons ensemble une offre sur mesure pour régaler vos convives.
            </p>
          </div>

          <div className="mb-12 text-center">
            <p className="text-lg md:text-xl text-text-muted italic">
              Voici quelques exemples de compositions pour vous inspirer :
            </p>
          </div>

          <MobileMenuSlider>
            <PricingCard
              title="Burgers au brasero"
              items={[
                { name: "Burger Landais (confit de canard, oignons caramélisés, brebis)" },
                { name: "Frites fraîches maison cuites à la graisse de canard" },
                { name: "Dessert gourmand (pastis landais perdu ou cookie)" },
                { name: "Boisson fraîche locale" }
              ]}
              className="shadow-md transition-transform shrink-0 w-[85vw] sm:w-[60vw] lg:w-full snap-center lg:hover:-translate-y-2"
            />

            <PricingCard
              title="Viandes grillées au brasero"
              items={[
                { name: "Brochettes de cœurs de canard et aiguillettes marinées" },
                { name: "Saucisse de Toulouse grillée à la plancha" },
                { name: "Légumes de saison rôtis & pommes de terre grenailles" },
                { name: "Boisson fraîche locale" }
              ]}
              className="shadow-md transition-transform shrink-0 w-[85vw] sm:w-[60vw] lg:w-full snap-center lg:hover:-translate-y-2"
            />

            <PricingCard
              title="Formules conviviales"
              items={[
                { name: "Planches de charcuteries fines et fromages du terroir" },
                { name: "Foccacia garnies et tapas chauds ou froids" },
                { name: "Desserts maison et mignardises sucrées" },
                { name: "Boisson fraîche locale" }
              ]}
              className="shadow-md transition-transform shrink-0 w-[85vw] sm:w-[60vw] lg:w-full snap-center lg:hover:-translate-y-2"
            />
          </MobileMenuSlider>

          <div className="text-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-dark text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Demander un devis personnalisé
            </a>
          </div>
        </div>
      </section>

      {/* Privatisation & Événements */}
      <section className="section-padding bg-dark text-surface relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-condensed text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-surface uppercase tracking-normal">
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
                src="/album-photo/service-traiteur/image00014.jpeg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Privatisation et buffet Les Fourneaux de Laurent"
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
