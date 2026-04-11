import { cn } from "@/lib/utils";

interface StatCardProps {
  number: number;
  title: string;
  description: string;
  bad?: string;
  good?: string;
  className?: string;
}

/** Numbered tip card for grids */
export const StatCard = ({
  number,
  title,
  description,
  bad,
  good,
  className,
}: StatCardProps) => (
  <div className={cn("rounded-xl bg-white/80 p-[1.2vw]", className)}>
    <div className="mb-[0.4vw] flex items-center gap-[0.5vw]">
      <span className="flex h-[1.6vw] w-[1.6vw] shrink-0 items-center justify-center rounded-full bg-primary text-[0.8vw] font-bold text-primary-foreground">
        {number}
      </span>
      <h3 className="font-heading text-[1.1vw] font-semibold">{title}</h3>
    </div>
    <p className="text-[0.95vw] text-muted-foreground">{description}</p>
    {(bad || good) && (
      <div className="mt-[0.5vw] space-y-[0.2vw] text-[0.8vw]">
        {bad && (
          <p className="text-muted-foreground/60 line-through">
            {bad}
          </p>
        )}
        {good && (
          <p className="font-medium text-primary">
            {good}
          </p>
        )}
      </div>
    )}
  </div>
);
