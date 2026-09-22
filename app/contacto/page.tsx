import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Presupuesto y contacto",
  description: `Pide presupuesto o cuéntanos qué necesita tu coche. Responde ${business.name} por WhatsApp, teléfono o formulario.`,
};

export default function ContactoPage() {
  return (
    <div className="pt-16">
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
