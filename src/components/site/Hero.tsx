import { motion } from "framer-motion";
import { HeroVisual } from "./HeroVisual";
import { MagneticButton } from "./MagneticButton";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const capabilities = [
  { n: "01", t: "Websites", d: "Fast, custom-built, and made to convert." },
  { n: "02", t: "Custom software", d: "CRMs, dashboards & tools built around you." },
  { n: "03", t: "Automation", d: "WhatsApp, email & workflows on autopilot." },
  { n: "04", t: "AI systems", d: "AI agents that do real work, not demos." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero grain">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left — editorial copy */}
          <div className="pb-12 pt-28 sm:pt-36 lg:col-span-6 lg:pb-20 lg:pr-10 lg:pt-44">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                (01)
              </span>
              <span className="eyebrow">Digital product studio — India</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-[16ch] text-balance font-display text-[40px] font-medium leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[64px]"
            >
              We build the digital systems that{" "}
              <span className="font-serif font-normal italic text-accent">grow your business</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="mt-7 max-w-md text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[16.5px]"
            >
              We work like an extension of your team — designing, building and shipping the
              websites, custom software and AI that move your business forward, and owning the
              outcome long after launch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft sm:w-auto"
              >
                Start a project
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </MagneticButton>
              <MagneticButton
                href={contact.whatsappHref}
                strength={5}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground/25 sm:w-auto"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] text-success" />
                Chat on WhatsApp
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — live mockup (top edge shares the eyebrow baseline) */}
          <div className="pb-14 pt-4 lg:col-span-6 lg:pb-24 lg:pl-10 lg:pt-44">
            <HeroVisual />
          </div>
        </div>

        {/* Full-bleed rule above the index — spans the page like the section line below it */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 border-t border-hairline" />

        {/* Capabilities index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((c, i) => (
            <div
              key={c.t}
              className={`group py-7 sm:py-8 ${i < capabilities.length - 1 ? "lg:border-r lg:border-hairline" : ""} ${i >= 2 ? "border-t border-hairline lg:border-t-0" : ""} ${i % 2 === 0 ? "border-r border-hairline pr-5" : "pl-5"} ${i === 0 ? "lg:pl-0" : "lg:pl-7"} ${i === capabilities.length - 1 ? "lg:pr-0" : "lg:pr-7"}`}
            >
              <div className="font-mono text-[11px] text-accent">{c.n}</div>
              <div className="mt-2.5 text-[15px] font-medium tracking-tight text-foreground">
                {c.t}
              </div>
              <div className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                {c.d}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
