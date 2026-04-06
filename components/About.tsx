import ScrollReveal from './ScrollReveal'

const stats = [
  { num: '5–7', label: 'Day delivery' },
  { num: '$500', label: 'Starting price' },
  { num: '100%', label: 'You own it' },
]

const skills = [
  'HTML / CSS / JS',
  'React',
  'Vercel',
  'Figma',
  'SEO basics',
  'Mobile-first',
  'NYC based',
]

export default function About() {
  return (
    <section className="px-12 py-[120px] bg-paper-2 max-md:px-6 max-md:py-20" id="about">
      <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12">
        {/* Left column */}
        <div>
          <ScrollReveal>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-14 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
              Behind the studio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <h2 className="font-syne font-extrabold text-[clamp(32px,4vw,52px)] tracking-tight leading-[1.05] text-ink mb-7">
              Built by someone who{' '}
              <span className="bg-accent px-1.5">actually</span> gets it.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base font-light text-ink-2 leading-[1.7] mb-5">
              Talim Studio is a one-person web design studio based in New York City. I work directly
              with small business owners and creatives — no layers of account managers, no bloated
              agency fees.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-base font-light text-ink-2 leading-[1.7] mb-5">
              Every site I build is fast, accessible, and made to convert. I use the latest tools to
              ship in days, not weeks, so you can focus on what you actually do.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-2 mt-7">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-ink-2 px-3.5 py-1.5 border border-ink/15 rounded-full tracking-wide bg-paper"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right column */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-0.5 bg-ink/10 rounded-sm overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-paper p-6 text-center">
                <div className="font-syne font-extrabold text-[32px] tracking-tight text-ink leading-none mb-1">
                  {stat.num}
                </div>
                <div className="text-[11px] text-ink-3 tracking-[0.08em] uppercase font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-8 bg-paper rounded-lg border border-ink/[0.08]">
            <p className="text-lg font-light text-ink-2 leading-[1.65] italic">
              &ldquo;Most small businesses don&rsquo;t need a $10,000 website. They need something
              that looks great, loads fast, and actually brings in customers.&rdquo;
            </p>
            <p className="mt-4 text-[13px] font-semibold text-ink tracking-[0.03em]">
              — Talim Studio
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
