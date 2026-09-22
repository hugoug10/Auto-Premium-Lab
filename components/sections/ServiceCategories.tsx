import Link from "next/link";
import {
  Wrench,
  PaintBucket,
  Lightbulb,
  Sparkles,
  HelpCircle,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  serviceCategories,
  openRequestCard,
  type ServiceCategory,
} from "@/lib/site-config";

const icons: Record<ServiceCategory["icon"], LucideIcon> = {
  wrench: Wrench,
  paint: PaintBucket,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  "help-circle": HelpCircle,
};

function ServiceCard({ category, index }: { category: ServiceCategory; index: number }) {
  const Icon = icons[category.icon];
  const accentText =
    category.accent === "orange" ? "text-accent-soft" : "text-accent-2-soft";
  const accentBg =
    category.accent === "orange" ? "bg-accent/12" : "bg-accent-2/12";

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="card-glow group flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentBg} ${accentText}`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>

        <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
          {category.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {category.description}
        </p>

        <ul className="mt-5 flex flex-1 flex-col gap-2.5">
          {category.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accentText}`} />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={`/contacto?necesidad=${encodeURIComponent(category.title)}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent-soft"
        >
          Consultar este servicio
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </Reveal>
  );
}

export function ServiceCategories() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="De la mecánica a la personalización"
          description="Cuatro grandes áreas de trabajo — y si tu caso no encaja en ninguna, lo estudiamos igual."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((category, i) => (
            <ServiceCard key={category.id} category={category} index={i} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-5">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-surface via-surface to-accent/10 p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                  <HelpCircle className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {openRequestCard.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    {openRequestCard.description}
                  </p>
                </div>
              </div>
              <Button href="/contacto" size="md" className="shrink-0">
                Contarnos tu caso
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
