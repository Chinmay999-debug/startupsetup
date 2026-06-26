import { useState } from "react";
import { Reveal } from "./Reveal";
import { StartProjectDialog } from "./StartProjectDialog";

const services = [
  {
    n: "01",
    tag: "Most popular",
    title: "Business website",
    price: "₹15,000",
    from: true,
    description:
      "A fast, mobile-first website that earns trust in seconds and turns everyday visitors into paying customers, even while you sleep.",
    features: ["Conversion-led design", "WhatsApp enquiries", "Built-in SEO", "Under-2s load"],
  },
  {
    n: "02",
    tag: "Bundle",
    title: "Website + Google Business",
    price: "₹20,000",
    from: true,
    description:
      "Your website paired with a fully optimised Google Business Profile, so you top local search and become the obvious choice in your area.",
    features: ["Top-of-Maps ranking", "Local SEO", "Review engine", "Fully managed"],
  },
  {
    n: "03",
    tag: "Custom build",
    title: "Custom software",
    price: "Custom",
    note: "scoped to your needs",
    description:
      "Custom software built for your business and your industry, bringing your tools, teams, and data into one centralized system that works exactly the way you do.",
    features: [
      "Built for any industry",
      "One centralised system",
      "Role-based access",
      "Live dashboards",
    ],
  },
  {
    n: "04",
    tag: "Custom build",
    title: "AI automation",
    price: "Custom",
    note: "scoped to your needs",
    description:
      "AI agents and automations that take repetitive work off your team, handling conversations, follow-ups, scheduling, and data across your business around the clock.",
    features: [
      "AI chat agents",
      "Workflow automation",
      "Follow-ups & scheduling",
      "WhatsApp & email",
    ],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="relative scroll-mt-24 border-t border-hairline bg-background">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (02)
                </span>
                <span className="eyebrow">What we build</span>
              </div>
              <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                Websites, software, automation and AI, built under one roof.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              From your first website to operational software and AI. Transparent pricing, no
              templates, built to last.
            </p>
          </div>
        </Reveal>

        <div>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setActiveService(s.title)}
                className="group grid w-full grid-cols-1 gap-x-6 gap-y-4 border-t border-hairline py-8 text-left transition-colors hover:bg-surface/50 sm:py-10 lg:grid-cols-12 lg:px-3"
              >
                <div className="flex items-start justify-between lg:col-span-4 lg:block">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[13px] text-accent">{s.n}</span>
                      <span className="rounded-full border border-hairline bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-[28px]">
                      {s.title}
                    </h3>
                  </div>
                  <div className="text-right lg:mt-3 lg:text-left">
                    <div className="flex items-baseline justify-end gap-1.5 lg:justify-start">
                      {s.from && (
                        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          from
                        </span>
                      )}
                      <span className="font-display text-2xl font-medium tracking-tight text-accent">
                        {s.price}
                      </span>
                    </div>
                    {s.note && (
                      <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                        {s.note}
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <p className="max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-[13.5px] text-foreground/80"
                      >
                        <span className="h-px w-3.5 shrink-0 bg-accent/50 transition-all duration-300 group-hover:w-6 group-hover:bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center lg:col-span-2 lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground">
                    Start
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-hairline transition-all duration-300 group-hover:border-foreground/30 group-hover:bg-primary group-hover:text-primary-foreground">
                      →
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
          <div className="border-t border-hairline" />
        </div>
      </div>

      <StartProjectDialog
        service={activeService}
        onOpenChange={(open) => {
          if (!open) setActiveService(null);
        }}
      />
    </section>
  );
}
