import { ProjectGallery } from "@/components/projects/project-gallery";

export function WorkSection() {
  return (
    <section
      id="work"
      className="work section"
      aria-labelledby="work-title"
    >
      <p className="eyebrow" data-reveal>02 — Things I’ve been making</p>
      <div className="section-heading" data-reveal>
        <h2 id="work-title">Selected work</h2>
        <p>
          A few pages from my notebook.
          <br />
          Each one with a story of its own.
        </p>
      </div>
      <ProjectGallery />
      <p className="handwritten work-note" data-reveal>
        always built with lots of love.
      </p>
    </section>
  );
}
