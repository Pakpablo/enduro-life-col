"use client";

import { useEffect, useRef, useState } from "react";
import { useStore } from "./StoreProvider";
import { CloseIcon, StoreIcon } from "./icons";

const benefits = [
  { title: "Comunidad real", text: "Riders de enduro, motocross y offroad que compran lo que usan en la ruta." },
  { title: "Vitrina de marca", text: "Tu tienda con logo, catálogo y la etiqueta “Vendido por” en cada producto." },
  { title: "Activaciones", text: "Presencia en eventos, rodadas y contenido con nuestro piloto oficial." },
];

const inputClass =
  "w-full rounded-md border border-white/10 bg-dirt px-3 py-2.5 text-sm text-bone placeholder:text-bone/40 focus:border-rust focus:outline-none";

export default function BrandsCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section id="marcas" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-rust-dark via-dirt-2 to-dirt p-8 sm:p-12">
        <div className="stripes absolute right-0 top-0 h-full w-3 opacity-80" aria-hidden="true" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-display text-sm tracking-wider text-blaze">MARCAS ALIADAS</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Vende en Enduro Life</h2>
            <p className="mt-4 max-w-xl text-bone/75">
              ¿Tienes una marca o tienda de enduro? Lleva tus productos a la comunidad que vive la disciplina todos los
              fines de semana.
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-skew mt-8 bg-bone text-dirt hover:bg-white"
            >
              <span className="flex items-center gap-2">
                <StoreIcon className="h-5 w-5" /> Postular mi tienda
              </span>
            </button>
          </div>
          <ul className="grid gap-3">
            {benefits.map((b, i) => (
              <li key={b.title} className="flex gap-4 rounded-lg bg-dirt/60 p-4">
                <span className="font-display text-2xl text-rust">0{i + 1}</span>
                <div>
                  <p className="font-semibold">{b.title}</p>
                  <p className="text-sm text-bone/65">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open && <ApplyModal onClose={() => setOpen(false)} />}
    </section>
  );
}

function ApplyModal({ onClose }) {
  const { toast } = useStore();
  const firstField = useRef(null);

  useEffect(() => {
    firstField.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function onSubmit(e) {
    e.preventDefault();
    // Demo: todavía no se envía a ningún lado.
    toast("¡Gracias! Recibimos tu postulación (demo). Te contactaremos pronto.");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-xl border border-white/10 bg-dirt-2 p-6 sm:rounded-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="apply-title" className="font-display text-2xl">Postula tu tienda</h3>
            <p className="mt-1 text-sm text-bone/60">Déjanos tus datos y te escribimos.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="rounded-md p-1 hover:bg-white/5">
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <Field label="Nombre de la marca o tienda">
            <input ref={firstField} required className={inputClass} placeholder="Ej: Moto Repuestos Andes" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Persona de contacto">
              <input required className={inputClass} placeholder="Nombre y apellido" />
            </Field>
            <Field label="WhatsApp">
              <input required type="tel" className={inputClass} placeholder="+57 300 000 0000" />
            </Field>
          </div>
          <Field label="Correo">
            <input required type="email" className={inputClass} placeholder="tienda@correo.com" />
          </Field>
          <Field label="¿Qué vendes?">
            <select required defaultValue="" className={inputClass}>
              <option value="" disabled>Elige una categoría</option>
              <option>Indumentaria</option>
              <option>Protección</option>
              <option>Repuestos</option>
              <option>Motos</option>
              <option>Varias categorías</option>
            </select>
          </Field>
          <Field label="Instagram o sitio web (opcional)">
            <input className={inputClass} placeholder="@tutienda" />
          </Field>
          <button type="submit" className="btn-skew mt-2 bg-rust text-bone hover:bg-rust-dark">
            <span>Enviar postulación</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-bone/80">
      {label}
      {children}
    </label>
  );
}
