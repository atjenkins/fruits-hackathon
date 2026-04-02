const blocks = [
  {
    time: "10:00 AM",
    icon: "👋",
    title: "Welcome & Kickoff",
    note: "Arrive, intros, and a quick demo of what's possible",
  },
  {
    time: "10:30 AM",
    icon: "🔧",
    title: "Setup Help & Build Start ",
    note: "Arik helps with tools & environment — or jump straight into building",
  },
  // { time: "11:30 AM", icon: "🛠️", title: "Build Block 1", note: "Free build — Arik circulates and helps" },
  {
    time: "~12:30 PM",
    icon: "🍕",
    title: "Lunch",
    note: "Eat, share progress, bounce ideas off each other",
  },
  {
    time: "2:30 PM",
    icon: "⚡",
    title: "Live Mini-Demo",
    note: "Arik does a 15-min live build mid-session (optional watch)",
  },
  {
    time: "4:00 PM",
    icon: "🎤",
    title: "Presentations",
    note: "5 min each — everyone shows what they built",
  },
  {
    time: "5:00 PM",
    icon: "🎉",
    title: "Done",
    note: "Hang out, debrief, vibe",
  },
  {
    time: "5:30 PM+",
    icon: "🌙",
    title: "After Hours Hacking",
    note: "Optional — keep building if you're in the zone",
  },
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-4xl font-bold text-center mb-12">
          Schedule
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-6">
            {blocks.map((block) => (
              <div key={block.time} className="flex items-start gap-4 md:gap-6">
                <div className="w-20 shrink-0 pt-1 text-right text-sm font-semibold text-primary md:w-24">
                  {block.time}
                </div>
                <div className="relative hidden md:block">
                  <div className="mt-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-juice" />
                </div>
                <div className="flex-1 rounded-xl bg-juice p-4">
                  <p className="font-heading text-lg font-semibold">
                    {block.icon} {block.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {block.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
