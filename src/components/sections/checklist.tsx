"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type CheckItem = { label: string; url: string | null };

const essentials: CheckItem[] = [
  { label: "Bring your laptop, fully charged, charger too", url: null },
  { label: "Create a free Claude account", url: "https://claude.ai" },
  { label: "Think of one idea you might want to build", url: null },
];

const optional: CheckItem[] = [
  { label: "Create a GitHub account", url: "https://github.com" },
  { label: "Download VS Code", url: "https://code.visualstudio.com" },
  { label: "Install the Claude Code extension", url: "https://marketplace.visualstudio.com/items?itemName=anthropics.claude-code" },
  { label: "Create a Supabase account (for apps with a database)", url: "https://supabase.com" },
  { label: "Create a Make account (for workflow automation)", url: "https://make.com" },
];

const allItems = [...essentials, ...optional];

const ChecklistItem = ({
  item,
  isChecked,
  onToggle,
}: {
  item: CheckItem;
  isChecked: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
      isChecked
        ? "border-primary/30 bg-primary/5"
        : "bg-white hover:border-primary/20"
    }`}
  >
    <div
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
        isChecked
          ? "border-primary bg-primary text-white"
          : "border-muted-foreground/30"
      }`}
    >
      {isChecked && <Check size={14} />}
    </div>
    <span
      className={`font-medium ${isChecked ? "line-through text-muted-foreground" : ""}`}
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
);

const Checklist = () => {
  const [checked, setChecked] = useState<boolean[]>(
    () => new Array(allItems.length).fill(false)
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

        <h3 className="font-heading text-lg font-semibold mb-3">Everyone</h3>
        <div className="flex flex-col gap-3">
          {essentials.map((item, i) => (
            <ChecklistItem
              key={i}
              item={item}
              isChecked={checked[i]}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <h3 className="font-heading text-lg font-semibold mt-8 mb-3">
          Optional <span className="font-normal text-sm text-muted-foreground">(depends on your project)</span>
        </h3>
        <div className="flex flex-col gap-3">
          {optional.map((item, i) => (
            <ChecklistItem
              key={i}
              item={item}
              isChecked={checked[essentials.length + i]}
              onToggle={() => toggle(essentials.length + i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Checklist;
