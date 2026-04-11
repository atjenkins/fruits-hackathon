import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ExampleSlideContentProps {
  visual: ReactNode;
  difficulty: { label: string; color: string; emoji: string };
  time: string;
  tools: string;
  whatYouBuild: string;
  whyItsGreat: string;
  className?: string;
}

/** Split-layout template for example project slides */
export const ExampleSlideContent = ({
  visual,
  difficulty,
  time,
  tools,
  whatYouBuild,
  whyItsGreat,
  className,
}: ExampleSlideContentProps) => (
  <div className={cn("mt-[1vw] grid flex-1 grid-cols-2 gap-[2vw]", className)}>
    <div className="flex items-center justify-center">{visual}</div>
    <div className="flex flex-col justify-center gap-[1vw]">
      <div className="flex items-center gap-[0.8vw]">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-[0.7vw] py-[0.2vw] text-[0.95vw] font-semibold",
            difficulty.color
          )}
        >
          {difficulty.emoji} {difficulty.label}
        </span>
        <span className="text-[0.95vw] text-muted-foreground">{time}</span>
      </div>
      <p className="text-[1vw]">
        <span className="font-semibold">Tools:</span> {tools}
      </p>
      <div>
        <h4 className="mb-[0.2vw] font-heading text-[1vw] font-semibold">
          What you build
        </h4>
        <p className="text-[0.95vw] text-muted-foreground">{whatYouBuild}</p>
      </div>
      <div>
        <h4 className="mb-[0.2vw] font-heading text-[1vw] font-semibold">
          Why it&apos;s great
        </h4>
        <p className="text-[0.95vw] text-muted-foreground">{whyItsGreat}</p>
      </div>
    </div>
  </div>
);
