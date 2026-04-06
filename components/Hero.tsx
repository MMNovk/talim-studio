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
      className="relative w-full bg-white flex overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Left side — mirrors original flex-col justify-between structure */}
      <div
        ref={revealRef}
        className="flex-1 min-w-0 flex flex-col justify-between p-8 md:p-14 lg:p-20"
        style={{ minHeight: '100svh' }}
      >
        {/* Top spacer — replaces removed label, preserves justify-between spacing */}
        <div />

        {/* Title + subtext */}
        <div className="max-w-4xl lg:-translate-y-8 pr-12">
          <h1 className="text-[clamp(3.5rem,9.5vw,11.5rem)] font-black leading-[0.87] tracking-tighter text-ink uppercase">
            TALIM
            <br />
            <span className="text-outline">STUDIO</span>
          </h1>
          <p className="mt-8 font-mono text-[11px] text-ink/40 uppercase tracking-[0.35em] max-w-sm leading-relaxed">
            Fast, beautiful websites for small businesses and creatives. Built in NYC.
          </p>
        </div>

        {/* CTA — circular arrow button, no magnetic animation */}
        <a
          href="#contact"
          className="w-fit flex items-center gap-6 group lg:-translate-y-20 no-underline"
        >
          <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500 overflow-hidden">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-ink group-hover:stroke-white transition-colors duration-500"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-mono text-[11px] font-bold text-ink uppercase tracking-[0.2em]">
            Start a Project
          </span>
        </a>
      </div>

      {/* Right side — flex so h-full on StackedPanels resolves correctly */}
      <div
        className="hidden md:flex w-1/2 lg:w-[55%] flex-shrink-0"
        style={{ minHeight: '100svh' }}
      >
        <StackedPanels />
      </div>
    </section>
  )
}
