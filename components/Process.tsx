import ScrollReveal from './ScrollReveal'

const steps = [
  {
    title: 'Discovery call',
    body: 'We talk about your business, your goals, and what you need. Free, no pressure, 30 minutes.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
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
    body: 'We design and develop your site, sharing previews as we go. Most sites ship in 5–7 days.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    imageLeft: false,
  },
  {
    title: 'Launch',
    body: 'Your site goes live. You own the code, the domain, everything.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
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
