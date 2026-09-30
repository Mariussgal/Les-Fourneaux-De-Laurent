import { legal } from "@/lib/legal";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section-padding bg-background relative z-20 pt-24">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="px-5 py-1.5 border border-dark/20 rounded-full text-xs font-bold tracking-widest uppercase text-dark">
            Informations légales
          </span>
          <h1 className="font-condensed text-4xl md:text-6xl lg:text-7xl mt-6 text-dark uppercase tracking-normal">
            {title}
          </h1>
          <p className="text-sm text-text-muted mt-4">Dernière mise à jour : {legal.lastUpdated}</p>
        </div>

        <div className="bg-surface rounded-3xl md:rounded-[2.5rem] p-6 md:p-14 border border-border/60 shadow-xl text-text leading-relaxed space-y-10 [&_h2]:font-cormorant [&_h2]:font-bold [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:text-dark [&_h2]:mb-4 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-3 [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary-dark">
          {children}
        </div>
      </div>
    </section>
  );
}
