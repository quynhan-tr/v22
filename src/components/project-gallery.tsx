"use client";
import { useRef, useState } from "react";
import { projects } from "@/content/portfolio";
import { Arrow, ProjectArt } from "./illustrations";

export function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<(typeof projects)[number]>(projects[0]);
  function openProject(project: (typeof projects)[number]) {
    setSelected(project);
    dialog.current?.showModal();
  }
  return <>
    <div className="project-grid">{projects.map(project => <article className="project" key={project.id}>
      <button className="project-button" onClick={() => openProject(project)} aria-label={`Open ${project.title}`}><ProjectArt kind={project.art} /><span className="eyebrow project-category">{project.category}</span><span className="project-title">{project.title}<Arrow /></span></button>
      <p>{project.description}</p>
    </article>)}</div>
    <dialog className="project-dialog" ref={dialog} aria-labelledby="project-dialog-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dialog-content"><button className="dialog-close" aria-label="Close project" onClick={() => dialog.current?.close()}>×</button><ProjectArt kind={selected.art} /><p className="eyebrow">A page in progress · Sample project</p><h2 id="project-dialog-title">{selected.title}</h2><p>{selected.note}</p><button className="text-link" onClick={() => dialog.current?.close()}>Back to the notebook <Arrow /></button></div>
    </dialog>
  </>;
}
