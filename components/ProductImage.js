// Imagen provisional dibujada en SVG, una por categoría.
// Cuando haya fotos reales de los productos, se reemplaza por <img>.

const art = {
  indumentaria: (
    // Jersey
    <path d="M70 40 52 48 40 76l16 8 8-14v58h72V70l8 14 16-8-12-28-18-8c-4 10-14 16-30 16s-26-6-30-16Z" />
  ),
  proteccion: (
    // Casco
    <>
      <path d="M44 112c0-40 26-68 62-68 30 0 50 18 54 44l12 6-6 18H120l-10 14H58c-8 0-14-6-14-14Z" />
      <path d="M118 84h40l-4 14h-36z" opacity=".35" />
    </>
  ),
  repuestos: (
    // Piñón
    <>
      <path d="M100 40l8 14 16-6 2 16 16 2-6 16 14 8-14 8 6 16-16 2-2 16-16-6-8 14-8-14-16 6-2-16-16-2 6-16-14-8 14-8-6-16 16-2 2-16 16 6Z" />
      <circle cx="100" cy="94" r="16" opacity=".35" />
    </>
  ),
  motos: (
    // Moto
    <>
      <circle cx="56" cy="118" r="22" fill="none" strokeWidth="9" />
      <circle cx="146" cy="118" r="22" fill="none" strokeWidth="9" />
      <path d="M56 118 82 82h34l14-20h18l-8 14 16 42h-8l-14-30-20 32H90L76 96Z" />
    </>
  ),
};

export default function ProductImage({ category, tone, brand }) {
  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
      style={{ background: `radial-gradient(circle at 30% 20%, ${tone}55, #1d1a14 70%)` }}
    >
      <svg viewBox="0 0 200 160" className="h-3/4 w-3/4" fill="#ede7dd" stroke="#ede7dd" aria-hidden="true">
        <g opacity=".9">{art[category]}</g>
      </svg>
      <span className="absolute bottom-2 right-3 font-display text-[10px] uppercase tracking-widest text-bone/30">
        {brand}
      </span>
    </div>
  );
}
