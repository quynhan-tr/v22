"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/content/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/illustrations";

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "joys", label: "Joy" },
];

function NavigationLinks({
  showLabels = false,
  activeSection,
}: {
  showLabels?: boolean;
  activeSection: string | null;
}) {
  return (
    <>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="section-link"
          aria-current={activeSection === id ? "location" : undefined}
        >
          {label}
        </a>
      ))}
      <div className="social-links">
        <a href={`mailto:${portfolio.email}`} aria-label="Email An Tran">
          <MailIcon />
          {showLabels && <span>Email</span>}
        </a>
        <a
          href="https://www.linkedin.com/in/quynhan05/"
          target="_blank"
          rel="noreferrer"
          aria-label="An Tran on LinkedIn"
        >
          <LinkedInIcon />
          {showLabels && <span>LinkedIn</span>}
        </a>
        <a
          href="https://github.com/quynhan-tr"
          target="_blank"
          rel="noreferrer"
          aria-label="An Tran on GitHub"
        >
          <GitHubIcon />
          {showLabels && <span>GitHub</span>}
        </a>
      </div>
    </>
  );
}

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const closeMenu = () => setMenuClosing(true);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)");
    const closeOnDesktop = () => {
      if (desktop.matches) menuRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  // Sticky header that moves with the scroll: scrolling down pushes it off
  // the top 1:1 (as if it weren't sticky), scrolling up pulls it back in.
  // When scrolling stops halfway, it settles to fully shown or hidden.
  // Written straight to the DOM so scrolling never re-renders React.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const headerElement = header;
    let collapse = 0;
    let visibleHeight = 0;
    let offset = 0;
    let previousY = Math.max(0, window.scrollY);
    let direction = 0;
    let frame = 0;

    function measure() {
      collapse = -parseFloat(getComputedStyle(headerElement).top) || 1;
      visibleHeight = headerElement.offsetHeight - collapse;
    }

    function apply() {
      headerElement.style.setProperty("--header-offset", `${offset}px`);
    }

    function update() {
      frame = 0;
      headerElement.removeAttribute("data-settling");
      const y = Math.max(0, window.scrollY);
      const delta = y - previousY;
      if (delta) direction = Math.sign(delta);
      previousY = y;

      headerElement.style.setProperty(
        "--header-progress",
        String(Math.min(y / collapse, 1)),
      );
      // Never pushed further than the page has scrolled past the pin point,
      // so on the way down it leaves exactly as a non-sticky header would.
      const pinnedBy = Math.max(0, y - collapse);
      offset = Math.min(Math.max(offset + delta, 0), visibleHeight, pinnedBy);
      apply();
    }

    function settle() {
      if (offset <= 0 || offset >= visibleHeight) return;
      offset = direction < 0 ? 0 : visibleHeight;
      headerElement.setAttribute("data-settling", "");
      apply();
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    // Landing mid-page (reload, deep link) starts with the header tucked away.
    offset = window.scrollY > collapse ? visibleHeight : 0;
    apply();
    window.addEventListener("scrollend", settle);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", settle);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Highlight the section crossing a band just above the middle of the screen.
  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActiveSection(sections.find(({ id }) => visible.has(id))?.id ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const { id } of sections) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <a
        className="signature"
        href="#top"
        aria-label={`${portfolio.name} — back to top`}
      >
        {portfolio.name}
      </a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        <NavigationLinks activeSection={activeSection} />
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        onClick={() => {
          setMenuClosing(false);
          menuRef.current?.showModal();
          setMenuOpen(true);
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <dialog
        ref={menuRef}
        id="mobile-navigation"
        className="mobile-menu"
        data-closing={menuClosing}
        aria-labelledby="mobile-menu-title"
        onClose={() => {
          setMenuOpen(false);
          setMenuClosing(false);
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div
          className="mobile-menu-panel"
          onAnimationEnd={(event) => {
            if (
              event.target === event.currentTarget &&
              event.animationName === "menu-exit"
            ) {
              menuRef.current?.close();
            }
          }}
        >
          <div className="mobile-menu-heading">
            <span id="mobile-menu-title" className="signature">Menu</span>
            <button
              className="menu-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12M6 18 18 6" />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) {
                closeMenu();
              }
            }}
          >
            <NavigationLinks showLabels activeSection={activeSection} />
          </nav>
        </div>
      </dialog>
    </header>
  );
}
