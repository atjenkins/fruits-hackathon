import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "orange" | "muted";
}

/** Rounded badge for tool and tech names */
export const Pill = ({
  children,
  className,
  variant = "default",
}: PillProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-[0.7vw] py-[0.2vw] text-[0.9vw] font-medium",
      variant === "default" && "bg-white/80 text-foreground",
      variant === "orange" && "bg-primary/15 text-primary",
      variant === "muted" && "bg-muted text-muted-foreground",
      className
    )}
  >
    {children}
  </span>
);
