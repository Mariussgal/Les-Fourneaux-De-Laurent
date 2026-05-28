import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
}

export function TestimonialCard({ quote, author, className }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col justify-between space-y-8 p-8 md:p-12 rounded-[2rem] bg-dark-section border border-border/10", className)}>
      <p className="font-medium text-2xl md:text-3xl leading-snug text-surface/90">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-8 bg-accent"></div>
        <p className="font-bold text-accent uppercase tracking-wider text-sm">
          {author}
        </p>
      </div>
    </div>
  );
}
