import type { SVGProps } from "react";

export function Arrow({ down = false }: { down?: boolean }) {
  return <svg className={`arrow${down ? " arrow-down" : ""}`} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>;
}
export function Sprig(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 100 140" fill="none" aria-hidden="true" {...props}><g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M49 134c-5-28-4-70 8-108"/><path d="M52 44C31 32 39 12 43 8c13 8 17 23 9 36Zm-3 18C66 40 79 39 89 41c-5 17-22 22-40 21Zm-1 21C29 81 15 70 12 53c16 1 30 12 36 30Zm-3 18c16-23 34-28 46-28-6 20-24 28-46 28Zm0 14C24 114 14 103 7 88c18 1 31 11 38 27Z"/><path d="M51 42 44 18m7 41 27-13M44 79 21 61m27 37 31-17m-36 30L18 95"/></g></svg>;
}
export function JoyIcon({ kind }: { kind: "book" | "camera" | "cup" | "plant" }) {
  return <svg className="joy-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    {kind === "book" && <><path d="M20 32V8C14 4 6 5 3 7v23c6-3 12-2 17 2Zm0 0c5-4 11-5 17-2V7c-5-2-12-2-17 1"/><path d="M20 32v3"/></>}
    {kind === "camera" && <><path d="M4 12h9l3-5h9l3 5h8v22H4Z"/><circle cx="20" cy="23" r="6"/><path d="M29 16h3"/></>}
    {kind === "cup" && <><path d="M7 13h22v13c0 7-5 10-11 10S7 32 7 26V13Zm22 2h4c8 0 7 13-4 12"/><path d="M13 8c-3-3 3-3 0-6m7 6c-3-3 3-3 0-6m7 6c-3-3 3-3 0-6"/></>}
    {kind === "plant" && <><path d="M10 36h22M21 35V18m0 10C7 30 6 18 7 16c10 0 15 5 14 12Zm0-8C18 7 26 3 32 3c2 9-2 17-11 17Z"/><path d="m21 20 6-9m-6 16-8-6"/></>}
  </g></svg>;
}
export function Envelope() {
  return <svg className="envelope" viewBox="0 0 320 220" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round"><path d="m47 68 223-28 24 143-233 24-14-139Z"/><path d="m47 68 124 72 99-100M61 207l86-82m147 58-102-65"/><path d="M234 46c-4-13-26-21-28-37-2-20 22-20 30-7 14-28 43-13 27 11-7 11-21 23-29 33Z" transform="translate(-12 18) scale(.9)"/></g></svg>;
}
export function ProjectArt({ kind }: { kind: string }) {
  return <div className={`project-art art-${kind}`} aria-hidden="true">
    {kind === "botanical" && <div className="botanical-paper"><span className="paper-label">Collected / No. 01</span><Sprig /><span className="paper-caption">The beauty in small things.</span></div>}
    {kind === "orbit" && <><svg className="orbit-drawing" viewBox="0 0 360 230" fill="none"><g stroke="currentColor"><path className="orbit-guides" d="M180 5v220M10 115h340"/><ellipse cx="180" cy="125" rx="121" ry="63" transform="rotate(12 180 125)"/><ellipse cx="187" cy="118" rx="116" ry="57" transform="rotate(-33 187 118)"/><path d="M114 178C145 100 190 55 274 31c73 53 39 107-56 142-48 17-83 16-104 5Z"/></g></svg><span className="art-label">An exercise in possibility</span></>}
    {kind === "journal" && <div className="journal-book"><div className="journal-left"><span>Notes from<br />somewhere.</span><div className="journal-lines" /></div><div className="journal-right"><svg viewBox="0 0 140 140" fill="none"><g stroke="currentColor" strokeWidth="1.2"><circle cx="80" cy="43" r="15"/><path d="M10 101c18-27 34-26 50-8 22-29 40-28 66 6M8 111c36-9 67-7 121 0M9 121c38-5 70-2 112 4"/></g></svg></div></div>}
  </div>;
}
