import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const commands = [
  { cmd: "Assign lead Aarav to Rahul", out: "Lead reassigned · Rahul notified on WhatsApp" },
  { cmd: "Update Sana's status to Counselling", out: "Status updated · template message queued" },
  { cmd: "Schedule follow-up with Rohit tomorrow 4 PM", out: "Reminder added · calendar synced" },
  { cmd: "Create employee Priya · Counsellor", out: "Team member added · invite sent" },
  { cmd: "Send reminder to all pending document leads", out: "12 WhatsApp reminders sent" },
];

function useTyped(text: string, speed = 28) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export function AIAssistant() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((n) => (n + 1) % commands.length), 4200);
    return () => clearInterval(id);
  }, []);
  const c = commands[idx];
  const typed = useTyped(c.cmd);

  return (
    <section
      id="ai-assistant"
      className="relative scroll-mt-24 border-t border-hairline bg-surface py-16 sm:py-20"
    >
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                (04)
              </span>
              <span className="eyebrow">AI assistant</span>
            </div>
            <h2 className="mt-5 max-w-[16ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              Run operations in{" "}
              <span className="font-serif font-normal italic text-accent">plain language</span>.
            </h2>
            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Run your operations through natural language. Assign leads, update statuses, schedule
              follow-ups, and trigger workflows without clicking through menus.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Assign", "Update status", "Schedule", "Create", "Notify"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border hairline bg-card px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border hairline bg-primary text-primary-foreground shadow-glow">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-accent/20 text-accent">
                    ✦
                  </span>
                  <span className="text-sm font-medium">Operational Assistant</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-primary-foreground/50">
                  <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
                  ready
                </div>
              </div>

              <div className="px-4 py-5 sm:px-5 sm:py-6">
                <div className="font-mono text-[11px] uppercase tracking-wider text-primary-foreground/40">
                  Command
                </div>
                <div className="mt-2 flex min-w-0 items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 sm:items-center sm:px-4">
                  <span className="shrink-0 text-accent">›</span>
                  <span className="min-w-0 break-words font-mono text-[13px] sm:text-[14px]">
                    {typed}
                    <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-accent" />
                  </span>
                </div>

                <div className="mt-5 font-mono text-[11px] uppercase tracking-wider text-primary-foreground/40">
                  Action
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={c.out}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="mt-2 flex items-start gap-3 rounded-lg border border-white/10 bg-success/10 px-4 py-3"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/30 text-success">
                      ✓
                    </span>
                    <span className="text-sm">{c.out}</span>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {["Lead updated", "Workflow ran", "WA sent"].map((m, i) => (
                    <div
                      key={m}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-primary-foreground/40">
                        Step {i + 1}
                      </div>
                      <div className="mt-1 text-xs">{m}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
