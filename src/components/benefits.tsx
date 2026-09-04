import { Handshake, MapPinned, Ruler, Truck } from "lucide-react";
import { SectionReveal } from "./ui/section-reveal";

const benefits = [
  { icon: Handshake, title: "Atención directa", text: "Te ayudamos a identificar los materiales que requiere tu proyecto." },
  { icon: Ruler, title: "Cotización a medida", text: "Consideramos productos, medidas, presentaciones y cantidades solicitadas." },
  { icon: Truck, title: "Servicio de entrega", text: "Coordinamos la entrega a domicilio o la recolección de tus materiales." },
  { icon: MapPinned, title: "Cobertura estatal", text: "Realizamos entregas en todos los municipios del estado de Tabasco." },
] as const;

export function Benefits() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-surface)]">
      <SectionReveal className="page-shell grid md:grid-cols-2 xl:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="benefit-card">
            <span className="text-xs font-black text-[var(--color-orange)]">0{index + 1}</span>
            <Icon aria-hidden="true" className="mt-6 text-[var(--color-blue)]" size={31} strokeWidth={1.8} />
            <h3 className="mt-5 text-lg font-extrabold text-[var(--color-navy)]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{text}</p>
          </article>
        ))}
      </SectionReveal>
    </section>
  );
}
