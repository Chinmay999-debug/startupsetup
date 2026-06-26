import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const items = [
  { label: "Work", to: "/#work" as const },
  { label: "Services", to: "/#services" as const },
  { label: "Software", to: "/software" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:h-[68px] sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-[9px] border border-foreground/15 bg-card shadow-soft">
            <img
              src={`${import.meta.env.BASE_URL}startup-setup-logo-mark.png`}
              alt=""
              className="h-5 w-5 object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
          <span className="font-display text-[16px] font-semibold leading-none tracking-tight text-foreground">
            Startup Setup
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.to}
                className="link-rule font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={contact.whatsappHref}
            aria-label="WhatsApp us"
            className="hidden h-9 w-9 place-items-center rounded-full border border-hairline bg-card text-foreground transition-colors hover:border-foreground/25 sm:grid"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] text-success" />
          </a>
          <Link
            to="/contact"
            className="btn-premium group hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground shadow-soft sm:inline-flex"
          >
            Start a project
            <span className="transition-transform duration-500 group-hover:translate-x-0.5">→</span>
          </Link>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-card text-foreground md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="divide-y divide-hairline px-5">
              {items.map((it, i) => (
                <li key={it.label}>
                  <a
                    href={it.to}
                    className="flex items-center justify-between py-4"
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[17px] tracking-tight text-foreground">{it.label}</span>
                    </span>
                    <span className="text-muted-foreground/50">→</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-2 px-5 py-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Start a project →
              </Link>
              <a
                href={contact.whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-card px-4 py-3 text-sm font-medium text-foreground"
              >
                <WhatsAppIcon className="h-4 w-4 text-success" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
