import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { business, buildWhatsappUrl } from "@/lib/site-config";

export function ContactCTA({
  title = "¿Hablamos de tu coche?",
  description = "Cuéntanos qué necesita, aunque no sepas el nombre exacto del servicio. Respondemos rápido por WhatsApp.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative bg-ink py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-mesh bg-surface p-8 sm:p-12">
            <div className="bg-grain absolute inset-0" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href={buildWhatsappUrl()} size="lg">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button href={business.phoneHref} variant="outline" size="lg">
                  <Phone className="h-4 w-4" />
                  Llamar
                </Button>
              </div>
            </div>
            <Reveal delay={0.1}>
              <Button href="/contacto" variant="ghost" size="sm" className="relative mt-6 !px-0">
                Ir al formulario completo
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
