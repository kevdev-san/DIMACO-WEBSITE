import { MapPin, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { company } from "@/data/company";
import { SectionReveal } from "./ui/section-reveal";

export function CoverageSection() {
  return (
    <section className="section-pad bg-[var(--color-surface)]">
      <SectionReveal className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <div className="eyebrow">Cobertura</div>
          <h2 className="section-title mt-4">Tu obra, en cualquier municipio de Tabasco</h2>
          <p className="body-copy mt-6">{siteConfig.name} cuenta con servicio de entrega a domicilio y cobertura en {company.coverage}.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="grid size-12 place-items-center bg-[var(--color-blue)] text-white"><Truck aria-hidden="true" /></span>
            <div>
              <p className="font-extrabold text-[var(--color-navy)]">Cobertura estatal</p>
              <p className="text-sm text-[var(--color-muted)]">Entrega coordinada según tu cotización</p>
            </div>
          </div>
        </div>
        <div className="tabasco-panel relative min-h-[350px] overflow-hidden p-8 sm:p-12">
          <div className="absolute -right-16 -top-16 size-64 rounded-full border-[40px] border-white/5" />
          <MapPin aria-hidden="true" size={52} className="text-[var(--color-orange-light)]" strokeWidth={1.5} />
          <p className="mt-16 text-xs font-bold uppercase tracking-[0.22em] text-white/55">Desde Villahermosa</p>
          <p className="mt-2 max-w-md text-3xl font-black uppercase leading-tight text-white sm:text-4xl">Entregas en {company.coverage}</p>
          <p className="mt-5 text-sm text-white/65">Consulta las condiciones de entrega para tu pedido.</p>
        </div>
      </SectionReveal>
    </section>
  );
}
