// Datos de ejemplo (dummy) del marketplace y la comunidad.
// Todavía no hay backend: cuando exista, estos datos vendrán de una base de datos.

export const USD_RATE = 4000; // COP por 1 USD (aproximado, solo para mostrar)

export const WHATSAPP_URL = "#"; // Pendiente: link de invitación de la Comunidad
export const INSTAGRAM_URL = "https://instagram.com/endurolifecol";

export const categories = [
  { id: "indumentaria", label: "Indumentaria" },
  { id: "proteccion", label: "Protección" },
  { id: "repuestos", label: "Repuestos" },
  { id: "motos", label: "Motos" },
];

export const conditions = [
  { id: "nuevo", label: "Nuevo" },
  { id: "usado", label: "Usado" },
];

export const brands = [
  "Alpinestars",
  "Choho",
  "D'Gil",
  "Kangru",
  "12 Clicks",
  "Honda",
  "Mapaná",
  "Comunidad Enduro Life",
];

export const sortOptions = [
  { id: "destacados", label: "Destacados" },
  { id: "precio-asc", label: "Precio: menor a mayor" },
  { id: "precio-desc", label: "Precio: mayor a menor" },
  { id: "calificacion", label: "Mejor calificados" },
];

export const products = [
  {
    id: "p01",
    title: "Botas Tech 7 Enduro",
    brand: "Alpinestars",
    category: "proteccion",
    condition: "nuevo",
    price: 2890000,
    oldPrice: 3290000,
    rating: 4.9,
    reviews: 128,
    stock: 6,
    tone: "#c8102e",
  },
  {
    id: "p02",
    title: "Chaqueta Venture XT Impermeable",
    brand: "Alpinestars",
    category: "indumentaria",
    condition: "nuevo",
    price: 1450000,
    rating: 4.7,
    reviews: 64,
    stock: 12,
    tone: "#8a9a5b",
  },
  {
    id: "p03",
    title: "Kit Cadena + Piñones 520 O-Ring",
    brand: "Choho",
    category: "repuestos",
    condition: "nuevo",
    price: 389000,
    oldPrice: 429000,
    rating: 4.8,
    reviews: 211,
    stock: 30,
    tone: "#ff6d00",
  },
  {
    id: "p04",
    title: "Forro de Asiento Antideslizante CRF",
    brand: "D'Gil",
    category: "repuestos",
    condition: "nuevo",
    price: 185000,
    rating: 4.6,
    reviews: 47,
    stock: 18,
    tone: "#4a4a45",
  },
  {
    id: "p05",
    title: "Protector de Manos Enduro Pro",
    brand: "Kangru",
    category: "proteccion",
    condition: "nuevo",
    price: 249000,
    rating: 4.5,
    reviews: 39,
    stock: 3,
    tone: "#c8102e",
  },
  {
    id: "p06",
    title: "Kit Suspensión Ajuste 12 Clicks",
    brand: "12 Clicks",
    category: "repuestos",
    condition: "nuevo",
    price: 1980000,
    rating: 5.0,
    reviews: 22,
    stock: 4,
    tone: "#ff6d00",
  },
  {
    id: "p07",
    title: "Honda CRF300L Rally",
    brand: "Honda",
    category: "motos",
    condition: "nuevo",
    price: 27990000,
    rating: 4.9,
    reviews: 15,
    stock: 2,
    tone: "#c8102e",
  },
  {
    id: "p08",
    title: "Jersey Técnico Ruta Andina",
    brand: "Mapaná",
    category: "indumentaria",
    condition: "nuevo",
    price: 159000,
    oldPrice: 189000,
    rating: 4.4,
    reviews: 58,
    stock: 25,
    tone: "#8a9a5b",
  },
  {
    id: "p09",
    title: "Honda CRF250F 2022 · 120 h",
    brand: "Comunidad Enduro Life",
    category: "motos",
    condition: "usado",
    price: 16500000,
    rating: 4.6,
    reviews: 3,
    stock: 1,
    tone: "#4a4a45",
  },
  {
    id: "p10",
    title: "Casco Off-Road Talla M",
    brand: "Comunidad Enduro Life",
    category: "proteccion",
    condition: "usado",
    price: 420000,
    rating: 4.3,
    reviews: 2,
    stock: 1,
    tone: "#ff6d00",
  },
  {
    id: "p11",
    title: "Guantes Radar Ventilados",
    brand: "Alpinestars",
    category: "indumentaria",
    condition: "nuevo",
    price: 139000,
    rating: 4.7,
    reviews: 93,
    stock: 0,
    tone: "#c8102e",
  },
  {
    id: "p12",
    title: "Pantalón Enduro Usado Talla 32",
    brand: "Comunidad Enduro Life",
    category: "indumentaria",
    condition: "usado",
    price: 180000,
    rating: 4.2,
    reviews: 1,
    stock: 1,
    tone: "#8a9a5b",
  },
];

