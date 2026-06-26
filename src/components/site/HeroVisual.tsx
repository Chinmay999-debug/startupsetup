import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Filter,
  Lock,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  UserPlus,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const screens = [
  { key: "website", label: "Website", url: "yourwebsite.in" },
  { key: "crm", label: "CRM", url: "app.startupsetup.in/leads" },
  { key: "automation", label: "Automation", url: "flows.startupsetup.in" },
  { key: "ai", label: "AI agent", url: "assistant.startupsetup.in" },
] as const;

/* Screens get a `live` flag so their timers pause when the hero is off-screen */
type ScreenProps = { live: boolean };

/* ---------------- Website (client storefront) ---------------- */
const webProducts = [
  {
    t: "Glow Serum",
    price: "₹1,290",
    was: "₹1,610",
    bg: "bg-accent/15",
    accent: "bg-accent/70",
    badge: "−20%",
  },
  { t: "Gentle Wash", price: "₹740", bg: "bg-foreground/[0.06]", accent: "bg-foreground/40" },
  { t: "Day Cream", price: "₹980", bg: "bg-accent/[0.07]", accent: "bg-success/60" },
];

/* A defined product bottle, built from layered shapes — reads as a real render */
function ProductBottle() {
  return (
    <div className="relative flex h-full min-h-[120px] items-center justify-center">
      {/* tinted studio backdrop */}
      <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-accent/[0.16] via-accent/[0.05] to-transparent" />
      <div className="absolute right-2 top-2 h-7 w-7 rounded-full border border-accent/20" />
      <div className="absolute left-1.5 top-1.5 rounded-full bg-card px-1.5 py-0.5 font-mono text-[6.5px] font-semibold uppercase tracking-[0.1em] text-accent shadow-soft">
        New
      </div>
      <div className="absolute -bottom-0.5 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-[50%] bg-foreground/15 blur-[3px]" />
      {/* bottle */}
      <div className="relative flex flex-col items-center">
        <span className="h-3 w-[18px] rounded-t-[3px] bg-gradient-to-b from-foreground/85 to-foreground/70" />
        <span className="-mt-px h-1.5 w-3.5 bg-foreground/55" />
        <div className="relative flex h-[86px] w-[40px] flex-col items-center justify-center gap-[5px] overflow-hidden rounded-[9px] bg-gradient-to-b from-card to-surface shadow-soft ring-1 ring-foreground/10">
          {/* glass highlight */}
          <span className="absolute left-[7px] top-2.5 h-[58%] w-[4px] rounded-full bg-card/85" />
          {/* label */}
          <span className="block h-[3px] w-[24px] rounded-full bg-accent/70" />
          <span className="block h-[2px] w-[28px] rounded-full bg-foreground/15" />
          <span className="block h-[2px] w-[20px] rounded-full bg-foreground/15" />
        </div>
      </div>
    </div>
  );
}

