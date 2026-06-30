import { AnimatePresence, motion } from "framer-motion";
import { Check, Code2, Compass, PenTool, Rocket, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Compass,
    title: "Discover & plan",
    desc: "We learn your business and map the scope, so there are no surprises later.",
    duration: "1–2 days",
  },
  {
    n: "02",
    icon: PenTool,
    title: "Design",
    desc: "A premium, on-brand experience designed to turn visitors into customers.",
    duration: "3–5 days",
  },
  {
    n: "03",
    icon: Code2,
    title: "Build",
    desc: "Clean, scalable software, with progress you can watch in real time.",
    duration: "1–2 weeks",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & grow",
    desc: "We ship, test on every device, and keep improving as you grow.",
    duration: "Ongoing",
  },
];

const INTERVAL = 1600;
const EASE = [0.22, 1, 0.36, 1] as const;

/* ---- per-step finished mini-mockup that fills the stage ---- */
function Scene({ index }: { index: number }) {
  const Icon = steps[index].icon;
  const badge = (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-accent/12 text-accent">
      <Icon className="h-3 w-3" strokeWidth={2} />
    </span>
  );

  // Discover & plan — a discovery brief with real checklist items
  if (index === 0) {
    const items = ["Business goals", "Target audience", "Scope & timeline"];
    return (
      <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
        <div className="w-full max-w-[250px] rounded-xl border border-hairline bg-card p-3.5 shadow-soft">
          <div className="mb-3 flex items-center gap-2">
            {badge}
            <span className="text-[11px] font-semibold tracking-tight">Discovery brief</span>
          </div>
          {items.map((label, k) => (
            <div key={label} className="mb-2 flex items-center gap-2.5 last:mb-0">
              <motion.span
                className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.35 + k * 0.4, type: "spring", stiffness: 400, damping: 18 }}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </motion.span>
              <span className="text-[10.5px] text-muted-foreground">{label}</span>
            </div>
          ))}
          <div className="mt-3 flex items-center gap-1.5 border-t border-hairline pt-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
            <span className="font-mono text-[8px] text-muted-foreground">
              Scope locked · ready to design
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Design — a finished mini landing-page preview
  if (index === 1) {
    return (
      <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
        <div className="w-full max-w-[250px] overflow-hidden rounded-xl border border-hairline bg-card shadow-soft">
          <div className="flex items-center gap-1.5 border-b border-hairline bg-surface/60 px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-warning/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-success/50" />
            <span className="ml-auto rounded bg-card px-2 py-0.5 font-mono text-[7.5px] text-muted-foreground">
              yourbrand.com
            </span>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-tight">Lumen</span>
              <div className="flex gap-2">
                <span className="text-[7.5px] text-muted-foreground">Work</span>
                <span className="text-[7.5px] text-muted-foreground">About</span>
              </div>
            </div>
            <motion.div
              className="mt-2.5"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
            >
              <div className="font-display text-[13px] font-semibold leading-tight tracking-tight">
                Design that <span className="text-accent">converts.</span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-primary px-2.5 py-1 text-[8px] font-medium text-primary-foreground">
                Get started
              </span>
            </motion.div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {["Fast", "Clean", "Yours"].map((t, k) => (
                <motion.div
                  key={t}
                  className="rounded-md border border-hairline bg-surface/50 py-1.5 text-center text-[7.5px] font-medium text-muted-foreground"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + k * 0.1, duration: 0.3, ease: EASE }}
                >
                  {t}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Build — a code editor with real code
  if (index === 2) {
    const codeLines: { t: string; c: string }[][] = [
      [
        { t: "export ", c: "text-accent" },
        { t: "function ", c: "text-foreground/55" },
        { t: "App", c: "text-foreground" },
        { t: "() {", c: "text-foreground/40" },
      ],
      [
        { t: "  return ", c: "text-accent" },
        { t: "<Live ", c: "text-success" },
        { t: "/>", c: "text-success" },
      ],
      [{ t: "}", c: "text-foreground/40" }],
      [{ t: "// shipped to prod ✓", c: "text-muted-foreground/60" }],
    ];
    return (
      <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
        <div className="w-full max-w-[250px] overflow-hidden rounded-xl border border-hairline bg-card shadow-soft">
          <div className="flex items-center gap-1.5 border-b border-hairline bg-surface/60 px-2.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-warning/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-success/50" />
            <span className="ml-1 font-mono text-[8px] text-muted-foreground">App.tsx</span>
          </div>
          <div className="p-3.5 font-mono text-[9.5px] leading-[1.75]">
            {codeLines.map((line, k) => (
              <motion.div
                key={k}
                className="whitespace-pre"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + k * 0.2, duration: 0.25 }}
              >
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Launch & grow — a live analytics dashboard
  return (
    <div className="absolute inset-0 grid place-items-center p-4 sm:p-6">
      <div className="w-full max-w-[250px] rounded-xl border border-hairline bg-card p-3.5 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-tight">Analytics</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-1.5 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.08em] text-success">
            <span className="h-1 w-1 rounded-full bg-success animate-pulse-dot" />
            Live
          </span>
        </div>
        <div className="mt-2 flex items-end gap-2">
          <span className="font-display text-[20px] font-semibold leading-none tracking-tight">
            1,248
          </span>
          <span className="inline-flex items-center gap-0.5 pb-0.5 text-[9px] font-medium text-success">
            <TrendingUp className="h-3 w-3" strokeWidth={2.25} />
            24%
          </span>
        </div>
        <span className="text-[8.5px] text-muted-foreground">visitors this week</span>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {[30, 45, 38, 60, 72, 95].map((h, k) => (
            <motion.span
              key={k}
              className={`flex-1 rounded-t-sm ${k === 5 ? "bg-accent" : "bg-accent/45"}`}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.2 + k * 0.09, duration: 0.5, ease: EASE }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[7px] text-muted-foreground/70">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

function ProcessPlayer() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [inView]);

  const current = steps[active];

  return (
    <div
      ref={rootRef}
      className="overflow-hidden rounded-2xl border border-hairline bg-card shadow-elevated"
    >
      {/* Integrated stepper */}
      <div className="border-b border-hairline px-5 py-5 sm:px-8">
        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-hairline" />
          <motion.div
            className="absolute left-[12.5%] top-4 h-px origin-left bg-accent"
            animate={{ width: `${(active / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: EASE }}
          />
          <div className="relative grid grid-cols-4">
            {steps.map((s, i) => {
              const done = i < active;
              const isActive = i === active;
              return (
                <button
                  key={s.n}
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-2.5"
                  aria-label={`Step ${s.n}: ${s.title}`}
                >
                  <span
                    className={`relative grid h-8 w-8 place-items-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-accent bg-accent text-accent-foreground"
                        : done
                          ? "border-accent/45 bg-card text-accent"
                          : "border-hairline bg-card text-muted-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-full ring-2 ring-accent/40"
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.7 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    {done ? (
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    ) : (
                      <span className="font-mono text-[10.5px] font-semibold">{s.n}</span>
                    )}
                  </span>
                  <span
                    className={`hidden text-[11.5px] font-medium tracking-tight transition-colors sm:block ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Body — visual stage + copy */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="relative h-[228px] overflow-hidden border-b border-hairline bg-gradient-to-br from-accent/[0.07] via-accent/[0.02] to-transparent sm:col-span-5 sm:h-auto sm:min-h-[300px] sm:border-b-0 sm:border-r">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute inset-0"
            >
              <Scene index={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative flex flex-col justify-center p-6 sm:col-span-7 sm:p-9">
          <span className="pointer-events-none absolute -top-4 right-4 select-none font-display text-[110px] font-medium leading-none text-foreground/[0.04] sm:text-[140px]">
            {current.n}
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(5px)" }}
              transition={{ duration: 0.42, ease: EASE }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Step {current.n} / 0{steps.length}
                </span>
                <span className="rounded-full border border-hairline bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                  {current.duration}
                </span>
              </div>
              <h3 className="mt-2.5 font-display text-2xl font-medium tracking-tight sm:text-[30px]">
                {current.title}
              </h3>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Play-bar */}
      <div className="relative h-1 bg-hairline">
        <motion.div
          key={active}
          className="absolute inset-y-0 left-0 bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 border-t border-hairline bg-background">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (04)
                </span>
                <span className="eyebrow">How we work</span>
              </div>
              <h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                From brief to live in weeks, not months.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              Four simple steps, fully managed by us. You stay in the loop while we do the heavy
              lifting.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="pb-16 sm:pb-20">
            <ProcessPlayer />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
