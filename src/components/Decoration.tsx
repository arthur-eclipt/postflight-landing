type SvgProps = { className?: string };

/**
 * Stylised lat/lon grid + five great-circle arcs between famous airport pairs.
 * Renders at low opacity behind the hero — currentColor drives the grid,
 * gold strokes drive the arcs.
 */
export function GreatCircleMap({ className }: SvgProps) {
  const latitudes = [120, 200, 280, 360, 440, 520, 600, 680];
  const longitudes = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500,
  ];

  const arcs: Array<{
    d: string;
    a: { cx: number; cy: number };
    b: { cx: number; cy: number };
  }> = [
    {
      d: "M 520 280 Q 380 160 240 300",
      a: { cx: 520, cy: 280 },
      b: { cx: 240, cy: 300 },
    },
    {
      d: "M 520 280 Q 280 120 120 320",
      a: { cx: 520, cy: 280 },
      b: { cx: 120, cy: 320 },
    },
    {
      d: "M 600 260 Q 760 220 920 340",
      a: { cx: 600, cy: 260 },
      b: { cx: 920, cy: 340 },
    },
    {
      d: "M 1320 600 Q 1380 660 1440 600",
      a: { cx: 1320, cy: 600 },
      b: { cx: 1440, cy: 600 },
    },
    {
      d: "M 200 360 Q 800 140 1240 320",
      a: { cx: 200, cy: 360 },
      b: { cx: 1240, cy: 320 },
    },
  ];

  return (
    <svg
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      >
        {latitudes.map((y) => (
          <path
            key={`lat-${y}`}
            d={`M 0 ${y} Q 800 ${y - 12} 1600 ${y}`}
          />
        ))}
        {longitudes.map((x) => (
          <line
            key={`lon-${x}`}
            x1={x}
            y1="40"
            x2={x}
            y2="760"
          />
        ))}
      </g>

      <g
        stroke="#C9A961"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      >
        {arcs.map((arc, i) => (
          <path key={i} d={arc.d} />
        ))}
      </g>

      <g fill="#C9A961">
        {arcs.flatMap((arc, i) => [
          <circle key={`a-${i}`} cx={arc.a.cx} cy={arc.a.cy} r="3" />,
          <circle key={`b-${i}`} cx={arc.b.cx} cy={arc.b.cy} r="3" />,
        ])}
      </g>
    </svg>
  );
}

export function CrosshairCorner({ className }: SvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A961"
      strokeWidth="1"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 2 2 L 12 2" />
      <path d="M 2 2 L 2 12" />
    </svg>
  );
}
