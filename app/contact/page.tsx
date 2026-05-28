import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Réservations",
};

export default function Contact() {
  return (
    <>
      <HeroSection
        headline="Contactez-nous"
        subline="Nous sommes fiers de notre adaptabilité et de notre engagement envers l'excellence dans tous les aspects de notre service."
        backgroundImage="/contact-hero.jpg"
      />

      <section className="section-padding bg-background pt-0">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-16 mt-4">
              <div>
                <h3 className="font-cormorant font-bold text-3xl text-dark mb-8 border-b border-border pb-4">Informations</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-4">
                    <span className="text-xl text-text font-medium mt-1">lesfourneauxdelaurent@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-xl text-text font-medium mt-1">06 46 86 34 34</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-xl text-text font-medium mt-1 leading-relaxed">6 rue du Général Mangin,<br />92600 Asnières-sur-Seine</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant font-bold text-3xl text-dark mb-8 border-b border-border pb-4">Réseaux Sociaux</h3>
                <ul className="space-y-6">
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary hover:text-primary-dark hover:underline transition-colors flex items-center gap-3">
                      @lesfourneauxdelaurent
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/33646863434" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary hover:text-primary-dark hover:underline transition-colors flex items-center gap-3">
                      WhatsApp : 06 46 86 34 34
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
