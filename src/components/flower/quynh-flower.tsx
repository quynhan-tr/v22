// Coordinates follow the original portrait. The contour passes through the
// petal edges so the upper stem and the leaf behind the blossom stay attached.
const flowerContour =
  "M1027 884Q1037 879 1048 883C1073 854 1114 833 1163 825L1140 863Q1183 874 1208 892L1208 911 1149 910Q1170 944 1197 959L1176 968 1151 963 1180 1005 1177 1014 1120 997 1119 1047 1108 1047 1080 1014 1065 1057 1053 1057 1036 1013 1017 996 1013 1037 1000 1037Q966 1000 984 976C988 960 1017 942 1025 904Q1021 889 1027 884Z";

export const flowerBounds = { x: 940, y: 805, width: 264, height: 256 };

export function FlowerCutoutDefinitions() {
  return (
    <>
      <clipPath id="quynh-blossom-clip">
        <path d={flowerContour} />
      </clipPath>
      <mask
        id="portrait-without-blossom"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1232"
        height="1277"
        style={{ maskType: "luminance" }}
      >
        <rect width="1232" height="1277" fill="white" />
        <path d={flowerContour} fill="black" />
      </mask>
    </>
  );
}

export function FlowerInk() {
  return (
    <g clipPath="url(#quynh-blossom-clip)">
      <rect
        width="1232"
        height="1277"
        fill="var(--ink)"
        mask="url(#portrait-ink)"
      />
    </g>
  );
}

export function QuynhFlower({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`${flowerBounds.x} ${flowerBounds.y} ${flowerBounds.width} ${flowerBounds.height}`}
      aria-hidden="true"
      focusable="false"
    >
      <FlowerInk />
    </svg>
  );
}
