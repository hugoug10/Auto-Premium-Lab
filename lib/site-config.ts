// ---------------------------------------------------------------------------
// CONFIGURACIÓN CENTRAL DEL NEGOCIO
// ---------------------------------------------------------------------------
// Todo lo que empieza y termina en [CORCHETES] es un placeholder.
// Sustitúyelo por el dato real del negocio antes de publicar la web.
// No hay ningún dato inventado (teléfono, dirección, redes...) en este archivo.
// ---------------------------------------------------------------------------

export const business = {
  name: "Auto Premium Lab",
  shortName: "APL",
  legalName: "Auto Premium Lab", // [RAZÓN SOCIAL SI DIFIERE]
  tagline: "De la mecánica a la personalización",
  claim:
    "Todo lo que tu coche necesite, en un mismo sitio: mecánica, reparación y personalización.",
  description:
    "Mecánica general, reparación, diagnóstico, carrocería, iluminación ambiental y personalización de vehículos. Si tienes un problema, una idea o un proyecto para tu coche, consúltanos.",

  // --- Contacto -------------------------------------------------------
  phoneDisplay: "[TELÉFONO]", // ej. 600 00 00 00
  phoneHref: "tel:+34600000000", // [TELÉFONO EN FORMATO tel:+34...]
  whatsappDisplay: "[WHATSAPP]",
  whatsappNumber: "34600000000", // [NÚMERO WHATSAPP SIN + NI ESPACIOS]
  whatsappMessage:
    "Hola Auto Premium Lab, quería consultar sobre mi coche.",
  email: "[EMAIL]",

  // --- Ubicación / SEO local -------------------------------------------
  city: "[CIUDAD]",
  province: "[PROVINCIA]",
  addressLine: "[DIRECCIÓN]",
  postalCode: "[CÓDIGO POSTAL]",
  country: "ES",
  workingArea: "[ZONA DE TRABAJO / COMARCA]",
  mapsUrl: "[ENLACE GOOGLE MAPS]",
  googleBusinessUrl: "[ENLACE GOOGLE BUSINESS PROFILE]",

  // --- Horario -----------------------------------------------------------
  hours: [
    { days: "Lunes - Viernes", time: "[HORARIO MAÑANA] - [HORARIO TARDE]" },
    { days: "Sábado", time: "[HORARIO SÁBADO O \"Cerrado\"]" },
    { days: "Domingo", time: "Cerrado" },
  ],

  // --- Redes sociales ------------------------------------------------
  social: {
    instagram: "[INSTAGRAM]",
    instagramUrl: "https://instagram.com/[INSTAGRAM]",
    tiktok: "[TIKTOK]",
    tiktokUrl: "https://tiktok.com/@[TIKTOK]",
    facebook: "[FACEBOOK]",
    facebookUrl: "https://facebook.com/[FACEBOOK]",
    youtube: "", // [YOUTUBE SI EXISTE]
  },

  // Placeholder técnico válido como URL (necesario para metadata/JSON-LD).
  // Sustituir por el dominio real antes de publicar.
  siteUrl: "https://www.auto-premium-lab.example",
} as const;

export function buildWhatsappUrl(message?: string) {
  const text = encodeURIComponent(message ?? business.whatsappMessage);
  return `https://wa.me/${business.whatsappNumber}?text=${text}`;
}

// ---------------------------------------------------------------------------
// NAVEGACIÓN
// ---------------------------------------------------------------------------

export const navLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

// ---------------------------------------------------------------------------
// SERVICIOS
// ---------------------------------------------------------------------------

