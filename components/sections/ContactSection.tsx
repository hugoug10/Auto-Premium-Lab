"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle, Phone, Paperclip, Send, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { business } from "@/lib/site-config";

export function ContactSection() {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const searchParams = useSearchParams();
  const prefillNecesidad = searchParams.get("necesidad") ?? "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const lines = [
      `Hola ${business.name}, quería pedir información:`,
      `— Nombre: ${form.get("nombre") || "-"}`,
      `— Teléfono: ${form.get("telefono") || "-"}`,
      `— Vehículo: ${form.get("vehiculo") || "-"}`,
      `— Qué necesito: ${form.get("necesidad") || "-"}`,
      form.get("mensaje") ? `— Detalles: ${form.get("mensaje")}` : null,
      fileNames.length
        ? `— Tengo ${fileNames.length} foto(s) para enviar por este chat.`
        : null,
    ].filter(Boolean);

    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Presupuesto"
            title="Cuéntanos qué necesita tu coche"
            description="No hace falta que sepas el nombre exacto del servicio. Descríbenos el problema, la avería o la idea, y te respondemos con un presupuesto o los siguientes pasos."
            className="max-w-none"
          />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Button href={`https://wa.me/${business.whatsappNumber}`} variant="primary" size="lg" className="w-full">
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
            <Button href={business.phoneHref} variant="outline" size="lg" className="w-full">
              <Phone className="h-4 w-4" />
              Llamar ahora
            </Button>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 space-y-4 border-t border-line pt-8">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                <div>
                  <p className="font-medium text-foreground">
                    {business.addressLine}, {business.city}
                  </p>
                  <p className="text-muted">{business.workingArea}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                <ul className="text-muted">
                  {business.hours.map((h) => (
                    <li key={h.days}>
                      <span className="text-foreground/80">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            key={prefillNecesidad}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-foreground/90">Nombre</span>
                <input
                  required
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="rounded-xl border border-line bg-ink px-4 py-3 text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-foreground/90">Teléfono</span>
                <input
                  required
                  name="telefono"
                  type="tel"
                  placeholder="600 00 00 00"
                  className="rounded-xl border border-line bg-ink px-4 py-3 text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent"
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 text-sm">
              <span className="font-medium text-foreground/90">Vehículo</span>
              <input
                name="vehiculo"
                type="text"
                placeholder="Marca, modelo y año (ej. Seat León 2016)"
                className="rounded-xl border border-line bg-ink px-4 py-3 text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent"
              />
            </label>

            <label className="mt-5 flex flex-col gap-2 text-sm">
              <span className="font-medium text-foreground/90">¿Qué necesitas?</span>
              <input
                required
                name="necesidad"
                type="text"
                defaultValue={prefillNecesidad}
                placeholder="Ej. cambio de aceite, ruido al frenar, personalizar luces..."
                className="rounded-xl border border-line bg-ink px-4 py-3 text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent"
              />
            </label>

            <label className="mt-5 flex flex-col gap-2 text-sm">
              <span className="font-medium text-foreground/90">Cuéntanos más (opcional)</span>
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Describe el problema, la idea o cualquier detalle que nos ayude a entenderlo mejor."
                className="resize-none rounded-xl border border-line bg-ink px-4 py-3 text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent"
              />
            </label>

            <div className="mt-5">
              <span className="mb-2 block text-sm font-medium text-foreground/90">
                Fotos del vehículo (opcional)
              </span>
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line bg-ink px-4 py-4 text-sm text-muted transition-colors hover:border-accent-2/50">
                <Paperclip className="h-4 w-4 shrink-0" />
                <span>
                  {fileNames.length
                    ? `${fileNames.length} archivo(s) seleccionado(s)`
                    : "Adjunta una o varias fotos"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) =>
                    setFileNames(Array.from(e.target.files ?? []).map((f) => f.name))
                  }
                />
              </label>
              <p className="mt-2 text-xs text-muted-2">
                Al enviar, abriremos WhatsApp con tus datos ya escritos —
                desde ahí podrás adjuntar la foto directamente en la
                conversación.
              </p>
            </div>

            <Button type="submit" size="lg" className="mt-7 w-full">
              <Send className="h-4 w-4" />
              Enviar consulta
            </Button>

            {sent && (
              <p className="mt-3 text-center text-sm text-success">
                Hemos abierto WhatsApp con tu mensaje. ¡Gracias!
              </p>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
