# Enduro Life Colombia — sitio web

Next.js 16 (App Router) + Tailwind CSS 4, en JavaScript. Publicado en https://enduro-life-col.vercel.app (también https://enduro-life-webpage.vercel.app)

Esta versión de Next.js es nueva: antes de usar una API, leer la guía en `node_modules/next/dist/docs/` (ver `AGENTS.md`).

**Leer también `contexto/contexto.md`**: quién es el dueño, decisiones de marca, textos de la web, backlog y preguntas abiertas.

## Despliegue
- GitHub: `Pakpablo/enduro-life-col` (rama `main`).
- Vercel: proyecto `enduro-life-col` (antes `enduro-life-webpage`), equipo `pak14`. Conectado por Git: cada push a `main` publica a producción; cada push a otra rama crea una vista previa.
- El email del autor de los commits debe ser `pablo@daytraders.com` (ya configurado en este repo), si no Vercel bloquea el deploy.
- CLI: usar `--scope pak14`.

## Estructura
- `app/page.js` — página principal: arma las secciones en orden (Header, Hero, Marketplace, Comunidad, Marcas, Sobre Nosotros, Footer).
- `app/layout.js` — fuentes (Trackdrift local, Barlow) y textos para Google.
- `app/globals.css` — colores de marca (`@theme`) y utilidades (`btn-skew`, `stripes`).
- `components/` — una pieza por archivo. `StoreProvider.js` guarda carrito, filtros y avisos (todo en el navegador).
- `constants/marketplaceData.js` — **datos de ejemplo**: productos, marcas, categorías, eventos, fundadores, patrocinadores, link de WhatsApp.
- `public/assets/` — imágenes y fuente (se sirven en `/assets/...`). `public/brandbook.html` se sirve en `/brandbook`.
- `brand-source/` — originales .ai/.pdf (RGB y CMYK). No se publica (`.vercelignore`).

## Comandos
- `npm run dev` — ver la web en local mientras se edita.
- `npm run build` — comprobar que compila antes de subir.
- `npx eslint .` — revisar el código.

## Reglas
- Nunca incrustar imágenes ni fuentes en base64; guardarlas en `public/assets/`.
- Marketplace sin backend: productos y precios son de ejemplo hasta que el dueño decida otra cosa. No publicar en `main` sin su visto bueno.
- Usamos `<img>` normal, no `next/image`, para no gastar la cuota gratuita de optimización de Vercel.
- Nombres de archivo en minúsculas con guiones (`tomas-jaramillo.png`).
- Colores: clases Tailwind de marca (`bg-dirt`, `text-rust`, `text-bone`, `text-khaki`, `bg-blaze`...), definidas en `app/globals.css`. Colores del logo: naranja `#FF6D00`, rojo `#F8000D`, rojo números `#D50514`.
- Explicar los cambios en español sencillo: el dueño es principiante.

## Fuentes de los archivos de marca
- Tipografía: Drive "tipografía camisetas" (1xmAE-VnQXBG-F2mdfwe8vF6VUU8EKIuF)
- Logos: Drive "Logos" (1GQCLVJMrVtCibk1S55FpFvWr5xr8WBc5)
