// lucide-react no incluye iconos de marca (Instagram/TikTok/Facebook).
// Trazados mínimos propios, a sustituir por el logo real si se desea.

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.24-1.46 1.5-1.46H16.6V4.24C16.3 4.2 15.3 4.1 14.1 4.1c-2.4 0-4.1 1.47-4.1 4.16v2.32H7.4v3h2.6V21h3.5Z" />
    </svg>
  );
}

export function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.185.009.37.036.55.08V9.82a5.16 5.16 0 0 0-.55-.02A5.6 5.6 0 1 0 15.4 15.4V8.72a7.13 7.13 0 0 0 4.16 1.33V6.86a4.32 4.32 0 0 1-2.96-1.04Z" />
    </svg>
  );
}
