import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  className?: string;
}

const pillStyles = [
  "bg-[#2D2520] text-[#FAF9F6]", // Walnut
  "bg-[#E5E2DC] text-[#2D2824]", // Light Zinc
  "bg-[#3E454F] text-[#FAF9F6]", // Steel
  "bg-[#7A624E] text-[#FAF9F6]", // Bronze
  "bg-[#1E1B18] text-[#FAF9F6]", // Charcoal
  "bg-[#9E826C] text-[#FAF9F6]", // Brushed Brass
  "bg-[#64748B] text-[#FAF9F6]", // Slate Gray
];

export function Marquee({ items, className }: MarqueeProps) {
  // Triple the items array for seamless looping in each row
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden whitespace-nowrap py-8 bg-background flex flex-col gap-4 border-y border-border", className)}>
      {/* First Row - Left moving */}
      <div className="inline-block animate-marquee-slow w-max">
        <div className="flex gap-4 px-2">
          {duplicatedItems.map((item, i) => (
            <span
              key={`row1-${i}`}
              className={cn(
                "font-cormorant font-bold text-lg md:text-xl lg:text-2xl px-6 py-2.5 rounded-full inline-block shadow-sm",
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
                "font-cormorant font-bold text-lg md:text-xl lg:text-2xl px-6 py-2.5 rounded-full inline-block shadow-sm",
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
