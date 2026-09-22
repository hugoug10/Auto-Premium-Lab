# Auto Premium Lab — Web

Web de captación de clientes para un negocio independiente de automoción que
cubre mecánica, carrocería, iluminación y personalización. Construida con
**Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

Concepto: *"De la mecánica a la personalización: todo lo que tu coche
necesite, en un mismo sitio."* Si un cliente no encuentra su caso en la
lista de servicios, la web le invita a consultarlo igualmente (sección
"¿Tienes otro problema o proyecto?" y formulario abierto de contacto).

## Puesta en marcha

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Estructura — web multipágina

Cada apartado principal es una ruta propia (no anclas en una sola página):

| Ruta              | Página                          | Contenido                                   |
|-------------------|----------------------------------|----------------------------------------------|
| `/`               | `app/page.tsx`                  | Home: Hero + resumen de cada sección + enlaces |
| `/servicios`      | `app/servicios/page.tsx`        | Las 4 categorías completas + "otro proyecto"  |
| `/trabajos`       | `app/trabajos/page.tsx`         | Galería completa con filtros                  |
| `/sobre-nosotros` | `app/sobre-nosotros/page.tsx`   | Historia del negocio                          |
| `/contacto`       | `app/contacto/page.tsx`         | Formulario + WhatsApp + llamada + horario     |
| `/logo`           | `app/logo/page.tsx`             | Kit de marca (fuera del menú principal)       |

El Home no repite el contenido completo de cada apartado: muestra una
versión resumida ("teaser") con un botón "Ver todo/Conócenos mejor" que
lleva a la subpágina correspondiente. Así se evita duplicar contenido y
cada página tiene su propio `<title>`/`<meta description>` para SEO.

Los CTA "Consultar este servicio" (en `/servicios`) enlazan a
`/contacto?necesidad=Mecánica` (por ejemplo) y el formulario de
`/contacto` rellena automáticamente el campo "¿Qué necesitas?" leyendo ese
parámetro — así el visitante no tiene que volver a escribir lo que ya dijo
que le interesaba.

```
app/
  layout.tsx              Metadata SEO, JSON-LD (AutoRepair), fuentes, Header/Footer/Dock
  page.tsx                 Home
  servicios/page.tsx        Página de servicios
  trabajos/page.tsx         Página de galería/trabajos
  sobre-nosotros/page.tsx   Página "sobre nosotros"
  contacto/page.tsx         Página de presupuesto/contacto
  logo/page.tsx              Kit de marca
  icon.svg                   Favicon (convención de Next.js)
  globals.css               Tokens de diseño (Tailwind v4 @theme), utilidades visuales
  sitemap.ts, robots.ts

components/
  layout/    Header (nav + menú móvil, resalta la página activa), Footer,
             FloatingDock ("islas dinámicas": WhatsApp/llamada globales en toda la web)
  sections/  Hero, ServiceCategories, Gallery, About, SocialProof, ContactSection
             (versión completa, una por subpágina) +
             ServicesTeaser, GalleryTeaser, AboutTeaser, ContactCTA
             (versiones resumidas para el Home y cierre de cada subpágina)
  ui/        Button, Container, SectionHeading, Reveal (scroll animations),
             Badge, VisualPlaceholder, SocialIcons
  brand/     LogoMark (el logo, como componente vectorial)

lib/
  site-config.ts      Toda la configuración del negocio: contacto, horario, redes,
                       navegación, servicios y contenido de la galería.
                       Editar aquí, no en los componentes.
  utils.ts

public/brand/          Logo en SVG descargable (ver punto 7)
marketing/instagram/    Material de marketing para redes (ver punto 8)
```

## 1. Placeholders pendientes de rellenar

Todo lo marcado entre `[CORCHETES]` vive en **`lib/site-config.ts`** (un único
archivo, para no tener que buscar por todo el proyecto):

- Teléfono (`phoneDisplay`, `phoneHref`) y WhatsApp (`whatsappNumber`)
- Email, dirección, ciudad, provincia, código postal, zona de trabajo
- Enlace a Google Maps y a Google Business Profile
- Horario de apertura
- Instagram, TikTok, Facebook (usuario y URL)
- `siteUrl` (dominio real, para metadata/SEO/sitemap — ahora mismo es un
  dominio de ejemplo válido para que el build no falle)

Además:

- `app/favicon.ico` sigue siendo el de Next.js — sustituir por el logo real.
- El nombre e icono de marca en `Header`/`Footer` usan un icono de llave
  inglesa (`lucide-react`) como logo provisional.

