import { Clock, Monitor, Lightbulb } from "lucide-react";

const points = [
  {
    icon: Monitor,
    title: "What did you build?",
    description: "Show the thing — live demo if you can.",
  },
  {
    icon: Clock,
    title: "How does it work?",
    description: "A short description of the AI / tech underneath.",
  },
  {
    icon: Lightbulb,
    title: "What did you learn?",
    description: "Something that worked, something that didn't, or something that surprised you.",
  },
];

const Rules = () => {
  return (
    <section id="rules" className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">
          Presentation Format
        </h2>
        <p className="text-muted-foreground mb-2">
          <span className="font-heading text-5xl font-bold text-primary">5</span>{" "}
          minutes. That&apos;s it.
        </p>
        <p className="text-muted-foreground mb-10">
          No slides required. No polish required. Working is better than
          perfect — you can always iterate later. But we want to see what you
          built either way.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="flex flex-col items-center gap-3 rounded-xl border bg-juice p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
