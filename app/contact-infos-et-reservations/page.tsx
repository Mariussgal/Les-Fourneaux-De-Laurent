import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export const metadata = {
  title: "Contact & Réservations",
};

export default async function Contact() {
  const data = await reader.singletons.contact.read();

  const heroHeadline = data?.hero?.headline ?? "Contactez-nous";
  const heroSubline = data?.hero?.subline ?? "Nous sommes fiers de notre adaptabilité et de notre engagement envers l'excellence dans tous les aspects de notre service.";

  const infoTitle = data?.info_section?.title ?? "Informations";
  const infoEmail = data?.info_section?.email ?? "lesfourneauxdelaurent@gmail.com";
  const infoPhone = data?.info_section?.phone ?? "06 46 86 34 34";
  const infoAddress = data?.info_section?.address ?? "6 rue du Général Mangin,\n92600 Asnières-sur-Seine";

  const socialTitle = data?.social_section?.title ?? "Réseaux Sociaux";
  const instagramText = data?.social_section?.instagram_handle ?? "@lesfourneauxdelaurent";
  const whatsappText = data?.social_section?.whatsapp_text ?? "WhatsApp : 06 46 86 34 34";

  return (
    <>
      <HeroSection
        headline={heroHeadline}
        subline={heroSubline}
        backgroundImage="/contact-hero.jpg"
      />

      <section className="section-padding bg-background pt-0">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-10 lg:space-y-16 mt-4">
              <div>
                <h3 className="font-cormorant font-bold text-3xl text-dark mb-8 border-b border-border pb-4">{infoTitle}</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="text-lg md:text-xl text-text font-medium mt-1 break-all md:break-normal">{infoEmail}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-lg md:text-xl text-text font-medium mt-1">{infoPhone}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-lg md:text-xl text-text font-medium mt-1 leading-relaxed whitespace-pre-line">{infoAddress}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant font-bold text-3xl text-dark mb-8 border-b border-border pb-4">{socialTitle}</h3>
                <ul className="space-y-6">
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-primary hover:text-primary-dark hover:underline transition-colors flex items-center gap-3">
                      {instagramText}
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/33646863434" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-primary hover:text-primary-dark hover:underline transition-colors flex items-center gap-3">
                      {whatsappText}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
