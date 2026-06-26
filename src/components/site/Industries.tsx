import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const industries = [
  {
    key: "education",
    name: "Education Consultants",
    desc: "Manage student inquiries, counsellor assignments, document tracking, and WhatsApp updates.",
    pipeline: ["Inquiry", "Counselling", "Documents", "Visa", "Enrolled"],
    sample: [
      { name: "Aarav Mehta", meta: "MBBS · Russia", stage: "Documents" },
      { name: "Sana Iqbal", meta: "B.Tech · Germany", stage: "Counselling" },
      { name: "Rohit Sharma", meta: "MS · Canada", stage: "Visa" },
    ],
  },
  {
    key: "real-estate",
    name: "Real Estate Teams",
    desc: "Track property leads, site visits, broker assignments, and customer follow-ups.",
    pipeline: ["Inquiry", "Site visit", "Negotiation", "Booking", "Closed"],
    sample: [
      { name: "Mr. Jain", meta: "3BHK · Whitefield", stage: "Site visit" },
      { name: "Mrs. Rao", meta: "Plot · Devanahalli", stage: "Negotiation" },
      { name: "Mr. Khan", meta: "Villa · Sarjapur", stage: "Booking" },
    ],
  },
  {
    key: "clinics",
    name: "Clinics & Healthcare",
    desc: "Handle appointments, inquiries, patient communication, and follow-ups.",
    pipeline: ["Inquiry", "Booked", "Consulted", "Treatment", "Follow-up"],
    sample: [
      { name: "Anita P.", meta: "Dental · Cleaning", stage: "Booked" },
      { name: "Suresh K.", meta: "Ortho · Consult", stage: "Consulted" },
      { name: "Pooja N.", meta: "Skin · Review", stage: "Follow-up" },
    ],
  },
  {
    key: "insurance",
    name: "Insurance & Loan Teams",
    desc: "Organize customer pipelines, document collection, and renewal reminders.",
    pipeline: ["Lead", "Quotation", "Documents", "Approved", "Renewal"],
    sample: [
      { name: "Vikram S.", meta: "Home loan · 45L", stage: "Documents" },
      { name: "Riya M.", meta: "Term plan", stage: "Quotation" },
      { name: "Mohit L.", meta: "Health · Renewal", stage: "Renewal" },
    ],
  },
  {
    key: "solar",
    name: "Solar Companies",
    desc: "Track quotations, installations, and field sales workflows.",
    pipeline: ["Inquiry", "Site survey", "Quotation", "Installation", "Live"],
    sample: [
      { name: "Patel Residence", meta: "5 kW · Rooftop", stage: "Quotation" },
      { name: "GreenWare Pvt", meta: "20 kW · Commercial", stage: "Site survey" },
      { name: "Kumar Farm", meta: "Off-grid", stage: "Installation" },
    ],
  },
];

const activity = [
  "WhatsApp reminder sent",
  "Lead assigned to Priya",
  "Document uploaded",
  "Follow-up moved to today",
  "Email sequence triggered",
  "Manager review requested",
];

const owners = ["RK", "PV", "AS", "MJ"];

