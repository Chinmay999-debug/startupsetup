import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const stages = [
  { label: "New inquiry", color: "bg-primary" },
  { label: "Counselling", color: "bg-accent" },
  { label: "Document review", color: "bg-warning" },
  { label: "Visa stage", color: "bg-success" },
];

const baseLeads = [
  { name: "Aarav Mehta", tag: "MBBS · Russia", stageIdx: 2, owner: "RK" },
  { name: "Sana Iqbal", tag: "B.Tech · Germany", stageIdx: 1, owner: "PV" },
  { name: "Rohit Sharma", tag: "MS · Canada", stageIdx: 3, owner: "AS" },
  { name: "Neha Verma", tag: "BBA · UK", stageIdx: 0, owner: "RK" },
  { name: "Karan Patel", tag: "Diploma · Australia", stageIdx: 2, owner: "MJ" },
];

const activity = [
  { t: "WhatsApp update sent to Aarav", k: "wa", ago: "just now", tone: "success" as const },
  { t: "Lead assigned to Priya", k: "as", ago: "1m ago", tone: "primary" as const },
  { t: "Follow-up scheduled · 3:30 PM", k: "fu", ago: "2m ago", tone: "accent" as const },
  { t: "Document uploaded · Passport.pdf", k: "doc", ago: "4m ago", tone: "primary" as const },
  { t: "Status updated · Counselling", k: "st", ago: "6m ago", tone: "accent" as const },
  { t: "Reminder overdue · Karan Patel", k: "rm", ago: "8m ago", tone: "warning" as const },
  { t: "Task completed by Rahul", k: "tk", ago: "11m ago", tone: "success" as const },
];

const toneMap = {
  success: "bg-success",
  primary: "bg-primary",
  accent: "bg-accent",
  warning: "bg-warning",
};

