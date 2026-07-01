import { PricingCard } from "@/components/PricingCard";
import { MobileMenuSlider } from "@/components/MobileMenuSlider";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

interface FormuleCard {
  title: string;
  description: string;
  items: readonly { name: string }[];
}

const reader = createReader(process.cwd(), keystaticConfig);

export const metadata = {
  title: "Tarifs",
};

export default async function Tarifs() {
  const data = await reader.singletons.tarifs.read();

  const introBadge = data?.intro?.badge ?? "Tarifs & Prestations";
  const introTitle = data?.intro?.title ?? "Des prestations sur mesure";
  
  const defaultParagraphs = [
    "Chez Les Fourneaux de Laurent, nous sommes convaincus qu'aucun événement ne ressemble à un autre. Chaque réception, chaque célébration et chaque projet possède sa propre identité, ses envies et ses exigences.",
    "Notre ADN repose sur l'écoute, la flexibilité et la personnalisation. Que vous organisiez un mariage, un anniversaire, un événement d'entreprise ou une réception privée, nous adaptons nos prestations à vos attentes, à votre budget et à l'expérience que vous souhaitez offrir à vos convives.",
    "Parce que chaque demande est unique, nous ne proposons pas de grille tarifaire standardisée. Nos devis sont entièrement personnalisés afin de vous garantir une prestation parfaitement adaptée à votre événement.",
    "Nous privilégions également la qualité des produits, en mettant à l'honneur les meilleurs producteurs et le terroir français pour vous offrir une expérience authentique et gourmande."
  ];
  const introParagraphs = data?.intro?.paragraphs?.length ? data.intro.paragraphs : defaultParagraphs;

  const introContactText = data?.intro?.contact_text ?? "Contactez-nous pour échanger sur votre projet et recevoir une proposition sur mesure.";
  const introButtonLabel = data?.intro?.button_label ?? "Demander un devis";
  const introButtonHref = data?.intro?.button_href ?? "/contact-infos-et-reservations";

  const formulesTitle = data?.formules?.title ?? "Nos Formules & Formats de Réception";
  const formulesSubtitle = data?.formules?.subtitle ?? "Découvrez les bases de nos prestations, modulables selon vos envies et vos préférences.";

  const defaultFormules = [
    { title: "Buffet dînatoire ou déjeunatoire", description: "Exemple de composition. Tous nos devis et menus sont entièrement personnalisables selon vos envies.", items: [{ name: "Assortiment de tapas" }, { name: "Plateaux de fromages et charcuterie" }, { name: "Foccacias garnies" }, { name: "Brochettes de crevettes marinées" }, { name: "Poulet mariné" }, { name: "Mini burger & croque-monsieur" }, { name: "Assortiments de mignardises sucrées" }] },
    { title: "Repas format buffet", description: "Exemple de menu. Tous nos devis et menus sont entièrement personnalisables selon vos envies.", items: [{ name: "Tapas et planches à partager" }, { name: "Légumes grillés ou rôtis" }, { name: "Viandes grillées" }, { name: "Assortiments de mignardises sucrées" }] },
    { title: "Repas service à l'assiette", description: "Exemple de menu. Tous nos devis et menus sont entièrement personnalisables selon vos envies.", items: [{ name: "Tapas et planches à partager" }, { name: "Légumes grillés ou rôtis" }, { name: "Viandes grillées" }, { name: "Assortiments de mignardises sucrées" }] }
  ];
  const formulesCards = data?.formules?.cards?.length ? data.formules.cards : defaultFormules;

  return (
    <>
      {/* Section d'introduction - Prestations sur mesure */}
      <section className="section-padding bg-background relative z-20 pt-24">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="px-5 py-1.5 border border-dark/20 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
              {introBadge}
            </span>
            <h1 className="font-condensed text-5xl md:text-7xl lg:text-8xl mt-6 text-dark uppercase tracking-normal">
              {introTitle}
            </h1>
          </div>

          <div className="bg-surface rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 border border-border/60 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl text-text-muted leading-relaxed font-medium">
              {introParagraphs.map((p: string, idx: number) => (
                <p key={idx} className="whitespace-pre-line">{p}</p>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-border/50 text-center">
              <p className="text-xl md:text-2xl text-dark font-semibold font-cormorant italic mb-8 whitespace-pre-line">
                {introContactText}
              </p>
              <a
                href={introButtonHref}
                className="bg-primary hover:bg-dark text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                {introButtonLabel}
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Section des formules et formats de réception */}
      <section className="section-padding bg-background relative z-20 border-t border-border/40">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl text-dark uppercase tracking-normal">
              {formulesTitle}
            </h2>
            <p className="text-lg md:text-xl text-text-muted mt-4 leading-relaxed font-medium whitespace-pre-line">
              {formulesSubtitle}
            </p>
          </div>

          <MobileMenuSlider>
            {formulesCards.map((card: FormuleCard, idx: number) => (
              <PricingCard
                key={idx}
                title={card.title}
                description={card.description}
                items={card.items as readonly { name: string; price?: string }[]}
                className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform shrink-0 w-[85vw] sm:w-[60vw] lg:w-full snap-center"
              />
            ))}
          </MobileMenuSlider>
        </div>
      </section>
    </>
  );
}
