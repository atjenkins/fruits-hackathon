import { cn } from "@/lib/utils";

/** Pre-computed segment endpoints to avoid SSR/client floating-point mismatch */
const SEGMENTS = Array.from({ length: 10 }, (_, i) => {
  const angle = (i * 36 * Math.PI) / 180;
  return {
    x2: Math.round(100 + 74 * Math.cos(angle)),
    y2: Math.round(100 + 74 * Math.sin(angle)),
  };
});

/** Small orange cross-section icon matching the hero branding */
export const OrangeSliceLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={cn("text-primary", className)}
    aria-hidden
  >
    <circle cx="100" cy="100" r="95" fill="currentColor" />
    <circle cx="100" cy="100" r="80" fill="#FFF3E0" />
    <circle cx="100" cy="100" r="74" className="fill-orange-light" />
    {SEGMENTS.map((seg, i) => (
      <line
        key={i}
        x1="100"
        y1="100"
        x2={seg.x2}
        y2={seg.y2}
        stroke="#FFF3E0"
        strokeWidth="3"
      />
    ))}
    <circle cx="100" cy="100" r="12" fill="#FFF3E0" />
  </svg>
);
