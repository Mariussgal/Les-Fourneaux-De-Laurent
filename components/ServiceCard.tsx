import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ title, description, className }: ServiceCardProps) {
  return (
    <div className={cn("bg-surface rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full", className)}>
      <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark mb-6 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-lg leading-relaxed mt-auto">
        {description}
      </p>
    </div>
  );
}
