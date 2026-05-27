import { HeroSection } from "@/components/HeroSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import Image from "next/image";

export const metadata = {
  title: "Nos services traiteur",
};

export default function ServicesTraiteur() {
  return (
    <>
      <HeroSection
        headline={
          <>
            Un traiteur convivial<br />pour vos événements
          </>
        }
        subline="Ambiance chaleureuse, produits frais et locaux, cuisine faite maison pour ravir vos convives."
        backgroundImage="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-31-22-40-58_c0b6fa51-standard-pb3o0i.jpg"
      />

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark mb-6 leading-tight">
                Des événements sur mesure, <br /><span className="text-primary italic">dans la bonne humeur</span>
              </h2>
              <p className="text-xl text-text-muted leading-relaxed mb-8">
                Les Fourneaux de Laurent vous accompagnent pour tous vos événements : entre amis, en famille, ou entre collègues. L&apos;esprit du sud-ouest, le partage, la convivialité et la bonne humeur sont au rendez-vous !
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/1000099198-standard.jpg" width={800} height={600} alt="Buffet événement" className="rounded-[2rem] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-surface relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-surface mb-6 leading-tight">
                L&apos;approche conviviale de <span className="text-accent">Laurent</span>
              </h2>
              <p className="text-xl text-surface/80 leading-relaxed mb-8">
                Laurent apporte sa bonne humeur et sa bonhomie à chaque événement. L&apos;animation d&apos;un brasero ou d&apos;un barbecue crée une ambiance unique. Il partage ses recettes et ses secrets de cuisson pour un moment mémorable.
              </p>
            </div>
            <div className="lg:w-1/2 w-full relative h-[600px]">
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-07-24-21-34-48_2db7041c-high.jpg" fill alt="Brasero" className="rounded-[2rem] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark mb-6">Nos plats et menus savoureux</h2>
          <p className="text-xl text-text-muted leading-relaxed">
            Savourez nos plats préparés avec des produits frais, locaux et faits maison : côte de bœuf, brochettes de poulet, légumes grillés, tapas, tartinades... Un festival de saveurs pour vos papilles !
          </p>
        </div>
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-31-22-40-58_698a3e71-high.jpg" width={500} height={500} alt="Apéro" className="rounded-[2rem] object-cover w-full h-[400px] shadow-sm hover:scale-[1.02] transition-transform" />
          <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-30-19-56-48_9f2a1391-high.jpg" width={500} height={500} alt="Légumes grillés" className="rounded-[2rem] object-cover w-full h-[400px] shadow-sm hover:scale-[1.02] transition-transform" />
          <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-30-19-57-03_1a0395e8-high.jpg" width={500} height={500} alt="Desserts" className="rounded-[2rem] object-cover w-full h-[400px] shadow-sm hover:scale-[1.02] transition-transform md:col-span-2 lg:col-span-1" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl mx-auto">
          <TestimonialCard
            quote="Très bonne cuisine, tout le monde s'est régalé. Je recommande et je n'hésiterai pas à passer par vous pour un futur événement. Merci encore."
            author="Anais S. (avis Google, 02/11/2025)"
            className="shadow-xl bg-dark text-surface border-none"
          />
        </div>
      </section>

      <section className="section-padding bg-background text-center text-dark border-t border-border/40">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mb-12 text-dark uppercase tracking-normal">
            Prêt à régaler vos invités ?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xl md:text-2xl font-medium mb-16 text-text-muted">
            <span className="flex items-center gap-3">06 46 86 34 34</span>
            <span className="hidden md:inline text-primary opacity-50">|</span>
            <span className="flex items-center gap-3">lesfourneauxdelaurent@gmail.com</span>
          </div>
          <div>
            <a
              href="/contact"
              className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Demandez un devis personnalisé
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
