import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { OrangeSliceLogo } from "./orange-slice-logo";

interface SlideProps {
  id: string;
  number: number;
  total: number;
  children: ReactNode;
  className?: string;
}

/** Viewport-sized slide wrapper with consistent counter and persistent logo */
export const Slide = forwardRef<HTMLElement, SlideProps>(
  ({ id, number, total, children, className }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative flex h-screen w-screen shrink-0 snap-start flex-col overflow-hidden bg-juice",
        className
      )}
    >
      <div className="absolute right-[2vw] top-[1.5vw] font-mono text-[0.9vw] text-muted-foreground">
        {number} / {total}
      </div>
      <div className="flex flex-1 flex-col px-[4vw] py-[2.5vw]">{children}</div>
      <div className="absolute bottom-[1.5vw] right-[2vw]">
        <OrangeSliceLogo className="h-[2vw] w-[2vw] opacity-60" />
      </div>
    </section>
  )
);

Slide.displayName = "Slide";
