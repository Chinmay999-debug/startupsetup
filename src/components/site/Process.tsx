import { AnimatePresence, motion } from "framer-motion";
import { Check, Code2, Compass, PenTool, Rocket } from "lucide-react";
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

const INTERVAL = 2800;
const EASE = [0.22, 1, 0.36, 1] as const;

/* ---- per-step animated scene ---- */
function Scene({ index }: { index: number }) {
  const Icon = steps[index].icon;

  const motif = (() => {
    switch (index) {
      case 0: // Discover — radar rings
        return [0, 1, 2].map((k) => (
          <motion.span
            key={k}
            className="absolute h-28 w-28 rounded-full border border-accent/30"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: k * 0.85, ease: "easeOut" }}
          />
        ));
      case 1: // Design — wireframe drawing itself
        return (
          <div className="absolute flex w-28 flex-col gap-2">
            {[80, 100, 60].map((w, k) => (
              <motion.span
                key={k}
                className="h-2 rounded-full bg-accent/25"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${w}%`, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + k * 0.18, ease: EASE }}
              />
            ))}
          </div>
        );
      case 2: // Build — code lines stacking up
        return (
          <div className="absolute flex w-32 flex-col items-start gap-1.5">
            {[55, 85, 40, 70].map((w, k) => (
              <motion.span
                key={k}
                className="h-1.5 rounded-full bg-accent/30"
                initial={{ width: 0 }}
                animate={{ width: `${w}%` }}
                transition={{
                  duration: 0.5,
                  delay: k * 0.12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1.1,
                  ease: EASE,
                }}
              />
            ))}
          </div>
        );
      default: // Launch — rising particles
        return [0, 1, 2, 3].map((k) => (
          <motion.span
            key={k}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent/45"
            style={{ left: `${22 + k * 18}%`, bottom: "18%" }}
            animate={{ y: [0, -70], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: k * 0.35, ease: "easeOut" }}
          />
        ));
    }
  })();

  return (
    <div className="relative grid h-full place-items-center">
      {motif}
      <motion.span
        className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-hairline bg-card text-accent shadow-soft sm:h-[72px] sm:w-[72px]"
        animate={index === 3 ? { y: [0, -6, 0] } : { y: 0 }}
        transition={index === 3 ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : {}}
      >
        <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.6} />
      </motion.span>
    </div>
  );
}

function ProcessPlayer() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(true);
  const paused = useRef(false);
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
      if (!paused.current) setActive((a) => (a + 1) % steps.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [inView]);

  const current = steps[active];

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
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
        <div className="relative h-44 overflow-hidden border-b border-hairline bg-gradient-to-br from-accent/[0.07] via-accent/[0.02] to-transparent sm:col-span-5 sm:h-auto sm:min-h-[280px] sm:border-b-0 sm:border-r">
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
