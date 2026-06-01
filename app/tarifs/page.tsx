import { PricingCard } from "@/components/PricingCard";

export const metadata = {
  title: "Tarifs",
};

export default function Tarifs() {
  return (
    <>

      <section className="section-padding bg-background relative z-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16 pt-8">
            <h1 className="font-condensed text-5xl md:text-7xl lg:text-8xl text-dark mb-6 uppercase tracking-normal">
              Nos Tarifs
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium mx-auto">
              Des formules généreuses et conviviales, adaptées à tous vos événements.
            </p>
          </div>


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

      <section className="section-padding bg-background text-center border-t border-border/40">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mb-8 text-dark uppercase tracking-normal">
            Un moment qui vous ressemble
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12 font-medium">
            Chez Les Fourneaux de Laurent, chaque projet est unique, comme vous. Que vous soyez amateur de traditions, curieux de découvertes ou en quête d&apos;alternatives, nous nous adaptons à vos envies. Notre cuisine est modulable, notre écoute est entière. Ici, tout est fait pour créer un moment à votre image, en toute simplicité et avec beaucoup de cœur.
          </p>
          <a
            href="/contact"
            className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Demandez un devis personnalisé
          </a>
        </div>
      </section>
    </>
  );
}
