import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

/** Decorative orange cross-section SVG. */
const OrangeSlice = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="100" cy="100" r="95" className="fill-primary" />
    <circle cx="100" cy="100" r="80" fill="#FFF3E0" />
    <circle cx="100" cy="100" r="74" className="fill-orange-light" />
    {Array.from({ length: 10 }).map((_, i) => {
      const angle = (i * 36 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1="100"
          y1="100"
          x2={100 + 74 * Math.cos(angle)}
          y2={100 + 74 * Math.sin(angle)}
          stroke="#FFF3E0"
          strokeWidth="3"
        />
      );
    })}
    <circle cx="100" cy="100" r="12" fill="#FFF3E0" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-juice py-24 md:py-32">
      {/* Decorative slices */}
      <OrangeSlice className="absolute -right-16 -top-16 w-64 opacity-20 md:w-80" />
      <OrangeSlice className="absolute -bottom-20 -left-20 w-72 opacity-15 md:w-96" />
      <OrangeSlice className="absolute right-1/4 bottom-8 w-32 opacity-10 rotate-45" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Neural Nectar Presents
        </p>

        <h1 className="font-heading text-6xl font-bold leading-none tracking-tight md:text-8xl">
          <span className="text-primary">The Big</span>
          <br />
          <span className="text-foreground">Squeeze</span>
        </h1>

        <p className="mt-6 font-heading text-2xl font-medium text-muted-foreground md:text-3xl">
          One Day. Pure Juice.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-foreground">
          <span className="flex items-center gap-2">
            <CalendarDays size={18} className="text-primary" />
            Saturday, April 11, 2026
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            Location TBD (based on # of sign ups)
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
            ~10–15 people
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Build something with AI. Show the group what you made. Whether
          you&apos;ve been coding for years or never shipped anything... this is
          for you. The juice is in the doing.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-base"
            nativeButton={false}
            render={<a href="#register" />}
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base"
            nativeButton={false}
            render={<a href="/ideas" />}
          >
            Browse Ideas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
