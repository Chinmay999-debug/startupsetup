import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Our treatment-led pages changed how patients find us online. Inquiries and bookings start landing directly in a tap. It’s clean, mobile-first, and highly effective.",
    author: "Dr. Kunal",
    role: "Founder, Ilona Clinics",
    category: "Dermatology",
    initial: "K",
  },
  {
    quote:
      "We wanted a professional web presence that made it simple for patients to reach us on WhatsApp. The site is fast, presentable, and has noticeably increased callbacks.",
    author: "Dr. Kamlesh",
    role: "Founder, Arise Physiotherapy",
    category: "Healthcare",
    initial: "K",
  },
  {
    quote:
      "Clean, professional, and built for speed. The design matches the quality of care we offer. Patients can easily navigate our clinic's treatments and request appointments.",
    author: "Dr. Rudraksh",
    role: "Director, PhysioZen Centre",
    category: "Healthcare",
    initial: "R",
  },
  {
    quote:
      "The custom CRM and WhatsApp automation completely unified our operations. Leads route automatically, document updates are logged, and follow-ups never get dropped.",
    author: "Rajeshwer Tiwari",
    role: "Director, SaralVidya & RealFinServ",
    category: "Education & Finance",
    initial: "RT",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-t border-hairline bg-surface">
      <div className="edge-rules mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 py-16 sm:py-20 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  (07)
                </span>
                <span className="eyebrow">Client voices</span>
              </div>
              <h2 className="mt-5 max-w-[16ch] text-balance font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
                The people we build for.
              </h2>
            </div>
            <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground lg:col-span-4">
              Owners and operators who now run leaner, faster businesses.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <figure className="flex h-full flex-col bg-card p-7 transition-colors hover:bg-surface-elevated sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    {t.category}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="h-3 w-3 fill-accent text-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-[17px] italic leading-[1.45] text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-hairline pt-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/10 text-[12px] font-semibold text-accent">
                    {t.initial}
                  </span>
                  <span>
                    <span className="block text-[13px] font-medium">{t.author}</span>
                    <span className="block text-[11.5px] text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
