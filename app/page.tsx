import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { WaveDivider } from "@/components/WaveDivider";
import Image from "next/image";

export const metadata = {
  title: "Accueil",
};

export default function Home() {
  return (
    <>
      <HeroSection
        headline={
          <>
            La convivialité<br />à chaque bouchée.
          </>
        }
        subline={"Votre traiteur du Sud-Ouest en Île-de-France.\nProduits frais, faits maison, esprit rugby."}
        ctaPrimary={{ label: "Réserver un événement", href: "/contact" }}
        ctaSecondary={{ label: "Voir les tarifs", href: "/tarifs" }}
        backgroundImage="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/whatsapp-image-2025-08-31-22-40-57_29b72a55-high-high.jpg"
      />

      <Marquee items={[
        "Brasero", "Apéro dînatoire", "Produits du terroir", "Fait maison",
        "Esprit Sud-Ouest", "Convivialité", "Épicerie fine", "Événements sur mesure"
      ]} />


      <WaveDivider fromColor="bg-background" toColor="text-dark" />

      {/* Notre engagement */}
      <section className="section-padding bg-dark text-surface relative overflow-hidden">
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-9">
            <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mb-10 text-accent uppercase tracking-normal">
              Notre engagement
            </h2>
            <p className="text-xl md:text-3xl max-w-4xl leading-relaxed text-surface/90 font-medium">
              Chez Les Fourneaux de Laurent, la cuisine est un moment de partage,
              un reflet des valeurs du Sud-Ouest et de l&apos;esprit du rugby :
              convivialité, générosité et authenticité. Chaque plat célèbre nos
              racines et rassemble autour de saveurs franches et sincères.
            </p>
          </div>
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <Image
                src="/logo-engagement.png"
                alt="Les Fourneaux de Laurent Logo"
                fill
                className="object-contain rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="bg-dark" toColor="text-background" />

      {/* Nos services */}
      <section className="section-padding bg-background relative">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-5 py-1.5 border border-dark/20 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
              Nos services
            </span>
            <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mt-6 text-dark uppercase tracking-normal">
              Prestations sur mesure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:h-[720px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              {/* Card 1: Text - Apéro dînatoire */}
              <div className="bg-[#2D2520] text-[#FAF9F6] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center flex-[3] transition-transform hover:scale-[1.02] duration-300">
                <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-[#FAF9F6]">
                  Apéro dînatoire
                </h3>
                <p className="text-base md:text-lg text-[#FAF9F6]/80 leading-relaxed font-medium">
                  Un assortiment gourmand de charcuteries fines, fromages artisanaux et pains variés pour un apéritif convivial et savoureux.
                </p>
              </div>

              {/* Card 2: Image - Apéro dînatoire */}
              <div className="relative rounded-[2.5rem] overflow-hidden flex-[5] group transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/apero-dinatoire.webp"
                  alt="Apéro dînatoire par Les Fourneaux de Laurent"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              {/* Card 3: Text - Brasero */}
              <div className="bg-[#3E454F] text-[#FAF9F6] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center flex-[2] transition-transform hover:scale-[1.02] duration-300">
                <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-[#FAF9F6]">
                  Brasero
                </h3>
                <p className="text-base md:text-lg text-[#FAF9F6]/80 leading-relaxed font-medium">
                  Découvrez le brasero, élément indispensable pour vous réunir entre amis. Idéal pour la cuisson de la viande, du poisson, des légumes.
                </p>
              </div>

              {/* Card 4: Image - Brasero */}
              <div className="relative rounded-[2.5rem] overflow-hidden flex-[3] group transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/brasero.webp"
                  alt="Cuisson au Brasero par Les Fourneaux de Laurent"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card 5: Text - Options alternatives */}
              <div className="bg-[#7A624E] text-[#FAF9F6] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center flex-[2] transition-transform hover:scale-[1.02] duration-300">
                <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-[#FAF9F6]">
                  Options alternatives
                </h3>
                <p className="text-base md:text-lg text-[#FAF9F6]/80 leading-relaxed font-medium">
                  Des créations culinaires pensées pour les régimes végétariens, vegan et autres préférences alimentaires, sans compromis sur le goût.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              {/* Card 6: Image - Vegan */}
              <div className="relative rounded-[2.5rem] overflow-hidden flex-[3.5] group transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/vegan.webp"
                  alt="Options végétariennes et végétaliennes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card 7: Text - Desserts gourmands */}
              <div className="bg-[#1E1B18] text-[#FAF9F6] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center flex-[2] transition-transform hover:scale-[1.02] duration-300">
                <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-[#FAF9F6]">
                  Desserts gourmands
                </h3>
                <p className="text-base md:text-lg text-[#FAF9F6]/80 leading-relaxed font-medium">
                  Laissez-vous tenter par nos desserts gourmands, créés avec passion pour une touche sucrée et réconfortante en fin de repas.
                </p>
              </div>

              {/* Card 8: Image - Dessert */}
              <div className="relative rounded-[2.5rem] overflow-hidden flex-[2] group transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/dessert.webp"
                  alt="Desserts gourmands faits maison"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qui est Laurent ? */}
      <section className="py-0 bg-background overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 min-h-[600px] rounded-[3rem] overflow-hidden ">
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="https://primary.jwwb.nl/public/y/h/e/temp-unebfxdhrkaeevffnvjl/1000079675-high.jpg"
              alt="Laurent"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-24 bg-surface relative">
            <div className="absolute top-0 left-0 w-3 h-full bg-primary" />
            <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mb-8 text-dark uppercase tracking-normal">
              Qui est Laurent ?
            </h2>
            <p className="text-xl text-text leading-relaxed">
              Derrière Les Fourneaux de Laurent se cache une passion pour la cuisine
              et le partage. Fort de son expérience, Laurent a créé ce service de traiteur
              pour vous offrir des moments de convivialité et de gourmandise, en toute
              simplicité. Son approche est fondée sur la qualité des produits et un
              service personnalisé pour répondre à toutes vos envies.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <TestimonialSlider />

      {/* CTA final */}
      <section className="section-padding bg-background relative text-center">
        <div className="container-custom max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-condensed text-6xl md:text-8xl lg:text-9xl mb-8 text-dark uppercase tracking-normal">
            Un moment qui vous ressemble
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12 max-w-2xl">
            Que vous soyez amateur de traditions, curieux de découvertes ou en
            quête d&apos;alternatives, nous nous adaptons à vos envies. Notre cuisine
            est modulable, notre écoute est entière.
          </p>
          <a
            href="/contact"
            className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Demandez un devis
          </a>
        </div>
      </section>
    </>
  );
}
