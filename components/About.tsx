'use client'

import { TimelineContent } from '@/components/ui/timeline-animation'
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal'

export default function About() {
  return (
    <section className="bg-white px-12 py-[120px] max-md:px-6 max-md:py-20" id="about">
      <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-16">

        {/* Left column — image */}
        <TimelineContent delay={0}>
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=1200&auto=format&fit=crop"
              alt="Behind the studio"
              className="w-full h-full object-cover"
            />
          </div>
        </TimelineContent>

        {/* Right column — content */}
        <div className="flex flex-col gap-8">
          <TimelineContent delay={80}>
            <p className="text-base text-ink/40">Behind The Studio.</p>
          </TimelineContent>

          <VerticalCutReveal delay={160}>
            <h2 className="font-black text-[clamp(2.5rem,4vw,3.5rem)] leading-tight tracking-tighter text-ink">
              Built for the ones doing it themselves.
            </h2>
          </VerticalCutReveal>

          <TimelineContent delay={240}>
            <p className="text-base text-ink/40 leading-relaxed">
              Talim Studio is a one-person web design studio based in New York City. I work directly
              with small business owners and creatives — no layers of account managers, no bloated
              agency fees.
            </p>
          </TimelineContent>

          <TimelineContent delay={300}>
            <p className="text-base text-ink/40 leading-relaxed">
              Every site I build is fast, accessible, and made to convert. I use the latest tools to
              ship in days, not weeks, so you can focus on what you actually do.
            </p>
          </TimelineContent>

          {/* Stats */}
          <TimelineContent delay={360}>
            <div className="flex gap-10 pt-4 border-t border-ink/10">
              <div>
                <div className="font-black text-3xl text-ink tracking-tighter">5–7</div>
                <div className="text-base text-ink/40 mt-1">day delivery</div>
              </div>
              <div>
                <div className="font-black text-3xl text-ink tracking-tighter">$299</div>
                <div className="text-base text-ink/40 mt-1">starting price</div>
              </div>
            </div>
          </TimelineContent>

          {/* CTA */}
          <TimelineContent delay={420}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-ink border border-ink/20 rounded-full px-5 py-2.5 w-fit hover:bg-ink hover:text-white transition-all duration-300 no-underline"
            >
              Want to hear the story?
            </a>
          </TimelineContent>
        </div>

      </div>
    </section>
  )
}
