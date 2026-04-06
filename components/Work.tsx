'use client'

import ScrollReveal from './ScrollReveal'
import { RadialScrollGallery } from './RadialScrollGallery'

const workItems = [
  {
    name: 'Petal & Stem',
    type: 'E-Commerce + Booking',
    meta: 'Florist · Ridgewood, NY',
    bg: 'linear-gradient(135deg, #1b2a1b 0%, #2e4a2e 50%, #3d6b3d 100%)',
    color: '#c8e6c8',
  },
  {
    name: 'Muro Ink',
    type: 'Portfolio + Booking',
    meta: 'Tattoo · Brooklyn, NY',
    bg: '#0a0a0a',
    color: '#e8e8e8',
  },
  {
    name: 'Form Studio',
    type: 'Starter + Scheduling',
    meta: 'Pilates · Astoria, NY',
    bg: 'linear-gradient(160deg, #f5ede4 0%, #e8d5c4 50%, #d4b89a 100%)',
    color: '#3a2a1a',
  },
  {
    name: 'Clara Reyes',
    type: 'Portfolio Site',
    meta: 'Photography · New York',
    bg: 'linear-gradient(135deg, #14181c 0%, #1e2832 50%, #263040 100%)',
    color: '#d0dce8',
  },
  {
    name: 'The Local Cup',
    type: 'Small Business Site',
    meta: 'Café · Queens, NY',
    bg: 'linear-gradient(135deg, #2a1a0a 0%, #4a3010 50%, #6b4520 100%)',
    color: '#f5d9a8',
  },
  {
    name: 'Studio Noir',
    type: 'Creative Portfolio',
    meta: 'Design Studio · Manhattan',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: '#a0b4e8',
  },
]

function WorkCard({
  name,
  type,
  meta,
  bg,
  color,
}: (typeof workItems)[0]) {
  return (
    <div
      className="w-[200px] h-[130px] md:w-[260px] md:h-[165px] rounded-xl overflow-hidden relative flex-shrink-0"
      style={{ background: bg, color }}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-50">
          {meta}
        </span>
        <div>
          <div className="font-syne font-black text-base md:text-xl tracking-tighter leading-none mb-1">
            {name}
          </div>
          <div className="font-mono text-[9px] uppercase tracking-[0.08em] opacity-50">
            {type}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section className="bg-white" id="work">
      <div className="px-12 pt-[120px] pb-4 max-md:px-6">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
            Check out our work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <h2 className="font-syne font-black text-[clamp(52px,8vw,108px)] leading-[0.9] tracking-tighter text-ink mt-4">
            Portfolio
          </h2>
        </ScrollReveal>
      </div>

      {/* Radial gallery — bottom fade built into component via mask */}
      <RadialScrollGallery
        baseRadius={520}
        mobileRadius={210}
        scrollDuration={3000}
        visiblePercentage={48}
      >
        {() =>
          workItems.map((item) => <WorkCard key={item.name} {...item} />)
        }
      </RadialScrollGallery>
    </section>
  )
}
