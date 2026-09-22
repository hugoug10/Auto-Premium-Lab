import { PlayCircle, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { business } from "@/lib/site-config";

const stats = [
  { value: "[X]", label: "años trabajando con coches" },
  { value: "[X]", label: "vehículos intervenidos" },
  { value: "100%", label: "trabajos con presupuesto claro" },
];

export function About() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line">
              <VisualPlaceholder icon="wrench" tone="orange" />
              {/* Placeholder para vídeo del propietario trabajando */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink/60 text-foreground backdrop-blur-xl transition-transform hover:scale-105">
                  <PlayCircle className="h-8 w-8" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-2">
              [Foto del propietario / vídeo trabajando — añadir cuando esté disponible]
            </p>

            <div className="absolute -bottom-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-2xl border border-line bg-surface/95 p-5 shadow-xl backdrop-blur-xl sm:w-auto sm:left-8 sm:translate-x-0">
              <div className="flex items-center gap-4 divide-x divide-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-4 first:pl-0 last:pr-0">
                    <p className="font-display text-xl font-bold text-accent-soft">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-tight text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:pl-6">
          <SectionHeading
            eyebrow="Sobre nosotros"
            title="Un profesional del motor, construyendo su propia marca"
            className="max-w-none"
          />

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <Reveal delay={0.1}>
              <p>
                Detrás de {business.name} hay una persona que trabaja
                directamente con los coches: cada revisión, cada reparación y
                cada personalización pasa por sus manos. [Espacio para la
                historia del negocio: cómo empezó, qué le llevó a la
                automoción, qué le diferencia.]
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                [Espacio para experiencia: años en el sector, formación,
                tipos de vehículos con los que trabaja, especialidades.] La
                idea es simple: tratar cada coche como si fuera propio, con
                presupuestos claros y sin sorpresas.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.26}>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-line bg-surface p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                <Wrench className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="text-sm text-foreground/85">
                Este negocio está creciendo. Esta sección se irá completando
                con fotos, vídeos y la historia real a medida que avance el
                proyecto.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
