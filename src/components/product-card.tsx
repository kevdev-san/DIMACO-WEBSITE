import { ArrowUpRight, Boxes, CircleDollarSign } from "lucide-react";
import type { Product } from "@/data/products";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "./whatsapp-button";

type ProductCardProps = { product: Product; categoryName: string };

export function ProductCard({ product, categoryName }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-visual" aria-hidden="true">
        <div className="steel-bars" />
        <Boxes size={38} strokeWidth={1.4} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--color-orange)]">{categoryName}</p>
        <h3 className="mt-3 flex items-start justify-between gap-3 text-xl font-extrabold text-[var(--color-navy)]">
          {product.name}<ArrowUpRight aria-hidden="true" size={19} className="shrink-0 text-[var(--color-blue)]" />
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{product.description}</p>
        <p className="mt-5 border-l-2 border-[var(--color-orange)] pl-3 text-xs leading-5 text-[var(--color-steel)]">{product.variantsNote}</p>
        <div className="mt-auto pt-6">
          <WhatsAppButton message={siteConfig.productQuoteMessage(product.name)} label={`Cotizar ${product.name}`} className="w-full" />
        </div>
      </div>
      <span className="sr-only"><CircleDollarSign /> Este producto no muestra precios; requiere cotización.</span>
    </article>
  );
}
