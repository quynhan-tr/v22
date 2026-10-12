import { Arrow, Envelope } from "@/components/ui/illustrations";
import { portfolio } from "@/content/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div className="contact-copy">
        <p className="eyebrow">04 — A note to say hello</p>
        <h2 id="contact-title">
          Good things start
          <br />
          with a hello.
        </h2>
        <p>
          Have an idea to share, a question to ask, or a story to tell? I’d love
          to hear from you.
        </p>
        <a className="email-link" href={`mailto:${portfolio.email}`}>
          {portfolio.email}
          <Arrow />
        </a>
      </div>
      <figure className="envelope-figure">
        <Envelope />
        <figcaption className="handwritten">
          My inbox is a good place to begin.
        </figcaption>
      </figure>
    </section>
  );
}
