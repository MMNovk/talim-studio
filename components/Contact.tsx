import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section
      className="relative px-12 py-[140px] bg-ink text-center overflow-hidden max-md:px-6 max-md:py-[100px]"
      id="contact"
    >
      {/* Background watermark text */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne font-extrabold text-[clamp(80px,18vw,260px)] tracking-[-0.05em] text-white/[0.03] whitespace-nowrap pointer-events-none select-none"
        aria-hidden="true"
      >
        TALIM
      </span>

      <ScrollReveal>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-accent mb-6">
          Ready to start?
        </p>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <h2 className="font-syne font-extrabold text-[clamp(36px,5vw,72px)] tracking-tight leading-[1.05] text-white max-w-[720px] mx-auto mb-4">
          Let&rsquo;s build something sharp.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="text-base font-light text-white/50 max-w-[420px] mx-auto mb-12">
          Tell me about your project. I&rsquo;ll get back to you within 24 hours.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <a
          href="mailto:hello@talimstudio.com"
          className="inline-flex items-center gap-2.5 bg-accent text-ink font-syne font-bold text-[15px] tracking-[0.01em] px-9 py-[18px] rounded-sm no-underline hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(200,255,0,0.25)] transition-all"
        >
          hello@talimstudio.com →
        </a>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="mt-5 text-[13px] text-white/30">
          Free 30-min discovery call · No commitment
        </p>
      </ScrollReveal>
    </section>
  )
}
