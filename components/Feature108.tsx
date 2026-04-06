'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import ScrollReveal from './ScrollReveal'

const tabs = [
  {
    value: 'tab-1',
    label: 'Starter',
    content: {
      price: '$299',
      title: '4–5 pages. Deployed in days.',
      description:
        'A clean, fast site for small businesses and freelancers. Professional presence online — without the agency price tag or the wait.',
      buttonText: 'Start with Starter',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Starter site',
    },
  },
  {
    value: 'tab-2',
    label: 'Portfolio',
    content: {
      price: '$449',
      title: 'Bold layouts. Your work, elevated.',
      description:
        'Built for artists, photographers, designers, and makers. A site that matches the quality of what you do — bold, smooth, intentional.',
      buttonText: 'Build a Portfolio',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-2.svg',
      imageAlt: 'Portfolio preview',
    },
  },
  {
    value: 'tab-3',
    label: 'Business + Booking',
    content: {
      price: '$649',
      title: 'Booking, maps, SEO. All in.',
      description:
        "E-commerce, booking flows, multi-page builds. If you have a vision, we'll make it happen — from concept to launch, on your timeline.",
      buttonText: 'Book a Build',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-3.svg',
      imageAlt: 'Business site preview',
    },
  },
  {
    value: 'tab-4',
    label: 'Retainer',
    content: {
      price: '$79/mo',
      title: 'Always updated. Always live.',
      description:
        'Monthly updates, edits, and technical support. Stay sharp and current without hiring a full-time developer.',
      buttonText: 'Keep It Running',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Retainer support',
    },
  },
]

function ArrowCTA({ text, href = '#contact' }: { text: string; href?: string }) {
  return (
    <a href={href} className="mt-6 w-fit flex items-center gap-5 group no-underline">
      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-500 flex-shrink-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke-white group-hover:stroke-zinc-900 transition-colors duration-500"
        >
          <path
            d="M7 17L17 7M17 7H8M17 7V16"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.2em]">
        {text}
      </span>
    </a>
  )
}

export function Feature108() {
  return (
    <section id="services" className="px-12 py-[120px] bg-white max-md:px-6 max-md:py-20">
      <ScrollReveal>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-14 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
          What we build
        </p>
      </ScrollReveal>

      <Tabs defaultValue="tab-1">
        {/* Tab triggers — minimal, no icons, active = dark pill */}
        <ScrollReveal delay={50}>
          <TabsList className="flex overflow-x-auto gap-1.5 mb-3 outline-none pb-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink-3 px-5 py-2.5 rounded-lg data-[state=active]:bg-zinc-900 data-[state=active]:text-white transition-all whitespace-nowrap outline-none cursor-pointer"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollReveal>

        {/* Dark rounded container — matches Feature108 screenshot */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="outline-none grid lg:grid-cols-2 min-h-[440px]"
            >
              {/* Left: text */}
              <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
                <span className="font-mono text-lg text-white/35 tracking-wide">
                  {tab.content.price}
                </span>
                <h3 className="font-syne font-black text-[clamp(24px,3vw,44px)] tracking-tighter text-white leading-[1.0]">
                  {tab.content.title}
                </h3>
                <p className="font-mono text-[11px] text-white/50 uppercase tracking-[0.1em] leading-relaxed max-w-xs">
                  {tab.content.description}
                </p>
                <ArrowCTA text={tab.content.buttonText} />
              </div>

              {/* Right: image — slightly lighter panel */}
              <div className="flex items-center justify-center p-8 lg:p-12 bg-zinc-800/60 border-t lg:border-t-0 lg:border-l border-white/5">
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl w-full max-w-xs"
                />
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  )
}
