import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { company } from "@/data/company";
import { WhatsAppButton } from "./whatsapp-button";

export function Hero() {
  return (
    <section id="inicio" className="hero-grid relative min-h-[680px] overflow-hidden bg-[var(--color-navy)] text-white">
      <Image
        src="/images/facilities/dimaco-storefront-clear.jpeg"
        alt={`Fachada actual de las instalaciones de ${siteConfig.name} en Villahermosa`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-[var(--color-navy)]/60" />
      <div className="absolute inset-y-0 left-[58%] hidden w-32 -skew-x-12 bg-[var(--color-orange)]/65 lg:block" />
      <div className="hero-shell relative flex min-h-[680px] items-center pb-16 pt-[98px] lg:pt-[106px]">
        <div className="max-w-3xl">
          <div className="eyebrow-light">Construimos relaciones sólidas</div>
          <h1 className="mt-5 max-w-[720px] text-[clamp(2.5rem,5.8vw,5.4rem)] font-black uppercase leading-[0.94] tracking-[-0.04em]">
            Materiales que <span className="text-[var(--color-orange-light)]">mueven</span> tu obra
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            {company.tagline}. Atención directa y cobertura de entrega en {company.coverage}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/catalogo" className="button-primary">
              Explorar catálogo <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <WhatsAppButton label="Cotizar por WhatsApp" className="button-whatsapp" />
          </div>
          <div className="mt-10 flex items-center gap-3 border-l-2 border-[var(--color-orange-light)] pl-4 text-sm text-white/70">
            <MapPin aria-hidden="true" size={18} className="text-[var(--color-orange-light)]" />
            <span>Periférico Carlos Pellicer Cámara #2362 · Villahermosa, Tabasco</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 h-2 w-2/5 bg-[var(--color-orange)]" />
    </section>
  );
}
