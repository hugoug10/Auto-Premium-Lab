import Link from "next/link";
import { MapPin, Phone, Mail, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { business, navLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-ink">
              <Wrench className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold text-foreground">
              {business.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            {business.claim}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-soft"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-soft"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-soft"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
            Navegación
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
            Servicios
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>Mecánica general y reparación</li>
            <li>Carrocería y exterior</li>
            <li>Iluminación y personalización de faros</li>
            <li>Personalización a medida</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
              <span>
                {business.addressLine}, {business.city} ({business.province})
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent-soft" />
              <a href={business.phoneHref} className="hover:text-foreground">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent-soft" />
              <a href={`mailto:${business.email}`} className="hover:text-foreground">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-muted-2 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>
          <p>
            {business.city ? `${business.city} · ` : ""}
            {business.workingArea}
          </p>
        </Container>
      </div>
    </footer>
  );
}