function LiveSaasDemo({ industry }: { industry: (typeof industries)[number] }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((value) => value + 1), 2200);
    return () => window.clearInterval(id);
  }, []);

  const liveActivity = activity[tick % activity.length];
  const primaryStage = industry.pipeline[tick % industry.pipeline.length];

  return (
    <div className="mx-auto mt-10 w-full max-w-5xl">
      <motion.div
        key={industry.key}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-full overflow-hidden rounded-2xl border hairline bg-card shadow-elevated"
        data-testid="industries-mockup"
      >
        <div className="flex items-center justify-between gap-3 border-b hairline px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <span className="ml-1 truncate font-mono text-[10px] text-muted-foreground sm:ml-2 sm:text-[11px]">
              app.startupsetup.in / live-ops
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
            Live demo
          </div>
        </div>

        <div className="grid grid-cols-12">
          <aside className="hidden border-r hairline bg-surface/60 p-4 md:col-span-3 md:block">
            <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Workspace
            </div>
            <div className="mt-2 rounded-lg border hairline bg-card px-3 py-2 text-sm shadow-soft">
              {industry.name}
            </div>
            <div className="mt-5 space-y-1">
              {["Leads", "Automations", "Tasks", "Documents", "Messages"].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-xs ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span>{item}</span>
                  {item === "Messages" && (
                    <span className="rounded-full bg-accent px-1.5 text-[10px] text-accent-foreground">
                      3
                    </span>
                  )}
                </div>
              ))}
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
              {[
                ["Active leads", 148 + (tick % 4)],
                ["Due today", 12 + (tick % 3)],
                ["Auto messages", 64 + tick],
                ["Won this week", 18 + (tick % 2)],
              ].map(([label, value]) => (
                <div key={label} className="bg-surface p-3 sm:p-4">
                  <div className="text-[11px] text-muted-foreground">{label}</div>
                  <div className="mt-1 font-display text-2xl tracking-tight sm:text-3xl">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-px bg-border">
              <div className="col-span-12 bg-card p-3 sm:p-4 lg:col-span-8">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-medium">Live pipeline</div>
                    <div className="truncate text-[11px] text-muted-foreground">
                      {industry.pipeline.join(" · ")}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                    {primaryStage}
                  </span>
                </div>

                <div className="space-y-2">
                  {industry.sample.map((lead, index) => {
                    const active = tick % industry.sample.length === index;
                    const stage = industry.pipeline[(index + tick) % industry.pipeline.length];
                    return (
                      <motion.div
                        key={lead.name}
                        animate={{
                          backgroundColor: active ? "rgba(37, 71, 224, 0.06)" : "rgba(0,0,0,0)",
                        }}
                        className="grid grid-cols-1 gap-3 rounded-lg border hairline bg-card p-3 sm:grid-cols-[1fr_auto] sm:items-center"
                      >
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">{lead.name}</div>
                          <div className="truncate text-[11px] text-muted-foreground">
                            {lead.meta}
                          </div>
                        </div>
                        <div className="flex min-w-0 items-center justify-between gap-2 sm:justify-start">
                          <span className="inline-flex max-w-full rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                            {stage}
                          </span>
                          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
                            {owners[index % owners.length]}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="col-span-12 bg-surface p-3 sm:p-4 lg:col-span-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Ops feed</div>
                  <span className="font-mono text-[10px] text-muted-foreground">now</span>
                </div>

                <div className="mt-3 h-12 overflow-hidden rounded-lg border hairline bg-card p-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={liveActivity}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm"
                    >
                      {liveActivity}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-3 space-y-2">
                  {["Assign owner", "Send WhatsApp", "Collect documents"].map((task, index) => (
                    <div
                      key={task}
                      className="flex items-center justify-between rounded-lg border hairline bg-card px-3 py-2 text-xs"
                    >
                      <span>{task}</span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          tick % 3 === index
                            ? "bg-success animate-pulse-dot"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 border-t hairline bg-surface/60 px-3 py-2.5 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-4">
              <span>WhatsApp · Email · Documents · Team tasks</span>
              <span className="font-mono">synced {String(tick).padStart(2, "0")}s</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Industries() {
  const [active, setActive] = useState(0);
  const ind = industries[active];

  return (
    <section id="industries" className="relative pb-20 pt-10 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                (03)
              </span>
              <span className="eyebrow">See it live</span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              One system, customised for your workflow.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              The same engine adapts to the way different businesses operate — your stages, your
              team, your channels. Pick an industry and watch it run.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex snap-x items-center gap-2 overflow-x-auto pb-2 sm:mt-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {industries.map((i, idx) => (
              <button
                key={i.key}
                onClick={() => setActive(idx)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-all ${
                  idx === active
                    ? "border-foreground bg-foreground text-background shadow-soft"
                    : "hairline bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {i.name}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <LiveSaasDemo industry={ind} />
        </AnimatePresence>
      </div>
    </section>
  );
}
