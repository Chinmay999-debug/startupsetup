import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Testimonials } from "@/components/site/Testimonials";
import { Capabilities } from "@/components/site/Capabilities";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { absoluteUrl, site } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Startup Setup — Premium Websites, Software & AI Automations for Businesses" },
      {
        name: "description",
        content:
          "We design and build premium websites, custom software, CRM systems, and AI automations for businesses that want to grow faster. Starting at ₹15,000.",
      },
      {
        property: "og:title",
        content: "Startup Setup — Premium Websites, Software & AI Automations",
      },
      {
        property: "og:description",
        content:
          "Premium websites, custom CRM systems, and AI automations built for businesses that want to grow.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            email: "contact@startupsetup.in",
            logo: absoluteUrl("/startup-setup-logo-mark.png"),
            description:
              "Premium digital agency building websites, custom software, CRM systems, and AI automations for businesses.",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+91-74250-44822",
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            inLanguage: "en-IN",
          },
        ]),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Capabilities />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
