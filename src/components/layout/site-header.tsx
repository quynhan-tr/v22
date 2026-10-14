"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/content/portfolio";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/illustrations";

function NavigationLinks({ showLabels = false }: { showLabels?: boolean }) {
  return (
    <>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#joys">Joy</a>
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
  const menuRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const closeMenu = () => setMenuClosing(true);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)");
    const closeOnDesktop = () => {
      if (desktop.matches) menuRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <a
        className="signature"
        href="#top"
        aria-label={`${portfolio.name} — back to top`}
      >
        {portfolio.name}
      </a>
      <nav className="desktop-navigation" aria-label="Main navigation">
        <NavigationLinks />
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
            <NavigationLinks showLabels />
          </nav>
        </div>
      </dialog>
    </header>
  );
}
