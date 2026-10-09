"use client";

import { useMemo } from "react";
import { brands, categories, conditions, products, sortOptions } from "@/constants/marketplaceData";
import ProductCard from "./ProductCard";
import { emptyFilters, useStore } from "./StoreProvider";
import { CloseIcon } from "./icons";

const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const selectClass =
  "rounded-md border border-white/10 bg-dirt-2 px-3 py-2 text-sm text-bone focus:border-rust focus:outline-none";

export default function Marketplace() {
  const { filters, updateFilters, resetFilters } = useStore();

  const results = useMemo(() => {
    const q = normalize(filters.query);
    const list = products.filter(
      (p) =>
        (!q || normalize(`${p.title} ${p.brand}`).includes(q)) &&
        (!filters.category || p.category === filters.category) &&
        (!filters.brand || p.brand === filters.brand) &&
        (!filters.condition || p.condition === filters.condition)
    );
    const sorted = [...list];
    if (filters.sort === "precio-asc") sorted.sort((a, b) => a.price - b.price);
    if (filters.sort === "precio-desc") sorted.sort((a, b) => b.price - a.price);
    if (filters.sort === "calificacion") sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [filters]);

  const hasFilters = Object.keys(emptyFilters).some((k) => k !== "sort" && filters[k]);

  return (
    <section id="marketplace" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-display text-sm tracking-wider text-rust">MARKETPLACE</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Equípate para la ruta</h2>
          <p className="mt-2 text-bone/60">Marcas oficiales y riders de la comunidad, en un solo lugar.</p>
        </div>
        <p className="rounded border border-blaze/40 bg-blaze/10 px-3 py-1.5 text-xs font-semibold text-blaze">
          Vista previa · productos y precios de ejemplo
        </p>
      </div>

      {/* Barra de filtros */}
      <div className="sticky top-16 z-30 -mx-4 mt-8 border-y border-white/10 bg-dirt/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          <Chip active={!filters.category} onClick={() => updateFilters({ category: "" })}>
            Todo
          </Chip>
          {categories.map((c) => (
            <Chip key={c.id} active={filters.category === c.id} onClick={() => updateFilters({ category: c.id })}>
              {c.label}
            </Chip>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center">
          <select
            aria-label="Filtrar por marca"
            value={filters.brand}
            onChange={(e) => updateFilters({ brand: e.target.value })}
            className={selectClass}
          >
            <option value="">Todas las marcas</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <select
            aria-label="Filtrar por estado"
            value={filters.condition}
            onChange={(e) => updateFilters({ condition: e.target.value })}
            className={selectClass}
          >
            <option value="">Nuevo y usado</option>
            {conditions.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
          <select
            aria-label="Ordenar"
            value={filters.sort}
            onChange={(e) => updateFilters({ sort: e.target.value })}
            className={`${selectClass} col-span-2 sm:ml-auto`}
          >
            {sortOptions.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>
        {(hasFilters || filters.query) && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-bone/60">
            {filters.query && (
              <span className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                “{filters.query}”
                <button type="button" aria-label="Quitar búsqueda" onClick={() => updateFilters({ query: "" })}>
                  <CloseIcon className="h-3.5 w-3.5" />
                </button>
              </span>
            )}
            <button type="button" onClick={resetFilters} className="font-semibold text-rust hover:underline">
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      <p className="mt-6 text-sm text-bone/50">
        {results.length} {results.length === 1 ? "producto" : "productos"}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed border-white/15 px-6 py-16 text-center">
          <p className="font-display text-xl">Nada por aquí… todavía</p>
          <p className="mt-2 text-bone/60">Prueba con otra búsqueda o quita algunos filtros.</p>
          <button type="button" onClick={resetFilters} className="btn-skew mt-6 bg-rust text-bone hover:bg-rust-dark">
            <span>Ver todos los productos</span>
          </button>
        </div>
      )}
    </section>
  );
}

function Chip({ active, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
        active ? "bg-bone text-dirt" : "bg-white/5 text-bone/75 hover:bg-white/10 hover:text-bone"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
