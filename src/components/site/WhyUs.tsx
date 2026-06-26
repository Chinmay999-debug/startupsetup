import { Reveal } from "./Reveal";

const reasons = [
  {
    metric: "14 days",
    label: "Average delivery",
    desc: "Most websites and MVPs are live within two weeks. We move fast without cutting corners.",
  },
  {
    metric: "50+",
    label: "Projects delivered",
    desc: "Across healthcare, education, local business, and startups. We've seen it all.",
  },
  {
    metric: "100%",
    label: "Custom-built",
    desc: "No templates, no page builders. Every project is built specifically for your business.",
  },
  {
    metric: "24h",
    label: "Support response",
    desc: "Post-launch, we're on WhatsApp. Real support from the people who built it.",
  },
  {
    metric: "₹0",
    label: "Discovery fee",
    desc: "Free initial consultation. We understand your business before quoting anything.",
  },
  {
    metric: "Scalable",
    label: "Architecture",
    desc: "Code built to grow. Starting small doesn't mean you'll need a rebuild later.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 border-t border-hairline bg-background">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (06)
                </span>
                <span className="eyebrow">Why Startup Setup</span>
              </div>
              <h2 className="mt-5 max-w-[18ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                Serious software.{" "}
                <span className="font-serif font-normal italic text-accent">Real</span> partnership.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              We work like a product team embedded in your business — not a vendor you chase for
              updates.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.label} delay={(i % 3) * 0.06}>
              <div className="group h-full bg-card p-7 transition-colors hover:bg-surface-elevated sm:p-8">
                <div className="font-display text-[40px] font-medium leading-none tracking-tight sm:text-5xl">
                  {r.metric}
                </div>
                <div className="mt-4 flex items-center gap-2 text-[14px] font-medium">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {r.label}
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
