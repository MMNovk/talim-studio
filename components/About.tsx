import ScrollReveal from './ScrollReveal'

const stats = [
  { num: '5–7', label: 'DAY DELIVERY' },
  { num: '$299', label: 'STARTING PRICE' },
  { num: '100%', label: 'YOU OWN IT' },
]

export default function About() {
  return (
    <section className="bg-white px-12 py-[120px] max-md:px-6 max-md:py-20" id="about">
      <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-16">
        {/* Left column — bio */}
        <div>
          <ScrollReveal>
            <p className="text-base text-ink/40 mb-16">— Behind the Studio</p>
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <p className="text-base text-ink/40 leading-relaxed mb-5">
              Talim Studio is a one-person web design studio based in New York City. I work directly
              with small business owners and creatives — no layers of account managers, no bloated
              agency fees.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base text-ink/40 leading-relaxed mb-5">
              Every site I build is fast, accessible, and made to convert. I use the latest tools to
              ship in days, not weeks, so you can focus on what you actually do.
            </p>
          </ScrollReveal>
        </div>

        {/* Right column — stats */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-black text-[clamp(3rem,6vw,5rem)] leading-none text-ink tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-base text-ink/40 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
