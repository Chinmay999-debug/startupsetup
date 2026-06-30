import { Reveal } from "./Reveal";
import { Globe, Sparkles, Zap, Database, Briefcase, Code2 } from "lucide-react";

const capabilities = [
  {
    title: "Websites",
    icon: Globe,
    desc: "Any type of website, fast and mobile-first, built to bring in enquiries and turn visitors into customers.",
    items: ["Modern design", "Lead capture", "Appointment booking", "WhatsApp & SEO"],
  },
  {
    title: "AI tools",
    icon: Sparkles,
    desc: "AI agents and assistants that handle conversations and take busywork off your team.",
    items: ["AI chat agents", "Lead qualification", "Smart replies", "Business automation"],
  },
  {
    title: "Automation",
    icon: Zap,
    desc: "Connect your tools and automate the repetitive work across your business.",
    items: ["WhatsApp & email", "Workflows", "Auto follow-ups", "Notifications"],
  },
  {
    title: "CRM & ERP systems",
    icon: Database,
    desc: "Centralise customers, sales, stock and billing into one system built around you.",
    items: ["Customer management", "Sales pipeline", "Inventory", "Billing & payments"],
  },
  {
    title: "Industry software",
    icon: Briefcase,
    desc: "Software shaped for how your sector actually works, for any kind of business.",
    items: ["Clinic management", "Appointment booking", "Employee management", "Reporting"],
  },
  {
    title: "Any custom software",
    icon: Code2,
    desc: "If you can describe it, we can build it, scaled to exactly how your team works.",
    items: ["Built to your workflow", "Dashboards", "Role-based access", "API integrations"],
    featured: true,
    href: "/contact#demo-form",
  },
];

export function Capabilities() {
  return (
    <section className="relative border-t border-hairline bg-surface">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 sm:pb-20">
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
              Websites, AI tools, automation and custom software. From your first website to the
              systems that run your operations, built under one roof.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const featured = "featured" in c && c.featured;
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                    featured
                      ? "border-transparent bg-primary text-primary-foreground shadow-elevated hover:-translate-y-1"
                      : "border-hairline bg-card hover:-translate-y-1 hover:border-foreground/15 hover:shadow-elevated"
                  }`}
                >
                  {/* subtle accent glow inside the dark featured card */}
                  {featured && (
                    <span className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
                  )}

                  {/* Card Header (Icon + Number) */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-lg border transition-all duration-300 ${
                        featured
                          ? "border-white/10 bg-white/[0.08] text-primary-foreground group-hover:bg-accent group-hover:border-transparent group-hover:shadow-soft"
                          : "border-hairline bg-surface text-accent group-hover:border-accent/30 group-hover:shadow-soft"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <span
                      className={`font-mono text-xs ${
                        featured ? "text-primary-foreground/45" : "text-muted-foreground/55"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`relative mt-5 font-display text-[19px] font-medium tracking-tight ${
                      featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className={`relative mt-2 text-[13.5px] leading-relaxed ${
                      featured ? "text-primary-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {c.desc}
                  </p>

                  <ul className="relative mt-5 space-y-2.5">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-center gap-2.5 text-[13px] ${
                          featured ? "text-primary-foreground/85" : "text-foreground/80"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125 ${
                            featured ? "bg-primary-foreground/60" : "bg-accent/60 group-hover:bg-accent"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {featured && (
                    <a
                      href={c.href}
                      className="relative mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-medium text-primary-foreground group/link"
                    >
                      Tell us what you need
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/10 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:bg-accent">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
