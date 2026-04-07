'use client'

import Image from 'next/image'
import { TimelineContent } from '@/components/ui/timeline-animation'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

export default function About() {
  return (
    <section className="bg-white px-12 py-[120px] max-md:px-6 max-md:py-20" id="about">
      <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-16">

        {/* Left column — image */}
        <TimelineContent delay={0}>
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=1200&q=80"
              alt="Behind the work"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </TimelineContent>

        {/* Right column — content */}
        <div className="flex flex-col gap-8">
          <VerticalCutReveal delay={80}>
            <h2 className="font-black text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter text-ink">
              Behind the Work.
            </h2>
          </VerticalCutReveal>

          <TimelineContent delay={160}>
            <p className="text-base text-ink/40 leading-relaxed">
              Talim Studio is a one-person web design company based in New York City. I work directly
              with small business owners and creatives to turn their ideas into real, live websites.
              You get my full attention from the first conversation to launch day, and something that
              reflects what you do.
            </p>
          </TimelineContent>

          <TimelineContent delay={220}>
            <p className="text-base text-ink/40 leading-relaxed">
              Every page I build is fast, accessible, and made to convert. I use the latest tools to
              build, design, and ship so you can stay focused on what you do best. A great website
              should feel effortless, not like another thing on your plate.
            </p>
          </TimelineContent>

          {/* CTA */}
          <TimelineContent delay={300}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-ink border border-ink/20 rounded-full px-5 py-2.5 w-fit hover:bg-ink hover:text-white transition-all duration-300 no-underline"
            >
              Ready to get started?
            </a>
          </TimelineContent>
        </div>

      </div>
    </section>
  )
}
