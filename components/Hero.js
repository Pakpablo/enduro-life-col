"use client";

import { useState } from "react";
import { brands, categories, conditions } from "@/constants/marketplaceData";
import { scrollToId, useStore } from "./StoreProvider";
import { ArrowIcon, SearchIcon, WhatsAppIcon } from "./icons";

const selectClass =
  "w-full appearance-none rounded-md border border-white/10 bg-dirt px-3 py-2.5 text-sm text-bone focus:border-rust focus:outline-none";

export default function Hero() {
  const { updateFilters } = useStore();
  const [form, setForm] = useState({ query: "", category: "", brand: "", condition: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e) {
    e.preventDefault();
    updateFilters({ ...form, query: form.query.trim() });
    scrollToId("marketplace");
  }

  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/10">
      {/* Foto de fondo con degradado */}
      <div
        className="absolute inset-0 bg-cover bg-[center_30%] opacity-40 lg:left-1/2 lg:opacity-100 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
        style={{ backgroundImage: "url(/assets/img/hero.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dirt via-dirt/90 to-dirt/40 lg:via-dirt lg:to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-20">
        <div>
          <p className="font-display text-sm tracking-wider text-rust">MARKETPLACE · COMUNIDAD · COLOMBIA</p>
          <h1 className="mt-4 font-display text-[2.4rem] leading-[1.02] sm:text-6xl">
            El Marketplace y la Comunidad <span className="text-rust">Oficial</span> del Enduro
          </h1>
          <p className="mt-5 max-w-xl text-lg text-bone/75">
            Encuentra el mejor equipamiento de las marcas más reconocidas y conecta con la comunidad de enduro más grande.
          </p>

          {/* Buscador avanzado */}
          <form
            onSubmit={onSubmit}
            role="search"
            className="mt-8 rounded-lg border border-white/10 bg-dirt-2/90 p-4 shadow-2xl shadow-black/40 backdrop-blur"
          >
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-bone/50" />
              <input
                type="search"
                value={form.query}
                onChange={set("query")}
                placeholder="¿Qué estás buscando?"
                aria-label="Buscar productos"
                className="w-full rounded-md border border-white/10 bg-dirt py-3 pl-10 pr-3 text-base text-bone placeholder:text-bone/40 focus:border-rust focus:outline-none"
              />
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <select value={form.category} onChange={set("category")} aria-label="Categoría" className={selectClass}>
                <option value="">Todas las categorías</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
              <select value={form.brand} onChange={set("brand")} aria-label="Marca" className={selectClass}>
                <option value="">Todas las marcas</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <select value={form.condition} onChange={set("condition")} aria-label="Estado" className={selectClass}>
                <option value="">Nuevo y usado</option>
                {conditions.map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-skew mt-4 w-full bg-rust text-bone hover:bg-rust-dark sm:w-auto">
              <span>Buscar en el marketplace</span>
            </button>
          </form>
        </div>

        {/* Columna derecha: logo + acceso rápido a la comunidad */}
        <div className="flex flex-col justify-between gap-8 lg:items-end">
          <img
            src="/assets/img/logo-badge.png"
            alt="Enduro Life Colombia"
            className="hidden w-56 drop-shadow-2xl lg:block xl:w-64"
          />
          <a
            href="#comunidad"
            className="group block w-full max-w-md rounded-lg border border-white/15 bg-dirt/85 p-5 backdrop-blur transition hover:border-rust"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-khaki">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#25d366]" /> Comunidad activa
            </div>
            <p className="mt-2 font-display text-2xl">Únete a la Red Enduro Life</p>
            <p className="mt-1 text-sm text-bone/70">
              Rutas, eventos, parches y compra/venta. Más de 80 riders ya están dentro.
            </p>
            <div className="mt-4 flex items-center justify-between text-sm font-semibold">
              <span className="flex items-center gap-2 text-[#25d366]">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp · Rutas · Eventos
              </span>
              <ArrowIcon className="h-5 w-5 transition group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
      <div className="stripes h-1.5" aria-hidden="true" />
    </section>
  );
}
