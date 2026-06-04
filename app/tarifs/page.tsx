import { PricingCard } from "@/components/PricingCard";

export const metadata = {
  title: "Tarifs",
};

export default function Tarifs() {
  return (
    <>
      {/* Section d'introduction - Prestations sur mesure */}
      <section className="section-padding bg-background relative z-20 pt-24">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="px-5 py-1.5 border border-dark/20 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
              Tarifs & Prestations
            </span>
            <h1 className="font-condensed text-5xl md:text-7xl lg:text-8xl mt-6 text-dark uppercase tracking-normal">
              Des prestations sur mesure
            </h1>
          </div>

          <div className="bg-surface rounded-[2.5rem] p-8 md:p-16 border border-border/60 shadow-xl max-w-4xl mx-auto">
            <div className="space-y-6 text-lg md:text-xl text-text-muted leading-relaxed font-medium">
              <p>
                Chez Les Fourneaux de Laurent, nous sommes convaincus qu&apos;aucun événement ne ressemble à un autre. Chaque réception, chaque célébration et chaque projet possède sa propre identité, ses envies et ses exigences.
              </p>
              <p>
                Notre ADN repose sur l&apos;écoute, la flexibilité et la personnalisation. Que vous organisiez un mariage, un anniversaire, un événement d&apos;entreprise ou une réception privée, nous adaptons nos prestations à vos attentes, à votre budget et à l&apos;expérience que vous souhaitez offrir à vos convives.
              </p>
              <p>
                Parce que chaque demande est unique, nous ne proposons pas de grille tarifaire standardisée. Nos devis sont entièrement personnalisés afin de vous garantir une prestation parfaitement adaptée à votre événement.
              </p>
              <p>
                Nous privilégions également la qualité des produits, en mettant à l&apos;honneur les meilleurs producteurs et le terroir français pour vous offrir une expérience authentique et gourmande.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-border/50 text-center">
              <p className="text-xl md:text-2xl text-dark font-semibold font-cormorant italic mb-8">
                Contactez-nous pour échanger sur votre projet et recevoir une proposition sur mesure.
              </p>
              <a
                href="/contact"
                className="bg-primary hover:bg-dark text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                Demander un devis
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
              Nos Formules & Formats de Réception
            </h2>
            <p className="text-lg md:text-xl text-text-muted mt-4 leading-relaxed font-medium">
              Découvrez les bases de nos prestations, modulables selon vos envies et vos préférences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Formules à emporter"
              items={[
                { name: "Hachis parmentier à l'effiloché de canard confit" },
                { name: "Butternut rôtis, fêta, miel et poulet marinés" },
                { name: "Truffades et saucisse de Toulouse" },
                { name: "Paëlla" }
              ]}
              className="md:col-span-2 lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />

            <PricingCard
              title="Buffet dînatoire ou déjeunatoire"
              description="Assortiment de tapas, plateaux de fromages, plateaux de charcuterie, foccacia garnies, brochettes de crevettes marinées, poulet mariné, mini burger, croque monsieur, assortiments de mignardises sucrées..."
              className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />

            <PricingCard
              title="Repas format buffet"
              description="Tapas, planches, légumes grillés ou rôtis, viandes grillées, assortiments de mignardises sucrées..."
              className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />

            <PricingCard
              title="Repas service à l'assiette"
              description="Tapas, planches, légumes grillés ou rôtis, viandes grillées, assortiments de mignardises sucrées..."
              className="lg:col-span-1 shadow-xl hover:-translate-y-2 transition-transform"
            />
          </div>
        </div>
      </section>
    </>
  );
}
