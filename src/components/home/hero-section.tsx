import { Arrow } from "@/components/ui/illustrations";
import { PortraitIllustration } from "./portrait-illustration";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div className="hero-main">
        <PortraitIllustration />
        <div className="hero-copy">
          <p className="eyebrow">xin chào, mình là An</p>
          <h1 id="intro-title">hi, I’m An</h1>
          <p className="intro-text">
            <span className="intro-lead">
              computer science @{" "}
              <a
                className="school-lockup"
                href="https://cs.uwaterloo.ca/"
                target="_blank"
                rel="noreferrer"
              >
                university of waterloo
                <span className="school-mark" aria-hidden="true" />
              </a>
            </span>
            This site is a collection of my projects, experiences, and other
            things I’ve done.
          </p>
          <a href="#about" className="eyebrow wander-link">
            Keep wandering <Arrow down />
          </a>
        </div>
      </div>
    </section>
  );
}
