"use client";

import { useState } from "react";
import { founders, pillars, sponsors } from "@/constants/marketplaceData";

const tabs = [
  { id: "quienes", label: "Quiénes somos" },
  { id: "piloto", label: "Piloto oficial" },
  { id: "origenes", label: "Nuestros orígenes" },
];

export default function About() {
  const [tab, setTab] = useState("quienes");

  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="font-display text-sm tracking-wider text-rust">SOBRE NOSOTROS & HISTORIA</p>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl">Pasión, comunidad y propósito.</h2>

      <div role="tablist" aria-label="Sobre nosotros" className="mt-8 flex gap-1 overflow-x-auto border-b border-white/10 [scrollbar-width:none]">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`-mb-px shrink-0 border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${
              tab === t.id ? "border-rust text-bone" : "border-transparent text-bone/50 hover:text-bone"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="pt-10">
        {tab === "quienes" && <WhoWeAre />}
        {tab === "piloto" && <Rider />}
        {tab === "origenes" && <Origins />}
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <div>
        <p className="max-w-2xl text-lg text-bone/75">
          Enduro Life Colombia es más que una marca; es el punto de encuentro para los apasionados del enduro, el
          motocross y el offroad en el país. Nos dedicamos a dinamizar la cultura del enduro mediante la organización de
          eventos, creación de contenido técnico y de análisis en redes sociales, y el desarrollo de iniciativas con
          impacto social y donaciones para comunidades en nuestras rutas.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.num} className="rounded-lg border border-white/10 bg-dirt-2 p-5">
              <p className="font-display text-2xl text-rust">{p.num}</p>
              <p className="mt-2 font-display text-lg">{p.title}</p>
              <p className="mt-2 text-sm text-bone/65">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/img/logo-badge.png" alt="Enduro Life Colombia" className="mx-auto w-64 lg:w-80" />
    </div>
  );
}

function Rider() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-lg bg-cover bg-top"
        style={{ backgroundImage: "url(/assets/img/rider-pak-ancizar.jpg)" }}
        role="img"
        aria-label="Pablo Ancizar en el bosque con su moto"
      >
        <img
          src="/assets/img/riders/pak-ancizar.png"
          alt="Pak Ancizar 88"
          className="absolute bottom-4 right-4 w-28 drop-shadow-xl sm:w-36"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-khaki">Rostro de la marca · Piloto activo & embajador</p>
        <h3 className="mt-2 font-display text-4xl">Pablo Ancizar</h3>
        <p className="mt-4 text-bone/75">
          Pablo Ancizar es el pilar deportivo de Enduro Life Colombia en la actualidad. Como piloto activo de enduro,
          representa los valores, la técnica y la exigencia de esta disciplina en las pistas y competencias del país,
          llevando la bandera de nuestra comunidad y de las marcas que confían en su desempeño.
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-bone/50">Marcas y patrocinadores oficiales</p>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className={`flex h-20 items-center justify-center rounded-md border border-white/10 p-3 ${s.white ? "bg-white" : "bg-dirt-2"}`}
            >
              <img src={s.img} alt={s.name} className="max-h-full w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Origins() {
  return (
    <div>
      <h3 className="font-display text-2xl sm:text-3xl">Cinco apasionados, una comunidad.</h3>
      <p className="mt-3 max-w-2xl text-bone/70">
        Enduro Life Colombia nació de la visión compartida de cinco apasionados por el enduro que decidieron construir un
        espacio para la comunidad.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {founders.map((f) => (
          <div key={f.name} className="text-center">
            <img src={f.img} alt={f.name} className="mx-auto h-36 w-auto object-contain sm:h-44" />
            <p className="mt-3 font-semibold">{f.name}</p>
            {f.role && <p className="text-sm text-khaki">{f.role}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
