import Image from "next/image";
import { SectionReveal } from "./ui/section-reveal";

export function CompanyOverview() {
  return (
    <section id="nosotros" className="section-pad scroll-mt-24 bg-white">
      <SectionReveal className="page-shell grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-20">
        <div className="relative min-h-[300px] w-full overflow-hidden rounded shadow-md sm:min-h-[340px]">
          <Image
            src="/images/facilities/dimaco-storefront.jpeg"
            alt="Vista frontal de las instalaciones actuales de DIMACO"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-4 right-4 z-10 rounded-sm bg-[var(--color-blue)] px-5 py-3 text-white shadow-xl sm:bottom-6 sm:right-6">
            <p className="text-2xl font-black sm:text-3xl">+8</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">años de experiencia</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="eyebrow">Quiénes somos</div>
          <h2 className="section-title mt-4">Una distribuidora tabasqueña cerca de cada proyecto</h2>
          <p className="body-copy mt-6">
            DIMACO se dedica a la venta y distribución de materiales para la construcción, con atención personalizada y logística en todo el estado de Tabasco.
          </p>
          <p className="body-copy mt-4">
            Entendemos las características, medidas y cantidades que requiere tu obra para cotizarte de manera ágil y transparente.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
