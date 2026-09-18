"use client";

import { useMemo, useState } from "react";
import { Search, X, SlidersHorizontal, PackageOpen } from "lucide-react";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { SectionReveal } from "./ui/section-reveal";

type CatalogBrowserProps = {
  categories: readonly Category[];
  products: readonly Product[];
};

export function CatalogBrowser({ categories, products }: CatalogBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(query);
      const matchDesc = product.description.toLowerCase().includes(query);
      const matchBrand = product.brand?.toLowerCase().includes(query);
      const matchSpecs = product.specs?.some((spec) => spec.toLowerCase().includes(query));

      return matchName || matchDesc || matchBrand || matchSpecs;
    });
  }, [products, selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    categories.forEach((cat) => {
      counts[cat.slug] = products.filter((p) => p.categorySlug === cat.slug).length;
    });
    return counts;
  }, [categories, products]);

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);

  return (
    <div>
      {/* Sticky Search & Category Navigation Bar */}
      <section
        aria-label="Controles y filtros del catálogo"
        className="sticky top-[70px] z-30 border-b border-[var(--color-line)] bg-white/95 shadow-sm backdrop-blur"
      >
        <div className="page-shell py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search Box */}
            <div className="relative w-full max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Buscar por producto, calibre o material (ej. PTR, C-22, Tinaco, Clavos)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-[var(--color-line)] bg-[var(--color-surface)] py-2.5 pl-10 pr-10 text-sm text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-blue)] focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-navy)]"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Results counter right next to search box */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-muted)] sm:ml-2">
              <SlidersHorizontal size={14} className="text-[var(--color-orange)]" />
              <span>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "producto encontrado" : "productos encontrados"}
              </span>
            </div>
          </div>


          {/* Category Filter Pills */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-[var(--color-navy)] text-white shadow-sm"
                  : "border border-[var(--color-line)] bg-white text-[var(--color-navy)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
              }`}
            >
              <span>Todos</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                  selectedCategory === "all"
                    ? "bg-white/20 text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)]"
                }`}
              >
                {categoryCounts.all}
              </span>
            </button>

            {categories.map((category) => {
              const isSelected = selectedCategory === category.slug;
              const count = categoryCounts[category.slug] || 0;
              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-[var(--color-navy)] text-white shadow-sm"
                      : "border border-[var(--color-line)] bg-white text-[var(--color-navy)] hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
                  }`}
                >
                  <span>{category.shortName}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[var(--color-surface)] text-[var(--color-muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Grid View */}
      <div className="page-shell py-12 sm:py-16">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-line)] bg-white py-20 text-center">
            <PackageOpen size={48} className="text-[var(--color-orange)]" />
            <h3 className="mt-4 text-xl font-bold text-[var(--color-navy)]">
              No encontramos productos que coincidan
            </h3>
            <p className="mt-2 max-w-md text-sm text-[var(--color-muted)]">
              No hay coincidencias para &quot;{searchQuery}&quot; en la categoría seleccionada. Intenta con otro término o limpia los filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="button-primary mt-6 text-xs"
            >
              Restablecer filtros
            </button>
          </div>
        ) : selectedCategory === "all" && !searchQuery.trim() ? (
          // Grouped by category when no filter/search is active
          <div className="space-y-16 sm:space-y-20">
            {categories.map((category, index) => {
              const catProds = products.filter((p) => p.categorySlug === category.slug);
              if (catProds.length === 0) return null;

              return (
                <SectionReveal key={category.slug}>
                  <section id={category.slug} className="catalog-section scroll-mt-48">
                    <div className="grid gap-4 border-b border-[var(--color-line)] pb-6 md:grid-cols-[110px_1fr] md:items-end">
                      <p className="text-sm font-black text-[var(--color-orange)]">
                        0{index + 1} / 0{categories.length}
                      </p>
                      <div>
                        <h2 className="text-2xl font-black uppercase text-[var(--color-navy)] sm:text-3xl">
                          {category.name}
                        </h2>
                        <p className="mt-1.5 text-sm text-[var(--color-muted)]">{category.description}</p>
                      </div>
                    </div>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {catProds.map((product) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          categoryName={category.shortName}
                        />
                      ))}
                    </div>
                  </section>
                </SectionReveal>
              );
            })}
          </div>
        ) : (
          // Flat filtered view
          <div>
            <div className="mb-8 border-b border-[var(--color-line)] pb-4">
              <h2 className="text-2xl font-black uppercase text-[var(--color-navy)] sm:text-3xl">
                {activeCategoryObj ? activeCategoryObj.name : "Resultados de búsqueda"}
              </h2>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                {searchQuery.trim()
                  ? `Mostrando resultados para "${searchQuery}" (${filteredProducts.length} productos)`
                  : activeCategoryObj?.description}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const cat = categories.find((c) => c.slug === product.categorySlug);
                return (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    categoryName={cat?.shortName || "Producto"}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
