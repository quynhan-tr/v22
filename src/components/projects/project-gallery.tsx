"use client";

import Image, { getImageProps } from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { flushSync, preload } from "react-dom";
import { Arrow } from "@/components/ui/illustrations";
import { portfolio, type PortfolioProject } from "@/content/portfolio";

type ProjectPreviewProps = {
  project: PortfolioProject;
  index?: number;
};

const popupImageSizes = "(max-width: 760px) calc(100vw - 88px), 648px";

function preloadProjectImage(project: PortfolioProject) {
  const { props } = getImageProps({
    src: project.image,
    alt: project.alt,
    fill: true,
    sizes: popupImageSizes,
  });

  preload(props.src, {
    as: "image",
    imageSrcSet: props.srcSet,
    imageSizes: props.sizes,
  });
}

// Fetches and decodes the popup image so the open morph lands on the real
// picture rather than the loading placeholder. Capped so a slow network never
// holds the click hostage.
function loadProjectImage(project: PortfolioProject) {
  const { props } = getImageProps({
    src: project.image,
    alt: project.alt,
    fill: true,
    sizes: popupImageSizes,
  });
  const image = new window.Image();
  if (props.sizes) image.sizes = props.sizes;
  if (props.srcSet) image.srcset = props.srcSet;
  image.src = props.src;

  return Promise.race([
    image.decode().catch(() => {}),
    new Promise((resolve) => setTimeout(resolve, 250)),
  ]);
}

function canMorph() {
  return (
    "startViewTransition" in document &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function PopupPreview({ project }: { project: PortfolioProject }) {
  const image = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  // A decoded image is complete on mount; show it in the same commit so the
  // view transition snapshot captures it.
  useLayoutEffect(() => {
    if (image.current?.complete && image.current.naturalWidth > 0) {
      setStatus("loaded");
    }
  }, []);

  return (
    <span
      className="project-preview project-preview-large"
      aria-busy={status === "loading"}
    >
      {status !== "loaded" && (
        <span className="project-image-placeholder" role="status">
          {status === "error" ? "Image unavailable" : "Loading image…"}
        </span>
      )}
      <Image
        ref={image}
        src={project.image}
        alt={project.alt}
        fill
        sizes={popupImageSizes}
        loading="eager"
        style={{ opacity: status === "loaded" ? 1 : 0 }}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </span>
  );
}

function ProjectPreview({
  project,
  index = 0,
}: ProjectPreviewProps) {
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
  onOpen: (project: PortfolioProject, photo: HTMLElement | null) => void;
}) {
  return (
    <article
      className="project"
      data-reveal
      style={{ "--reveal-index": index % 3 } as React.CSSProperties}
    >
      <button
        className="project-button"
        onPointerEnter={() => preloadProjectImage(project)}
        onPointerDown={() => preloadProjectImage(project)}
        onFocus={() => preloadProjectImage(project)}
        onClick={(event) =>
          onOpen(
            project,
            event.currentTarget.querySelector<HTMLElement>(".project-photo"),
          )
        }
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

function PopupDescription({ description }: { description: string }) {
  return (
    <div className="project-popup-description">
      {description.split("*").map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>
          {paragraph
            .trim()
            .split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g)
            .map((part, partIndex) => {
              const link = part.match(
                /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/,
              );

              return link ? (
                <a
                  href={link[2]}
                  target="_blank"
                  rel="noreferrer"
                  key={partIndex}
                >
                  {link[1]}
                </a>
              ) : (
                part
              );
            })}
        </p>
      ))}
    </div>
  );
}

export function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const openedFrom = useRef<HTMLElement | null>(null);
  const morphing = useRef(false);

  // The card photo and the popup image share one view-transition-name, so the
  // browser morphs one into the other. Names are only set for the duration of
  // a transition (the popup's comes from the `data-project-morph` rule).
  function morph(update: () => void, photo: HTMLElement) {
    const root = document.documentElement;
    morphing.current = true;
    root.dataset.projectMorph = "";
    const transition = document.startViewTransition(update);
    // A skipped transition still runs `update`; only the animation is lost.
    transition.ready.catch(() => {});
    transition.finished.finally(() => {
      photo.style.viewTransitionName = "";
      delete root.dataset.projectMorph;
      morphing.current = false;
    });
  }

  async function openProject(project: PortfolioProject, photo: HTMLElement | null) {
    if (morphing.current) return;
    preloadProjectImage(project);

    const show = () => {
      // Commit the new content before the native dialog becomes visible.
      flushSync(() => setSelected(project));
      dialog.current?.showModal();
    };

    openedFrom.current = photo;
    if (!photo || !canMorph()) return show();

    morphing.current = true;
    await loadProjectImage(project);
    photo.style.viewTransitionName = "project-photo";
    morph(() => {
      photo.style.viewTransitionName = "";
      show();
    }, photo);
  }

  function closeProject() {
    const current = dialog.current;
    const photo = openedFrom.current;
    if (!current?.open || morphing.current) return;
    if (!photo || !canMorph()) return current.close();

    morph(() => {
      current.close();
      photo.style.viewTransitionName = "project-photo";
    }, photo);
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
        onCancel={(event) => {
          event.preventDefault();
          closeProject();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProject();
        }}
      >
        {selected && (
          <div className="dialog-content">
            <button
              className="dialog-close"
              aria-label="Close project"
              onClick={closeProject}
            >
              ×
            </button>
            <PopupPreview key={selected.id} project={selected} />
            <div className="dialog-meta">
              <p className="eyebrow">{selected.category}</p>
              <div className="project-links">
                {selected.links.map((link) => (
                  <a
                    className="text-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    key={link.name}
                  >
                    {link.name} <Arrow />
                  </a>
                ))}
              </div>
            </div>
            <h2 id="project-dialog-title">{selected.title}</h2>
            <PopupDescription description={selected.popupDescription} />
          </div>
        )}
      </dialog>
    </>
  );
}
