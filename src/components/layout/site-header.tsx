import { portfolio } from "@/content/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/illustrations";

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
        <a href="#joys">Joy</a>
        <div className="social-links">
          <a href={`mailto:${portfolio.email}`} aria-label="Email An Tran">
            <MailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/quynhan05/"
            target="_blank"
            rel="noreferrer"
            aria-label="An Tran on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/quynhan-tr"
            target="_blank"
            rel="noreferrer"
            aria-label="An Tran on GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
