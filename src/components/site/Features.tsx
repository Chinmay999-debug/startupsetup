import { Reveal } from "./Reveal";
import {
  Users,
  BellRing,
  LayoutDashboard,
  MessageCircle,
  Mail,
  Workflow,
  FileText,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Lead Tracking",
    desc: "Track every inquiry and stage from one dashboard.",
    snippet: ["New", "Contacted", "Counselling", "Closed"],
  },
  {
    icon: BellRing,
    title: "Follow-up Reminders",
    desc: "Never miss customer follow-ups again.",
    snippet: ["Today · 12", "Tomorrow · 8", "This week · 31"],
  },
  {
    icon: LayoutDashboard,
    title: "Employee Dashboard",
    desc: "Assign leads and manage operational workflows.",
    snippet: ["RK · 24", "PV · 18", "AS · 22", "MJ · 11"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    desc: "Automatically send updates when statuses change.",
    snippet: ["Trigger: Status → Counselling", "Send: WA template"],
  },
  {
    icon: Mail,
    title: "Email Notifications",
    desc: "Keep customers informed in real time.",
    snippet: ["Welcome", "Document request", "Appointment confirmed"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate repetitive operational tasks.",
    snippet: ["When new lead → assign", "→ notify owner", "→ schedule call"],
  },
  {
    icon: FileText,
    title: "Document Tracking",
    desc: "Manage customer documents and pending tasks.",
    snippet: ["Passport ✓", "10th marksheet ✓", "Visa form · pending"],
  },
  {
    icon: Sparkles,
    title: "AI Operational Assistant",
    desc: "Manage workflows using conversational commands.",
    snippet: ['"Assign Aarav to Rahul"', '"Schedule follow-up tomorrow"'],
  },
];

export function Features() {
  return (
    <section id="software" className="relative border-t border-hairline bg-background">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (03)
                </span>
                <span className="eyebrow">The feature set</span>
              </div>
              <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                Everything your operations need.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              Practical, operational features built for teams that handle real customers every day —
              not dashboards full of vanity charts.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.05}>
              <div className="group relative h-full bg-card p-5 transition-colors hover:bg-surface-elevated sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border hairline bg-surface text-foreground transition-all group-hover:border-foreground/30 group-hover:shadow-soft">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-[15px] font-medium">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="mt-5 space-y-1.5">
                  {f.snippet.map((s, j) => (
                    <div
                      key={j}
                      className="flex min-w-0 items-center gap-2 rounded-md border hairline bg-surface px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span className="min-w-0 break-words">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-none opacity-0 ring-1 ring-foreground/10 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
