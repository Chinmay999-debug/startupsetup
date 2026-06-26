import { Reveal } from "./Reveal";

const studies = [
  {
    tag: "Education Consultant",
    title: "From 6 spreadsheets to one operational system",
    metric: { v: "92%", l: "follow-ups completed on time" },
    body: "A 14-counsellor consultancy moved off WhatsApp groups and Excel. Inquiries auto-route to counsellors, document reminders go out on WhatsApp, and visa stages stay synced across the team.",
    flow: ["Inquiry", "Auto-assigned", "WA reminder", "Visa stage", "Enrolled"],
  },
  {
    tag: "Multi-clinic Group",
    title: "Zero missed appointments across 4 branches",
    metric: { v: "0", l: "missed callbacks last quarter" },
    body: "Front-desk inquiries land in a single inbox. Each branch sees only their own pipeline, and AI nudges patients who haven't confirmed within 4 hours.",
    flow: ["Inquiry", "Booked", "Confirmed", "Consulted", "Follow-up"],
  },
  {
    tag: "Real Estate Team",
    title: "Lead leakage stopped in week one",
    metric: { v: "3.4x", l: "site visits per broker / month" },
    body: "Property leads from 5 sources unify into one pipeline. Site visits get scheduled inside the platform, and brokers are auto-reminded the morning of every visit.",
    flow: ["Lead", "Site visit", "Negotiation", "Booking", "Closed"],
  },
];

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-grid" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Operational proof
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Real workflows. Real teams. Real outcomes.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              How operational teams use Startup Setup every day to run their leads, follow-ups, and
              customer communication.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span>{s.tag}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
                    Live
                  </span>
                </div>

                <h3 className="mt-5 text-pretty font-display text-2xl leading-[1.15] tracking-tight">
                  {s.title}
                </h3>

                <div className="mt-5 flex items-end gap-3 border-y hairline py-4">
                  <span className="font-display text-3xl tracking-tight sm:text-4xl">
                    {s.metric.v}
                  </span>
                  <span className="pb-1 text-[12px] leading-tight text-muted-foreground">
                    {s.metric.l}
                  </span>
                </div>

                <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>

                <div className="mt-6 flex flex-wrap items-center gap-1.5 pt-2">
                  {s.flow.map((f, idx) => (
                    <div key={f} className="flex items-center gap-1.5">
                      <span className="rounded-md border hairline bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground">
                        {f}
                      </span>
                      {idx < s.flow.length - 1 && (
                        <span className="text-muted-foreground/50">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