## 2. Fotografías reales vs. imágenes conceptuales

Como todavía no hay banco de fotos propio, **todas las imágenes de la web
son sustitutos visuales generados con CSS** (`components/ui/VisualPlaceholder.tsx`):
un degradado de marca + patrón de puntos + icono, nunca una foto falsa
presentada como trabajo real.

En la galería (`components/sections/Gallery.tsx`, datos en
`galleryItems` dentro de `lib/site-config.ts`) cada elemento tiene un
campo `origin`:

- `"concept"` → se muestra con la etiqueta **"Concepto IA"**. Es lo único
  que hay ahora mismo.
- `"real"` → se mostrará con la etiqueta **"Trabajo real"**. Cambiar a
  este valor solo cuando exista una fotografía real del trabajo, con
  permiso del cliente si sale su matrícula/cara.

**Cuando haya fotos reales:** sustituir `<VisualPlaceholder ... />` por
`<Image src="/trabajos/xxx.jpg" fill className="object-cover" alt="..." />`
(componente `next/image`, ya optimizado) dentro de `Gallery.tsx`, `Hero.tsx`
y `About.tsx`. El layout no cambia porque ambos ocupan el 100% del
contenedor padre.

### Prompts sugeridos para imágenes de IA (ambientación, no trabajos reales)

Pensados para Midjourney / DALL·E / Firefly. Mantener siempre coherencia de
paleta: negro grafito, un acento naranja cálido y un acento cian frío,
fotografía realista de automoción, nada de renders "de plástico".

- **Hero / portada:** *"Professional automotive workshop at night, modern
  dark car illuminated by warm orange work light and cool cyan ambient
  light, cinematic photography, shallow depth of field, premium
  editorial style, ultra realistic, 35mm lens"*
- **Mecánica / motor:** *"Close-up of a modern car engine bay, clean and
  well maintained, mechanic's hands working with a wrench, dramatic side
  lighting, orange and dark tones, professional automotive photography"*
- **Diagnóstico:** *"Mechanic using a diagnostic scanner on a car dashboard,
  screen glowing, dark modern workshop background, realistic photography,
  shallow depth of field"*
- **Frenos / cajas de cambio:** *"Detail shot of a car brake disc and
  caliper, clean metallic textures, dramatic studio lighting, dark
  background, automotive product photography"*
- **Iluminación ambiental:** *"Car interior at night with ambient LED
  lighting strips in cyan and orange tones, dashboard and door panels
  glowing, premium automotive interior photography"*
- **Faros personalizados:** *"Close-up of a modern car headlight with
  custom LED design, night shot, reflections, dramatic lighting, high-end
  automotive photography"*
- **Personalización / detalles:** *"Detail of custom car badge and license
  plate area, clean modern design, soft studio lighting, minimal
  background, automotive photography"*
- **Herramientas / taller:** *"Organized professional mechanic tools on a
  workbench, wrenches and diagnostic equipment, dark moody lighting with
  orange accent, editorial automotive photography"*
- **Antes / después (carrocería):** *"Split composition of a car body
  panel, left side dull and scratched, right side polished and restored,
  studio lighting, realistic photography"*

Reglas al usarlas (coherentes con lo pedido):

1. Nunca presentar una imagen generada como un trabajo entregado real.
2. Marcar siempre como "Concepto IA" en la interfaz (ya implementado).
3. En cuanto exista una foto real equivalente, sustituirla y pasar el
   `origin` a `"real"`.

## 3. Formulario de contacto — cómo funciona ahora

No hay backend todavía. Al enviar el formulario (`ContactSection.tsx`), los
datos (nombre, teléfono, vehículo, necesidad, mensaje) se formatean como
texto y se abre WhatsApp (`wa.me`) con el mensaje ya escrito — el negocio
recibe la consulta en el mismo canal que ya usa. La foto adjunta no se
envía automáticamente (los enlaces `wa.me` no soportan adjuntos): se le
pide al usuario que la mande dentro de la propia conversación de WhatsApp.

**Siguiente paso natural** cuando se quiera un histórico/email además de
WhatsApp: conectar el `onSubmit` a un servicio como Resend, Formspree o un
endpoint propio (`app/api/contacto/route.ts`) que sí pueda procesar
adjuntos y guardar el lead.

## 4. Funcionalidades preparadas para el futuro

La arquitectura ya está pensada para añadir sin rehacer nada:

- **Testimonios / reseñas de Google:** nueva sección o componente en
  `components/sections/`, reutilizando `SectionHeading` y `Reveal`.
