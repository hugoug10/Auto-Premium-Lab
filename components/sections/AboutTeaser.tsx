import { ArrowUpRight, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { business } from "@/lib/site-config";

export function AboutTeaser() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-line">
            <VisualPlaceholder icon="wrench" tone="orange" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
              Sobre nosotros
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
              Un profesional del motor, construyendo su propia marca
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted">
              Detrás de {business.name} hay una persona que trabaja
              directamente con los coches, trato cercano y presupuestos
              claros, sin sorpresas.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex items-center gap-3">
              <Button href="/sobre-nosotros" variant="outline">
                Conócenos mejor
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-soft">
                <Wrench className="h-5 w-5" strokeWidth={1.75} />
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
