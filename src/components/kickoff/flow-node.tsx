import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface FlowNodeProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "default";
}

/** Styled node for flowchart diagrams */
export const FlowNode = ({
  children,
  className,
  variant = "default",
}: FlowNodeProps) => (
  <div
    className={cn(
      "flex items-center justify-center rounded-xl px-[1vw] py-[0.5vw] text-center text-[0.95vw] font-medium shadow-sm",
      variant === "primary" && "bg-primary text-primary-foreground",
      variant === "default" && "border border-border bg-white text-foreground",
      className
    )}
  >
    {children}
  </div>
);

interface FlowArrowProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  curved?: boolean;
}

/** SVG path connector between flow nodes — render inside an <svg> parent */
export const FlowArrow = ({ from, to, curved = true }: FlowArrowProps) => {
  const midY = (from.y + to.y) / 2;
  const d = curved
    ? `M ${from.x} ${from.y} C ${from.x} ${midY} ${to.x} ${midY} ${to.x} ${to.y}`
    : `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  return <path d={d} fill="none" stroke="currentColor" strokeWidth="2" />;
};
