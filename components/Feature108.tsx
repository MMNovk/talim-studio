'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import ScrollReveal from './ScrollReveal'

/* ── Tab data — only content changed from original ── */
const tabs = [
  {
    value: 'tab-1',
    label: 'Starter',
    content: {
      badge: '$299',
      title: '4–5 pages. Deployed in days.',
      description:
        'A clean, fast site for small businesses and freelancers who need a professional presence online — without the agency price tag or the wait.',
      buttonText: 'Start with Starter',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Starter site',
    },
  },
  {
    value: 'tab-2',
    label: 'Portfolio',
    content: {
      badge: '$449',
      title: 'Bold layouts. Your work, elevated.',
      description:
        'Built for artists, photographers, designers, and makers. A site that actually matches the quality of what you do — bold, smooth, intentional.',
      buttonText: 'Build a Portfolio',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-2.svg',
      imageAlt: 'Portfolio preview',
    },
  },
  {
    value: 'tab-3',
    label: 'Business + Booking',
    content: {
      badge: '$649',
      title: 'Booking, maps, SEO. All in.',
      description:
        "E-commerce, booking flows, multi-page builds. If you have a vision, I'll make it happen — from concept to launch, on your timeline.",
      buttonText: 'Book a Build',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-3.svg',
      imageAlt: 'Business site preview',
    },
  },
  {
    value: 'tab-4',
    label: 'Retainer',
    content: {
      badge: '$79/mo',
      title: 'Always updated. Always live.',
      description:
        'Monthly updates, edits, and technical support. Stay sharp and current without hiring a full-time developer.',
      buttonText: 'Keep It Running',
      imageSrc: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
      imageAlt: 'Retainer support',
    },
  },
]

/* ── Inline Badge — replaces @/components/ui/badge ── */
function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-zinc-600 bg-zinc-800 px-2.5 py-0.5 text-lg font-normal text-zinc-300 ${className}`}
    >
      {children}
    </span>
  )
}

/* ── Inline Button — replaces @/components/ui/button, links to #contact ── */
function Button({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-zinc-900 no-underline transition-colors hover:bg-zinc-100 ${className}`}
    >
      {children}
    </a>
  )
}

/* ── Feature108 — structure copied exactly from original; only content changed ── */
export function Feature108() {
  return (
    <section className="py-32 bg-white" id="services">
      <div className="container mx-auto px-4">

        {/* Section label in site style — replaces removed badge + heading + description */}
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 mb-8 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
            What I build
          </p>
        </ScrollReveal>

        <Tabs defaultValue={tabs[0].value} className="mt-8">

          {/* Tab list — icons removed; CSS variables replaced with explicit zinc dark values */}
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-500 outline-none cursor-pointer data-[state=active]:bg-zinc-800 data-[state=active]:text-white transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Dark rounded container — bg-muted/70 → bg-zinc-900 to match screenshot */}
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-zinc-900 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 outline-none"
              >
                <div className="flex flex-col gap-5">
                  {/* Price badge — text-lg, subtle, no colored bg */}
                  <Badge className="w-fit">{tab.content.badge}</Badge>

                  <h3 className="font-syne font-black text-3xl lg:text-5xl tracking-tighter text-white leading-tight">
                    {tab.content.title}
                  </h3>

                  {/* Description — mono spaced uppercase to match hero subtext */}
                  <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-[0.1em] leading-relaxed lg:text-[12px]">
                    {tab.content.description}
                  </p>

                  <Button className="mt-2.5 w-fit gap-2">{tab.content.buttonText}</Button>
                </div>

                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>

        </Tabs>
      </div>
    </section>
  )
}
