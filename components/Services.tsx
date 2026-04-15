import ScrollReveal from './ScrollReveal'

const services = [
  {
    number: '01',
    icon: '◻',
    title: 'Starter',
    description:
      'Your corner of the internet, built clean and fast. Up to 5 sections, mobile-responsive, contact form, and deployed live. Structure tailored to your content — single-page or multi-page, whatever fits. Ready in 5–7 days with one round of revisions.',
    price: '$499',
    delay: 0,
  },
  {
    number: '02',
    icon: '◈',
    title: 'Portfolio',
    description:
      'For creatives who need a site that actually looks like their work. Up to 8 sections with bold layouts, gallery or project grid, animations, and custom typography. Structure tailored to your content. Two rounds of revisions, delivered in 5–7 days.',
    price: '$799',
    delay: 100,
  },
  {
    number: '03',
    icon: '◉',
    title: 'Storefront',
    description:
      'Everything in Starter, built for a business that runs on bookings. Includes Calendly or Acuity scheduling, Google Business Profile setup and optimization, a verified Maps embed, and on-page SEO. Two rounds of revisions, delivered in 7–10 days.',
    price: '$1,099',
    delay: 200,
  },
  {
    number: '04',
    icon: '◇',
    title: 'Site Care',
    description:
      'Up to 2 content or design updates per month — copy changes, photo swaps, hours updates, whatever comes up. Priority turnaround, no tech headaches on your end.',
    price: '$79/mo',
    delay: 300,
  },
]

export default function Services() {
  return (
    <section className="px-12 py-[120px] max-md:px-6 max-md:py-20" id="services">
      <ScrollReveal>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-14 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
          What I build
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-0.5 bg-ink/10 border border-ink/10 rounded-lg overflow-hidden max-md:grid-cols-1">
        {services.map((service) => (
          <ScrollReveal key={service.number} delay={service.delay}>
            <div className="bg-paper p-10 hover:bg-white transition-colors cursor-default h-full">
              <p className="font-syne text-[11px] font-bold tracking-[0.1em] text-ink-3 mb-6">
                {service.number}
              </p>
              <span className="text-[28px] mb-5 block">{service.icon}</span>
              <h3 className="font-syne font-bold text-xl tracking-tight text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-sm font-light text-ink-2 leading-[1.65] mb-6">
                {service.description}
              </p>
              <span className="font-syne font-bold text-[13px] text-ink px-3 py-1.5 bg-accent rounded-sm inline-block">
                {service.price}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
