"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    // Anything already scrolled past (e.g. reload mid-page) stays visible.
    for (const target of targets) {
      if (target.getBoundingClientRect().bottom < 0) {
        target.classList.add("is-revealed");
      } else {
        observer.observe(target);
      }
    }
    document.documentElement.classList.add("reveal-armed");

    return () => observer.disconnect();
  }, []);

  return null;
}
