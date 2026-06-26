import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { contact } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Startup Setup" },
      {
        name: "description",
        content:
          "Read how Startup Setup collects, uses, protects, and shares information submitted through our website, demos, WhatsApp, email, and software services.",
      },
      { property: "og:title", content: "Privacy Policy | Startup Setup" },
      {
        property: "og:description",
        content:
          "How Startup Setup handles website inquiries, demo requests, customer communications, and service data.",
      },
      { property: "og:url", content: absoluteUrl("/privacy") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
});

const updated = "May 10, 2026";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information you choose to share with us, including your name, company, email address, phone number, WhatsApp number, and details about your business operations when you submit a form, book a demo, email us, or message us.",
      "If you use our software, we may process operational information such as leads, contacts, follow-up notes, tasks, documents, workflow stages, communication history, user roles, and usage activity needed to run and support the service.",
      "We may also collect basic technical information such as device type, browser, pages visited, referring pages, approximate location, timestamps, and security logs to keep the website and services reliable.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, schedule demos, provide and improve our software, configure workflows, deliver support, maintain security, prevent abuse, and communicate service updates.",
      "We may use contact details to follow up about a request you made or to share relevant product information. You can ask us to stop non-essential communications at any time.",
    ],
  },
  {
    title: "Sharing and Service Providers",
    body: [
      "We do not sell personal information. We may share information with trusted providers that help us operate the website, forms, hosting, analytics, customer communication, support, and payment or administrative systems.",
      "We may disclose information if required by law, to protect our rights, to prevent fraud or abuse, or as part of a business transfer such as a merger, acquisition, or asset sale.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We keep information for as long as needed to provide services, maintain records, meet legal obligations, resolve disputes, and operate our business. Retention periods can vary by data type and customer arrangement.",
      "We use reasonable administrative, technical, and organizational safeguards to protect information. No online system is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can request access, correction, deletion, or restriction of your personal information by contacting us. We may need to verify your request before acting on it.",
      "You can disable cookies or similar browser storage in your browser settings, though some parts of the website or service may not work as intended.",
    ],
  },
  {
    title: "Children",
    body: [
      "Startup Setup is intended for business use and is not directed to children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "International Processing",
    body: [
      "We operate from India and may use service providers in other regions. By using the website or services, you understand that information may be processed in locations where privacy laws differ from your location.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The updated date above shows when the latest changes were made. Continued use of the website or services means you accept the updated policy.",
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-hairline bg-hero pb-14 pt-28 sm:pt-36 lg:pt-44 grain">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0,black,transparent_75%)]" />

          <div className="edge-rules relative mx-auto max-w-[1280px] px-5 sm:px-8">
            <div className="max-w-3xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    SS / Legal
                  </span>
                  <span className="eyebrow">Last updated {updated}</span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-7 text-balance font-display text-[38px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl">
                  Privacy policy
                </h1>
                <p className="mt-7 max-w-2xl text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[16.5px]">
                  This policy explains how Startup Setup collects, uses, and protects information
                  from website visitors, prospects, customers, and service users.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-10 sm:pb-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border hairline bg-card p-6 shadow-soft">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Contact
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Questions about privacy or data requests can be sent to:
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-4 block break-all text-sm font-medium text-foreground transition-colors hover:text-foreground/75"
                >
                  {contact.email}
                </a>
                <div className="mt-6 border-t hairline pt-5 text-xs leading-relaxed text-muted-foreground">
                  This page is provided for transparency and general website readiness. It is not a
                  substitute for legal advice.
                </div>
              </div>
            </aside>

            <div className="space-y-10 lg:col-span-8">
              {sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.03}>
                  <article className="border-b hairline pb-10 last:border-b-0">
                    <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted-foreground">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}

              <Reveal>
                <div className="rounded-2xl border hairline bg-surface p-6">
                  <h2 className="font-display text-2xl tracking-tight">Related Terms</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Our website and services are also governed by our Terms of Service.
                  </p>
                  <Link
                    to="/terms"
                    className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft"
                  >
                    Read Terms
                  </Link>
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
