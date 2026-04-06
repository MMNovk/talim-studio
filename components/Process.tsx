import ScrollReveal from './ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'We talk about your business, your goals, and what you need. Free, no pressure, 30 minutes.',
    delay: 0,
  },
  {
    num: '02',
    title: 'Proposal',
    desc: 'You get a clear scope, timeline, and fixed price. No surprise invoices, ever.',
    delay: 100,
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We design and develop your site, sharing previews as we go. Most sites ship in 5–7 days.',
    delay: 200,
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Your site goes live. You own everything — the code, the domain, all of it.',
    delay: 300,
  },
]

export default function Process() {
  return (
    <section className="px-12 py-[120px] max-md:px-6 max-md:py-20" id="process">
      <ScrollReveal>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-14 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
          How it works
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-4 border border-ink/10 rounded-lg overflow-hidden max-md:grid-cols-2">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={step.delay}>
            <div
              className={`p-10 relative h-full ${i < steps.length - 1 ? 'border-r border-ink/10 max-md:border-b' : ''} max-md:border-r-0`}
            >
              <div className="font-syne font-extrabold text-5xl tracking-[-0.04em] text-ink/10 leading-none mb-5">
                {step.num}
              </div>
              <h3 className="font-syne font-bold text-base tracking-tight text-ink mb-2.5">
                {step.title}
              </h3>
              <p className="font-mono text-[11px] text-ink-2 uppercase tracking-[0.1em] leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
