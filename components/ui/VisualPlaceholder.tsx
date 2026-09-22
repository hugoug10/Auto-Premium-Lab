import { cn } from "@/lib/utils";
import {
  Wrench,
  Lightbulb,
  Sparkles,
  PaintBucket,
  Car,
  Gauge,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  wrench: Wrench,
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  paint: PaintBucket,
  car: Car,
  gauge: Gauge,
};

/**
 * Sustituto visual mientras no hay fotografía real del negocio.
 * Pensado para poder reemplazarse por <Image /> sin tocar el layout:
 * ambos ocupan el contenedor padre a 100% ancho/alto.
 */
export function VisualPlaceholder({
  icon = "car",
  tone = "orange",
  className,
  dense = false,
}: {
  icon?: keyof typeof icons;
  tone?: "orange" | "cyan" | "mixed";
  className?: string;
  dense?: boolean;
}) {
  const Icon = icons[icon] ?? Car;

  const toneStyles: Record<string, string> = {
    orange:
      "from-accent/25 via-surface to-surface-2 [--dot-color:var(--color-accent)]",
    cyan: "from-accent-2/20 via-surface to-surface-2 [--dot-color:var(--color-accent-2)]",
    mixed:
      "from-accent/20 via-surface to-accent-2/15 [--dot-color:var(--color-accent-2)]",
  };

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-gradient-to-br",
        toneStyles[tone],
        className
      )}
    >
      {/* patrón de puntos, referencia visual "blueprint" de automoción */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(var(--dot-color) 1px, transparent 1px)",
          backgroundSize: dense ? "14px 14px" : "22px 22px",
        }}
      />
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className="h-[28%] w-[28%] text-foreground/25"
          strokeWidth={1.25}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
    </div>
  );
}
