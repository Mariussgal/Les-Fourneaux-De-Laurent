import { Metadata } from "next";
import { AlbumCarousel } from "@/components/AlbumCarousel";
import { VideoWidget } from "@/components/VideoWidget";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "L'Album",
  description: "Découvrez les moments chaleureux de nos événements. Brasero convivial, food truck animé, planches gourmandes du Sud-Ouest et esprit rugby en images et vidéos.",
};

export default function AlbumPage() {
  return (
    <>
      {/* Intro Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background text-dark relative overflow-hidden">
        <div className="container-custom px-6 text-center max-w-4xl">
          {/* Badge */}
          <span className="px-5 py-1.5 border border-dark/25 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
            Galerie Souvenirs
          </span>
          
          {/* Title */}
          <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl mt-6 text-dark uppercase tracking-normal">
            L&apos;Album des Fourneaux
          </h1>

          {/* Subtitle */}
          <p className="font-cormorant italic text-xl md:text-3xl text-text-muted mt-6 leading-relaxed max-w-2xl mx-auto">
            &ldquo;La cuisine est un prétexte pour se rassembler, rire et partager de bons moments.&rdquo;
          </p>
          <p className="text-base md:text-lg text-text-muted/80 mt-4 max-w-xl mx-auto leading-relaxed">
            Retrouvez en images et en vidéos l&apos;ambiance unique de nos prestations de traiteur, la convivialité du gril au brasero, et les escales gourmandes de notre Food Truck.
          </p>
        </div>
      </section>

      {/* Transition to Dark Section */}
      <WaveDivider fromColor="bg-background" toColor="text-dark" />

      {/* Main Media Section (Dark theme for premium media viewing) */}
      <section className="bg-dark text-surface py-16 md:py-24 relative overflow-hidden flex flex-col gap-20">
        
        {/* Photos Area */}
        <div className="container-custom px-6 flex flex-col gap-8">
          {/* Photo Slider Component */}
          <div className="w-full">
            <AlbumCarousel />
          </div>
        </div>

        {/* Divider between photos and videos */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-surface/10 my-4" />

        {/* Videos Area (Full-width for looping slider) */}
        <div className="w-full flex flex-col gap-8 items-center">
          <div className="container-custom px-6 text-center max-w-3xl mx-auto">
            <span className="px-4 py-1 bg-primary/20 border border-primary/40 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent">
              En Mouvement
            </span>
            <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl mt-4 text-surface uppercase tracking-normal">
              L&apos;Esprit en Vidéo
            </h2>
            <p className="text-sm md:text-base text-surface/75 mt-2 leading-relaxed">
              Découvrez le crépitement du feu, le service des burgers et la joie communicative de nos troisièmes mi-temps en direct.
            </p>
          </div>

          {/* Video Player Widget */}
          <VideoWidget />
        </div>
      </section>

      {/* Transition to Background Section */}
      <WaveDivider fromColor="bg-dark" toColor="text-background" />

      {/* Call to Action Section */}
      <section className="section-padding bg-background text-center">
        <div className="container-custom max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-5 py-1.5 border border-dark/20 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
            Votre Événement
          </span>
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mt-6 mb-8 text-dark uppercase tracking-normal">
            Créons vos souvenirs ensemble
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12 max-w-2xl">
            Que ce soit pour un retour de mariage, un anniversaire entre copains ou une fête d&apos;entreprise, nous apportons l&apos;ambiance et le goût du Sud-Ouest directement chez vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Demander un devis
            </a>
            <a
              href="/nos-services-traiteur"
              className="border border-dark hover:bg-dark hover:text-surface text-dark px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98]"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
