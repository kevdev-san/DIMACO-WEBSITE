import type { Metadata } from "next";
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
        <div className="page-shell pb-10 pt-24 sm:pb-12 sm:pt-28">
          <div className="eyebrow-light">Catálogo Oficial {siteConfig.name}</div>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
            Materiales para construir con solidez
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Explora nuestras familias de materiales. Cada cotización se prepara a la medida de los calibres, medidas, presentaciones y volumen que requiere tu proyecto.
          </p>
        </div>
      </section>


      {/* Interactive Catalog Browser (Brands, Search, Filters, Products Grid) */}
      <CatalogBrowser categories={categories} products={products} />

      {/* Direct Quote CTA
      <QuoteCta showCatalogButton={false} /> */}
    </main>

  );
}
