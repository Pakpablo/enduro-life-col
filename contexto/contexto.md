# Contexto completo — Enduro Life Colombia (`enduro-life-col`)

Documento de contexto. Complementa el brand book (`brandbook.html`) y las reglas técnicas (`CLAUDE.md`). Vive en `contexto/` (no se publica en la web). Aquí está el por qué de las decisiones, el historial, los textos exactos de la web y el backlog.

> **Actualización 2026-10-08 (verificado en la máquina):** algunas cosas de la sección 2 ya no eran ciertas. Lo real:
> - El proyecto Vercel `enduro-life-webpage` está en el equipo **`pak14`** (no cuenta personal sin equipo) y **está conectado a Git** desde el 2026-09-30: repo `Pakpablo/enduro-life-col` (antes `enduro-life-webpage`, renombrado el 2026-10-08), rama `main`. Cada push a `main` publica solo; cada push a otra rama crea una vista previa.
> - `gh` está instalado y con sesión iniciada (cuenta `Pakpablo`). `git` y `node` también están instalados.
> - Backlog 1–3 hechos y publicados en `main`. El HTML con assets reconstruye byte a byte el original: el aspecto no cambia.

## 1. Quién es el dueño y cómo quiere trabajar
- Dueño de Enduro Life Colombia (una de sus empresas; tiene otros negocios/proyectos, no mezclar). Se llama Pablo.
- **Principiante total en programación.** Quiere *dirigir* con lenguaje normal, no escribir código, y **aprender a construir sitios web con IA** para volverse experto con el tiempo. Pide que se le explique lo que se hace mientras se hace.
- **Idioma: español siempre.** Respuestas cortas, claras, fáciles.
- **Presupuesto $0** por ahora. Dominio propio y pagos: después, y preguntar antes de gastar.
- Tiempo disponible: ~1–2 h/día.
- Quiere una **página web real, encontrable en Google** (no solo un link de app).
- Quiere ver cuántas visitas tiene la página antes de ponerla en la comunidad de WhatsApp.

## 2. Entorno técnico
- **Carpeta de trabajo:** `/root/projects/enduro-life-col` en un **VPS** Linux del dueño, usado vía **Bitvise** (SSH + SFTP).
- **Producción:** https://enduro-life-webpage.vercel.app/ — proyecto Vercel `enduro-life-webpage`, equipo `pak14`, plan gratis. Conectado a GitHub (ver actualización arriba).
- **GitHub:** https://github.com/Pakpablo/enduro-life-col
- **El VPS NO es el hosting** del sitio (Vercel lo es); es solo el lugar de trabajo. Si luego se quiere servir desde el VPS: nginx + dominio + HTTPS (certbot) — decisión aparte, preguntar.
- El conector de Vercel del chat no tiene acceso al equipo `pak14` (403); usar el CLI `vercel` con `--scope pak14`.
- Analytics: activar **Vercel Web Analytics** desde el dashboard (además hay que añadir su script a las páginas).

## 3. Historial de decisiones
1. Meta inicial: sitio gratis para Enduro Life Colombia (IG @endurolifecol), construido como un solo `index.html` en Claude.ai chat.
2. Estructura y copy en español definidos por el dueño (header, hero, sobre nosotros, piloto oficial/sponsors, fundadores, comunidad).
3. **Fuente Trackdrift**, **logos reales** (PDFs del dueño) y fotos reales (hero de Pak rodando + retrato vertical en bosque).
4. **Solo Pak Ancizar** tiene sección propia; los otros 4 fundadores solo aparecen como placas en "Nuestros orígenes".
5. **Naranja → rojo** en todo el acento de UI, porque Pak es oficial Honda (rojo Honda `#C8102E`). Los logos con franjas naranja se dejan intactos.
6. Patrocinadores: Tellez Support, Ospina Racing, 12 Clicks, Alpinestars, Pro Honda (fondo blanco), Kangru, Choho. De Honda Racing Colombia **usar solo la primera variante** (roja con bandera) de las 4 del PDF.
7. Logo principal agrandado y repetido (hero grande, marca de agua en Sobre Nosotros). Placas de los 5 pilotos añadidas.
8. **Publicado** en Vercel para revisión; el dueño quiere seguir mejorándolo.
9. Se eligió **Vercel gratis**; **dominio propio después**.
10. El chat no podía subir el archivo (3 MB) a Vercel: de ahí la migración a Claude Code + GitHub.
11. **Slogan oficial:** *La mejor vida se vive sobre dos ruedas.* Frase corta: *En dos ruedas se vive mejor.*
12. **Descripción de la comunidad:** enduro, **motocross y offroad**.
13. **Subgrupos de WhatsApp:** Anuncios, Pilotos, Cercanos, Compra/Venta. Ventas: **gratis y abierto**; cobrar por publicar se descartó por ahora.
14. Ya creó la Comunidad de WhatsApp (~81 miembros en el grupo actual). Link de invitación: **pendiente**.
15. Migración a Claude Code: carpeta en su PC → SFTP → `/root/projects/enduro-life-col`.
16. (2026-10-08) Imágenes y fuente sacadas de base64 a `assets/`; logos de Drive en `assets/brand/` y originales .ai/.pdf en `brand-source/`; creado `brandbook.html`.
17. (2026-10-08) Confirmado: Ban Ban Vega = Eduardo Vega, Don Pablo = Pablo Sáenz. La Laguna Enduro & Cross **no** es patrocinador: se quitó de la web y del brand book.

