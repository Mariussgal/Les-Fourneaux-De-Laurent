import { Metadata } from "next";
import { AlbumGallery } from "@/components/AlbumGallery";
import { VideoWidget } from "@/components/VideoWidget";
import { WaveDivider } from "@/components/WaveDivider";
import fs from "fs";
import path from "path";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export const metadata: Metadata = {
  title: "L'Album",
  description: "Découvrez les moments chaleureux de nos événements. Brasero convivial, food truck animé, planches gourmandes du Sud-Ouest et esprit rugby en images et vidéos.",
};

const getImagesFromFolder = (folderName: string) => {
  try {
    const dirPath = path.join(process.cwd(), "public", "album-photo", folderName);
    const files = fs.readdirSync(dirPath);
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => ({
        src: `/album-photo/${folderName}/${file}`,
        alt: `Photo de ${folderName}`,
      }));
  } catch (error) {
    console.error(`Error reading ${folderName} folder:`, error);
    return [];
  }
};

export default async function AlbumPage() {
  const data = await reader.singletons.album.read();

  const foodtruckImages = getImagesFromFolder("foodtruck");
  const serviceTraiteurImages = getImagesFromFolder("service-traiteur");

  const introBadge = data?.intro?.badge ?? "Galerie Souvenirs";
  const introTitle = data?.intro?.title ?? "L'Album des Fourneaux";
  const introQuote = data?.intro?.quote ?? "“La cuisine est un prétexte pour se rassembler, rire et partager de bons moments.”";
  const introDescription = data?.intro?.description ?? "Retrouvez en images et en vidéos l'ambiance unique de nos prestations de traiteur, la convivialité du gril au brasero, et les escales gourmandes de notre Food Truck.";

  const photosBadge = data?.photos?.badge ?? "Photographies";
  const photosTitle = data?.photos?.title ?? "Nos Univers en Images";

  const videosBadge = data?.videos?.badge ?? "En Mouvement";
  const videosTitle = data?.videos?.title ?? "L'Esprit en Vidéo";
  const videosDescription = data?.videos?.description ?? "Découvrez le crépitement du feu, le service des burgers et la joie communicative de nos troisièmes mi-temps en direct.";

  const finalBadge = data?.final_cta?.badge ?? "Votre Événement";
  const finalTitle = data?.final_cta?.title ?? "Créons vos souvenirs ensemble";
  const finalDescription = data?.final_cta?.description ?? "Que ce soit pour un retour de mariage, un anniversaire entre copains ou une fête d'entreprise, nous apportons l'ambiance et le goût du Sud-Ouest directement chez vous.";
  const finalBtn1Label = data?.final_cta?.button_1_label ?? "Demander un devis";
  const finalBtn1Href = data?.final_cta?.button_1_href ?? "/contact-infos-et-reservations";
  const finalBtn2Label = data?.final_cta?.button_2_label ?? "Découvrir nos services";
  const finalBtn2Href = data?.final_cta?.button_2_href ?? "/nos-services-traiteur";

  return (
    <>
      {/* Intro Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-background text-dark relative overflow-hidden">
        <div className="container-custom px-6 text-center max-w-4xl">
          {/* Badge */}
          <span className="px-5 py-1.5 border border-dark/25 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
            {introBadge}
          </span>
          
          {/* Title */}
          <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl mt-6 text-dark uppercase tracking-normal">
            {introTitle}
          </h1>

          {/* Subtitle */}
          <p className="font-cormorant italic text-xl md:text-3xl text-text-muted mt-6 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {introQuote}
          </p>
          <p className="text-base md:text-lg text-text-muted/80 mt-4 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {introDescription}
          </p>
        </div>
      </section>

      {/* Transition to Dark Section */}
      <WaveDivider fromColor="bg-background" toColor="text-dark" />

      {/* Main Media Section (Dark theme for premium media viewing) */}
      <section className="bg-dark text-surface py-16 md:py-24 relative overflow-hidden flex flex-col gap-20">
        
        {/* Photos Area */}
        <div className="container-custom px-6 flex flex-col gap-10 items-center overflow-hidden w-full max-w-[100vw]">
          <div className="text-center max-w-2xl">
            <span className="px-4 py-1 bg-primary/20 border border-primary/40 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent mb-4 inline-block">
              {photosBadge}
            </span>
            <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl uppercase tracking-normal">
              {photosTitle}
            </h2>
          </div>
          
          <AlbumGallery 
            foodtruckImages={foodtruckImages} 
            serviceTraiteurImages={serviceTraiteurImages} 
          />
        </div>

        {/* Divider between photos and videos */}
        <div className="w-full max-w-4xl mx-auto h-[1px] bg-surface/10 my-4" />

        {/* Videos Area (Full-width for looping slider) */}
        <div className="w-full flex flex-col gap-8 items-center">
          <div className="container-custom px-6 text-center max-w-3xl mx-auto">
            <span className="px-4 py-1 bg-primary/20 border border-primary/40 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-accent">
              {videosBadge}
            </span>
            <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl mt-4 text-surface uppercase tracking-normal">
              {videosTitle}
            </h2>
            <p className="text-sm md:text-base text-surface/75 mt-2 leading-relaxed whitespace-pre-line">
              {videosDescription}
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
            {finalBadge}
          </span>
          <h2 className="font-condensed text-5xl md:text-7xl lg:text-8xl mt-6 mb-8 text-dark uppercase tracking-normal">
            {finalTitle}
          </h2>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12 max-w-2xl whitespace-pre-line">
            {finalDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={finalBtn1Href}
              className="bg-dark hover:bg-primary text-surface px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              {finalBtn1Label}
            </a>
            <a
              href={finalBtn2Href}
              className="border border-dark hover:bg-dark hover:text-surface text-dark px-12 py-5 rounded-full font-bold text-lg tracking-wider uppercase transition-all inline-block hover:scale-[1.02] active:scale-[0.98]"
            >
              {finalBtn2Label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