- **Blog:** añadir `app/blog/[slug]/page.tsx` (Next.js App Router).
- **Sistema de citas/reservas:** nuevo CTA en `ContactSection` o página
  dedicada `app/reservar/`.
- **Nuevos servicios:** añadir entradas a `serviceCategories` en
  `lib/site-config.ts` — el grid se genera automáticamente.
- **Más trabajos en galería:** añadir objetos a `galleryItems`.
- **Promociones:** franja destacada reutilizando el patrón de la tarjeta
  "¿Tienes otro problema o proyecto?" en `ServiceCategories.tsx`.

## 5. SEO local

- Metadata, Open Graph y `robots`/`sitemap` ya generados desde
  `lib/site-config.ts` (`app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`).
- JSON-LD tipo `AutoRepair` (schema.org) en `app/layout.tsx`, con
  dirección, teléfono, zona de trabajo y redes — se completa solo al
  rellenar `lib/site-config.ts`.
- Textos escritos pensando en búsquedas como "taller mecánico",
  "cambio de aceite", "embragues", "personalización de coches",
  "iluminación ambiental", etc., sin repetición forzada de keywords.
- Pendiente cuando exista: dar de alta el negocio en Google Business
  Profile y enlazarlo (`googleBusinessUrl` en `site-config.ts`).

## 6. Identidad visual provisional

- **Color:** negro grafito (`--color-ink`) + acento "ignition orange"
  (`--color-accent`, energía mecánica/CTA) + acento "ambient cyan"
  (`--color-accent-2`, iluminación/personalización). Tokens en
  `app/globals.css`.
- **Tipografía:** Sora (`--font-display`, títulos) + Inter (`--font-body`,
  texto). Cargadas vía `next/font/google` en `app/layout.tsx`.
- **Logo:** monograma "A" vectorial (`components/brand/LogoMark.tsx`),
  ver punto 7.

Todo esto es intencionadamente fácil de reemplazar: cambiar los valores en
`:root` de `globals.css` (color) o el import de fuente en `layout.tsx`
(tipografía) actualiza toda la web.

## 7. Logo y kit de marca

El logo es un componente vectorial real (no un icono genérico ni una
imagen), pensado para poder evolucionar sin rehacer la identidad:

- `components/brand/LogoMark.tsx` — el símbolo, como componente React.
  `variant="badge"` (insignia con degradado, uso por defecto) o
  `variant="mono"` (un solo color, vía `currentColor`, para fondos
  claros/oscuros/foto). Se usa en `Header.tsx` y `Footer.tsx`.
- `app/icon.svg` — favicon (convención nativa de Next.js: se sirve solo,
  no hace falta enlazarlo a mano).
- `public/brand/` — versiones descargables en SVG (insignia en color,
  símbolo mono blanco, símbolo mono oscuro), listas para redes sociales,
  rótulos, etc.
- **`/logo`** — página con la guía de marca completa: versiones del
  logo, paleta de color, tipografía, espacio de seguridad, qué evitar y
  descargas. No está en el menú principal (es una página de referencia,
  no de cliente) pero sí enlazada desde el pie de página ("Kit de
  marca"), y no se indexa en buscadores (`robots: noindex` en su
  metadata).

Para reemplazar el logo por uno definitivo: sustituir el contenido de
`LogoMark.tsx`, `app/icon.svg` y los archivos de `public/brand/` — el
resto de la web (header, footer, favicon, página `/logo`) se actualiza
solo porque todos usan el mismo componente/archivos.

## 8. Material de marketing

`marketing/instagram/` (fuera de `app/`, no forma parte de la web
desplegada — son artefactos de diseño, no páginas):

- `servicios-post.html` — plantilla editable de un post de Instagram
  (1080×1350) que resume los 4 bloques de servicios y el mensaje "consulta
  cualquier cosa", con la misma paleta/tipografía/iconos que la web.
- `servicios-post.png` — versión ya renderizada (2160×2700, @2x), lista
  para subir a Instagram.

Para editarlo: modificar `servicios-post.html` (es HTML/CSS plano, sin
build) y volver a exportarlo a PNG, por ejemplo abriéndolo en el
navegador y haciendo una captura, o con Playwright:

```bash
npx playwright screenshot --viewport-size=1080,1350 \
  marketing/instagram/servicios-post.html \
  marketing/instagram/servicios-post.png
```

Como en el resto de la web, los teléfonos/redes que aparecen son
placeholders (`[TELÉFONO]`, `[WHATSAPP]`, `[INSTAGRAM]`...) — sustituir
por los datos reales antes de publicarlo.
