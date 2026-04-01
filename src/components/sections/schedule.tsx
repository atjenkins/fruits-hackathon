const blocks = [
  { time: "9:00 AM", icon: "👋", title: "Welcome & Setup", note: "Arrive, get on wifi, install tools, pick your project" },
  { time: "9:30 AM", icon: "🎤", title: "Kickoff Demo", note: "Arik demos a project to show what's possible" },
  { time: "10:00 AM", icon: "🛠️", title: "Build Block 1", note: "Free build — Arik circulates and helps" },
  { time: "11:00 AM", icon: "⚡", title: "Live Mini-Demo", note: "Arik does a 15-min live build mid-session (optional watch)" },
  { time: "12:00 PM", icon: "🍕", title: "Lunch", note: "Eat, rest, talk through your project" },
  { time: "1:00 PM", icon: "🛠️", title: "Build Block 2", note: "Polish, iterate, prep your 5-min pitch" },
  { time: "1:45 PM", icon: "⏰", title: "Wrap-up Reminder", note: "Finish and rehearse" },
  { time: "2:00 PM", icon: "🎤", title: "Presentations", note: "5 min each — everyone presents" },
  { time: "~3:30 PM", icon: "🎉", title: "Done", note: "Hang out, debrief, vibe" },
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
