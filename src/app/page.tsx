import { FallingFlower } from "@/components/flower/falling-flower";
import { ContactSection } from "@/components/home/contact-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { HeroSection } from "@/components/home/hero-section";
import { JoysSection } from "@/components/home/joys-section";
import { WorkSection } from "@/components/home/work-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <div id="top" className="notebook">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <WorkSection />
        <JoysSection />
        <ContactSection />
      </main>
      <FallingFlower />
      <SiteFooter />
    </div>
  );
}
