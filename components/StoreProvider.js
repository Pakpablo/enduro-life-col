"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

// Estado compartido de la tienda: carrito, filtros y avisos (toasts).
// Todo vive en el navegador; no hay backend todavía.

const StoreContext = createContext(null);

export const emptyFilters = {
  query: "",
  category: "",
  brand: "",
  condition: "",
  sort: "destacados",
};

export function StoreProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [filters, setFilters] = useState(emptyFilters);
  const [toasts, setToasts] = useState([]);
  const nextId = useRef(0);

  const toast = useCallback((message) => {
    const id = nextId.current++;
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  }, []);

  const addToCart = useCallback(
    (product) => {
      setCartCount((c) => c + 1);
      toast(`“${product.title}” agregado al carrito (demo)`);
    },
    [toast]
  );

  const updateFilters = useCallback((patch) => {
    setFilters((f) => ({ ...f, ...patch }));
  }, []);

  const resetFilters = useCallback(() => setFilters(emptyFilters), []);

  return (
    <StoreContext.Provider
      value={{ cartCount, addToCart, filters, updateFilters, resetFilters, toast }}
    >
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex flex-col items-center gap-2 px-4"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto max-w-md rounded-md border border-white/10 bg-dirt-3 px-4 py-3 text-sm shadow-xl shadow-black/50 animate-[toast-in_.2s_ease-out]"
          >
            {t.message}
          </div>
        ))}
      </div>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore debe usarse dentro de <StoreProvider>");
  return ctx;
}

export function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
