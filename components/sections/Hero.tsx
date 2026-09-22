"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Sparkles, Wrench, Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { buildWhatsappUrl } from "@/lib/site-config";

const trustPoints = [
  { icon: Wrench, label: "Mecánica seria" },
  { icon: Sparkles, label: "Personalización a medida" },
  { icon: Lightbulb, label: "Iluminación y estética" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink bg-mesh pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-grain" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Mecánica · Carrocería · Iluminación · Personalización
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Todo para tu coche.
            <br />
            <span className="text-gradient">Mecánica, reparación</span>
            <br />
            y personalización.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            Trabajos mecánicos, estéticos y de personalización en un mismo
            sitio. Si tienes un problema, una reparación, una mejora o una
            idea para tu coche, <span className="text-foreground">consúltanos</span> — aunque no sepas
            exactamente qué necesitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contacto" size="lg">
              Pedir presupuesto
            </Button>
            <Button href={buildWhatsappUrl()} variant="outline" size="lg">
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4"
          >
            <Button href="/trabajos" variant="ghost" size="sm" className="!px-0">
              Ver trabajos realizados →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-2 text-xs font-medium text-muted backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-accent-soft" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line shadow-2xl">
            <VisualPlaceholder icon="car" tone="mixed" />
          </div>

          {/* isla flotante: disponibilidad */}
          <motion.div
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-line bg-ink/80 px-4 py-2 text-xs font-semibold text-foreground shadow-xl backdrop-blur-xl sm:left-6 sm:top-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-pulse-soft rounded-full bg-success" />
              <span className="absolute h-full w-full rounded-full bg-success" />
            </span>
            Aceptando trabajos esta semana
          </motion.div>

          {/* isla flotante: servicio destacado */}
          <motion.div
            initial={{ opacity: 0, y: 10, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="absolute bottom-4 right-4 max-w-[13rem] rounded-2xl border border-line bg-ink/85 p-4 shadow-xl backdrop-blur-xl sm:bottom-6 sm:right-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-2-soft">
              ¿Tienes una idea?
            </p>
            <p className="mt-1 text-sm leading-snug text-foreground/90">
              Desde un cambio de aceite hasta personalizar tu iluminación.
            </p>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-2 sm:block"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
