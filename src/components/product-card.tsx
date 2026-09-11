import Image from "next/image";
import { ArrowUpRight, Boxes, CheckCircle2, CircleDollarSign } from "lucide-react";
import type { Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./whatsapp-button";

type ProductCardProps = { product: Product; categoryName: string };

export function ProductCard({ product, categoryName }: ProductCardProps) {
  return (
    <article className="product-card group flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--color-line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-blue)]/50 hover:shadow-xl">
      <div>
        {/* Visual Container: Pure clean white background seamlessly matching the card */}
        <div className="relative flex h-52 w-full items-center justify-center overflow-hidden border-b border-[var(--color-line)]/50 bg-white p-4">
          {product.image ? (
            <div className="relative h-full w-full">
              <Image
                src={product.image}
                alt={`Fotografía de ${product.name} - DIMACO`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="product-visual w-full" aria-hidden="true">
              <div className="steel-bars" />
              <Boxes size={38} strokeWidth={1.4} />
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-orange)]">
            {categoryName}
          </p>

          <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-black text-[var(--color-navy)] group-hover:text-[var(--color-blue)]">
            <span>{product.name}</span>
            <ArrowUpRight
              aria-hidden="true"
              size={18}
              className="shrink-0 text-[var(--color-blue)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </h3>

          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] line-clamp-3">
            {product.description}
          </p>

          {/* Technical Specs */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-4 space-y-1.5 border-t border-[var(--color-line)]/60 pt-3">
              {product.specs.slice(0, 3).map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[var(--color-steel)]">
                  <CheckCircle2 size={13} className="shrink-0 text-[var(--color-orange)]" />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>
          )}

          {/* Variants and commercial note */}
          <p className="mt-4 border-l-2 border-[var(--color-orange)] pl-3 text-xs leading-5 text-[var(--color-steel)]">
            {product.variantsNote}
          </p>
        </div>
      </div>

      {/* Action: WhatsApp Quote Button */}
      <div className="p-6 pt-0">
        <WhatsAppButton
          message={siteConfig.productQuoteMessage(product.name)}
          label={`Cotizar ${product.name}`}
          className="w-full justify-center"
        />
        <span className="sr-only">
          <CircleDollarSign /> Este producto no muestra precios; requiere cotización personalizada.
        </span>
      </div>
    </article>
  );
}
