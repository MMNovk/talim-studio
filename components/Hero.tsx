export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-12 pt-[120px] pb-20 relative">
      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-6 flex items-center gap-2.5 opacity-0 animate-fade-up-1 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
        Web design studio — New York City
      </p>

      <h1 className="font-syne font-extrabold text-[clamp(52px,8vw,108px)] leading-[0.95] tracking-tight text-ink max-w-[1000px] opacity-0 animate-fade-up-2">
        Websites that <em className="not-italic text-ink-3">work</em>
        <br />
        as hard as{' '}
        <span className="relative inline-block">
          you do.
          <span
            className="absolute bottom-1 left-0 right-0 h-1.5 bg-accent -z-10 origin-left scale-x-0 animate-underline-reveal"
            aria-hidden="true"
          />
        </span>
      </h1>

      <div className="flex items-end justify-between mt-16 opacity-0 animate-fade-up-3 max-md:flex-col max-md:items-start max-md:gap-8">
        <p className="text-lg font-light text-ink-2 max-w-[380px] leading-[1.55]">
          Talim Studio builds fast, beautiful websites for small businesses and creatives. Sharp
          design, real results, delivered in days — not months.
        </p>

        <div className="flex flex-col items-end gap-3 max-md:items-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-ink text-accent font-syne font-semibold text-sm tracking-wide px-7 py-4 rounded-sm no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,14,14,0.2)] transition-all"
          >
            Start a project <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </a>
          <span className="text-xs text-ink-3 tracking-wide">Starting at $399 · 1-week delivery</span>
        </div>
      </div>
    </section>
  )
}