export function Dashboard() {
  const [tick, setTick] = useState(0);
  const [leads, setLeads] = useState(baseLeads);
  const [pulseIdx, setPulseIdx] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 2400);
    return () => clearInterval(id);
  }, []);

  // Cycle one lead's stage forward to feel "alive"
  useEffect(() => {
    const id = setInterval(() => {
      setLeads((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const next = [...prev];
        const cur = next[idx];
        next[idx] = {
          ...cur,
          stageIdx: (cur.stageIdx + 1) % stages.length,
        };
        setPulseIdx(idx);
        setTimeout(() => setPulseIdx(null), 1400);
        return next;
      });
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const current = activity[tick % activity.length];

  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="relative w-full">
        {/* Floating activity card */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -left-6 top-24 z-20 hidden w-60 rounded-xl border hairline bg-card/95 p-3.5 shadow-elevated backdrop-blur-sm sm:block"
        >
          <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
            <span className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${toneMap[current.tone]} animate-pulse-dot`}
              />
              Live activity
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/60">{current.ago}</span>
          </div>
          <div className="mt-2 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.k + tick}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm text-foreground"
              >
                {current.t}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Typing indicator */}
          <div className="mt-1 flex items-center gap-1.5 border-t hairline pt-2 text-[11px] text-muted-foreground">
            <span className="font-mono">Priya</span>
            <span>is typing</span>
            <span className="ml-1 flex items-center gap-0.5">
              <span
                className="typing-dot inline-block h-1 w-1 rounded-full bg-muted-foreground"
                style={{ animationDelay: "0s" }}
              />
              <span
                className="typing-dot inline-block h-1 w-1 rounded-full bg-muted-foreground"
                style={{ animationDelay: "0.15s" }}
              />
              <span
                className="typing-dot inline-block h-1 w-1 rounded-full bg-muted-foreground"
                style={{ animationDelay: "0.3s" }}
              />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-6 -right-4 z-20 hidden w-64 rounded-xl border hairline bg-card/95 p-4 shadow-elevated backdrop-blur-sm sm:block"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Today's follow-ups
              </div>
              <div className="mt-1 font-display text-3xl">12</div>
            </div>
            <div className="flex items-end gap-1">
              {[3, 5, 4, 7, 6, 9, 8].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0.4, opacity: 0.5 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                  style={{ height: h * 4, transformOrigin: "bottom" }}
                  className="w-1.5 rounded-sm bg-primary/80"
                />
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />4 reminders
            queued · WhatsApp
          </div>
        </motion.div>

        {/* Main dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl border hairline bg-card shadow-glow"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-3 border-b hairline px-3 py-2.5 sm:px-4">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
              <span className="ml-1 truncate font-mono text-[10px] text-muted-foreground sm:ml-3 sm:text-[11px]">
                app.startupsetup.in / leads
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                ⌘K
              </span>
            </div>
          </div>

          <div className="grid grid-cols-12">
            {/* Sidebar */}
            <aside className="hidden border-r hairline bg-surface/60 p-3 sm:col-span-3 sm:block">
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Workspace
              </div>
              <div className="mt-2 rounded-md bg-card px-2 py-1.5 text-xs shadow-soft">
                Bright Future Consultants
              </div>
              <div className="mt-4 space-y-0.5">
                {[
                  ["Leads", true],
                  ["Pipelines", false],
                  ["Workflows", false],
                  ["Team", false],
                  ["Documents", false],
                  ["Inbox", false],
                ].map(([label, active]) => (
                  <div
                    key={label as string}
                    className={`flex items-center justify-between rounded-md px-2 py-1.5 text-xs transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{label}</span>
                    {label === "Inbox" && (
                      <motion.span
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.4 }}
                        className="rounded-full bg-accent px-1.5 text-[10px] text-accent-foreground"
                      >
                        3
                      </motion.span>
                    )}
                  </div>
                ))}
              </div>
            </aside>

            {/* Lead list */}
            <div className="col-span-12 sm:col-span-9">
              <div className="flex items-center justify-between gap-3 border-b hairline px-3 py-3 sm:px-4">
                <div>
                  <div className="text-sm font-medium">All leads</div>
                  <div className="text-[11px] text-muted-foreground">148 active · 12 due today</div>
                </div>
                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="rounded-full border hairline px-2.5 py-1 text-[11px] text-muted-foreground">
                    Stage
                  </span>
                  <span className="rounded-full border hairline px-2.5 py-1 text-[11px] text-muted-foreground">
                    Owner
                  </span>
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] text-primary-foreground shadow-soft">
                    + New
                  </span>
                </div>
              </div>

              <div className="divide-y hairline">
                {leads.map((l, i) => {
                  const stage = stages[l.stageIdx];
                  const isPulsing = pulseIdx === i;
                  return (
                    <motion.div
                      key={l.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                      className={`group relative flex items-center gap-2.5 px-3 py-3 transition-colors sm:gap-3 sm:px-4 ${
                        isPulsing ? "bg-accent/[0.06]" : "hover:bg-surface"
                      }`}
                    >
                      <div className="relative grid h-8 w-8 place-items-center rounded-full bg-muted text-[11px] font-medium">
                        {l.name
                          .split(" ")
                          .map((s) => s[0])
                          .join("")}
                        <span className="absolute -bottom-0 -right-0 h-2 w-2 rounded-full bg-success ring-2 ring-card" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">{l.name}</div>
                        <div className="truncate text-[11px] text-muted-foreground">{l.tag}</div>
                      </div>
                      <div className="hidden min-w-0 items-center gap-1.5 sm:flex">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${stage.color} ${
                            isPulsing ? "animate-pulse-dot" : ""
                          }`}
                        />
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={stage.label}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-24 truncate text-xs text-muted-foreground"
                          >
                            {stage.label}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                      <div
                        className={`ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/90 text-[10px] font-medium text-primary-foreground sm:ml-3 ${
                          isPulsing ? "animate-glow" : ""
                        }`}
                      >
                        {l.owner}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom strip */}
              <div className="flex flex-col gap-2 border-t hairline bg-surface/60 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
                    Synced
                  </span>
                  <span>WhatsApp · Email · Calls</span>
                </div>
                <div className="font-mono text-[11px] text-muted-foreground">v 4.2 · ops</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
