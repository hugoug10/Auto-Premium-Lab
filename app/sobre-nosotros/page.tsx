import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { business } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: `Conoce al profesional detrás de ${business.name}: cercanía, experiencia y presupuestos claros en cada trabajo.`,
};

export default function SobreNosotrosPage() {
  return (
    <>
      <div className="pt-16">
        <About />
      </div>
      <ContactCTA />
    </>
  );
}
