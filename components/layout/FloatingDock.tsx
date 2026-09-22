"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUp, X } from "lucide-react";
import { business, buildWhatsappUrl } from "@/lib/site-config";

function DockPill({
  href,
  icon: Icon,
  label,
  accent = false,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  accent?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.9 }}
      whileHover={{ x: -4 }}
      className={`flex items-center gap-2.5 rounded-full border py-3 pl-4 pr-5 text-sm font-semibold shadow-lg backdrop-blur-xl transition-colors ${
        accent
          ? "border-accent/40 bg-accent text-ink"
          : "border-line bg-surface/95 text-foreground hover:border-accent-2/50"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </motion.a>
  );
}

export function FloatingDock() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Dock flotante — escritorio */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
        <AnimatePresence>
          {showTop && !open && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Volver arriba"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/95 text-foreground shadow-lg backdrop-blur-xl transition-colors hover:border-accent-2/50"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <div className="flex flex-col items-end gap-3">
              <DockPill href={business.phoneHref} icon={Phone} label="Llamar ahora" />
              <DockPill
                href={buildWhatsappUrl()}
                icon={MessageCircle}
                label="Escribir por WhatsApp"
                accent
              />
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.93 }}
          aria-label={open ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
          className="relative flex h-15 items-center gap-2.5 rounded-full bg-accent px-6 font-semibold text-ink shadow-[0_10px_40px_-8px_rgba(255,77,28,0.7)] transition-shadow hover:shadow-[0_16px_50px_-8px_rgba(255,77,28,0.85)]"
        >
          {!open && (
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute h-full w-full animate-pulse-soft rounded-full bg-success" />
              <span className="absolute h-full w-full rounded-full bg-success" />
            </span>
          )}
          {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
          <span>{open ? "Cerrar" : "Contactar"}</span>
        </motion.button>
      </div>

      {/* Barra de contacto fija — móvil (siempre visible, según lo pedido) */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 border-r border-line py-4 text-sm font-semibold text-foreground active:bg-surface"
        >
          <Phone className="h-4 w-4" />
          Llamar
        </a>
        <a
          href={buildWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-accent py-4 text-sm font-semibold text-ink"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
