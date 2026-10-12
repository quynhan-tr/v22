"use client";

import Image from "next/image";
import "./project-gallery.css";
import { useRef, useState } from "react";
import { projects } from "@/content/portfolio";
import { Arrow } from "./illustrations";

type Project = (typeof projects)[number];

const projectFrames: Record<Project["id"], { style: string; caption: string }> = {
  "we-do-wonder": { style: "stamp", caption: "a little wonder" },
  "motion-wave": { style: "record", caption: "follow the rhythm" },
  notation: { style: "note", caption: "ideas, made clearer" },
  "tedx-uw": { style: "photo", caption: "ideas worth sharing" },
  estimathon: { style: "stamp", caption: "a good guess" },
  speedfriending: { style: "note", caption: "new faces, new friends" },
};

function ProjectImage({ project, enlarged = false }: { project: Project; enlarged?: boolean }) {
  if (enlarged) return <span className="project-preview project-preview-large">
    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 600px) 90vw, 560px" />
  </span>;

  const frame = projectFrames[project.id];
  return <span className={`project-preview project-scene project-scene-${frame.style}`}>
    <svg className="project-ink" viewBox="0 0 360 270" fill="none" aria-hidden="true">
      {frame.style === "record" ? <g><ellipse cx="181" cy="134" rx="153" ry="87" transform="rotate(-22 181 134)" /><ellipse cx="181" cy="134" rx="143" ry="72" transform="rotate(29 181 134)" /><path d="M180 16v238M18 135h324" opacity=".3" /></g> : <g><path d="M310 30l3 10 10 3-10 3-3 10-3-10-10-3 10-3zM31 215l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" /><path d="M283 229q16-14 28-3t26-3M283 237q16-14 28-3t26-3" opacity=".5" /></g>}
    </svg>
    <span className="project-paper">
      <span className="project-paper-label" aria-hidden="true">{frame.style === "stamp" ? "Collected / " : "From the notebook / "}{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
      <span className="project-photo"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 75vw, (max-width: 1260px) 26vw, 320px" /></span>
      <span className="project-paper-caption" aria-hidden="true">{frame.caption}</span>
    </span>
  </span>;
}

export function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Project>(projects[0]);

  function openProject(project: Project) {
    setSelected(project);
    dialog.current?.showModal();
  }

  function projectCard(project: Project) {
    return <article className="project" key={project.id}>
      <button className="project-button" onClick={() => openProject(project)} aria-label={`Open ${project.title}`}>
        <ProjectImage project={project} />
        <span className="eyebrow project-category">{project.category}</span>
        <span className="project-title">{project.title}<Arrow /></span>
      </button>
      <p>{project.description}</p>
    </article>;
  }

  return <>
    <div className="project-grid">
      {projects.map(project => projectCard(project))}
    </div>
    <dialog className="project-dialog" ref={dialog} aria-labelledby="project-dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-content">
        <button className="dialog-close" aria-label="Close project" onClick={() => dialog.current?.close()}>×</button>
        <ProjectImage project={selected} enlarged />
        <p className="eyebrow">{selected.category}</p>
        <h2 id="project-dialog-title">{selected.title}</h2>
        <p>{selected.description}</p>
        <button className="text-link" onClick={() => dialog.current?.close()}>Back to the notebook <Arrow /></button>
      </div>
    </dialog>
  </>;
}
