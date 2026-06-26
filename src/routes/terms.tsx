import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { contact } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service | Startup Setup" },
      {
        name: "description",
        content:
          "Read the terms that apply when you use Startup Setup's website, book demos, communicate with us, or use our business workflow software.",
      },
      { property: "og:title", content: "Terms of Service | Startup Setup" },
      {
        property: "og:description",
        content:
          "Terms for using Startup Setup's website, demos, customer communication, and workflow software services.",
      },
      { property: "og:url", content: absoluteUrl("/terms") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
});

const updated = "May 10, 2026";

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing the Startup Setup website, submitting a form, booking a demo, communicating with us, or using our software services, you agree to these Terms of Service and our Privacy Policy.",
      "If you use the services on behalf of a company or organization, you represent that you have authority to bind that organization to these terms.",
    ],
  },
  {
    title: "Our Services",
    body: [
      "Startup Setup provides business workflow and lead management software, setup assistance, automation configuration, customer communication tools, and related support.",
      "Specific features, timelines, pricing, integrations, service levels, and responsibilities may be set out in a proposal, order form, statement of work, invoice, or separate written agreement. If there is a conflict, the signed or written customer agreement controls for that customer.",
    ],
  },
  {
    title: "Your Responsibilities",
    body: [
      "You are responsible for the accuracy of information you provide, your account users, your customer data, and your compliance with laws that apply to your business, communications, marketing, and data processing.",
      "You agree not to misuse the website or services, attempt unauthorized access, interfere with service operation, upload harmful code, violate third-party rights, or use the services for unlawful, deceptive, or abusive activity.",
    ],
  },
  {
    title: "Customer Data and Permissions",
    body: [
      "You retain ownership of the business data and customer information you provide to Startup Setup. You grant us permission to process that data as needed to provide, secure, support, and improve the services.",
      "You are responsible for ensuring you have the rights and notices required to share customer, lead, employee, or business data with us and to use communication channels such as email, phone, and WhatsApp.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "The website and services may connect with third-party tools such as hosting providers, form processors, messaging platforms, email services, analytics tools, payment systems, or customer systems.",
      "Third-party services are governed by their own terms and privacy policies. We are not responsible for third-party outages, changes, data practices, or service limitations.",
    ],
  },
  {
    title: "Fees and Payments",
    body: [
      "Fees, taxes, billing cycles, renewal terms, cancellation rules, and payment methods are described in the applicable proposal, invoice, order form, or written agreement.",
      "Unless otherwise stated in writing, fees paid for setup, subscriptions, custom work, or services are non-refundable once work has started or the service period has begun.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Startup Setup and its software, website, designs, content, branding, workflows, templates, documentation, and underlying technology are owned by Startup Setup or its licensors.",
      "You may not copy, modify, reverse engineer, resell, sublicense, or exploit the services except as allowed by a written agreement with us.",
    ],
  },
  {
    title: "Disclaimers and Limitation of Liability",
    body: [
      "The website and services are provided on an as-is and as-available basis, except where a separate written agreement states otherwise. We do not guarantee uninterrupted operation, error-free performance, or that every business outcome will be achieved.",
      "To the maximum extent permitted by law, Startup Setup will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, goodwill, data, or business opportunity.",
    ],
  },
  {
    title: "Suspension and Termination",
    body: [
      "We may suspend or terminate access if there is non-payment, security risk, misuse, violation of these terms, legal requirement, or risk of harm to Startup Setup, users, customers, or third parties.",
      "You may stop using the website at any time. Customer service termination, exports, and post-termination support are handled under the applicable written agreement.",
    ],
  },
  {
    title: "Governing Law and Changes",
    body: [
      "These terms are governed by the laws of India, unless a separate written agreement states otherwise.",
      "We may update these terms from time to time. The updated date above shows when the latest changes were made. Continued use of the website or services means you accept the updated terms.",
    ],
  },
];

function TermsPage() {
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
                  Terms of service
                </h1>
                <p className="mt-7 max-w-2xl text-pretty text-[15px] leading-[1.7] text-muted-foreground sm:text-[16.5px]">
                  These terms explain the rules for using Startup Setup's website, demo process,
                  customer communication, and workflow software services.
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
                  Questions
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  For questions about these terms or a customer agreement, contact us at:
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-4 block break-all text-sm font-medium text-foreground transition-colors hover:text-foreground/75"
                >
                  {contact.email}
                </a>
                <div className="mt-6 border-t hairline pt-5 text-xs leading-relaxed text-muted-foreground">
                  These launch-ready website terms are general information and should be reviewed by
                  legal counsel for your exact business.
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
                  <h2 className="font-display text-2xl tracking-tight">Privacy</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Our Privacy Policy explains how we collect, use, and protect information.
                  </p>
                  <Link
                    to="/privacy"
                    className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft"
                  >
                    Read Privacy Policy
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
