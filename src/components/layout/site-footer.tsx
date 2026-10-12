import { portfolio } from "@/content/portfolio";
import Image from "next/image";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/illustrations";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="signature" href="#top">
          {portfolio.name}
        </a>
        <p>A personal notebook. Made with care.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <a href='https://cs.uwatering.com/#https://www.antran.dev/?nav=prev'>←</a>
        <a href='https://cs.uwatering.com/#https://www.antran.dev/' target='_blank' rel="noopener noreferrer">
          <Image
            src='https://cs.uwatering.com/icon.white.svg'
            alt='CS Webring'
            width={24}
            height={24}
            style={{ width: '24px', height: 'auto', filter: 'brightness(0) saturate(100%) invert(25%) sepia(35%) saturate(1816%) hue-rotate(188deg) brightness(95%) contrast(92%)' }}
          />
        </a>
        <a href='https://cs.uwatering.com/#https://www.antran.dev/?nav=next'>→</a>
      </div>
      <nav className="social-links" aria-label="Contact links">
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
      </nav>
    </footer>
  );
}
