import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

type StartProjectDialogProps = {
  /** The service the user wants to start, or null when the dialog is closed. */
  service: string | null;
  onOpenChange: (open: boolean) => void;
};

export function StartProjectDialog({ service, onOpenChange }: StartProjectDialogProps) {
  const open = service !== null;
  // Keep the last service around so the title doesn't flash during the close animation.
  const [shown, setShown] = useState(service);
  useEffect(() => {
    if (service) setShown(service);
  }, [service]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  const waHref = `${contact.whatsappHref}?text=${encodeURIComponent(
    `Hi! I'd like to get started with ${shown ?? "a project"}.`,
  )}`;

  const options = [
    {
      icon: <WhatsAppIcon className="h-5 w-5 text-success" />,
      label: "Chat on WhatsApp",
      sub: "Fastest reply, usually within the hour",
      href: waHref,
      external: true,
    },
    {
      icon: <Phone className="h-[18px] w-[18px] text-foreground" strokeWidth={2} />,
      label: "Call us",
      sub: contact.phoneDisplay,
      href: contact.phoneHref,
      external: false,
    },
    {
      icon: <FileText className="h-[18px] w-[18px] text-foreground" strokeWidth={2} />,
      label: "Fill a quick form",
      sub: "Tell us about your project and we'll reach out",
      href: "/contact#demo-form",
      external: false,
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md rounded-2xl border border-hairline bg-background p-6 shadow-elevated"
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <h2 className="pr-8 font-display text-xl font-medium tracking-tight">
              {shown ? `Let's start your ${shown.toLowerCase()}` : "Let's get started"}
            </h2>
            <p className="mt-1.5 text-[13.5px] text-muted-foreground">
              Pick whatever's easiest — we'll take it from here.
            </p>

            <div className="mt-5 grid gap-2.5">
              {options.map((o) => (
                <a
                  key={o.label}
                  href={o.href}
                  target={o.external ? "_blank" : undefined}
                  rel={o.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3.5 rounded-xl border border-hairline bg-surface/40 p-3.5 transition-colors hover:border-foreground/20 hover:bg-surface"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-hairline bg-card">
                    {o.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-medium text-foreground">{o.label}</span>
                    <span className="block text-[12.5px] text-muted-foreground">{o.sub}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
