import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_75%)]" />
      <div className="edge-rules relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl py-20 text-center sm:py-28">
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                (08)
              </span>
              <span className="eyebrow">Free consultation · no commitment</span>
            </div>
            <h2 className="mt-7 text-balance font-display text-4xl font-medium leading-[1.04] tracking-[-0.03em] sm:text-6xl">
              Let's build something that{" "}
              <span className="font-serif font-normal italic text-accent">earns its keep</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-[16px] leading-relaxed text-muted-foreground">
              Tell us what your business is trying to do. We'll map out exactly what to build, what
              it costs, and how fast it ships — in one free call.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <MagneticButton
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft sm:w-auto"
              >
                Book a free consultation
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </MagneticButton>
              <MagneticButton
                href={contact.whatsappHref}
                strength={5}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-hairline bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:border-foreground/25 sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5 text-success" />
                WhatsApp us
              </MagneticButton>
            </div>
            <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Replies within one business day
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
