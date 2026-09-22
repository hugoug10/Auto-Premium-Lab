import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Trabajos",
  description: `Galería de trabajos de mecánica, iluminación, carrocería y personalización de ${business.name}, con fotos reales y conceptos claramente diferenciados.`,
};

export default function TrabajosPage() {
  return (
    <>
      <div className="pt-16">
        <Gallery />
      </div>
      <ContactCTA
        title="¿Quieres un trabajo así en tu coche?"
        description="Cuéntanos qué tienes en mente y te decimos cómo lo abordaríamos."
      />
    </>
  );
}
