import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

/** Large heading for a slide */
export const SlideTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "font-heading text-[2.8vw] font-bold text-foreground",
      className
    )}
  >
    {children}
  </h2>
);

/** Small label above a slide title */
export const SlideEyebrow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={cn(
      "mb-[0.3vw] text-[1vw] font-semibold uppercase tracking-widest text-primary",
      className
    )}
  >
    {children}
  </p>
);
