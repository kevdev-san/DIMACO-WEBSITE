import type { Metadata } from "next";
import { CircleDollarSign, Sparkles } from "lucide-react";
import { CatalogBrowser } from "@/components/catalog-browser";
import { QuoteCta } from "@/components/quote-cta";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo oficial de productos 2026",
  description: `Consulta el catálogo completo de materiales para construcción de ${siteConfig.name} en Tabasco: aceros, tuberías, tinacos Rotoplas, alambres, láminas y perfiles.`,
};

export default function CatalogoPage() {
  return (
    <main id="contenido" className="bg-[var(--color-surface)]">
      {/* Hero Section */}
      <section className="catalog-hero technical-grid-dark bg-[var(--color-navy)] text-white">
        <div className="page-shell pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div className="eyebrow-light">Catálogo Oficial {siteConfig.name} 2026</div>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
            Materiales para construir con solidez
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Explora nuestras familias de materiales y marcas líderes. Cada cotización se prepara a la medida de los calibres, medidas, presentaciones y volumen que requiere tu proyecto.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/75">
              <CircleDollarSign aria-hidden="true" className="text-[var(--color-orange-light)]" />
              Los productos se cotizan de forma directa y personalizada.
            </div>
            <div className="inline-flex items-center gap-2 border border-[var(--color-orange)]/30 bg-[var(--color-orange)]/10 px-4 py-4 text-xs font-semibold text-[var(--color-orange-light)]">
              <Sparkles size={16} />
              {products.length} productos y familias disponibles
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Catalog Browser (Brands, Search, Filters, Products Grid) */}
      <CatalogBrowser categories={categories} products={products} />

      {/* Direct Quote CTA */}
      <QuoteCta />
    </main>
  );
}
