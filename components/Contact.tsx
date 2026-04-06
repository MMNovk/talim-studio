import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section
      className="relative px-12 py-[140px] bg-ink text-center overflow-hidden max-md:px-6 max-md:py-[100px]"
      id="contact"
    >
      {/* Background watermark */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne font-extrabold text-[clamp(80px,18vw,260px)] tracking-[-0.05em] text-white/[0.03] whitespace-nowrap pointer-events-none select-none"
        aria-hidden="true"
      >
        TALIM
      </span>

      <ScrollReveal>
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-6">
          Ready to start?
        </p>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <h2 className="font-syne font-black text-[clamp(36px,5vw,72px)] tracking-tighter leading-[1.0] text-white max-w-[720px] mx-auto mb-4">
          Let&rsquo;s build something sharp.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40 max-w-[420px] mx-auto mb-12">
          Tell me about your project. I&rsquo;ll get back to you within 24 hours.
        </p>
      </ScrollReveal>

      {/* Circular arrow CTA */}
      <ScrollReveal delay={150}>
        <div className="flex items-center justify-center">
          <a
            href="mailto:hello@talimstudio.com"
            className="w-fit flex items-center gap-6 group no-underline"
          >
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-white group-hover:stroke-ink transition-colors duration-500"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.2em]">
              hello@talimstudio.com
            </span>
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="mt-6 font-mono text-[11px] text-white/25 uppercase tracking-[0.1em]">
          Free 30-min discovery call · No commitment
        </p>
      </ScrollReveal>
    </section>
  )
}
