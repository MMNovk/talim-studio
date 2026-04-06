'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import StackedPanels from './StackedPanels'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealRef.current,
        { filter: 'blur(30px)', opacity: 0, scale: 1.02 },
        { filter: 'blur(0px)', opacity: 1, scale: 1, duration: 2.2, ease: 'expo.out' }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-white flex overflow-hidden"
    >
      {/* Left side */}
      <div
        ref={revealRef}
        className="flex-1 flex flex-col justify-between pt-[120px] pb-20 px-12 lg:px-20"
      >
        <h1 className="font-syne font-black text-[clamp(4rem,9vw,11rem)] leading-[0.87] tracking-tighter text-ink uppercase">
          TALIM
          <br />
          STUDIO
        </h1>

        <div className="flex flex-col gap-6">
          <p className="text-base font-light text-ink-2 max-w-[360px] leading-relaxed">
            Fast, beautiful websites for small businesses and creatives. Built in NYC.
          </p>
          <a
            href="#contact"
            className="w-fit inline-flex items-center gap-2 font-syne font-semibold text-sm tracking-wide text-ink border-b border-ink pb-0.5 no-underline hover:gap-5 transition-all duration-300"
          >
            Start a project →
          </a>
        </div>
      </div>

      {/* Right side: StackedPanels */}
      <div className="hidden md:block w-1/2 lg:w-[55%] min-h-screen">
        <StackedPanels />
      </div>
    </section>
  )
}
