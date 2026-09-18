import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

type QuoteCtaProps = {
  showCatalogButton?: boolean;
};

export function QuoteCta({ showCatalogButton = true }: QuoteCtaProps) {
  return (
    <section className="quote-band relative overflow-hidden bg-[var(--color-orange)] text-white">
      <div className="page-shell relative flex flex-col justify-between gap-8 py-14 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Tu proyecto empieza con una buena decisión</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-4xl">Dinos qué materiales necesitas</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton className="whitespace-nowrap" />
          {showCatalogButton && (
            <Link href="/catalogo" className="button-ghost-light">
              Ver catálogo <ArrowRight aria-hidden="true" size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

