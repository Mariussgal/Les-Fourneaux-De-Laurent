import Image from "next/image";
import { cn } from "@/lib/utils";

interface TrustedByProps {
  className?: string;
}

const partners = [
  { name: "Veolia", logo: "/logos/veolia.png" },
  { name: "Louis Vuitton", logo: "/logos/LV.jpeg" },
  { name: "Alcena", logo: "/logos/alcena_logo.jpeg" },
  { name: "Mairie d'Asnières sur seine", logo: "/logos/mairie-asnieres.jpg" },
  { name: "Centre cardiologique evecquemont", logo: "/logos/Logo-Vivalto.png" },
  { name: "Roxpp", logo: "/logos/roxqp.jpeg" },
  { name: "Asnières Boxing club", logo: "/logos/abc.jpeg" },
  { name: "Jmd production", logo: "/logos/dumontetproduction.jpeg" },
  { name: "Le tamanoir café", logo: "/logos/images.png" },
  { name: "Asnières business club", logo: "/logos/a9b43242ae2115c239c95d19fb163d7ab0f3290a.png" },
  { name: "Le théâtre du corps Pietragalla", logo: "/logos/theatre-pietragalla.jpeg" },
  { name: "Raid aventure organisation", logo: "/logos/raidaventure.jpeg" },
  { name: "Groupe M6", logo: "/logos/M6Groupe2023.svg" },
  { name: "Absis conseil", logo: "/logos/absis.jpeg" },
  { name: "Brigade protection des mineurs Paris", logo: "/logos/bpdmineurs.jpeg" },
  { name: "Fraternité Police", logo: "/logos/fraternitépolice.jpeg" }
];

export function TrustedBy({ className }: TrustedByProps) {
  // Triple the items array for seamless looping
  const duplicatedItems = [...partners, ...partners, ...partners];

  return (
    <section className={cn("py-16 md:py-24 bg-background overflow-hidden border-y border-border", className)}>
      <div className="container-custom mb-12 text-center">
        <h2 className="font-condensed text-4xl md:text-5xl lg:text-6xl text-dark uppercase tracking-normal">
          Ils nous font confiance
        </h2>
      </div>

      <div className="relative flex overflow-hidden whitespace-nowrap">
        {/* First Row - Left moving */}
        <div className="inline-block animate-marquee-slow w-max">
          <div className="flex gap-8 px-4 items-center">
            {duplicatedItems.map((partner, i) => (
              <div
                key={`partner-${i}`}
                className="relative flex items-center justify-center w-48 h-24 md:w-56 md:h-28 grayscale hover:grayscale-0 transition-all duration-300 px-4 mix-blend-multiply"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-contain p-4"
                    unoptimized={true}
                  />
                ) : (
                  <span className="font-cormorant font-bold text-center text-lg md:text-xl text-[#2D2824] whitespace-normal leading-tight">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
