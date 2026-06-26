import { Reveal } from "./Reveal";

const capabilities = [
  {
    title: "Business websites",
    desc: "Fast, conversion-focused sites built for local and growing businesses.",
    items: ["Custom design", "Mobile first", "SEO structured", "WhatsApp ready"],
  },
  {
    title: "CRM systems",
    desc: "Manage leads, pipelines, follow-ups, and team workflows from one place.",
    items: ["Lead tracking", "Pipeline views", "Role access", "Reporting"],
  },
  {
    title: "AI agents",
    desc: "Agents that qualify leads, send updates, and automate communication.",
    items: ["WhatsApp bots", "Email sequences", "Qualification", "Scheduling"],
  },
  {
    title: "Internal dashboards",
    desc: "Custom dashboards that give your team real-time visibility over operations.",
    items: ["Custom metrics", "Live data", "Team views", "Export ready"],
  },
  {
    title: "Mobile-ready apps",
    desc: "Web apps that work beautifully on mobile — no App Store required.",
    items: ["PWA support", "Offline capable", "Notifications", "App-like UX"],
  },
  {
    title: "Automation workflows",
    desc: "Connect your tools and automate repetitive tasks across your business.",
    items: ["Multi-step flows", "Conditional logic", "Webhooks", "Scheduling"],
  },
];

export function Capabilities() {
  return (
    <section className="relative border-t border-hairline bg-surface">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (05)
                </span>
                <span className="eyebrow">Full-stack capability</span>
              </div>
              <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                One studio for everything you need to ship.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              From marketing sites to operational software — the technology your business needs to
              scale, built under one roof.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-card p-6 transition-colors hover:bg-surface-elevated sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[12px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-6 bg-hairline transition-all duration-500 group-hover:w-10 group-hover:bg-accent" />
                </div>
                <h3 className="mt-5 text-[17px] font-medium tracking-tight">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-surface px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
