"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Marca vectorial de Auto Premium Lab: monograma "A" (trazo geométrico,
 * estilo insignia de automoción) con un detalle a modo de remache/luz.
 *
 * variant="badge" -> insignia completa con fondo degradado (uso general:
 *   header, footer, favicon, avatar de redes).
 * variant="mono"  -> solo el trazo, en `currentColor` (uso sobre fondos
 *   de color, fotografías o en un único color de impresión).
 */
export function LogoMark({
  className,
  variant = "badge",
}: {
  className?: string;
  variant?: "badge" | "mono";
}) {
  const gradId = useId();

  if (variant === "mono") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className={cn("shrink-0", className)}
        role="img"
        aria-label="Auto Premium Lab"
      >
        <path
          d="M17 48 L32 15 L47 48"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 37 L40.5 37"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Auto Premium Lab"
    >
      <defs>
        <linearGradient id={`apl-grad-${gradId}`} x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF4D1C" />
          <stop offset="1" stopColor="#33E1FF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#apl-grad-${gradId})`} />
      <path
        d="M17 48 L32 15 L47 48"
        stroke="#0A0A0C"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23.5 37 L40.5 37" stroke="#0A0A0C" strokeWidth="7" strokeLinecap="round" />
      <circle cx="32" cy="37" r="2.4" fill="#F5F5F3" />
    </svg>
  );
}