function WebsiteScreen() {
  return (
    <div className="flex h-full flex-col bg-card">
      {/* nav */}
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded-[5px] bg-foreground text-[8px] font-bold leading-none text-background">
            L
          </span>
          <span className="text-[11px] font-semibold tracking-tight">Lumen</span>
        </div>
        <div className="hidden items-center gap-3.5 sm:flex">
          {["Shop", "Science", "About"].map((l) => (
            <span key={l} className="text-[9.5px] text-muted-foreground">
              {l}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <Search className="h-3 w-3 text-muted-foreground" strokeWidth={2} />
          <span className="relative">
            <ShoppingBag className="h-[14px] w-[14px] text-foreground" strokeWidth={2} />
            <span className="absolute -right-1.5 -top-1.5 grid h-3 w-3 place-items-center rounded-full bg-accent text-[7px] font-bold leading-none text-accent-foreground">
              2
            </span>
          </span>
        </div>
      </div>

      {/* hero — copy + product render */}
      <div className="flex items-stretch gap-2 px-4 pb-3 pt-3.5">
        <div className="min-w-0 flex-1">
          <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent">
            Modern skincare
          </div>
          <div className="mt-1.5 font-display text-[17px] font-semibold leading-[1.04] tracking-tight">
            Care that feels
            <br />
            <span className="font-serif font-normal italic text-accent">effortless</span>.
          </div>
          <p className="mt-1.5 max-w-[150px] text-[9px] leading-relaxed text-muted-foreground">
            Clean, science-backed essentials for your daily ritual.
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[9px] font-medium text-primary-foreground">
              Shop now <span aria-hidden>→</span>
            </span>
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-2 w-2 fill-warning text-warning" strokeWidth={0} />
              ))}
              <span className="ml-0.5 text-[8px] text-muted-foreground">4.9</span>
            </span>
          </div>
        </div>
        <div className="w-[76px] shrink-0">
          <ProductBottle />
        </div>
      </div>

      {/* bestsellers strip */}
      <div className="mt-auto border-t border-hairline px-4 py-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] font-semibold tracking-tight">Bestsellers</span>
          <span className="font-mono text-[8px] text-muted-foreground">View all →</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {webProducts.map((p) => (
            <div
              key={p.t}
              className="overflow-hidden rounded-lg border border-hairline bg-surface/40"
            >
              <div className={`relative grid h-[34px] place-items-center ${p.bg}`}>
                {p.badge && (
                  <span className="absolute left-1 top-1 rounded bg-primary px-1 py-px text-[6.5px] font-bold leading-none text-primary-foreground">
                    {p.badge}
                  </span>
                )}
                <span className="relative flex flex-col items-center">
                  <span className="h-1 w-1.5 rounded-t-[1px] bg-foreground/60" />
                  <span className="flex h-4 w-[10px] items-center justify-center rounded-[2px] bg-card shadow-soft ring-1 ring-foreground/10">
                    <span className={`h-[1.5px] w-1.5 rounded-full ${p.accent}`} />
                  </span>
                </span>
              </div>
              <div className="px-1.5 py-1">
                <div className="truncate text-[8.5px] font-medium leading-tight">{p.t}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[8px] font-semibold text-foreground">{p.price}</span>
                  {p.was && (
                    <span className="text-[7px] text-muted-foreground line-through">{p.was}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- CRM ---------------- */
const crmStats = [
  { label: "Active", value: "74" },
  { label: "Pipeline", value: "₹4.2L" },
  { label: "Won rate", value: "28%", up: true },
];

const crmLeads = [
  { name: "Anita Sharma", chip: "Consult · 4:30", tone: "success", owner: "RS" },
  { name: "Rajesh Kumar", chip: "Follow-up", tone: "accent", owner: "PV" },
  { name: "Meera Patel", chip: "New inquiry", tone: "primary", owner: "AS" },
] as const;

const crmTone: Record<string, { dot: string; chip: string }> = {
  success: { dot: "bg-success", chip: "bg-success/12 text-success" },
  accent: { dot: "bg-accent", chip: "bg-accent/12 text-accent" },
  primary: { dot: "bg-primary", chip: "bg-primary/10 text-primary" },
};

function CRMScreen({ live }: ScreenProps) {
  const [pulseIdx, setPulseIdx] = useState<number | null>(null);
  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => {
      const idx = Math.floor(Math.random() * crmLeads.length);
      setPulseIdx(idx);
      setTimeout(() => setPulseIdx(null), 1200);
    }, 3000);
    return () => clearInterval(id);
  }, [live]);

  return (
    <div className="flex h-full bg-card">
      <aside className="hidden w-[88px] shrink-0 border-r border-hairline bg-surface/60 p-2.5 sm:block">
        <div className="eyebrow !text-[8px] !tracking-[0.14em]">Workspace</div>
        {["Leads", "Pipeline", "Calendar", "Inbox", "Reports"].map((item, i) => (
          <div
            key={item}
            className={`mt-1 flex items-center justify-between rounded-md px-2 py-1.5 text-[10px] ${
              i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {item}
            {item === "Inbox" && (
              <span className="rounded-full bg-accent px-1 text-[8px] text-accent-foreground">
                2
              </span>
            )}
          </div>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-hairline px-3 py-2.5">
          <div>
            <div className="text-[11px] font-semibold">All leads</div>
            <div className="font-mono text-[9px] text-muted-foreground">
              74 active · 6 due today
            </div>
          </div>
          <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] text-primary-foreground">
            + New
          </span>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-1.5 px-3 pt-2.5">
          {crmStats.map((s) => (
            <div
              key={s.label}
              className="rounded-md border border-hairline bg-surface/50 px-2 py-1.5"
            >
              <div className="font-mono text-[7.5px] uppercase tracking-[0.1em] text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-0.5 flex items-center gap-0.5 font-display text-[12.5px] font-semibold leading-none tracking-tight">
                {s.value}
                {s.up && <TrendingUp className="h-2.5 w-2.5 text-success" strokeWidth={2.5} />}
              </div>
            </div>
          ))}
        </div>

        {/* lead list */}
        <div className="mt-1.5 divide-y divide-hairline">
          {crmLeads.map((lead, i) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.07 }}
              className={`flex items-center gap-2.5 px-3 py-2 transition-colors ${
                pulseIdx === i ? "bg-accent/[0.05]" : ""
              }`}
            >
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-muted text-[9px] font-medium">
                {lead.name
                  .split(" ")
                  .map((s) => s[0])
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[11px] font-medium leading-tight">{lead.name}</div>
                <span
                  className={`mt-0.5 inline-block rounded-full px-1.5 py-px font-mono text-[8px] ${crmTone[lead.tone].chip}`}
                >
                  {lead.chip}
                </span>
              </div>
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${crmTone[lead.tone].dot} ${pulseIdx === i ? "animate-pulse-dot" : ""}`}
              />
              <div className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/90 text-[8px] font-medium text-primary-foreground">
                {lead.owner}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 border-t border-hairline bg-surface/60 px-3 py-2 font-mono text-[9px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
          Synced · WhatsApp · Email
        </div>
      </div>
    </div>
  );
}

/* ---------------- Automation ---------------- */
const autoSteps = [
  { icon: UserPlus, label: "New lead captured", sub: "WhatsApp · web form" },
  { icon: Filter, label: "Lead qualified", sub: "scored & routed to sales" },
  { icon: Send, label: "Auto-reply sent", sub: "personalised in seconds" },
  { icon: Bell, label: "Team notified", sub: "Slack ping · CRM updated" },
];

function AutomationScreen({ live }: ScreenProps) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => setStep((s) => (s + 1) % (autoSteps.length + 1)), 1150);
    return () => clearInterval(id);
  }, [live]);

  return (
    <div className="flex h-full flex-col bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-accent/10 text-accent">
            <Zap className="h-3 w-3" strokeWidth={2.5} />
          </span>
          <div>
            <div className="text-[11px] font-semibold leading-none">Lead-intake workflow</div>
            <div className="mt-1 font-mono text-[8px] text-muted-foreground">
              runs on every new lead
            </div>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-hairline px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
          Running
        </span>
      </div>

      <div className="relative mt-3 flex flex-1 flex-col">
        {/* rail — node centres sit at 12.5% / 37.5% / 62.5% / 87.5% of the body */}
        <span className="absolute bottom-[12.5%] left-[10.5px] top-[12.5%] w-px bg-hairline" />
        {/* progress fill — length derived straight from `step`, so it can't desync */}
        <motion.span
          className="absolute left-[10.5px] top-[12.5%] w-px origin-top bg-success/50"
          animate={{
            height: `${(Math.min(step, autoSteps.length - 1) / autoSteps.length) * 100}%`,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        {autoSteps.map((s, i) => {
          const done = i < step;
          const active = i === step;
          const Icon = s.icon;
          return (
            <div key={s.label} className="relative flex flex-1 items-center gap-2.5">
              <span
                className={`relative z-10 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                  done
                    ? "border-success/40 bg-success/15 text-success"
                    : active
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-hairline bg-surface text-muted-foreground/45"
                }`}
              >
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-full ring-2 ring-accent/40"
                    initial={{ opacity: 0.6, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.6 }}
                    transition={{ duration: 1.15, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                {done ? (
                  <Check className="h-3 w-3" strokeWidth={3} />
                ) : (
                  <Icon className="h-[12px] w-[12px]" strokeWidth={2.25} />
                )}
              </span>
              <div
                className={`flex-1 rounded-lg px-2 py-1 transition-all duration-300 ${
                  active ? "bg-accent/[0.05]" : ""
                } ${i > step ? "opacity-45" : "opacity-100"}`}
              >
                <div className="text-[10.5px] font-medium leading-tight">{s.label}</div>
                <div className="mt-0.5 font-mono text-[8.5px] text-muted-foreground">
                  {done ? "done" : active ? "running…" : s.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-1 flex items-center justify-between rounded-lg border border-hairline bg-surface/60 px-3 py-2">
        <span className="font-mono text-[8.5px] text-muted-foreground">Today</span>
        <span className="font-display text-[13px] font-semibold leading-none tracking-tight">
          1,240 <span className="text-[8.5px] font-normal text-muted-foreground">runs</span>
        </span>
        <span className="font-mono text-[8.5px] text-success">100% success</span>
      </div>
    </div>
  );
}

/* ---------------- AI agent ---------------- */
const aiTurns = [
  { who: "user", text: "Book Anita for Thursday 5 PM and remind her a day before." },
  { who: "ai", text: "Done — appointment booked and the reminder is scheduled." },
  { who: "tool" },
] as const;

const aiActions = [
  { icon: Calendar, label: "Appointment booked", when: "Thu · 5:00 PM" },
  { icon: Bell, label: "WhatsApp reminder", when: "Wed · 5:00 PM" },
];

function AIScreen({ live }: ScreenProps) {
  const [shown, setShown] = useState(1);
  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => setShown((n) => (n >= aiTurns.length ? 1 : n + 1)), 2400);
    return () => clearInterval(id);
  }, [live]);

  return (
    <div className="flex h-full flex-col bg-card p-4">
      <div className="flex items-center justify-between border-b border-hairline pb-2.5">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-accent text-[10px] font-semibold text-accent-foreground">
            AI
          </span>
          <div>
            <div className="text-[11px] font-semibold leading-none">Operations assistant</div>
            <div className="mt-1 font-mono text-[8px] text-success">● online</div>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-hairline px-1.5 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.1em] text-muted-foreground">
          <Sparkles className="h-2.5 w-2.5 text-accent" strokeWidth={2} />
          Agent
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden py-3">
        {aiTurns.slice(0, shown).map((t, i) => {
          if (t.who === "tool") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mr-auto w-[90%] rounded-xl border border-hairline bg-surface p-2"
              >
                <div className="flex items-center gap-1 font-mono text-[7.5px] uppercase tracking-[0.12em] text-accent">
                  <Sparkles className="h-2.5 w-2.5" strokeWidth={2} />
                  Actions completed
                </div>
                <div className="mt-1.5 space-y-1.5">
                  {aiActions.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.label} className="flex items-center gap-2">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                          <Icon className="h-2.5 w-2.5" strokeWidth={2.25} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[9px] font-medium leading-tight">
                            {a.label}
                          </div>
                          <div className="font-mono text-[8px] text-muted-foreground">{a.when}</div>
                        </div>
                        <Check className="h-3 w-3 shrink-0 text-success" strokeWidth={3} />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          }
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={
                t.who === "user"
                  ? "ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-primary px-3 py-2 text-[10px] leading-snug text-primary-foreground"
                  : "mr-auto max-w-[82%] rounded-2xl rounded-tl-sm border border-hairline bg-surface px-3 py-2 text-[10px] leading-snug text-foreground"
              }
            >
              {t.text}
            </motion.div>
          );
        })}
      </div>

      {/* quick replies */}
      <div className="mb-2 flex gap-1.5">
        {["Reschedule", "Add a note"].map((c) => (
          <span
            key={c}
            className="rounded-full border border-hairline bg-card px-2 py-1 text-[8.5px] text-muted-foreground"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-full border border-hairline bg-surface py-1 pl-3 pr-1">
        <span className="flex-1 text-[9.5px] text-muted-foreground/70">Ask the assistant…</span>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
          <Send className="h-3 w-3" strokeWidth={2.25} />
        </span>
      </div>
    </div>
  );
}

export function HeroVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [inView, setInView] = useState(true);
  const paused = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Pause everything when the hero scrolls out of view — no off-screen timers/animation
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      if (!paused.current) setActiveIdx((i) => (i + 1) % screens.length);
    }, 5200);
    return () => clearInterval(id);
  }, [inView]);

  const live = inView;

  return (
    <div
      ref={rootRef}
      className="relative isolate"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Soft contact shadow — grounds the floating device */}
      <div className="pointer-events-none absolute inset-x-8 -bottom-6 z-0 h-14 rounded-[50%] bg-foreground/[0.12] blur-2xl" />

      {/* Device stack — floats gently for life */}
      <div className="relative z-10 animate-float">
        <div className="relative">
          {/* Depth — a second screen stacked behind */}
          <div className="pointer-events-none absolute -right-3 -top-3 h-full w-full rounded-xl border border-hairline bg-surface/70 shadow-soft" />

          {/* Main device */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 overflow-hidden rounded-xl border border-hairline bg-surface-elevated shadow-glow ring-1 ring-foreground/[0.04]"
          >
            {/* window chrome */}
            <div className="flex items-center gap-2.5 border-b border-hairline bg-surface/70 px-3 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/45" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/55" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/55" />
              </div>
              <div className="hidden items-center gap-0.5 text-muted-foreground/45 sm:flex">
                <ChevronLeft className="h-3 w-3" />
                <ChevronRight className="h-3 w-3" />
              </div>
              <div className="flex min-w-0 flex-1 items-center justify-center">
                <span className="flex min-w-0 items-center gap-1.5 rounded-md border border-hairline bg-card px-2.5 py-1 font-mono text-[9.5px] text-muted-foreground">
                  <Lock className="h-2.5 w-2.5 shrink-0 text-success" strokeWidth={2.25} />
                  <span className="truncate">{screens[activeIdx].url}</span>
                </span>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
            </div>

            {/* tab bar — sliding active indicator */}
            <div className="flex items-center gap-1 border-b border-hairline bg-surface/40 px-2 py-1.5">
              {screens.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActiveIdx(i)}
                  className="relative rounded-md px-2.5 py-1 font-mono text-[9.5px]"
                >
                  {i === activeIdx && (
                    <motion.span
                      layoutId="heroTabPill"
                      className="absolute inset-0 rounded-md bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      i === activeIdx
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            {/* screen */}
            <div className="h-[320px] overflow-hidden sm:h-[368px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  {activeIdx === 0 && <WebsiteScreen />}
                  {activeIdx === 1 && <CRMScreen live={live} />}
                  {activeIdx === 2 && <AutomationScreen live={live} />}
                  {activeIdx === 3 && <AIScreen live={live} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* figure caption */}
      <div className="mt-5 flex items-baseline gap-2 px-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground">
          Fig. 01
        </span>
        <span className="font-serif text-[13px] italic leading-snug text-muted-foreground">
          one partner — live website, CRM, automation &amp; AI, working together.
        </span>
      </div>
    </div>
  );
}
