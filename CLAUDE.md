# Enduro Life Colombia — sitio web

Sitio estático (HTML + CSS, sin build). Publicado en https://enduro-life-webpage.vercel.app

**Leer también `contexto/contexto.md`**: quién es el dueño, decisiones de marca, textos de la web, backlog y preguntas abiertas.

## Despliegue
- GitHub: `Pakpablo/enduro-life-col` (rama `main`).
- Vercel: proyecto `enduro-life-webpage`, equipo `pak14`. Conectado por Git: cada push a `main` publica a producción; cada push a otra rama crea una vista previa.
- El email del autor de los commits debe ser `pablo@daytraders.com` (ya configurado en este repo), si no Vercel bloquea el deploy.
- CLI: usar `--scope pak14`.

## Estructura
- `index.html` — página principal.
- `brandbook.html` — manual de marca (`/brandbook`).
- `assets/fonts/` — Trackdrift (títulos y números).
- `assets/img/` — imágenes que usa la web (fotos, logos del sitio, placas de pilotos, patrocinadores).
- `assets/brand/logos/` — PNG oficiales de Drive (logo Enduro Life, isotipos, placas de números).
- `brand-source/` — originales .ai/.pdf (RGB y CMYK). Excluido del deploy por `.vercelignore`.

## Reglas
- Nunca incrustar imágenes ni fuentes en base64; guardarlas en `assets/` y usar rutas relativas.
- Nombres de archivo en minúsculas con guiones (`tomas-jaramillo.png`).
- Colores: variables CSS en `:root` de cada página (`--dirt-black`, `--rust`, `--bone`, `--khaki`...). Colores del logo: naranja `#FF6D00`, rojo `#F8000D`, rojo números `#D50514`.
- Explicar los cambios en español sencillo: el dueño es principiante.

## Fuentes de los archivos de marca
- Tipografía: Drive "tipografía camisetas" (1xmAE-VnQXBG-F2mdfwe8vF6VUU8EKIuF)
- Logos: Drive "Logos" (1GQCLVJMrVtCibk1S55FpFvWr5xr8WBc5)
