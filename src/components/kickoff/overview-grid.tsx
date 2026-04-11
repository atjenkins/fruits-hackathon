import { cn } from "@/lib/utils";

const SLIDE_TITLES = [
  "The Big Squeeze",
  "It's a Conversation",
  "Models vs Surfaces",
  "Surface Options",
  "Giving AI More Context",
  "MCP",
  "How Prompting Works",
  "Context & Tokens",
  "Prompt Tips",
  "Pick Your Path",
  "Email Drafter",
  "Content Pipeline",
  "Full App",
  "Go Build",
];

interface OverviewGridProps {
  current: number;
  onSelect: (n: number) => void;
  onClose: () => void;
}

/** Full-screen overlay grid of all slides, toggled with Esc */
export const OverviewGrid = ({
  current,
  onSelect,
  onClose,
}: OverviewGridProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="grid max-h-[85vh] max-w-[75vw] grid-cols-7 gap-[0.8vw] overflow-y-auto p-[2vw]"
      onClick={(e) => e.stopPropagation()}
    >
      {SLIDE_TITLES.map((title, i) => (
        <button
          key={i}
          onClick={() => onSelect(i + 1)}
          className={cn(
            "flex aspect-video flex-col items-center justify-center rounded-lg border-2 bg-juice p-[0.6vw] text-center transition-all hover:scale-105 hover:shadow-lg",
            current === i + 1
              ? "border-primary shadow-md"
              : "border-transparent"
          )}
        >
          <span className="font-mono text-[1.2vw] font-bold text-primary">
            {i + 1}
          </span>
          <span className="mt-[0.2vw] text-[0.7vw] font-medium text-foreground">
            {title}
          </span>
        </button>
      ))}
    </div>
  </div>
);
