import { communityGroups, INSTAGRAM_URL, upcomingEvents, WHATSAPP_URL } from "@/constants/marketplaceData";
import { InstagramIcon, MapIcon, WhatsAppIcon } from "./icons";

export default function Community() {
  return (
    <section id="comunidad" className="relative overflow-hidden border-y border-white/10 bg-dirt-2">
      <img
        src="/assets/img/logo-badge.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 w-[34rem] max-w-none -translate-y-1/2 opacity-[0.04]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm tracking-wider text-rust">COMUNIDAD</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">¡Forma parte de la Red!</h2>
          <p className="mt-4 max-w-xl text-bone/70">
            Contamos con una comunidad activa en WhatsApp donde compartimos información sobre eventos, parches, análisis
            de rutas y un espacio exclusivo de compra/venta de motos, equipamiento y accesorios de enduro, motocross y
            offroad.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {communityGroups.map((g) => (
              <div key={g.name} className="rounded-lg border border-white/10 bg-dirt p-4">
                <p className="font-semibold">{g.name}</p>
                <p className="mt-1 text-sm text-bone/60">{g.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP_URL} className="btn-skew bg-[#25d366] text-dirt hover:bg-[#1fb757]">
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="h-5 w-5" /> Unirme al grupo
              </span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-skew border-2 border-bone text-bone hover:bg-bone hover:text-dirt"
            >
              <span className="flex items-center gap-2">
                <InstagramIcon className="h-5 w-5" /> @endurolifecol
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-dirt p-6">
          <div className="flex items-center gap-2 text-khaki">
            <MapIcon className="h-5 w-5" />
            <p className="text-xs font-semibold uppercase tracking-widest">Próximas fechas · Enduro Fedemoto</p>
          </div>
          <ul className="mt-5 divide-y divide-white/10">
            {upcomingEvents.map((e) => (
              <li key={e.name} className="flex gap-5 py-4">
                <span className="w-20 shrink-0 font-display text-lg leading-tight text-rust">{e.date}</span>
                <div>
                  <p className="font-semibold">{e.name}</p>
                  <p className="text-sm text-bone/60">{e.place}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-white/10 pt-4 font-display text-xl leading-snug">
            La mejor vida se vive <span className="text-rust">sobre dos ruedas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
