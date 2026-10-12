import type { JoyIconKind } from "@/content/portfolio";

export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className={`arrow${down ? " arrow-down" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}

export function JoyIcon({ kind }: { kind: JoyIconKind }) {
  return (
    <svg
      className="joy-icon"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "book" && (
          <>
            <path d="M20 32V8C14 4 6 5 3 7v23c6-3 12-2 17 2Zm0 0c5-4 11-5 17-2V7c-5-2-12-2-17 1" />
            <path d="M20 32v3" />
          </>
        )}
        {kind === "camera" && (
          <>
            <path d="M4 12h9l3-5h9l3 5h8v22H4Z" />
            <circle cx="20" cy="23" r="6" />
            <path d="M29 16h3" />
          </>
        )}
        {kind === "cup" && (
          <>
            <path d="M7 13h22v13c0 7-5 10-11 10S7 32 7 26V13Zm22 2h4c8 0 7 13-4 12" />
            <path d="M13 8c-3-3 3-3 0-6m7 6c-3-3 3-3 0-6m7 6c-3-3 3-3 0-6" />
          </>
        )}
        {kind === "plant" && (
          <>
            <path d="M10 36h22M21 35V18m0 10C7 30 6 18 7 16c10 0 15 5 14 12Zm0-8C18 7 26 3 32 3c2 9-2 17-11 17Z" />
            <path d="m21 20 6-9m-6 16-8-6" />
          </>
        )}
      </g>
    </svg>
  );
}

export function Envelope() {
  return (
    <svg
      className="envelope"
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m47 68 223-28 24 143-233 24-14-139Z" />
        <path d="m47 68 124 72 99-100M61 207l86-82m147 58-102-65" />
        <path
          d="M234 46c-4-13-26-21-28-37-2-20 22-20 30-7 14-28 43-13 27 11-7 11-21 23-29 33Z"
          transform="translate(-12 18) scale(.9)"
        />
      </g>
    </svg>
  );
}
