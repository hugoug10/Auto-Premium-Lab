import { Hero } from "@/components/sections/Hero";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { SocialProof } from "@/components/sections/SocialProof";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <GalleryTeaser />
      <AboutTeaser />
      <SocialProof />
      <ContactCTA />
    </>
  );
}
