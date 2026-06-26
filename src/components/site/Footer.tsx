import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Item = { label: string; to?: string; href?: string };
type Col = { title: string; items: Item[] };

export function Footer() {
  const cols: Col[] = [
    {
      title: "Services",
      items: [
        { label: "Business websites", href: "/#services" },
        { label: "Custom software", href: "/software" },
        { label: "AI automation", href: "/#services" },
        { label: "CRM systems", href: "/software" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "Selected work", href: "/#work" },
        { label: "Process", href: "/#process" },
        { label: "Industries", to: "/industries" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Get in touch",
      items: [
        { label: "Start a project", to: "/contact" },
        { label: "WhatsApp", href: contact.whatsappHref },
        { label: "Email", href: `mailto:${contact.email}` },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-surface">
      <div className="mx-auto max-w-[1280px] px-5 pt-16 sm:px-8 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[9px] border border-foreground/15 bg-card shadow-soft">
                <img
                  src={`${import.meta.env.BASE_URL}startup-setup-logo-mark.png`}
                  alt=""
                  className="h-5 w-5 object-contain"
                  aria-hidden="true"
                />
              </span>
              <span className="font-display text-[16px] font-semibold tracking-tight text-foreground">
                Startup Setup
              </span>
            </div>
            <p className="mt-6 max-w-sm text-pretty text-[15px] leading-relaxed text-muted-foreground">
              A small studio building websites, custom software, and AI automation for clinics,
              founders and growing businesses — designed by hand, shipped end to end.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a
                className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
                href={`mailto:${contact.email}`}
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="break-all">{contact.email}</span>
              </a>
              <a
                className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
                href={contact.whatsappHref}
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-success" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="eyebrow">{c.title}</div>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    {it.to ? (
                      <Link
                        to={it.to as never}
                        className="group inline-flex items-center gap-2 text-[14px] text-foreground/75 transition-colors hover:text-foreground"
                      >
                        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                        {it.label}
                      </Link>
                    ) : (
                      <a
                        href={it.href}
                        className="group inline-flex items-center gap-2 text-[14px] text-foreground/75 transition-colors hover:text-foreground"
                      >
                        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
                        {it.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 md:text-right">
            <div className="eyebrow">Region</div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-foreground/75">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
              India
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-7 sm:mt-20 md:flex-row md:items-center">
          <div className="font-mono text-[11px] tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} Startup Setup — all rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <Link to="/contact" className="link-rule transition-colors hover:text-foreground">
              Contact
            </Link>
            <Link to="/privacy" className="link-rule transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="link-rule transition-colors hover:text-foreground">
              Terms
            </Link>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
              Accepting new projects
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-[1280px] overflow-hidden px-5 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none select-none font-display font-semibold leading-[0.8] tracking-[-0.05em] text-foreground/[0.04] text-[23vw]"
        >
          Startup Setup
        </div>
      </div>
    </footer>
  );
}
