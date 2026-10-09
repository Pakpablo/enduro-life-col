import { categories, INSTAGRAM_URL, WHATSAPP_URL } from "@/constants/marketplaceData";

const columns = [
  {
    title: "Marketplace",
    links: [
      ...categories.map((c) => ({ label: c.label, href: "#marketplace" })),
      { label: "Usados de la comunidad", href: "#marketplace" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { label: "Grupo de WhatsApp", href: WHATSAPP_URL },
      { label: "Próximos eventos", href: "#comunidad" },
      { label: "Términos de la comunidad", href: "#comunidad" },
    ],
  },
  {
    title: "Enduro Life",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Vende con nosotros", href: "#marcas" },
      { label: "Brand book", href: "/brandbook" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="stripes h-1" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <img src="/assets/img/logo-badge.png" alt="Enduro Life Colombia" className="w-40" />
          <p className="mt-4 font-display text-lg leading-snug">En dos ruedas se vive mejor.</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-bone/70 hover:text-bone"
          >
            Instagram · @endurolifecol
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-khaki">{col.title}</p>
            <ul className="mt-4 grid gap-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-bone/65 hover:text-bone">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-bone/45 sm:px-6">
          © 2026 Enduro Life Colombia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
