"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, ImageIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { galleryFilters, galleryItems, type GalleryFilter } from "@/lib/site-config";

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

export function Gallery() {
  const [active, setActive] = useState<GalleryFilter>("todos");

  const filtered = useMemo(
    () =>
      active === "todos"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Trabajos"
            title="Mecánica y personalización, en imágenes"
            description="Una muestra de lo que hacemos. Marcamos claramente qué es un trabajo real entregado y qué es una imagen conceptual mientras completamos la galería."
            className="lg:max-w-xl"
          />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {galleryFilters.map((filter) => {
              const isActive = filter.id === active;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActive(filter.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-filter-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-line"
              >
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

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-4 pt-10">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-center text-sm text-muted-2">
            ¿Has trabajado con nosotros? Cuando tengamos tu foto la
            añadiremos aquí como trabajo real, siempre con tu permiso.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
