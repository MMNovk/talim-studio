'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import ScrollReveal from './ScrollReveal'

const tabs = [
  {
    value: 'tab-1',
    label: 'Starter',
    content: {
      price: '$299',
      title: 'A clean, fast website that works.',
      description:
        '4–5 pages, built for small businesses and freelancers who need a professional online presence without the agency price tag or the wait.',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Starter site preview',
    },
  },
  {
    value: 'tab-2',
    label: 'Portfolio',
    content: {
      price: '$449',
      title: 'Your work, presented with intent.',
      description:
        'Built for artists, photographers, designers, and makers. Bold layouts, smooth interactions, and a site that actually matches the quality of what you do.',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-2.svg',
      imageAlt: 'Portfolio site preview',
    },
  },
  {
    value: 'tab-3',
    label: 'Business + Booking',
    content: {
      price: '$649',
      title: 'Everything your business needs online.',
      description:
        "E-commerce, booking systems, multi-page experiences. If you have a specific vision, we'll build it — from concept to launch, on your timeline.",
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-3.svg',
      imageAlt: 'Business site preview',
    },
  },
  {
    value: 'tab-4',
    label: 'Retainer',
    content: {
      price: '$79/mo',
      title: 'Ongoing support, no surprises.',
      description:
        'Monthly updates, edits, and technical support for your existing site. Stay sharp without hiring a full-time developer.',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Monthly retainer support',
    },
  },
]

export function Feature108() {
  return (
    <section id="services" className="px-12 py-[120px] bg-white max-md:px-6 max-md:py-20">
      <ScrollReveal>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-14 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
          What we build
        </p>
      </ScrollReveal>

      <Tabs defaultValue="tab-1">
        {/* Tab triggers — no icons, underline active state */}
        <ScrollReveal delay={50}>
          <TabsList className="flex overflow-x-auto border-b border-ink/10 gap-0 mb-0 outline-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-syne font-bold text-sm tracking-tight text-ink-3 pb-4 px-6 border-b-2 border-transparent data-[state=active]:border-ink data-[state=active]:text-ink transition-colors whitespace-nowrap outline-none cursor-pointer"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollReveal>

        {/* Tab content panels */}
        <div className="border border-t-0 border-ink/10 rounded-b-lg overflow-hidden">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="outline-none grid lg:grid-cols-2"
            >
              {/* Left: text */}
              <div className="flex flex-col gap-5 p-8 lg:p-14">
                {/* Price tag — plain, no bg */}
                <span className="font-mono text-base text-ink-3 tracking-wide">
                  {tab.content.price}
                </span>
                <h3 className="font-syne font-bold text-[clamp(22px,2.5vw,36px)] tracking-tight text-ink leading-tight">
                  {tab.content.title}
                </h3>
                <p className="text-base font-light text-ink-2 leading-relaxed">
                  {tab.content.description}
                </p>
                <a
                  href="#contact"
                  className="mt-2.5 w-fit inline-flex items-center gap-2 font-syne font-bold text-sm tracking-wide bg-ink text-white px-6 py-3 rounded-sm no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,14,14,0.15)] transition-all duration-200"
                >
                  Start a project →
                </a>
              </div>

              {/* Right: image */}
              <div className="flex items-center justify-center p-8 lg:p-14 border-t lg:border-t-0 lg:border-l border-ink/10">
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-lg w-full max-w-sm"
                />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  )
}
