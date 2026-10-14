import {
  FlowerCutoutDefinitions,
  FlowerInk,
} from "@/components/flower/quynh-flower";

type PortraitDetailProps = {
  label: string;
  hotspot: string;
  children: React.ReactNode;
};

function PortraitDetail({
  label,
  hotspot,
  children,
}: PortraitDetailProps) {
  return (
    <g className="portrait-detail" tabIndex={0} role="img" aria-label={label}>
      <path className="portrait-hotspot" d={hotspot} />
      <g className="portrait-callout" aria-hidden="true">
        {children}
      </g>
    </g>
  );
}

export function PortraitIllustration() {
  return (
    <figure className="portrait">
      <svg
        id="portrait-artwork"
        className="portrait-image"
        viewBox="0 0 1232 1277"
        preserveAspectRatio="xMinYMid meet"
        role="group"
        aria-label="Portrait details: nón lá, áo dài, and hoa quỳnh"
      >
        <defs>
          <FlowerCutoutDefinitions />
          <filter
            id="portrait-thin-strokes"
            filterUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1232"
            height="1277"
          >
            <feMorphology
              in="SourceAlpha"
              operator="erode"
              radius="1.35"
              result="thin"
            />
            <feComponentTransfer in="SourceAlpha" result="fine">
              <feFuncA type="linear" slope="0.12" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="fine" />
              <feMergeNode in="thin" />
            </feMerge>
          </filter>
          <mask
            id="portrait-ink"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1232"
            height="1277"
            style={{ maskType: "alpha" }}
          >
            <image
              href="/images/portrait-proportions-v14.png"
              width="1232"
              height="1277"
              filter="url(#portrait-thin-strokes)"
            />
          </mask>
        </defs>

        <g
          mask="url(#portrait-without-blossom)"
          role="img"
          aria-label="A blue ink doodle of An wearing an áo dài and a conical hat, holding epiphyllum flowers."
        >
          <rect
            width="1232"
            height="1277"
            fill="var(--ink)"
            mask="url(#portrait-ink)"
          />
        </g>
        <g className="portrait-attached-flower" aria-hidden="true">
          <FlowerInk />
        </g>

        <PortraitDetail
          label="Nón lá — viet conical hat"
          hotspot="M420 20 850 150Q860 180 785 220L320 420Q265 445 270 400Z"
        >
          <text x="215" y="175" textAnchor="end">
            nón lá
          </text>
          <text className="portrait-callout-subtitle" x="215" y="209" textAnchor="end">
            viet conical hat
          </text>
          <path
            className="portrait-callout-arrow"
            d="M235 175Q298 175 334 232m-20-9 20 9 2-22"
          />
        </PortraitDetail>

        <PortraitDetail
          label="Áo dài — traditional viet dress"
          hotspot="M535 430Q590 465 655 475Q785 490 755 665L725 710 680 805 785 970 770 1248 260 1248 370 920Q245 920 260 810L285 700Q395 780 480 728L515 575Z"
        >
          <text x="180" y="1040" textAnchor="end">
            áo dài
          </text>
          <text className="portrait-callout-subtitle" x="180" y="1074" textAnchor="end">
            traditional viet dress
          </text>
          <path
            className="portrait-callout-arrow"
            d="M205 1040Q280 1080 336 1032m-21 2 21-2-4 21"
          />
        </PortraitDetail>

        <PortraitDetail
          label="Hoa quỳnh — epiphyllum, my middle name"
          hotspot="M855 470 910 545 958 620 1020 550 1110 620 1198 720 1150 790 1215 865 1190 1005 1060 1065 955 1025 900 975 795 935 670 845 670 720 750 635 810 670Z"
        >
          <text
            className="portrait-callout-flower-label"
            x="850"
            y="1140"
            textAnchor="start"
          >
            hoa quỳnh
          </text>
          <text
            className="portrait-callout-subtitle"
            x="850"
            y="1174"
            textAnchor="start"
          >
            epiphyllum · my middle name
          </text>
          <path
            className="portrait-callout-arrow"
            d="M1030 1135Q1135 1110 1107 1054m-6 22 6-22 21 10"
          />
        </PortraitDetail>
      </svg>
    </figure>
  );
}
