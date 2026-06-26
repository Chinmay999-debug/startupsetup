import { Reveal } from "./Reveal";

const before = [
  "Spreadsheets shared over email",
  "WhatsApp groups for every team",
  "Manual updates after every call",
  "Missed follow-ups every week",
  "Disconnected tools, double work",
];

const after = [
  "Centralized operations dashboard",
  "Automated WhatsApp & email updates",
  "Organized, repeatable workflows",
  "Full operational visibility",
  "One system, one source of truth",
];

export function Switch() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Why teams switch
            </span>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              The operational shift.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border hairline bg-card shadow-soft sm:mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-b hairline p-5 sm:p-8 md:border-b-0 md:border-r">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  Before
                </div>
                <ul className="mt-6 space-y-4">
                  {before.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-4 bg-destructive/40" />
                      <span className="line-through decoration-destructive/30">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary p-5 text-primary-foreground sm:p-8">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  After
                </div>
                <ul className="mt-6 space-y-4">
                  {after.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-[15px]">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/20 text-accent">
                        ✓
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
