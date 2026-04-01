"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const items = [
  { label: "Create a free Claude account", url: "https://claude.ai" },
  { label: "Create a free Make account (if doing workflows)", url: "https://make.com" },
  { label: "Download Cursor (if building an app)", url: "https://cursor.sh" },
  { label: "Think of one idea you might want to build", url: null },
  { label: "Bring your laptop, fully charged, charger too", url: null },
];

const Checklist = () => {
  const [checked, setChecked] = useState<boolean[]>(
    () => new Array(items.length).fill(false)
  );

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="checklist" className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-4">
          Pre-Event Checklist
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Do this before you show up.
        </p>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                checked[i]
                  ? "border-primary/30 bg-primary/5"
                  : "bg-white hover:border-primary/20"
              }`}
            >
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                  checked[i]
                    ? "border-primary bg-primary text-white"
                    : "border-muted-foreground/30"
                }`}
              >
                {checked[i] && <Check size={14} />}
              </div>
              <span
                className={`font-medium ${checked[i] ? "line-through text-muted-foreground" : ""}`}
              >
                {item.label}
                {item.url && (
                  <>
                    {" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      →
                    </a>
                  </>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Checklist;
