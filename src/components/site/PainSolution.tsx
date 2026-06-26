import { Reveal } from "./Reveal";

const chaos = [
  "Lead came in 3 days ago, no reply",
  "Follow-up forgotten · 4 customers",
  "Status update lost in WhatsApp",
  "Counsellor unsure who owns this lead",
  "Document pending · no reminder sent",
  "Two team members called the same lead",
];

const ordered = [
  { t: "New inquiry", s: "Auto-assigned to Priya" },
  { t: "Follow-up", s: "Reminder · 3:30 PM today" },
  { t: "Documents", s: "Passport pending · WA sent" },
  { t: "Counselling", s: "Scheduled · Thu 11 AM" },
  { t: "Closure", s: "Status synced · Email sent" },
];

export function PainSolution() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Why teams switch
            </span>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              From operational chaos to a single source of truth.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="relative h-full overflow-hidden rounded-2xl border hairline bg-card p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-destructive">Operational chaos</div>
                <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-medium text-destructive">
                  Before
                </span>
              </div>
              <div className="mt-6 space-y-2">
                {chaos.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 rounded-lg border hairline bg-surface px-3 py-2.5 text-sm text-muted-foreground"
                    style={{
                      transform: `rotate(${i % 2 ? 0.3 : -0.4}deg)`,
                    }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70" />
                    <span className="line-through decoration-destructive/40">{c}</span>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative h-full overflow-hidden rounded-2xl border hairline bg-primary p-5 text-primary-foreground shadow-elevated sm:p-7">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-accent">Centralized operations</div>
                <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-medium text-accent">
                  After
                </span>
              </div>
              <div className="mt-6 space-y-2">
                {ordered.map((o) => (
                  <div
                    key={o.t}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-accent/20 text-accent">
                      ✓
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{o.t}</div>
                      <div className="text-[11px] text-primary-foreground/60">{o.s}</div>
                    </div>
                    <span className="font-mono text-[10px] text-primary-foreground/40">auto</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
