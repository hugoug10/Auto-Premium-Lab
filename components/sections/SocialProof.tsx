import { PlayCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VisualPlaceholder } from "@/components/ui/VisualPlaceholder";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { business } from "@/lib/site-config";

const socials = [
  {
    id: "instagram",
    icon: InstagramIcon,
    label: "Instagram",
    handle: `@${business.social.instagram}`,
    href: business.social.instagramUrl,
  },
  {
    id: "tiktok",
    icon: TikTokIcon,
    label: "TikTok",
    handle: `@${business.social.tiktok}`,
    href: business.social.tiktokUrl,
  },
  {
    id: "facebook",
    icon: FacebookIcon,
    label: "Facebook",
    handle: business.social.facebook,
    href: business.social.facebookUrl,
  },
];

const reelSlots = Array.from({ length: 6 }, (_, i) => i);

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Redes sociales"
          title="Síguenos y descubre nuestros últimos trabajos"
          description="Gran parte de nuestros clientes nos conocen por los vídeos y publicaciones del día a día en el taller. Aquí tienes el mismo contenido, centralizado."
        />
      </Container>

      <Reveal delay={0.1}>
        <div className="mt-12 flex select-none overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-4 pr-4">
            {[...reelSlots, ...reelSlots].map((i, idx) => (
              <div
                key={idx}
                className="relative h-56 w-36 shrink-0 overflow-hidden rounded-2xl border border-line sm:h-64 sm:w-40"
              >
                <VisualPlaceholder
                  icon={i % 2 === 0 ? "sparkles" : "wrench"}
                  tone={i % 2 === 0 ? "cyan" : "orange"}
                  dense
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="h-8 w-8 text-foreground/70" strokeWidth={1.5} />
                </div>
                <span className="absolute bottom-2 left-2 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] font-semibold text-muted backdrop-blur">
                  [Vídeo]
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Container>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {socials.map((social, i) => (
            <Reveal key={social.id} delay={0.1 + i * 0.08}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group flex items-center justify-between rounded-2xl border border-line bg-surface p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-2/12 text-accent-2-soft">
                    <social.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{social.label}</p>
                    <p className="text-sm text-muted">{social.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
