import { ArrowUpRight, Lock } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  n: string;
  client: string;
  category: string;
  type: string;
  status: "live" | "confidential";
  href?: string;
  domain?: string;
  solution: string;
  description: string;
  features: string[];
};

const projects: Project[] = [
  {
    n: "01",
    client: "Ilona Clinics",
    category: "Dermatology & endocrinology",
    type: "Website",
    status: "live",
    href: "https://ilonaclinics.com/",
    domain: "ilonaclinics.com",
    solution:
      "A dermatology and endocrinology clinic site built around the doctor and the service.",
    description:
      "Visitors land on the exact treatment they're after, then call, WhatsApp, or book that doctor in a tap. Service-led pages with prominent call and WhatsApp CTAs and a built-in appointment booking form.",
    features: [
      "Service-led pages",
      "Call & WhatsApp CTAs",
      "Appointment booking",
      "Mobile-first build",
    ],
  },
  {
    n: "02",
    client: "SaralVidya",
    category: "Education",
    type: "CRM + automation",
    status: "confidential",
    solution: "One CRM where every lead, document, and status update lives.",
    description:
      "Every lead lands in a single system that stores full client details and documents. The team moves each lead through stages from a simple dropdown, and the client gets a real-time update on WhatsApp and email at every change, all automated.",
    features: [
      "Lead & document store",
      "Dropdown pipeline stages",
      "WhatsApp & email automation",
      "Real-time client updates",
    ],
  },
  {
    n: "03",
    client: "Status Portal for RealFinServ",
    category: "Financial services",
    type: "Automation platform",
    status: "confidential",
    solution: "An automation platform for live status tracking and follow-ups, in real time.",
    description:
      "Clients, the team, and admins all see status the moment it changes. The platform tracks every update and fires follow-ups automatically, keeping clients notified on WhatsApp and everyone in sync in real time.",
    features: [
      "Live status tracking",
      "Automated follow-ups",
      "Real-time client & team updates",
      "Admin controls",
    ],
  },
  {
    n: "04",
    client: "Arise Physiotherapy",
    category: "Physiotherapy",
    type: "Website",
    status: "live",
    href: "https://arisephysiotherapy.com/",
    domain: "arisephysiotherapy.com",
    solution: "A physiotherapy clinic site that turns visits into appointments.",
    description:
      "A fast, mobile-first clinic website with clear service pages, call and WhatsApp CTAs, and an appointment-request form so patients can reach the clinic in seconds.",
    features: ["Service pages", "Call & WhatsApp CTAs", "Appointment booking", "SEO-ready"],
  },
  {
    n: "05",
    client: "PhysioZen Physiotherapy Centre",
    category: "Physiotherapy",
    type: "Website",
    status: "live",
    href: "https://physiozenphysiotherapycentre.com/",
    domain: "physiozenphysiotherapycentre.com",
    solution: "A clean, mobile-first site for a physiotherapy centre.",
    description:
      "A presentable clinic website that lays out services clearly and makes it easy for patients to get in touch and request an appointment.",
    features: ["Service pages", "Enquiry & contact", "Appointment request", "Mobile-first build"],
  },
];

function StatusPill({ status }: { status: Project["status"] }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-success">
        <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
      <Lock className="h-2.5 w-2.5" strokeWidth={2.25} />
      Confidential
    </span>
  );
}

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 border-t border-hairline bg-surface">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (03)
                </span>
                <span className="eyebrow">Selected work</span>
              </div>
              <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                Real businesses, live and running.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              From clinic websites that turn visits into appointments to centralised software that
              runs daily operations. A few of the systems we've shipped across healthcare, education
              and finance.
            </p>
          </div>
        </Reveal>

        <div>
          {projects.map((p, i) => {
            const isExternal = p.status === "live";
            const ctaHref = isExternal ? p.href : "/contact#demo-form";
            const ctaLabel = isExternal ? "Visit live site" : "Request a demo";

            return (
              <Reveal key={p.client} delay={(i % 3) * 0.06}>
                <article className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-hairline py-10 sm:py-12 lg:grid-cols-12 lg:px-3">
                  {/* Meta + CTA */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[13px] text-accent">{p.n}</span>
                      <StatusPill status={p.status} />
                    </div>
                    <h3 className="mt-4 font-display text-[26px] font-medium leading-tight tracking-tight">
                      {p.client}
                    </h3>
                    <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {p.category} · {p.type}
                    </div>

                    <div className="mt-6">
                      <a
                        href={ctaHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-foreground"
                      >
                        {ctaLabel}
                        <span className="grid h-7 w-7 place-items-center rounded-full border border-hairline transition-all duration-300 group-hover:border-foreground/30 group-hover:bg-primary group-hover:text-primary-foreground">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </a>
                      <div className="mt-2 font-mono text-[11px] text-muted-foreground">
                        {p.status === "live" ? p.domain : "Demo available on request"}
                      </div>
                    </div>
                  </div>

                  {/* Story + capabilities */}
                  <div className="lg:col-span-8">
                    <p className="max-w-xl font-display text-lg font-medium leading-snug tracking-tight text-foreground sm:text-xl">
                      {p.solution}
                    </p>
                    <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-3 text-[13.5px] text-foreground/80"
                        >
                          <span className="h-px w-3.5 shrink-0 bg-accent/60" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <div className="border-t border-hairline" />
        </div>
      </div>
    </section>
  );
}
