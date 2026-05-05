'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import StackedPanels from './StackedPanels'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
      className="relative w-full bg-white flex max-md:flex-col max-md:justify-center max-md:px-5 max-md:py-10 overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Text + CTA */}
      <div
        ref={revealRef}
        className="w-[55%] max-md:w-full flex-shrink-0 flex flex-col justify-center md:p-14 lg:p-20 max-md:p-0"
      >
        <div className="max-w-4xl pr-12 max-md:pr-0">
          <h1 className="text-[clamp(3.5rem,9.5vw,11.5rem)] font-black max-md:font-extrabold leading-[0.87] text-ink uppercase" style={{ letterSpacing: '0.02em' }}>
            TALIM
            <br />
            <span className="text-outline">STUDIO</span>
          </h1>

          <p className="mt-8 max-md:mt-3 max-md:mb-4 text-base max-md:text-sm text-ink/40 max-w-sm leading-relaxed">
            Fast, beautiful websites for small businesses and creatives.
          </p>

          {/* Mobile card fan — clipped to 140px rectangle between tagline and CTA */}
          <div
            className="md:hidden"
            style={{ width: '100%', height: '140px', maxHeight: '140px', overflow: 'hidden', borderRadius: '12px', position: 'relative' }}
          >
            <div style={{ transform: 'scale(0.7)', transformOrigin: 'center top', width: '100%', height: '100%' }}>
              <StackedPanels isMobile={true} />
            </div>
          </div>

          <a
            href="#contact"
            className="mt-0 max-md:mt-4 w-fit flex items-center gap-3 max-md:gap-2 group no-underline"
          >
            <div className="w-14 h-14 max-md:w-8 max-md:h-8 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500 overflow-hidden">
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
            <span className="text-sm max-md:text-xs font-bold text-ink">
              Start a Project
            </span>
          </a>
        </div>
      </div>

      {/* StackedPanels — desktop only */}
      <div
        className="max-md:hidden"
        style={{ width: '45%', height: '100svh', flexShrink: 0, marginLeft: '-14%' }}
      >
        <StackedPanels isMobile={false} />
      </div>
    </section>
  )
}
