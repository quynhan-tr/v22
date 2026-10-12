import { QuynhFlower } from "@/components/flower/quynh-flower";
import { portfolio } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="about"
      className="about section"
      aria-labelledby="about-title"
    >
      <div className="section-aside">
        <p className="eyebrow">01 — Experience</p>
        <div id="flower-landing" className="flower-landing" aria-hidden="true">
          <QuynhFlower />
        </div>
      </div>

      <div className="experience-intro">
        <h2 id="about-title">
          Learning by
          <br />
          building.
        </h2>
        <p>{portfolio.experienceIntro}</p>
        <p className="handwritten experience-signoff">
          A few stops along the way.
        </p>
      </div>

      <div className="experience-history">
        <ul className="experience-list">
          {portfolio.experiences.map((experience) => (
            <li className="experience-entry" key={experience.company}>
              <div className="company-mark" aria-hidden="true">
                <span
                  className="company-logo"
                  style={{
                    maskImage: `url("${experience.logo}")`,
                    WebkitMaskImage: `url("${experience.logo}")`,
                  }}
                />
              </div>
              <div className="experience-details">
                <div className="company-heading">
                  <h3>{experience.company}</h3>
                </div>
                <p className="experience-position">{experience.position}</p>
                {experience.technologies.length > 0 && (
                  <ul
                    className="technology-list"
                    aria-label={`Technologies used at ${experience.company}`}
                  >
                    {experience.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
