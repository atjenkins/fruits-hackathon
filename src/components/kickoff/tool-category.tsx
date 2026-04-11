import { cn } from "@/lib/utils";
import { Pill } from "./pill";

interface ToolCategoryProps {
  icon: string;
  title: string;
  description: string;
  tools: string[];
  className?: string;
}

/** Column with icon, header, description, and tool pills */
export const ToolCategory = ({
  icon,
  title,
  description,
  tools,
  className,
}: ToolCategoryProps) => (
  <div
    className={cn(
      "flex flex-col items-center gap-3 rounded-xl bg-white/60 p-4 text-center",
      className
    )}
  >
    <span className="text-3xl">{icon}</span>
    <h3 className="font-heading text-lg font-semibold">{title}</h3>
    <p className="text-xs text-muted-foreground">{description}</p>
    <div className="flex flex-wrap justify-center gap-1.5">
      {tools.map((tool) => (
        <Pill key={tool} className="text-xs">
          {tool}
        </Pill>
      ))}
    </div>
  </div>
);
