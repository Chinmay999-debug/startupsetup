import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { contact } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo";

const WEB3FORMS_ACCESS_KEY = "97958055-34c1-4a9e-a10d-9b7d3a5bc44a";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Startup Setup · Book a workflow consultation" },
      {
        name: "description",
        content:
          "Book a demo, chat on WhatsApp, or send us your operational requirements. We'll design a workflow setup around your business.",
      },
      { property: "og:title", content: "Talk to Startup Setup" },
      {
        property: "og:description",
        content: "Book a demo or chat with the team about your operational setup.",
      },
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Startup Setup Lead");
    formData.append("from_name", "Startup Setup Website");

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-hairline bg-hero pb-14 pt-28 sm:pt-36 lg:pt-44 grain">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0,black,transparent_75%)]" />

          <div className="edge-rules relative mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  SS / Contact
                </span>
                <span className="eyebrow">Free consultation</span>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-[18ch] text-balance font-display text-[38px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl"
              >
                Tell us what you're building. We'll{" "}
                <span className="font-serif font-normal italic text-accent">map it out</span>.
              </motion.h1>
              <p className="mt-7 max-w-xl text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[16.5px]">
                Book a call, send us your operational reality, or just chat on WhatsApp. We'll show
                you exactly what to build, what it costs, and how fast it ships.
              </p>
            </div>
          </div>
        </section>

        <section id="demo-form" className="relative scroll-mt-28 pb-20 sm:pb-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:px-6 lg:grid-cols-12">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <div className="rounded-2xl border hairline bg-card p-6 shadow-soft sm:p-8">
                {sent ? (
                  <div className="grid place-items-center py-16 text-center">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success">
                      ✓
                    </div>
                    <div className="mt-5 font-display text-2xl tracking-tight">
                      Thanks, we'll be in touch shortly.
                    </div>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      We received your workflow inquiry. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
                    <input type="hidden" name="industry" value="Not provided" />
                    <input type="hidden" name="team_size" value="Not provided" />
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Inquiry form
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Your name" name="name" required />
                      <Field label="Company" name="company" />
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Phone / WhatsApp" name="phone" />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                        Tell us about your operations
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="What does your team handle today? Leads, follow-ups, channels, team size…"
                        className="mt-2 block w-full resize-none rounded-xl border hairline bg-surface px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/30 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-premium inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elevated disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {submitting ? "Sending..." : "Request demo →"}
                      </button>
                      <span className="text-[12px] text-muted-foreground">
                        We respond within one business day.
                      </span>
                    </div>
                    <p className="text-[12px] leading-relaxed text-muted-foreground">
                      By submitting this form, you agree that Startup Setup may contact you about
                      your request. See our{" "}
                      <Link
                        to="/privacy"
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    {error ? (
                      <p className="text-sm text-destructive" role="alert">
                        {error}
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </Reveal>

            {/* Channels */}
            <div className="space-y-4 lg:col-span-5">
              <Reveal delay={0.05}>
                <a
                  href={contact.whatsappHref}
                  className="group block overflow-hidden rounded-2xl border hairline bg-primary p-7 text-primary-foreground shadow-elevated transition-transform duration-500 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-primary-foreground/60">
                      Fastest reply
                    </span>
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-success/20 text-success">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="mt-5 font-display text-3xl leading-tight tracking-tight">
                    Chat on WhatsApp
                  </div>
                  <div className="mt-2 text-[14px] text-primary-foreground/70">
                    Most teams get a reply within 10 minutes during business hours.
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-accent">
                    Start a chat
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl border hairline bg-card p-7 shadow-soft">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Direct
                  </div>
                  <div className="mt-4 space-y-3">
                    <a
                      href={`mailto:${contact.email}`}
                      className="block break-all text-[15px] text-foreground hover:text-foreground/80"
                    >
                      {contact.email}
                    </a>
                    <a
                      href={contact.phoneHref}
                      className="block text-[15px] text-foreground hover:text-foreground/80"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div
                  id="support"
                  className="scroll-mt-28 rounded-2xl border hairline bg-surface p-7"
                >
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    What to expect
                  </div>
                  <ul className="mt-4 space-y-3 text-[14px] text-muted-foreground">
                    {[
                      "30-min operational walkthrough",
                      "We map your stages & team structure",
                      "Workflow tailored to your business",
                      "Live setup in days, not months",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-2.5">
                        <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-[10px] text-accent">
                          ✓
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <MagneticButton
                      href={contact.whatsappHref}
                      strength={5}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border hairline bg-card px-5 py-2.5 text-sm text-foreground shadow-soft sm:w-auto"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-success" />
                      Talk to a human
                    </MagneticButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-xl border hairline bg-surface px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/30 focus:outline-none focus:ring-0"
      />
    </label>
  );
}
