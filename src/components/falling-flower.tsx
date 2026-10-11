"use client";

import { useEffect, useRef } from "react";
import { flowerBounds, QuynhFlower } from "./quynh-flower";
import "./falling-flower.css";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const mix = (from: number, to: number, progress: number) => from + (to - from) * progress;
const smooth = (value: number) => value * value * (3 - 2 * value);

export function FallingFlower() {
  const flightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flight = flightRef.current;
    const portrait = document.querySelector<SVGSVGElement>(".portrait-image");
    const landing = document.querySelector<HTMLElement>(".flower-landing");
    const notebook = document.querySelector<HTMLElement>(".notebook");
    if (!flight || !portrait || !landing || !notebook) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let needsMeasure = true;
    let disposed = false;
    let geometry: {
      startX: number; startY: number; startWidth: number;
      endX: number; endY: number; endWidth: number;
      startScroll: number; endScroll: number; mobile: boolean;
    } | undefined;

    function measure() {
      if (!portrait || !landing) return;
      // getScreenCTM includes the SVG's letterboxing and responsive scale.
      const matrix = portrait.getScreenCTM();
      if (!matrix) return;
      const source = new DOMPoint(flowerBounds.x + flowerBounds.width / 2, flowerBounds.y + flowerBounds.height / 2).matrixTransform(matrix);
      const target = landing.getBoundingClientRect();
      const startY = source.y + window.scrollY;
      const endY = target.top + window.scrollY + target.height / 2;
      const startScroll = Math.max(0, startY - window.innerHeight * 0.72);
      geometry = {
        startX: source.x + window.scrollX, startY,
        startWidth: flowerBounds.width * Math.hypot(matrix.a, matrix.b),
        endX: target.left + window.scrollX + target.width / 2,
        endY, endWidth: target.width,
        startScroll, endScroll: Math.max(startScroll + 240, endY - window.innerHeight * 0.55),
        mobile: window.innerWidth <= 700,
      };
    }

    function render() {
      frame = 0;
      if (!flight || !notebook) return;
      if (reducedMotion.matches) {
        delete notebook.dataset.flowerFlight;
        flight.style.visibility = "hidden";
        return;
      }
      if (needsMeasure) {
        measure();
        needsMeasure = false;
      }
      if (!geometry) return;
      const g = geometry;
      const progress = clamp((window.scrollY - g.startScroll) / (g.endScroll - g.startScroll));
      // A short hinge at the stem, followed by two rounded, diminishing sweeps.
      const travel = smooth(clamp((progress - 0.065) / 0.935));
      const breeze = Math.sin(travel * Math.PI * 4) * Math.sin(travel * Math.PI);
      // On desktop, drift beside the footer first and approach the landing
      // from the right, below the section label.
      const across = g.mobile ? travel : smooth(clamp((travel - 0.45) / 0.55));
      const down = g.mobile ? travel : smooth(clamp(travel / 0.8));
      let x = mix(g.startX, g.endX, across) + breeze * (g.mobile ? 10 : 85);
      const y = mix(g.startY, g.endY, down);
      const width = g.mobile
        ? mix(mix(g.startWidth, 40, smooth(clamp(progress * 3))), g.endWidth, smooth(clamp((progress - 0.8) / 0.2)))
        : mix(g.startWidth, g.endWidth, smooth(clamp(progress * 1.5)));
      const tilt = Math.sin(clamp(progress / 0.16) * Math.PI) * 12;
      const rotation = tilt + breeze * 18 - 16 * travel;
      if (g.mobile) {
        // Follow the right margin while passing the stacked introduction.
        const radians = rotation * Math.PI / 180;
        const halfExtent = width * (Math.abs(Math.cos(radians)) + flowerBounds.height / flowerBounds.width * Math.abs(Math.sin(radians))) / 2;
        const marginX = document.documentElement.clientWidth - halfExtent - 4;
        const skirt = smooth(clamp(travel / 0.15)) * (1 - smooth(clamp((travel - 0.85) / 0.15)));
        x = mix(x, marginX - (1 + Math.sin(travel * Math.PI * 4)) * 4, skirt);
      }
      flight.style.transform = `translate3d(${x - window.scrollX}px, ${y - window.scrollY}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${width / flowerBounds.width})`;
      flight.style.visibility = "visible";
      notebook.dataset.flowerFlight = "ready";
    }

    function schedule() {
      if (!frame && !disposed) frame = window.requestAnimationFrame(render);
    }
    function resize() {
      needsMeasure = true;
      schedule();
    }

    const observer = new ResizeObserver(resize);
    observer.observe(portrait);
    observer.observe(landing);
    observer.observe(notebook);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("pageshow", resize);
    reducedMotion.addEventListener("change", resize);
    document.fonts.ready.then(() => { if (!disposed) resize(); });
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pageshow", resize);
      reducedMotion.removeEventListener("change", resize);
      delete notebook.dataset.flowerFlight;
    };
  }, []);

  return <div ref={flightRef} className="flower-flight" aria-hidden="true"><QuynhFlower /></div>;
}