export type ServiceCategory = {
  id: string;
  icon: "wrench" | "paint" | "lightbulb" | "sparkles" | "help-circle";
  title: string;
  description: string;
  items: string[];
  accent: "orange" | "cyan";
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mecanica",
    icon: "wrench",
    title: "Mecánica",
    description:
      "Mantenimiento y reparación, del día a día a las averías más serias.",
    items: [
      "Revisiones",
      "Aceite y filtros",
      "Embragues",
      "Distribuciones",
      "Cajas de cambio",
      "Líquidos y frenos",
      "Diagnóstico por ordenador",
      "Reparación de motor",
    ],
    accent: "orange",
  },
  {
    id: "carroceria",
    icon: "paint",
    title: "Carrocería y exterior",
    description:
      "Reparaciones y mejoras estéticas para que el coche luzca como quieres.",
    items: [
      "Reparación de carrocería",
      "Mejoras estéticas",
      "Detalles exteriores",
      "Preparación y acabados",
    ],
    accent: "orange",
  },
  {
    id: "iluminacion",
    icon: "lightbulb",
    title: "Iluminación",
    description:
      "Iluminación ambiental y personalización de faros con acabado profesional.",
    items: [
      "Iluminación ambiental",
      "Personalización de faros",
      "Luces de personalización",
      "Retoques de iluminación",
    ],
    accent: "cyan",
  },
  {
    id: "personalizacion",
    icon: "sparkles",
    title: "Personalización",
    description: "Dale una identidad propia a tu vehículo, por dentro y por fuera.",
    items: [
      "Cambio y personalización de matrícula",
      "Detalles y acabados a medida",
      "Mejoras visuales",
      "Modificaciones a petición",
    ],
    accent: "cyan",
  },
];

export const openRequestCard = {
  id: "otro-proyecto",
  icon: "help-circle" as const,
  title: "¿Tienes otro problema o proyecto?",
  description:
    "¿No encuentras exactamente lo que buscas? Cuéntanos qué necesita tu coche y estudiamos tu caso, tenga o no tenga nombre en una lista de servicios.",
};

// ---------------------------------------------------------------------------
// GALERÍA / TRABAJOS
// ---------------------------------------------------------------------------
// origin "real"    -> fotografía real de un trabajo del negocio (añadir cuando exista)
// origin "concept" -> imagen conceptual / de ambientación (IA o stock), nunca un
//                      trabajo real. Debe quedar SIEMPRE etiquetada como tal en la UI.

export type GalleryFilter =
  | "todos"
  | "mecanica"
  | "iluminacion"
  | "personalizacion"
  | "carroceria"
  | "antes-despues";

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryFilter, "todos">;
  origin: "real" | "concept";
  note: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Cambio de aceite y filtros",
    category: "mecanica",
    origin: "concept",
    note: "Imagen de ambientación — sustituir por foto real del trabajo",
  },
  {
    id: "g2",
    title: "Diagnóstico por ordenador",
    category: "mecanica",
    origin: "concept",
    note: "Imagen de ambientación — sustituir por foto real del trabajo",
  },
  {
    id: "g3",
    title: "Iluminación ambiental interior",
    category: "iluminacion",
    origin: "concept",
    note: "Imagen conceptual — próxima foto real del cliente",
  },
  {
    id: "g4",
    title: "Personalización de faros",
    category: "iluminacion",
    origin: "concept",
    note: "Imagen conceptual — próxima foto real del cliente",
  },
  {
    id: "g5",
    title: "Detalle de carrocería",
    category: "carroceria",
    origin: "concept",
    note: "Imagen de ambientación — sustituir por foto real del trabajo",
  },
  {
    id: "g6",
    title: "Cambio de matrícula y acabados",
    category: "personalizacion",
    origin: "concept",
    note: "Imagen conceptual — próxima foto real del cliente",
  },
  {
    id: "g7",
    title: "Antes / después de mejora estética",
    category: "antes-despues",
    origin: "concept",
    note: "Ejemplo ilustrativo — sustituir por caso real antes/después",
  },
  {
    id: "g8",
    title: "Puesta a punto de embrague",
    category: "mecanica",
    origin: "concept",
    note: "Imagen de ambientación — sustituir por foto real del trabajo",
  },
];

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "mecanica", label: "Mecánica" },
  { id: "iluminacion", label: "Iluminación" },
  { id: "personalizacion", label: "Personalización" },
  { id: "carroceria", label: "Carrocería" },
  { id: "antes-despues", label: "Antes / Después" },
];

// ---------------------------------------------------------------------------
// PALABRAS CLAVE SEO LOCAL (uso natural en textos, sin keyword stuffing)
// ---------------------------------------------------------------------------

export const seoKeywords = [
  "taller mecánico",
  "mecánica de coches",
  "reparación de coches",
  "mantenimiento de vehículos",
  "cambio de aceite",
  "embragues",
  "distribución",
  "cajas de cambio",
  "diagnóstico de averías",
  "personalización de coches",
  "iluminación ambiental para coche",
  "personalización de faros",
];
