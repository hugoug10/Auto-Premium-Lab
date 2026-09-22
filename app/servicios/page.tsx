import type { Metadata } from "next";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Mecánica, carrocería, iluminación y personalización de vehículos en ${business.name}. Si tu caso no aparece en la lista, consúltanos igualmente.`,
};

export default function ServiciosPage() {
  return (
    <>
      <div className="pt-16">
        <ServiceCategories />
      </div>
      <ContactCTA
        title="¿No ves tu caso en la lista?"
        description="No pasa nada. Cuéntanos qué necesita tu coche y lo estudiamos igual."
      />
    </>
  );
}
