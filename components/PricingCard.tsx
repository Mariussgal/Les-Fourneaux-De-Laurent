import { cn } from "@/lib/utils";

interface PricingItem {
  name: string;
  price?: string;
}

interface PricingCardProps {
  title: string;
  description?: string;
  items?: PricingItem[];
  basePrice?: string;
  className?: string;
}

export function PricingCard({ title, description, items, basePrice, className }: PricingCardProps) {
  return (
    <div className={cn("bg-surface rounded-[2rem] p-8 md:p-12 border border-border shadow-sm flex flex-col", className)}>
      <div className="mb-10">
        <h3 className="font-cormorant font-bold text-2xl lg:text-3xl text-dark mb-4">{title}</h3>
        {description && (
          <p className="text-text-muted leading-relaxed">{description}</p>
        )}
      </div>

      {items && items.length > 0 && (
        <ul className="space-y-4 mb-10 flex-grow">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-baseline gap-4">
              <span className="font-medium text-text">{item.name}</span>
              {item.price && (
                <>
                  <div className="flex-grow border-b-2 border-dotted border-border/60"></div>
                  <span className="font-bold text-primary whitespace-nowrap">{item.price}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {basePrice && (
        <div className="mt-auto pt-8 border-t border-border/50">
          <p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-2">À partir de</p>
          <p className=" font-bold text-4xl text-primary">{basePrice}</p>
        </div>
      )}
    </div>
  );
}
