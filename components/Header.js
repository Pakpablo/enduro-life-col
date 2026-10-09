"use client";

import { useState } from "react";
import { scrollToId, useStore } from "./StoreProvider";
import { CartIcon, CloseIcon, MenuIcon, SearchIcon, UserIcon } from "./icons";

const links = [
  { href: "#marketplace", label: "Marketplace" },
  { href: "#comunidad", label: "Comunidad", highlight: true },
  { href: "#marcas", label: "Marcas Aliadas" },
  { href: "#nosotros", label: "Sobre Nosotros" },
];

export default function Header() {
  const { cartCount, updateFilters, toast } = useStore();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  function onSearch(e) {
    e.preventDefault();
    updateFilters({ query: q.trim() });
    setOpen(false);
    scrollToId("marketplace");
  }

  const searchBox = (
    <form onSubmit={onSearch} role="search" className="relative w-full">
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bone/50" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        type="search"
        placeholder="Buscar botas, cadenas, motos…"
        aria-label="Buscar productos"
        className="w-full rounded-md border border-white/10 bg-dirt-2 py-2 pl-9 pr-3 text-sm text-bone placeholder:text-bone/40 focus:border-rust focus:outline-none"
      />
    </form>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dirt/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
          <img src="/assets/img/logo-nav.png" alt="" className="h-8 w-auto" />
          <span className="font-display text-sm leading-none tracking-wide sm:text-base">
            ENDURO LIFE <span className="text-rust">COLOMBIA</span>
          </span>
        </a>

        <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Principal">
          {links.map((l) =>
            l.highlight ? (
              <a
                key={l.href}
                href={l.href}
                className="ml-1 whitespace-nowrap rounded-md bg-rust/15 px-3 py-1.5 text-sm font-semibold text-rust ring-1 ring-rust/40 hover:bg-rust hover:text-bone"
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-bone/75 hover:text-bone"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="ml-auto hidden w-64 md:block lg:hidden xl:block xl:w-64 2xl:w-80">{searchBox}</div>

        <div className="ml-auto flex items-center gap-1 md:ml-0 lg:ml-auto xl:ml-0">
          <button
            type="button"
            onClick={() => toast("El carrito es una demo: muy pronto podrás comprar aquí.")}
            className="relative rounded-md p-2 text-bone/80 hover:bg-white/5 hover:text-bone"
            aria-label={`Carrito, ${cartCount} productos`}
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-rust px-1 text-[11px] font-bold text-bone">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            onClick={() => toast("Las cuentas de usuario llegan pronto.")}
            className="hidden items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm font-semibold hover:border-bone sm:flex"
          >
            <UserIcon className="h-4 w-4" /> Ingresar
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-dirt px-4 pb-5 pt-3 lg:hidden">
          <div className="md:hidden">{searchBox}</div>
          <nav className="mt-3 flex flex-col" aria-label="Móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/5 py-3 text-base font-medium ${l.highlight ? "text-rust" : "text-bone/85"}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => toast("Las cuentas de usuario llegan pronto.")}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-white/15 py-2.5 text-sm font-semibold sm:hidden"
          >
            <UserIcon className="h-4 w-4" /> Ingresar
          </button>
        </div>
      )}
    </header>
  );
}
