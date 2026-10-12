import { portfolio } from "@/content/portfolio";
import { Arrow } from "@/components/ui/illustrations";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a
        className="signature"
        href="#top"
        aria-label={`${portfolio.name} — back to top`}
      >
        {portfolio.name}
      </a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#joys">Little joys</a>
        <a href="#contact" className="nav-contact">
          Say hello <Arrow />
        </a>
      </nav>
    </header>
  );
}
