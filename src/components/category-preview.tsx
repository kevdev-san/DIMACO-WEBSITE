import Link from "next/link";
import { ArrowRight, Boxes, Construction, Fence, Warehouse } from "lucide-react";
import { categories } from "@/data/categories";
import { SectionReveal } from "./ui/section-reveal";

function TinacoTuberiasIcon({
  size = 35,
  strokeWidth = 1.6,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Tapa del tinaco */}
      <path d="M10 2h4v2h-4z" />
      {/* Cuerpo del tinaco */}
      <rect x="5" y="4" width="14" height="16" rx="2" />
      {/* Anillos de refuerzo */}
      <path d="M5 9h14" />
      <path d="M5 14h14" />
      {/* Tubería de salida con codo */}
      <path d="M19 16h2a1 1 0 0 1 1 1v4" />
      {/* Tubería de alimentación */}
      <path d="M2 6h3" />
    </svg>
  );
}

const categoryIconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "ferreteria-fijacion-cercado": Fence,
  "aceros-estructurales": Boxes,
  "tuberias-tinacos-pvc": TinacoTuberiasIcon,
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
