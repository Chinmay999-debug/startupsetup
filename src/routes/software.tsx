import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Dashboard } from "@/components/site/Dashboard";
import { Features } from "@/components/site/Features";
import { AIAssistant } from "@/components/site/AIAssistant";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { contact } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/software")({
  component: SoftwarePage,
  head: () => ({
    meta: [
      { title: "Software | Startup Setup · Lead Management & Workflow Platform" },
      {
        name: "description",
        content:
          "Lead tracking, follow-up automation, employee dashboards, WhatsApp & email updates, document tracking, AI assistant, status automation, and role-based access in one operational system.",
      },
      { property: "og:title", content: "Startup Setup Software | One operational system" },
      {
        property: "og:description",
        content: "Leads, follow-ups, workflows, and customer communication, unified.",
      },
      { property: "og:url", content: absoluteUrl("/software") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/software") }],
  }),
});

const capabilities = [
  {
    id: "lead-tracking",
    k: "Lead Tracking",
    d: "Capture every inquiry from forms, ads, WhatsApp, and walk-ins into one pipeline with full history.",
  },
  {
    id: "employee-dashboard",
    k: "Employee Dashboard",
    d: "Each team member sees their leads, today's follow-ups, and pending tasks. Nothing more, nothing less.",
  },
  {
    id: "workflow-management",
    k: "Workflow Management",
    d: "Design stages, owners, and automation rules per business, not a generic CRM template.",
  },
  {
    id: "whatsapp-automation",
    k: "WhatsApp Automation",
    d: "Send approved templates, status updates, and reminders directly from the lead, fully logged.",
  },
  {
    id: "email-updates",
    k: "Email Updates",
    d: "Branded email follow-ups triggered by stage changes, missed callbacks, or scheduled cadences.",
  },
  {
    id: "document-tracking",
    k: "Document Tracking",
    d: "Know exactly which documents are pending per customer and auto-nudge until received.",
  },
  {
    id: "ai-operational-assistant",
    k: "AI Operational Assistant",
    d: "Run operations in natural language. Assign, update, schedule, and notify without clicking menus.",
  },
  {
    id: "status-automation",
    k: "Status Automation",
    d: "Move leads forward automatically when documents arrive, calls happen, or replies come in.",
  },
  {
    id: "role-based-access",
    k: "Role-Based Access",
    d: "Admins, managers, counsellors, and field staff each see exactly what they need to operate.",
  },
];

function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-hairline bg-hero grain">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0,black,transparent_75%)]" />

          <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="max-w-3xl pb-12 pt-28 sm:pt-36 lg:pt-44">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    SS / Software
                  </span>
                  <span className="eyebrow">One operational system</span>
                </div>
              </Reveal>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-[20ch] text-balance font-display text-[38px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[64px]"
              >
                One system for leads, follow-ups &amp;{" "}
                <span className="font-serif font-normal italic text-accent">
                  everything between
                </span>
                .
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="mt-7 max-w-xl text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[16.5px]"
              >
                Track leads, automate follow-ups, manage team workflows, and centralise WhatsApp
                &amp; email — with an AI assistant that runs operations alongside your team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              >
                <MagneticButton
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft sm:w-auto"
                >
                  Book a demo
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </MagneticButton>
                <MagneticButton
                  href={contact.whatsappHref}
                  strength={5}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground/25 sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5 text-success" />
                  Chat on WhatsApp
                </MagneticButton>
              </motion.div>
            </div>

            {/* Larger dashboard */}
            <div className="pb-16 sm:pb-20">
              <Reveal delay={0.2}>
                <Dashboard />
              </Reveal>
              <div className="mt-5 flex items-baseline gap-2 px-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground">
                  Fig. A
                </span>
                <span className="font-serif text-[13px] italic text-muted-foreground">
                  the operating system your team logs into every morning.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities grid */}
        <section className="relative border-t border-hairline">
          <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
            <Reveal>
              <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      (01)
                    </span>
                    <span className="eyebrow">What's inside</span>
                  </div>
                  <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                    Everything you need to run real operations.
                  </h2>
                </div>
                <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
                  Nine capabilities that replace the spreadsheets, WhatsApp groups, and sticky notes
                  your team runs on today.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.k} delay={i * 0.04}>
                  <div
                    id={c.id}
                    className="group h-full scroll-mt-28 bg-card p-5 transition-colors duration-500 hover:bg-surface sm:p-7"
                  >
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                      <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-5 bg-border transition-all duration-500 group-hover:w-8 group-hover:bg-accent" />
                    </div>
                    <h3 className="mt-4 font-display text-[22px] leading-tight tracking-tight">
                      {c.k}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Features />
        <AIAssistant />

        {/* Workflow visual */}
        <section
          id="workflow"
          className="relative scroll-mt-24 border-t border-hairline bg-surface"
        >
          <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
            <Reveal>
              <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                      (02)
                    </span>
                    <span className="eyebrow">How operations flow</span>
                  </div>
                  <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                    A single workflow from inquiry to closure.
                  </h2>
                </div>
                <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
                  Every lead moves through the same accountable path — captured, owned, worked, and
                  closed, with nothing slipping between the cracks.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden border-y border-hairline bg-card">
                <div className="grid grid-cols-1 divide-y divide-hairline md:grid-cols-5 md:divide-x md:divide-y-0">
                  {[
                    { t: "Inquiry", d: "Captured from form, ad, WA, walk-in" },
                    { t: "Assigned", d: "Auto-routed to the right owner" },
                    { t: "Engaged", d: "WhatsApp / call / email logged" },
                    { t: "In progress", d: "Documents, scheduling, reminders" },
                    { t: "Closed", d: "Status synced · team notified" },
                  ].map((s, i) => (
                    <div key={s.t} className="p-6">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Step {i + 1}
                      </div>
                      <div className="mt-2 font-display text-xl tracking-tight">{s.t}</div>
                      <div className="mt-2 text-[13px] text-muted-foreground">{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="mt-10 text-center">
              <Link
                to="/industries"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                See how teams in your industry use it →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
