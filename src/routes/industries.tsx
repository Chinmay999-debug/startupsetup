import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Industries } from "@/components/site/Industries";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries | Startup Setup · One software, every workflow" },
      {
        name: "description",
        content:
          "Education, real estate, clinics, insurance, loans, and solar. Startup Setup adapts to your team's stages, communication, and operational reality.",
      },
      { property: "og:title", content: "Industries we operate with | Startup Setup" },
      {
        property: "og:description",
        content: "One operational platform, configured for the way your industry actually runs.",
      },
      { property: "og:url", content: absoluteUrl("/industries") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/industries") }],
  }),
});

const verticalIndex = [
  { key: "education", label: "Education" },
  { key: "real-estate", label: "Real Estate" },
  { key: "clinics", label: "Clinics" },
  { key: "insurance", label: "Insurance & Loans" },
  { key: "solar", label: "Solar" },
];

const heroActivity = [
  {
    label: "Lead assigned",
    meta: "Real Estate · Priya",
    tone: "bg-success",
    delay: 0,
  },
  {
    label: "WhatsApp update sent",
    meta: "Education · Visa docs",
    tone: "bg-accent",
    delay: 0.18,
  },
  {
    label: "Site visit booked",
    meta: "Solar · 4:30 PM",
    tone: "bg-warning",
    delay: 0.36,
  },
  {
    label: "Docs pending",
    meta: "Insurance · KYC",
    tone: "bg-foreground",
    delay: 0.54,
  },
];

const heroWorkflow = ["Lead", "Assigned", "Follow-up", "Update", "Converted"];

const verticals = [
  {
    key: "education",
    name: "Education Consultants",
    summary:
      "Student inquiries, counsellor coordination, document collection, and visa stages in one operational view.",
    pains: [
      "Inquiry overload across countries & courses",
      "Counsellor coordination & assignment chaos",
      "Document collection drags out admissions",
      "Follow-ups slip through WhatsApp groups",
    ],
    workflow: [
      "Student inquiry pipelines per course",
      "Counsellor assignment with workload balance",
      "Visa & document stage tracking",
      "WhatsApp updates with approved templates",
    ],
  },
  {
    key: "real-estate",
    name: "Real Estate Teams",
    summary:
      "Lead sources, site visits, broker ownership, and follow-ups consolidated into one accountable pipeline.",
    pains: [
      "Lead leakage across portals & ads",
      "Site visit tracking is manual",
      "Broker accountability is unclear",
      "Follow-up cadence is inconsistent",
    ],
    workflow: [
      "Unified lead pipelines across sources",
      "Property-level workflows & ownership",
      "Broker assignment & visit scheduling",
      "Reminders the morning of every visit",
    ],
  },
  {
    key: "clinics",
    name: "Clinics & Healthcare",
    summary:
      "Appointments, inquiries, and follow-ups handled with branch-aware workflows and patient communication.",
    pains: [
      "Appointments missed without confirmation",
      "Patient inquiries scattered across staff",
      "Callbacks dropped during peak hours",
      "Communication fragmented per branch",
    ],
    workflow: [
      "Appointment workflows by branch & doctor",
      "Inquiry intake with auto-acknowledgement",
      "Confirmation & reminder automations",
      "Follow-up cadences per treatment",
    ],
  },
  {
    key: "insurance",
    name: "Insurance & Loan Teams",
    summary:
      "Customer pipelines, document collection, and renewal cycles wired into one operational system.",
    pains: [
      "Document collection takes weeks",
      "Renewals slip without nudges",
      "Lead duplication across agents",
      "Status tracking lives in spreadsheets",
    ],
    workflow: [
      "Customer pipelines per product",
      "Renewal reminders with policy context",
      "Document stages with auto-nudges",
      "Approval handoffs with clear ownership",
    ],
  },
  {
    key: "solar",
    name: "Solar Companies",
    summary:
      "Field-heavy workflows from inquiry to installation, with real-time visibility for ops and customers.",
    pains: [
      "Field operations are hard to track",
      "Quotation versions get lost",
      "Installation status is unclear to customers",
      "Updates depend on individual reps",
    ],
    workflow: [
      "Site survey to installation pipelines",
      "Field assignments with location context",
      "Quotation tracking with revisions",
      "Customer status updates on WhatsApp",
    ],
  },
];

