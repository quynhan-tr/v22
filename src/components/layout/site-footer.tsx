import { portfolio } from "@/content/portfolio";
import { Arrow } from "@/components/ui/illustrations";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="signature" href="#top">
          {portfolio.name}
        </a>
        <p>A personal notebook. Made with care.</p>
      </div>
      <a className="text-link" href="#top">
        Back to top <Arrow />
      </a>
    </footer>
  );
}
