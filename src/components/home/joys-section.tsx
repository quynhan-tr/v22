import { JoyIcon } from "@/components/ui/illustrations";
import { portfolio } from "@/content/portfolio";

export function JoysSection() {
  return (
    <section
      id="joys"
      className="joys section"
      aria-labelledby="joys-title"
    >
      <p className="eyebrow">03 — Outside the work</p>
      <h2 id="joys-title">Life’s little joys.</h2>
      <div className="joy-grid">
        {portfolio.joys.map((joy) => (
          <article className="joy" key={joy.title}>
            <JoyIcon kind={joy.icon} />
            <h3>{joy.title}</h3>
            <p>{joy.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
