import { HeroSection } from "@/components/HeroSection";
import { TestimonialCard } from "@/components/TestimonialCard";
import Image from "next/image";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export const metadata = {
  title: "Nos services traiteur",
};

export default async function ServicesTraiteur() {
  const data = await reader.singletons.services.read();

  const heroHeadline = data?.hero?.headline ?? (
    <>
      Un traiteur convivial<br />pour vos événements
    </>
  );
  const heroSubline = data?.hero?.subline ?? "Ambiance chaleureuse, produits frais et locaux, cuisine faite maison pour ravir vos convives.";

  const introTitle = data?.intro?.title ?? "Des événements sur mesure,";
  const introTitleHighlight = data?.intro?.title_highlight ?? "dans la bonne humeur";
  const introDescription = data?.intro?.description ?? "Les Fourneaux de Laurent vous accompagnent pour tous vos événements : entre amis, en famille, ou entre collègues. L'esprit du sud-ouest, le partage, la convivialité et la bonne humeur sont au rendez-vous !";

  const menuTitle = data?.menu?.title ?? "Nos plats et menus savoureux";
  const menuDescription = data?.menu?.description ?? "Savourez nos plats préparés avec des produits frais, locaux et faits maison : côte de bœuf, brochettes de poulet, légumes grillés, tapas, tartinades... Un festival de saveurs pour vos papilles !";

  const finalCtaTitle = data?.final_cta?.title ?? "Prêt à régaler vos invités ?";
  const finalCtaButtonLabel = data?.final_cta?.button_label ?? "Demandez un devis personnalisé";
  const finalCtaButtonHref = data?.final_cta?.button_href ?? "/contact-infos-et-reservations";

  return (
    <>
      <HeroSection
        headline={heroHeadline}
        subline={heroSubline}
        backgroundImage="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-31-22-40-58_c0b6fa51-standard-pb3o0i.jpg"
      />

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-condensed text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-dark mb-12 uppercase tracking-normal leading-tight">
                <span className="block whitespace-nowrap">{introTitle}</span>
                <span className="block text-primary italic font-medium whitespace-nowrap">{introTitleHighlight}</span>
              </h2>
              <p className="text-xl text-text-muted leading-relaxed mb-8 whitespace-pre-line">
                {introDescription}
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/1000099198-standard.jpg" width={800} height={600} alt="Buffet événement" className="rounded-[2rem] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl text-dark mb-12 uppercase tracking-normal">{menuTitle}</h2>
          <p className="text-xl text-text-muted leading-relaxed whitespace-pre-line">
            {menuDescription}
          </p>
        </div>
        <div className="container-custom">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">
            <Image src="/album-photo/service-traiteur/20260307_172037.jpg" width={500} height={500} alt="Apéro" className="shrink-0 w-[80vw] sm:w-[60vw] md:w-full snap-center rounded-[2rem] object-cover h-[300px] sm:h-[350px] md:h-[400px] shadow-sm hover:scale-[1.02] transition-transform" />
            <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-30-19-56-48_9f2a1391-high.jpg" width={500} height={500} alt="Légumes grillés" className="shrink-0 w-[80vw] sm:w-[60vw] md:w-full snap-center rounded-[2rem] object-cover h-[300px] sm:h-[350px] md:h-[400px] shadow-sm hover:scale-[1.02] transition-transform" />
            <Image src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-30-19-57-03_1a0395e8-high.jpg" width={500} height={500} alt="Desserts" className="shrink-0 w-[80vw] sm:w-[60vw] md:w-full snap-center rounded-[2rem] object-cover h-[300px] sm:h-[350px] md:h-[400px] shadow-sm hover:scale-[1.02] transition-transform md:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl mx-auto">
          <TestimonialCard
            quote="Expérience parfaite avec Laurent pour un anniversaire avec 25 personnes début février. Laurent nous a préparé un apéritif sur mesure, puis un délicieux poulet au chorizo avec une sauce à tomber, avant de nous régaler d'un super choix de fromages.  !"
            author="Soriano Amelie"
            link="https://share.google/RzkJGZ9lsX9PDaisX"
            className="shadow-xl bg-dark text-surface border-none"
          />
        </div>
      </section>

      <section className="section-padding bg-background text-center text-dark border-t border-border/40">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mb-12 text-dark uppercase tracking-normal">
            {finalCtaTitle}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xl md:text-2xl font-medium mb-16 text-text-muted">
            <span className="flex items-center gap-3">06 46 86 34 34</span>
            <span className="hidden md:inline text-primary opacity-50">|</span>
            <span className="flex items-center gap-3">lesfourneauxdelaurent@gmail.com</span>
          </div>
          <div>
            <a
              href={finalCtaButtonHref}
              className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              {finalCtaButtonLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
