import Link from "next/link";
import {
  Wrench,
  PaintBucket,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { serviceCategories, type ServiceCategory } from "@/lib/site-config";

const icons: Record<ServiceCategory["icon"], LucideIcon> = {
  wrench: Wrench,
  paint: PaintBucket,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  "help-circle": Sparkles,
};

export function ServicesTeaser() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Servicios"
            title="De la mecánica a la personalización"
            description="Cuatro grandes áreas de trabajo — y si tu caso no encaja en ninguna, lo estudiamos igual."
            className="lg:max-w-xl"
          />
          <Reveal delay={0.1}>
            <Button href="/servicios" variant="outline" className="hidden lg:inline-flex">
              Ver todos los servicios
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, i) => {
            const Icon = icons[category.icon];
            const accentText =
              category.accent === "orange" ? "text-accent-soft" : "text-accent-2-soft";
            const accentBg = category.accent === "orange" ? "bg-accent/12" : "bg-accent-2/12";

            return (
              <Reveal key={category.id} delay={i * 0.08}>
                <Link
                  href={`/contacto?necesidad=${encodeURIComponent(category.title)}`}
                  className="card-glow group flex h-full flex-col rounded-2xl border border-line bg-surface p-6"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentBg} ${accentText}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 transition-colors group-hover:text-accent-soft">
                    Ver detalles
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8 flex justify-center lg:hidden">
          <Button href="/servicios" variant="outline">
            Ver todos los servicios
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
