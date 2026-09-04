import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, CircleDollarSign } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { QuoteCta } from "@/components/quote-cta";
import { SectionReveal } from "@/components/ui/section-reveal";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: `Consulta las familias de materiales para construcción que distribuye ${siteConfig.name} en Tabasco.`,
};

export default function CatalogoPage() {
  return (
    <main id="contenido" className="bg-[var(--color-surface)]">
      <section className="catalog-hero technical-grid-dark bg-[var(--color-navy)] text-white">
        <div className="page-shell pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div className="eyebrow-light">Catálogo {siteConfig.name}</div>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">Materiales para construir con solidez</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Explora nuestras familias de productos. Cada cotización se prepara según las medidas, presentaciones y cantidades que necesitas.</p>
          <div className="mt-9 inline-flex items-center gap-3 border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/75">
            <CircleDollarSign aria-hidden="true" className="text-[var(--color-orange-light)]" />
            Los productos se cotizan sin precios publicados.
          </div>
        </div>
      </section>

      <section aria-label="Navegación por categorías" className="sticky top-[76px] z-30 border-b border-[var(--color-line)] bg-white/95 shadow-sm backdrop-blur">
        <div className="page-shell flex gap-2 overflow-x-auto py-3 scrollbar-none">
          {categories.map((category) => (
            <Link key={category.slug} href={`#${category.slug}`} className="category-pill">
              {category.shortName}<ArrowDown aria-hidden="true" size={14} />
            </Link>
          ))}
        </div>
      </section>

      <div className="page-shell py-16 sm:py-24">
        {categories.map((category, index) => {
          const categoryProducts = products.filter((product) => product.categorySlug === category.slug);
          return (
            <SectionReveal key={category.slug}>
              <section id={category.slug} className="catalog-section scroll-mt-36">
                <div className="grid gap-4 border-b border-[var(--color-line)] pb-7 md:grid-cols-[110px_1fr] md:items-end">
                  <p className="text-sm font-black text-[var(--color-orange)]">0{index + 1} / 05</p>
                  <div><h2 className="text-2xl font-black uppercase text-[var(--color-navy)] sm:text-3xl">{category.name}</h2><p className="mt-2 text-sm text-[var(--color-muted)]">{category.description}</p></div>
                </div>
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => <ProductCard key={product.slug} product={product} categoryName={category.shortName} />)}
                </div>
              </section>
            </SectionReveal>
          );
        })}
      </div>
      <QuoteCta />
    </main>
  );
}
