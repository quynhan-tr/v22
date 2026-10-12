"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Arrow } from "@/components/ui/illustrations";
import { portfolio, type PortfolioProject } from "@/content/portfolio";

type ProjectPreviewProps = {
  project: PortfolioProject;
  index?: number;
  enlarged?: boolean;
};

function ProjectPreview({
  project,
  index = 0,
  enlarged = false,
}: ProjectPreviewProps) {
  if (enlarged) {
    return (
      <span className="project-preview project-preview-large">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 600px) 90vw, 560px"
        />
      </span>
    );
  }

  return (
    <span
      className={`project-preview project-scene project-scene-${project.frame.style}`}
    >
      <svg
        className="project-ink"
        viewBox="0 0 360 270"
        fill="none"
        aria-hidden="true"
      >
        {project.frame.style === "record" ? (
          <g>
            <ellipse
              cx="181"
              cy="134"
              rx="153"
              ry="87"
              transform="rotate(-22 181 134)"
            />
            <ellipse
              cx="181"
              cy="134"
              rx="143"
              ry="72"
              transform="rotate(29 181 134)"
            />
            <path d="M180 16v238M18 135h324" opacity=".3" />
          </g>
        ) : (
          <g>
            <path d="M310 30l3 10 10 3-10 3-3 10-3-10-10-3 10-3zM31 215l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" />
            <path
              d="M283 229q16-14 28-3t26-3M283 237q16-14 28-3t26-3"
              opacity=".5"
            />
          </g>
        )}
      </svg>
      <span className="project-paper">
        <span className="project-paper-label" aria-hidden="true">
          {project.frame.style === "stamp"
            ? "Collected / "
            : "From the notebook / "}
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-photo">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 700px) 75vw, (max-width: 1260px) 26vw, 320px"
          />
        </span>
        <span className="project-paper-caption" aria-hidden="true">
          {project.frame.caption}
        </span>
      </span>
    </span>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: PortfolioProject;
  index: number;
  onOpen: (project: PortfolioProject) => void;
}) {
  return (
    <article className="project">
      <button
        className="project-button"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title}`}
      >
        <ProjectPreview project={project} index={index} />
        <span className="eyebrow project-category">{project.category}</span>
        <span className="project-title">
          {project.title}
          <Arrow />
        </span>
      </button>
      <p>{project.description}</p>
    </article>
  );
}

export function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<PortfolioProject>(
    portfolio.projects[0],
  );

  function openProject(project: PortfolioProject) {
    setSelected(project);
    dialog.current?.showModal();
  }

  function closeProject() {
    dialog.current?.close();
  }

  return (
    <>
      <div className="project-grid">
        {portfolio.projects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            onOpen={openProject}
            key={project.id}
          />
        ))}
      </div>
      <dialog
        className="project-dialog"
        ref={dialog}
        aria-labelledby="project-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProject();
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            aria-label="Close project"
            onClick={closeProject}
          >
            ×
          </button>
          <ProjectPreview project={selected} enlarged />
          <p className="eyebrow">{selected.category}</p>
          <h2 id="project-dialog-title">{selected.title}</h2>
          <p>{selected.description}</p>
          <button className="text-link" onClick={closeProject}>
            Back to the notebook <Arrow />
          </button>
        </div>
      </dialog>
    </>
  );
}
