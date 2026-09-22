import type { Metadata } from "next";
import { Download, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/brand/LogoMark";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Logo",
  description: `Kit de marca de ${business.name}: logotipo, versiones, colores, tipografía y material de marketing.`,
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Ink (fondo)", varName: "--color-ink", hex: "#0A0A0C" },
  { name: "Surface", varName: "--color-surface", hex: "#131316" },
  { name: "Foreground", varName: "--color-foreground", hex: "#F5F5F3" },
  { name: "Ignition Orange", varName: "--color-accent", hex: "#FF4D1C" },
  { name: "Ambient Cyan", varName: "--color-accent-2", hex: "#33E1FF" },
  { name: "Muted", varName: "--color-muted", hex: "#9A9AA3" },
];

const downloads = [
  {
    href: "/brand/apl-logo-mark.svg",
    name: "Insignia completa (color)",
    description: "Fondo degradado + símbolo. Uso general, favicon, avatar de redes.",
    variant: "badge" as const,
    preview: "dark" as const,
  },
  {
    href: "/brand/apl-logo-mono-white.svg",
    name: "Símbolo — un color, blanco",
    description: "Sin fondo. Para colocar sobre fotos, colores de marca o fondos oscuros.",
    variant: "mono" as const,
    preview: "dark" as const,
  },
  {
    href: "/brand/apl-logo-mono-dark.svg",
    name: "Símbolo — un color, oscuro",
    description: "Sin fondo. Para colocar sobre fondos claros o blancos.",
    variant: "mono" as const,
    preview: "light" as const,
  },
];

const donts = [
  "Estirar o deformar el símbolo fuera de su proporción cuadrada.",
  "Cambiar los colores del degradado por otros no definidos en la paleta.",
  "Añadir sombras, biseles o efectos 3D.",
  "Rotar el símbolo o separar el trazo del fondo.",
  "Colocarlo sobre fondos con poco contraste sin la versión de un color.",
];

export default function LogoPage() {
  return (
    <div className="pt-16">
      <section className="relative bg-ink bg-mesh py-20 sm:py-28">
        <div className="bg-grain absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Kit de marca"
            title="El logo de Auto Premium Lab"
            description="Un monograma geométrico en forma de 'A', pensado como insignia de automoción: sólido, fácil de reconocer en miniatura (redes, favicon) y coherente con el resto de la identidad de la web. Es una versión provisional — pensada para poder evolucionar sin rehacer la marca desde cero."
          />
        </Container>
      </section>

      {/* Showcase principal */}
      <section className="bg-ink py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex h-full flex-col items-center justify-center gap-6 rounded-3xl border border-line bg-surface p-10">
              <LogoMark className="h-32 w-32" />
              <p className="text-sm text-muted-2">Símbolo, tamaño de referencia</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-center gap-8 rounded-3xl border border-line bg-surface p-10">
              <div className="flex items-center gap-4">
                <LogoMark className="h-14 w-14" />
                <span className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {business.name}
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl bg-foreground p-6">
                <LogoMark className="h-14 w-14" />
                <span className="font-display text-3xl font-bold tracking-tight text-ink">
                  {business.name}
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Versión de un color */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Un solo color"
            title="Símbolo sobre cualquier fondo"
            description="Cuando el degradado no funciona (impresión a un color, fotografías, superficies de marca), usa el trazo suelto en blanco o en negro."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-mesh bg-ink p-10">
                <LogoMark variant="mono" className="h-16 w-16 text-foreground" />
                <p className="text-sm text-muted">Blanco sobre fondo oscuro</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-foreground p-10">
                <LogoMark variant="mono" className="h-16 w-16 text-ink" />
                <p className="text-sm text-ink/60">Oscuro sobre fondo claro</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Paleta */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Color" title="Paleta de marca" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {palette.map((color, i) => (
              <Reveal key={color.hex} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-line">
                  <div className="h-20" style={{ backgroundColor: color.hex }} />
                  <div className="bg-surface p-3">
                    <p className="text-xs font-semibold text-foreground">{color.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-muted">{color.hex}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tipografía */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Tipografía" title="Sora + Inter" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-line bg-surface p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                  Sora — Títulos
                </p>
                <p className="mt-4 font-display text-4xl font-bold text-foreground">
                  Todo para tu coche
                </p>
                <p className="mt-2 font-display text-sm text-muted">
                  Pesos usados: 600 (semibold), 700 (bold), 800 (extrabold)
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-line bg-surface p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-2-soft">
                  Inter — Texto
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Mecánica, reparación y personalización en un mismo sitio.
                </p>
                <p className="mt-2 text-sm text-muted">Pesos usados: 400, 500, 600</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Uso correcto / incorrecto */}
      <section className="bg-ink py-20 sm:py-24">
        <Container className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-success/30 bg-success/5 p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-success/15 text-success">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Espacio de seguridad
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Deja alrededor del símbolo un margen mínimo equivalente a la
                altura de su barra central. Por debajo de 24px de alto, usa
                solo el símbolo (sin texto) para mantener la legibilidad.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-accent/30 bg-accent/5 p-8">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                <X className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Evitar
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                {donts.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Descargas */}
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Descargas" title="Archivos del logo (SVG)" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {downloads.map((file, i) => (
              <Reveal key={file.href} delay={i * 0.06}>
                <a
                  href={file.href}
                  download
                  className="card-glow group flex h-full flex-col rounded-2xl border border-line bg-surface p-6"
                >
                  <div
                    className={`flex items-center justify-center rounded-xl border border-line p-6 ${
                      file.preview === "light" ? "bg-foreground text-ink" : "bg-ink text-foreground"
                    }`}
                  >
                    <LogoMark className="h-12 w-12" variant={file.variant} />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{file.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted">{file.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 group-hover:text-accent-soft">
                    <Download className="h-4 w-4" />
                    Descargar SVG
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-muted-2">
              Formato vectorial (SVG): se puede escalar a cualquier tamaño
              sin perder calidad, desde el favicon hasta un rótulo del
              taller.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Marketing */}
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Marketing"
            title="Cartel para Instagram"
            description="Un post (1080×1350) que resume los servicios con la misma identidad visual. Los datos de contacto son placeholders — sustituir antes de publicarlo."
          />
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:items-center">
              <a
                href="/marketing/instagram-servicios.png"
                download
                className="card-glow group block overflow-hidden rounded-2xl border border-line bg-surface"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/marketing/instagram-servicios.png"
                  alt="Cartel de Instagram con los servicios de Auto Premium Lab"
                  className="w-full"
                />
              </a>
              <div>
                <p className="text-sm leading-relaxed text-muted">
                  Pensado para publicarse tal cual en el feed de Instagram
                  (relación 4:5, la que más espacio ocupa en pantalla).
                  Incluye las 4 categorías de servicios y el mensaje de
                  &quot;consulta cualquier cosa&quot;.
                </p>
                <a
                  href="/marketing/instagram-servicios.png"
                  download
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-accent-soft"
                >
                  <Download className="h-4 w-4" />
                  Descargar imagen (PNG)
                </a>
                <p className="mt-4 text-xs text-muted-2">
                  Editable en <code>marketing/instagram/servicios-post.html</code>{" "}
                  (código fuente del proyecto).
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