// ===== Comunidad =====
export const communityGroups = [
  { name: "Anuncios", text: "Noticias oficiales, eventos y novedades de Enduro Life." },
  { name: "Pilotos", text: "Técnica, preparación y análisis de rutas y carreras." },
  { name: "Cercanos", text: "Parches y salidas con riders de tu zona." },
  { name: "Compra/Venta", text: "Motos, equipo y accesorios. Publicar es gratis." },
];

export const upcomingEvents = [
  { date: "7–8 NOV", place: "Tolima", name: "5.ª válida Campeonato Nacional de Enduro" },
  { date: "5–6 DIC", place: "Por confirmar", name: "6.ª y 7.ª válida Campeonato Nacional de Enduro" },
];

// ===== Sobre nosotros (contenido del sitio original) =====
export const pillars = [
  { num: "01", title: "Eventos & Rutas", text: "Encuentros y salidas que reúnen a la comunidad de enduro, motocross y offroad de todo el país." },
  { num: "02", title: "Contenido & Análisis", text: "Material técnico y de análisis para quienes viven la disciplina en serio." },
  { num: "03", title: "Impacto Social", text: "Donaciones e iniciativas con las comunidades a lo largo de nuestras rutas." },
];

export const founders = [
  { name: "Pablo Ancizar", role: "Piloto Activo", img: "/assets/img/riders/pak-ancizar.png" },
  { name: "Tomás Jaramillo", img: "/assets/img/riders/tomas-jaramillo.png" },
  { name: "Mateo Jaramillo", img: "/assets/img/riders/mateo-jaramillo.png" },
  { name: "Eduardo Vega", img: "/assets/img/riders/eduardo-vega.png" },
  { name: "Pablo Sáenz", img: "/assets/img/riders/pablo-saenz.png" },
];

export const sponsors = [
  { name: "Honda Racing Colombia", img: "/assets/img/sponsors/honda-racing.png" },
  { name: "Honda Motos Colombia", img: "/assets/img/sponsors/honda-motos.png" },
  { name: "Honda Dream Colombia", img: "/assets/img/sponsors/honda-dream.png", white: true },
  { name: "Alpinestars Colombia", img: "/assets/img/sponsors/alpinestars.png" },
  { name: "Stanley Colombia", img: "/assets/img/sponsors/stanley.png" },
  { name: "Kangru Accesorios", img: "/assets/img/sponsors/kangru.png", white: true },
  { name: "D'Gil Forros de Asientos", img: "/assets/img/sponsors/dgil.png" },
  { name: "Choho Cadenas", img: "/assets/img/sponsors/choho.png", white: true },
  { name: "Peak Performance", img: "/assets/img/sponsors/peak-performance.png" },
  { name: "Mapaná", img: "/assets/img/sponsors/mapana.png" },
  { name: "Tellez Support", img: "/assets/img/sponsors/tellez-support.png" },
  { name: "Ospina Racing", img: "/assets/img/sponsors/ospina-racing.png" },
  { name: "12 Clicks Performance System", img: "/assets/img/sponsors/12-clicks.png", white: true },
];
