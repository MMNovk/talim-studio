import ScrollReveal from './ScrollReveal'

const services = [
  {
    number: '01',
    icon: '◻',
    title: 'Starter Site',
    description:
      'A clean, fast 4–5 page website. Perfect for small businesses, freelancers, or anyone who needs a professional presence online — without the agency price tag.',
    price: 'From $399',
    delay: 0,
  },
  {
    number: '02',
    icon: '◈',
    title: 'Creative Portfolio',
    description:
      'Built for artists, photographers, designers, and makers. Your work deserves a site that matches its quality — bold layouts, smooth animations, and serious presentation.',
    price: 'From $549',
    delay: 100,
  },
  {
    number: '03',
    icon: '◉',
    title: 'Custom Build',
    description:
      'E-commerce, booking systems, multi-page experiences. If you have a specific vision, I\'ll make it happen — from concept to launch, on your timeline.',
    price: 'From $799',
    delay: 200,
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

      <div className="grid grid-cols-3 gap-0.5 bg-ink/10 border border-ink/10 rounded-lg overflow-hidden max-md:grid-cols-1">
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
