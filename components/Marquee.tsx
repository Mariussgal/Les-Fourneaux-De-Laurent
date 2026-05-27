import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

const pillStyles = [
  "bg-[#4E2D1F] text-[#FAF7F2]", // Brun chocolat
  "bg-[#FCDAD7] text-[#1C1008]", // Rose pêche doux
  "bg-[#D4A843] text-[#1C1008]", // Jaune moutarde
  "bg-[#C0392B] text-[#FAF7F2]", // Rouge brique
  "bg-[#E8DDD0] text-[#1C1008]", // Crème grisé
  "bg-[#922B21] text-[#FAF7F2]", // Rouge foncé
  "bg-[#A0522D] text-[#FAF7F2]", // Sienne
];

export function Marquee({ items, className }: MarqueeProps) {
  // Triple the items array for seamless looping in each row
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden whitespace-nowrap py-8 bg-[#FAF7F2] flex flex-col gap-4 border-y border-[#1C1008]/10", className)}>
      {/* First Row - Left moving */}
      <div className="inline-block animate-marquee-slow w-max">
        <div className="flex gap-4 px-2">
          {duplicatedItems.map((item, i) => (
            <span
              key={`row1-${i}`}
              className={cn(
                "font-display font-bold text-lg md:text-xl lg:text-2xl px-6 py-2.5 rounded-full inline-block shadow-sm",
                pillStyles[i % pillStyles.length]
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Second Row - Right moving */}
      <div 
        className="inline-block animate-marquee-slow w-max"
        style={{ animationDirection: "reverse" }}
      >
        <div className="flex gap-4 px-2">
          {duplicatedItems.map((item, i) => (
            <span
              key={`row2-${i}`}
              className={cn(
                "font-display font-bold text-lg md:text-xl lg:text-2xl px-6 py-2.5 rounded-full inline-block shadow-sm",
                // Offset the styles of row 2 slightly so colors alternate differently
                pillStyles[(i + 3) % pillStyles.length]
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
