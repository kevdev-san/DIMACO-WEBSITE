import Link from "next/link";
import { ArrowRight, Boxes, Construction, Fence, Pipette, Warehouse } from "lucide-react";
import { categories } from "@/data/categories";
import { SectionReveal } from "./ui/section-reveal";

const categoryIconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "ferreteria-fijacion-cercado": Fence,
  "aceros-estructurales": Boxes,
  "tuberias-tinacos-pvc": Pipette,
  "laminas-cubiertas": Warehouse,
  "obra-negra": Construction,
};

export function CategoryPreview() {
  return (
    <section className="section-pad technical-grid bg-white">
      <SectionReveal className="page-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">Familias de productos</div>
            <h2 className="section-title mt-4 max-w-2xl">Materiales para cada etapa de tu construcción</h2>
          </div>
          <Link href="/catalogo" className="text-link">Ver catálogo completo <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = categoryIconMap[category.slug] || Boxes;
            return (
              <Link
                key={category.slug}
                href={`/catalogo#${category.slug}`}
                className={`category-card ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <Icon size={35} strokeWidth={1.6} />
                <span className="mt-10 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-orange)]">Categoría 0{index + 1}</span>
                <h3 className="mt-2 text-xl font-extrabold leading-tight">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{category.description}</p>
                <ArrowRight aria-hidden="true" className="mt-7" size={19} />
              </Link>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
