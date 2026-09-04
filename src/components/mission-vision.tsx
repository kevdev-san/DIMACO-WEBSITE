import { Eye, ShieldCheck, Target } from "lucide-react";
import { company } from "@/data/company";
import { SectionReveal } from "./ui/section-reveal";

export function MissionVision() {
  return (
    <section className="section-pad overflow-hidden bg-[var(--color-navy)] text-white">
      <SectionReveal className="page-shell">
        <div className="eyebrow-light">Identidad y rumbo</div>
        <div className="mt-10 grid gap-px bg-white/15 lg:grid-cols-2">
          <article className="mission-card">
            <Target aria-hidden="true" size={34} className="text-[var(--color-orange-light)]" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Misión</p>
            <h2 className="mt-3 text-2xl font-extrabold">Permanecer sirviendo a Tabasco</h2>
            <p className="mt-5 leading-7 text-white/70">{company.mission}</p>
          </article>
          <article className="mission-card">
            <Eye aria-hidden="true" size={34} className="text-[var(--color-orange-light)]" />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Visión</p>
            <h2 className="mt-3 text-2xl font-extrabold">Liderar con soluciones de calidad</h2>
            <p className="mt-5 leading-7 text-white/70">{company.vision}</p>
          </article>
        </div>
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-orange-light)]">
            <ShieldCheck size={16} />
            <span>Objetivos que guían nuestras operaciones</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.objectives.map((obj, i) => (
              <div key={i} className="rounded border border-white/10 bg-white/5 p-5">
                <span className="text-xs font-black text-[var(--color-orange-light)]">0{i + 1}</span>
                <p className="mt-3 text-sm leading-6 text-white/80">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
