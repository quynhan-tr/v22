"use client";

import { useEffect, useRef } from "react";
import { flowerBounds, QuynhFlower } from "./quynh-flower";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const mix = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;
const smooth = (value: number) => value * value * (3 - 2 * value);
const cubic = (
  a: number,
  b: number,
  c: number,
  d: number,
  t: number,
) =>
  (1 - t) ** 3 * a +
  3 * (1 - t) ** 2 * t * b +
  3 * (1 - t) * t ** 2 * c +
  t ** 3 * d;

const TURN_END = 0.34;
const FALL_DURATION_MS = 3900;
const SCROLL_TRIGGER_PX = 8;
const LANDING_ROTATION = -90;
const ARC_HANDLE = 0.5522847498;

export function FallingFlower() {
  const flightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flight = flightRef.current;
    const portrait = document.getElementById(
      "portrait-artwork",
    ) as SVGSVGElement | null;
    const landing = document.getElementById("flower-landing");
    const notebook = document.getElementById("top");

    if (!flight || !portrait || !landing || !notebook) return;

    const flightElement = flight;
    const portraitElement = portrait;
    const landingElement = landing;
    const notebookElement = notebook;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let needsMeasure = true;
    let disposed = false;
    let phase: "attached" | "returning" | "falling" | "landed" =
      window.scrollY > SCROLL_TRIGGER_PX ? "landed" : "attached";
    let fallStartedAt = 0;
    let previousScrollY = window.scrollY;
    let geometry:
      | {
          startX: number;
          startY: number;
          startWidth: number;
          endX: number;
          endY: number;
          endWidth: number;
          viewportLeft: number;
          viewportRight: number;
          mobile: boolean;
        }
      | undefined;

    function measure() {
      const matrix = portraitElement.getScreenCTM();
      if (!matrix) return;

      const source = new DOMPoint(
        flowerBounds.x + flowerBounds.width / 2,
        flowerBounds.y + flowerBounds.height / 2,
      ).matrixTransform(matrix);
      const target = landingElement.getBoundingClientRect();
      const origin = notebookElement.getBoundingClientRect();

      // Use the scrolling container's coordinates so native scrolling moves
      // the flower and artwork together, without JS scroll compensation.
      geometry = {
        startX: source.x - origin.left,
        startY: source.y - origin.top,
        startWidth: flowerBounds.width * Math.hypot(matrix.a, matrix.b),
        endX: target.left - origin.left + target.width / 2,
        endY: target.top - origin.top + target.height / 2,
        endWidth: target.width,
        viewportLeft: -origin.left,
        viewportRight: document.documentElement.clientWidth - origin.left,
        mobile: window.innerWidth <= 700,
      };
    }

    function schedule() {
      if (!frame && !disposed) {
        frame = window.requestAnimationFrame(render);
      }
    }

    function render(time = performance.now()) {
      frame = 0;

      if (reducedMotion.matches) {
        delete notebookElement.dataset.flowerFlight;
        flightElement.style.visibility = "hidden";
        if (phase === "falling") phase = "landed";
        if (phase === "returning") phase = "attached";
        return;
      }

      const progress =
        phase === "falling"
          ? clamp((time - fallStartedAt) / FALL_DURATION_MS)
          : 0;
      if (phase === "falling" && progress === 1) phase = "landed";

      // At rest, show the flower belonging to the actual illustration or
      // landing section. Only the flight needs an animated overlay.
      if (phase !== "falling") {
        notebookElement.dataset.flowerFlight = phase;
        flightElement.style.visibility = "hidden";
        return;
      }

      if (needsMeasure) {
        measure();
        needsMeasure = false;
      }
      if (!geometry) return;

      const turn = smooth(clamp((progress - 0.025) / (TURN_END - 0.025)));
      const descent = smooth(progress);
      const air = Math.sin(Math.PI * progress) ** 1.5;
      const gust =
        Math.PI *
        (4.6 * progress + 0.12 * Math.sin(2 * Math.PI * progress));
      const flutter = Math.sin(gust) * air;
      const release = clamp(progress / 0.28);
      const releaseWiggle =
        Math.sin(release * Math.PI * 3) *
        Math.sin(release * Math.PI) ** 2;
      const bank = Math.cos(gust) * air * 19;
      const rotation =
        LANDING_ROTATION * turn + releaseWiggle * 13 + bank;
      const width = geometry.mobile
        ? mix(
            mix(geometry.startWidth, 40, turn),
            geometry.endWidth,
            smooth(clamp((progress - 0.82) / 0.18)),
          )
        : mix(geometry.startWidth, geometry.endWidth, descent);

      let x: number;
      if (geometry.mobile) {
        const railX = geometry.viewportRight - 33;
        const enterMargin = smooth(clamp(progress / 0.32));
        const arrive = smooth(clamp((progress - 0.76) / 0.24));
        x =
          mix(
            mix(geometry.startX, railX, enterMargin),
            geometry.endX,
            arrive,
          ) +
          flutter * 5;
      } else {
        const sweep = Math.min(
          150,
          Math.max(75, (geometry.startX - geometry.endX) * 0.36),
        );
        x =
          cubic(
            geometry.startX,
            geometry.startX,
            geometry.endX +
              (geometry.startX - geometry.endX) * ARC_HANDLE,
            geometry.endX,
            descent,
          ) +
          flutter * sweep +
          releaseWiggle * 5;
      }

      const drop = geometry.endY - geometry.startY;
      const lift =
        Math.sin(gust * 2) * air * air * Math.min(16, drop * 0.025);
      const arcY = geometry.mobile
        ? mix(geometry.startY, geometry.endY, descent)
        : cubic(
            geometry.startY,
            geometry.startY + drop * ARC_HANDLE,
            geometry.endY,
            geometry.endY,
            descent,
          );
      const y = arcY + lift;

      if (geometry.mobile) {
        const radians = (rotation * Math.PI) / 180;
        const halfExtent =
          (width *
            (Math.abs(Math.cos(radians)) +
              (flowerBounds.height / flowerBounds.width) *
                Math.abs(Math.sin(radians)))) /
          2;
        const marginX =
          geometry.viewportRight - halfExtent - 6;
        x = Math.min(
          marginX,
          Math.max(geometry.viewportLeft + halfExtent + 8, x),
        );
      }

      flightElement.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${width / flowerBounds.width})`;
      flightElement.style.visibility = "visible";
      notebookElement.dataset.flowerFlight = "falling";

      if (phase === "falling") schedule();
    }

    function resize() {
      needsMeasure = true;
      schedule();
    }

    function startFall() {
      phase = "falling";
      fallStartedAt = performance.now();
      needsMeasure = true;
      schedule();
    }

    function finishReturn(event: AnimationEvent) {
      if (event.animationName !== "portrait-flower-return" || phase !== "returning") {
        return;
      }

      phase = "attached";
      // Let the return finish before releasing again, even if the user has
      // already scrolled down. This avoids jumping to a fully opaque
      // flight cutout midway through the fade.
      if (!reducedMotion.matches && window.scrollY > SCROLL_TRIGGER_PX) {
        startFall();
      } else {
        schedule();
      }
    }

    function onScroll() {
      const scrollY = window.scrollY;

      if (
        !reducedMotion.matches &&
        phase === "attached" &&
        scrollY > SCROLL_TRIGGER_PX &&
        scrollY > previousScrollY
      ) {
        startFall();
      } else if ((phase === "falling" || phase === "landed") && scrollY <= 1) {
        phase = reducedMotion.matches ? "attached" : "returning";
        schedule();
      }

      previousScrollY = scrollY;
    }

    const observer = new ResizeObserver(resize);
    observer.observe(portraitElement);
    observer.observe(landingElement);
    observer.observe(notebookElement);
    portraitElement.addEventListener("animationend", finishReturn);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("pageshow", resize);
    reducedMotion.addEventListener("change", resize);
    document.fonts.ready.then(() => {
      if (!disposed) resize();
    });
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      portraitElement.removeEventListener("animationend", finishReturn);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pageshow", resize);
      reducedMotion.removeEventListener("change", resize);
      delete notebookElement.dataset.flowerFlight;
    };
  }, []);

  return (
    <div ref={flightRef} className="flower-flight" aria-hidden="true">
      <QuynhFlower />
    </div>
  );
}
