import { Reveal } from "./Reveal";

const reasons = [
  {
    metric: "7 days",
    label: "Average delivery",
    desc: "Your website or MVP live in one week. We move fast and ship clean code without cutting corners.",
  },
  {
    metric: "5+",
    label: "Industry verticals",
    desc: "Configured pipelines and custom software shipped across education, clinics, real estate, finance, and solar.",
  },
  {
    metric: "100%",
    label: "Custom-built",
    desc: "No templates, no drag-and-drop builders. Every project is built specifically to match your business workflow.",
  },
  {
    metric: "24h",
    label: "Support",
    desc: "Direct channel to the developers who built your project. Quick resolution for real business issues.",
  },
  {
    metric: "₹0",
    label: "Discovery fee",
    desc: "Free scoping and initial workflow mapping. We map out your software before quoting anything.",
  },
  {
    metric: "Scalable",
    label: "Architecture",
    desc: "Clean code built to scale. Start with a simple landing page, expand to full ops dashboards as you grow.",
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
