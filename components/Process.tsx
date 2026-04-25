import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    title: 'Discovery call',
    body: "I'll learn about your business, your goals, and what you need. You'll get a clear scope, timeline, and fixed price. Free, no pressure, 30 minutes.",
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    imageLeft: false, // text LEFT, image RIGHT
  },
  {
    title: 'Build',
    body: 'I design and develop your site, sharing previews as I go. Most sites ship in 5–7 days.',
    image: 'https://images.unsplash.com/photo-1719267686691-59c2eba494ea?q=80&w=2070&auto=format&fit=crop',
    imageLeft: true,  // text RIGHT, image LEFT
  },
  {
    title: 'Launch',
    body: 'Your site goes live. You own the code, the domain, everything.',
    image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageLeft: false, // text LEFT, image RIGHT
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
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-[clamp(2rem,3.5vw,3rem)] leading-tight text-ink mb-6">
                      {step.title}
                    </h3>
                    <p className="text-base text-ink/40 leading-relaxed">{step.body}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="max-md:order-last">
                    <h3 className="font-black text-[clamp(2rem,3.5vw,3rem)] leading-tight text-ink mb-6">
                      {step.title}
                    </h3>
                    <p className="text-base text-ink/40 leading-relaxed">{step.body}</p>
                  </div>
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden max-md:order-first">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
