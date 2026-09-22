import { Sparkles, ImageIcon, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { galleryItems } from "@/lib/site-config";

const iconByCategory: Record<string, "wrench" | "lightbulb" | "sparkles" | "paint" | "car"> = {
  mecanica: "wrench",
  iluminacion: "lightbulb",
  personalizacion: "sparkles",
  carroceria: "paint",
  "antes-despues": "car",
};

const toneByCategory: Record<string, "orange" | "cyan" | "mixed"> = {
  mecanica: "orange",
  iluminacion: "cyan",
  personalizacion: "cyan",
  carroceria: "orange",
  "antes-despues": "mixed",
};

export function GalleryTeaser() {
  const preview = galleryItems.slice(0, 4);

  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Trabajos"
            title="Mecánica y personalización, en imágenes"
            description="Una muestra de lo que hacemos, con trabajos reales y conceptos claramente diferenciados."
            className="lg:max-w-xl"
          />
          <Reveal delay={0.1}>
            <Button href="/trabajos" variant="outline" className="hidden lg:inline-flex">
              Ver toda la galería
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {preview.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-line">
                <VisualPlaceholder
                  icon={iconByCategory[item.category]}
                  tone={toneByCategory[item.category]}
                  dense
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-xl ${
                    item.origin === "real"
                      ? "border-success/40 bg-ink/70 text-success"
                      : "border-accent-2/40 bg-ink/70 text-accent-2-soft"
                  }`}
                >
                  {item.origin === "real" ? (
                    <ImageIcon className="h-3 w-3" />
                  ) : (
                    <Sparkles className="h-3 w-3" />
                  )}
                  {item.origin === "real" ? "Trabajo real" : "Concepto IA"}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-3">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 flex justify-center lg:hidden">
          <Button href="/trabajos" variant="outline">
            Ver toda la galería
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
