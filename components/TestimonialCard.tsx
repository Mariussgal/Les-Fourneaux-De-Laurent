import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  className?: string;
  link?: string;
}

export function TestimonialCard({ quote, author, className, link }: TestimonialCardProps) {
  const CardContent = (
    <>
      {link && (
        <div className="absolute top-6 right-8 flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface/10 backdrop-blur-md border border-surface/20 text-[10px] uppercase tracking-wider text-surface/80 group-hover:text-surface group-hover:bg-surface/20 transition-all duration-300">
          <span>Avis Google</span>
          <ArrowUpRight className="w-3 h-3" />
        </div>
      )}
      <p className="font-medium text-2xl md:text-3xl leading-snug text-surface/90">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-8 bg-accent"></div>
        <p className="font-bold text-accent uppercase tracking-wider text-sm">
          {author}
        </p>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative flex flex-col justify-between space-y-8 p-8 md:p-12 rounded-[2rem] bg-dark-section border border-border/10 hover:border-accent/40 transition-all duration-300 hover:scale-[1.01] cursor-pointer",
          className
        )}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className={cn("flex flex-col justify-between space-y-8 p-8 md:p-12 rounded-[2rem] bg-dark-section border border-border/10", className)}>
      {CardContent}
    </div>
  );
}