## 4. Textos actuales de la web (fuente: index.html)
- **Título SEO:** Enduro Life Colombia | Comunidad de Enduro en Colombia
- **Meta description:** Enduro Life Colombia: comunidad de enduro y todoterreno en Colombia. Eventos, contenido, piloto oficial Pablo Ancizar y grupo de WhatsApp para la comunidad. *(actualizar a "enduro, motocross y offroad")*
- **Nav:** Inicio · Sobre Nosotros · Piloto Oficial · Eventos & Comunidad · Grupo VIP WhatsApp · [Únete]
- **Hero:** etiqueta "COMUNIDAD ENDURO · COLOMBIA" · H1 "La pasión del Enduro en Colombia." · "Comunidad, eventos, contenido de análisis y la adrenalina de las pistas en un solo lugar." · botones "Síguenos en Instagram" / "Unirme al Grupo de WhatsApp"
- **Quiénes somos — "Pasión, comunidad y propósito.":** "Enduro Life Colombia es más que una marca; es el punto de encuentro para los apasionados del todoterreno en el país. Nos dedicamos a dinamizar la cultura del enduro mediante la organización de eventos, creación de contenido técnico y de análisis en redes sociales, y el desarrollo de iniciativas con impacto social y donaciones para comunidades en nuestras rutas."
  - 01 Eventos & Rutas — "Encuentros y salidas que reúnen a la comunidad enduro de todo el país."
  - 02 Contenido & Análisis — "Material técnico y de análisis para quienes viven la disciplina en serio."
  - 03 Impacto Social — "Donaciones e iniciativas con las comunidades a lo largo de nuestras rutas."
- **Piloto oficial:** "ROSTRO DE LA MARCA · PILOTO ACTIVO & EMBAJADOR · Pablo Ancizar" + "Pablo Ancizar es el pilar deportivo de Enduro Life Colombia en la actualidad. Como piloto activo de enduro, representa los valores, la técnica y la exigencia de esta disciplina en las pistas y competencias del país, llevando la bandera de nuestra comunidad y de las marcas que confían en su desempeño." + "MARCAS Y PATROCINADORES OFICIALES".
- **Nuestros orígenes — "Cinco apasionados, una comunidad.":** "Enduro Life Colombia nació de la visión compartida de cinco apasionados por el enduro que decidieron construir un espacio para la comunidad." Nombres: Pablo Ancizar (Piloto Activo), Tomás Jaramillo, Mateo Jaramillo, Eduardo Vega, Pablo Sáenz.
- **Comunidad — "¡Forma parte de la Red!":** "Contamos con una comunidad activa en WhatsApp donde compartimos información sobre eventos, parches, análisis de rutas y un espacio exclusivo de compra/venta de motos, equipamiento y accesorios de enduro." + botón WhatsApp.
- **Footer:** Instagram · WhatsApp · Sobre Nosotros · "© 2026 Enduro Life Colombia. Todos los derechos reservados."
- **Enlaces:** Instagram → https://instagram.com/endurolifecol. WhatsApp → `#` (pendiente).

## 5. Datos del negocio
- Disciplinas: **enduro, motocross y offroad**. Mercado: Colombia (español colombiano).
- Pak (Pablo Ancizar, #88) es oficial Honda. En la foto del hero su moto lleva dorsal 182 y en la vertical 88 — no "corregir".
- Placas de fundadores: Pak Ancizar (Pablo Ancizar) 88, Don Pablo (Pablo Sáenz) 51, Tomás Jaramillo 65, Mateo Jaramillo 55, Ban Ban Vega (Eduardo Vega) 5.
- Calendario Fedemoto 2.º semestre (Enduro): 3–4 oct Quindío (4.ª válida), 7–8 nov Tolima (5.ª), 5–6 dic (6.ª y 7.ª según el póster).
- Quiere **vender merch** y **monetizar** la comunidad sin frenar su crecimiento.

## 6. Backlog priorizado
**Ahora (infra)**
1. ~~Repo en GitHub `enduro-life-col` y push a `main`~~ — hecho (renombrado desde `enduro-life-webpage`).
2. ~~Conectar Vercel al repo~~ — ya estaba conectado.
3. ~~Sacar base64 a `assets/`~~ — hecho y publicado, verificado idéntico.
4. Activar Vercel Analytics.

**Después (contenido/SEO)**
5. Link real de WhatsApp en todos los botones (cuando exista; por ahora placeholder `#`).
6. Copy a "enduro, motocross y offroad"; slogan oficial en el cierre; meta description actualizada.
7. Favicon (icono E), imagen Open Graph, `sitemap.xml`, `robots.txt`, Google Search Console (explicar paso a paso).
8. Revisión móvil.

**Expansión**
9. ~~Brand book visual (`brandbook.html`)~~ — hecho; PDF opcional pendiente.
10. Calendario de carreras (datos en JSON, pasado/próximo automático; sumar 1.er semestre y eventos propios).
11. Tienda/merch (3–5 productos; empezar con pedido por WhatsApp, sin pasarela de pago).
12. Sección compra/venta alimentada desde la comunidad.
13. Páginas de patrocinadores / paquetes para marcas.
14. Dominio propio (cuando el dueño decida; preguntar costo).

## 7. Preguntas abiertas (preguntar, no asumir)
- ¿Link de invitación de la Comunidad de WhatsApp? (Aún no existe; los botones quedan con placeholder `#`.)
- ¿Cuándo quiere dominio propio y con qué nombre?
- ¿Tienda con cobro en línea o solo pedidos por WhatsApp al inicio?

## 8. Forma de trabajar en cada tarea
1. Decir en una frase qué se va a hacer y por qué.
2. Hacer el cambio; si es visual, verificarlo antes de declararlo listo.
3. Commit con mensaje claro en español; push solo si el dueño ya lo autorizó o es parte del flujo Vercel acordado.
4. Cerrar con 1–2 frases: qué cambió y cuál es el siguiente paso natural.