const principles = [
  {
    title: "Your stages, not ours",
    body: "Every pipeline is configured to your team's real operating language, not generic CRM stages.",
  },
  {
    title: "One engine, many workflows",
    body: "The same operational core runs every vertical. No fragmented products, no spreadsheet add-ons.",
  },
  {
    title: "Channels where customers actually are",
    body: "WhatsApp, email, calls, and field updates, unified into one auditable customer timeline.",
  },
  {
    title: "Built for ops, not IT",
    body: "Configured in days, not months. Your team owns the workflows, we make sure they hold up.",
  },
];

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-hairline bg-hero pt-0 grain">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0,black,transparent_75%)]" />

          <div className="edge-rules relative mx-auto max-w-[1280px] px-5 pb-12 sm:px-8">
            <div className="max-w-3xl pt-28 sm:pt-36 lg:pt-44">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  SS / Industries
                </span>
                <span className="eyebrow">Configured per vertical</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-[20ch] text-balance font-display text-[38px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[60px]"
              >
                One engine, shaped for how your industry{" "}
                <span className="font-serif font-normal italic text-accent">actually runs</span>.
              </motion.h1>
              <p className="mt-7 max-w-xl text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[16.5px]">
                Same operational core, built around your stages, your team, and your channels — not
                a generic CRM dressed up for verticals.
              </p>

              {/* Quick jump */}
              <div className="mt-8 flex flex-wrap items-center gap-1.5">
                {verticalIndex.map((v) => (
                  <a
                    key={v.key}
                    href={`#${v.key}`}
                    className="rounded-full border border-hairline bg-card px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    {v.label}
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-10"
            >
              <div className="relative overflow-hidden border-y border-hairline bg-card text-left">
                <div className="flex items-center justify-between gap-3 border-b hairline px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-25" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Live operational flow
                    </span>
                  </div>
                  <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
                    synced now
                  </span>
                </div>

                <div className="grid gap-px bg-border/70 sm:grid-cols-4">
                  {heroActivity.map((item) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.55 + item.delay,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="bg-card/85 px-4 py-3 sm:px-5"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${item.tone}`} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {item.meta}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="px-4 py-3 sm:px-5">
                  <div className="flex snap-x items-center gap-2 overflow-x-auto pb-1 sm:overflow-hidden sm:pb-0">
                    {heroWorkflow.map((step, index) => (
                      <div
                        key={step}
                        className="flex min-w-max items-center gap-2 sm:min-w-0 sm:flex-1"
                      >
                        <div className="min-w-0 rounded-full border hairline bg-surface/70 px-2.5 py-1 text-center text-[11px] text-muted-foreground">
                          <span className="block truncate">{step}</span>
                        </div>
                        {index < heroWorkflow.length - 1 ? (
                          <span className="hidden h-px flex-1 bg-border sm:block" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Live, animated per-industry mockup (Industries switcher rebuilt) */}
        <Industries />

        {/* Bridge: how one engine adapts */}
        <section className="relative border-y hairline bg-surface/40 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      (01)
                    </span>
                    <span className="eyebrow">How it adapts</span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-[44px]">
                    One operational engine.
                    <br />
                    Reshaped per vertical, not rebuilt.
                  </h2>
                </div>
                <p className="text-pretty text-muted-foreground lg:col-span-5">
                  Pipelines, roles, communication channels and reminders are configured to match how
                  each business actually operates. The underlying system is the same. What you see,
                  isn't.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border hairline bg-border sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="h-full bg-card p-6">
                    <div className="font-mono text-[11px] text-muted-foreground">0{i + 1}</div>
                    <div className="mt-3 font-display text-lg leading-snug">{p.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed vertical sections */}
        <section className="relative bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    (02)
                  </span>
                  <span className="eyebrow">Operational reality per vertical</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                  The pains we solve, by industry.
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground">
                  What goes wrong today — and what Startup Setup actually runs in its place.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 space-y-5 sm:mt-14 sm:space-y-6">
              {verticals.map((v, i) => (
                <Reveal key={v.name} delay={i * 0.05}>
                  <article
                    id={v.key}
                    className="group scroll-mt-28 overflow-hidden rounded-2xl border hairline bg-card shadow-soft transition-shadow duration-500 hover:shadow-elevated"
                  >
                    <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-12">
                      <div className="bg-card p-5 sm:p-7 md:col-span-4">
                        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                          0{i + 1} · Vertical
                        </div>
                        <h3 className="mt-3 font-display text-[24px] leading-[1.12] tracking-tight sm:text-[28px]">
                          {v.name}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {v.summary}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border hairline bg-surface px-3 py-1 text-[11px] text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
                          Live deployment
                        </div>
                      </div>

                      <div className="bg-card p-5 sm:p-7 md:col-span-4">
                        <div className="text-[11px] font-medium uppercase tracking-wider text-destructive/80">
                          Operational pains
                        </div>
                        <ul className="mt-4 space-y-3 text-[14px] text-muted-foreground">
                          {v.pains.map((p) => (
                            <li key={p} className="flex items-start gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-card p-5 sm:p-7 md:col-span-4">
                        <div className="text-[11px] font-medium uppercase tracking-wider text-success">
                          What Startup Setup runs
                        </div>
                        <ul className="mt-4 space-y-3 text-[14px] text-foreground/85">
                          {v.workflow.map((w) => (
                            <li key={w} className="flex items-start gap-2.5">
                              <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-[10px] text-accent">
                                ✓
                              </span>
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-14 flex flex-col items-center gap-3 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't see your industry? The engine adapts to most operational workflows.
                </p>
                <Link
                  to="/contact"
                  className="rounded-full border hairline bg-card px-5 py-2.5 text-sm transition-colors hover:border-foreground/30"
                >
                  Talk to our team →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
