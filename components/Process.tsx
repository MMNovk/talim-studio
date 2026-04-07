import ScrollReveal from './ScrollReveal'

const steps = [
  {
    title: 'Discovery call',
    body: 'I\'ll learn about your business, your goals, and what you need. Free, no pressure, 30 minutes.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    imageLeft: false,
  },
  {
    title: 'Proposal',
    body: 'You get a clear scope, timeline, and fixed price. No surprise invoices.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageLeft: true,
  },
  {
    title: 'Build',
    body: 'I design and develop your site, sharing previews as I go. Most sites ship in 5–7 days.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
    imageLeft: false,
  },
  {
    title: 'Launch',
    body: 'Your site goes live. You own the code, the domain, everything.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageLeft: true,
  },
]

export default function Process() {
  return (
    <section className="bg-white px-12 py-[120px] max-md:px-6 max-md:py-20" id="process">
      <ScrollReveal>
        <h2 className="text-3xl font-black md:text-4xl text-center mb-20">The Process</h2>
      </ScrollReveal>

      <div className="flex flex-col gap-28">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 80}>
            <div className={`grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-10`}>
              {step.imageLeft ? (
                <>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                  <div>
                    <h3 className="font-black text-[clamp(2rem,3.5vw,3rem)] leading-tight text-ink mb-6">
                      {step.title}
                    </h3>
                    <p className="text-base text-ink/40 leading-relaxed">{step.body}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="font-black text-[clamp(2rem,3.5vw,3rem)] leading-tight text-ink mb-6">
                      {step.title}
                    </h3>
                    <p className="text-base text-ink/40 leading-relaxed">{step.body}</p>
                  </div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                </>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
