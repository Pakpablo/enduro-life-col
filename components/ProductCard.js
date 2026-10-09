"use client";

import { categories, USD_RATE } from "@/constants/marketplaceData";
import ProductImage from "./ProductImage";
import { useStore } from "./StoreProvider";
import { StarIcon } from "./icons";

const cop = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Badge({ children, className }) {
  return (
    <span className={`rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${className}`}>{children}</span>
  );
}

export default function ProductCard({ product }) {
  const { addToCart, toast } = useStore();
  const { title, brand, category, condition, price, oldPrice, rating, reviews, stock, tone } = product;
  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;
  const soldOut = stock === 0;
  const categoryLabel = categories.find((c) => c.id === category)?.label;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-dirt-2 transition hover:-translate-y-1 hover:border-white/25">
      <div className="relative">
        <ProductImage category={category} tone={tone} brand={brand} />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
          {discount > 0 && <Badge className="bg-rust text-bone">-{discount}%</Badge>}
          {condition === "usado" && <Badge className="bg-khaki text-dirt">Usado</Badge>}
          {soldOut ? (
            <Badge className="bg-steel text-bone">Agotado</Badge>
          ) : stock <= 3 ? (
            <Badge className="bg-blaze text-dirt">Últimas {stock}</Badge>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold text-khaki">Vendido por {brand}</p>
        <h3 className="mt-1 line-clamp-2 min-h-[2.75rem] font-semibold leading-snug">{title}</h3>
        <p className="mt-0.5 text-xs text-bone/50">{categoryLabel}</p>

        <div className="mt-2 flex items-center gap-1 text-blaze" aria-label={`${rating} de 5 estrellas`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <StarIcon key={n} filled={rating >= n - 0.25} className="h-3.5 w-3.5" />
          ))}
          <span className="ml-1 text-xs text-bone/50">
            {rating.toFixed(1)} ({reviews})
          </span>
        </div>

        <div className="mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold">{cop.format(price)}</span>
            {oldPrice && <span className="text-xs text-bone/40 line-through">{cop.format(oldPrice)}</span>}
          </div>
          <span className="text-xs text-bone/50">≈ {usd.format(price / USD_RATE)} USD</span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <button
            type="button"
            onClick={() => toast("La ficha de producto llega muy pronto (demo).")}
            className="rounded-md border border-white/15 px-2 py-2 text-xs font-semibold uppercase tracking-wide hover:border-bone"
          >
            Ver producto
          </button>
          <button
            type="button"
            disabled={soldOut}
            onClick={() => addToCart(product)}
            className="rounded-md bg-rust px-2 py-2 text-xs font-semibold uppercase tracking-wide text-bone hover:bg-rust-dark disabled:cursor-not-allowed disabled:bg-steel disabled:text-bone/50"
          >
            {soldOut ? "Agotado" : "Agregar"}
          </button>
        </div>
      </div>
    </article>
  );
}
