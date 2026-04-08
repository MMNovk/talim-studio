'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  className?: string
  style?: React.CSSProperties
}

function BlurText({
  text,
  delay = 50,
  animateBy = 'words',
  direction = 'top',
  className = '',
  style,
}: BlurTextProps) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [])

  const segments = useMemo(
    () => (animateBy === 'words' ? text.split(' ') : text.split('')),
    [text, animateBy]
  )

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : `translateY(${direction === 'top' ? '-20px' : '20px'})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === 'words' && i < segments.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </p>
  )
}

export function MarcoHero() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => { document.documentElement.classList.remove('dark') }
  }, [])

  return (
    <div style={{ backgroundColor: 'hsl(0 0% 0%)', color: 'hsl(0 0% 100%)', minHeight: '100vh' }}>
      {/* Header — MM initials centered, no nav, no toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="flex items-center justify-center">
          <span
            className="text-4xl select-none"
            style={{
              color: 'hsl(0 0% 100%)',
              fontFamily: '"Dancing Script", "Brush Script MT", cursive',
            }}
          >
            MM
          </span>
        </div>
      </header>

      {/* Hero */}
      <main className="relative min-h-screen flex flex-col">
        {/* MARCO / MILLER centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <BlurText
              text="MARCO"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: 'hsl(0 0% 100%)', fontFamily: "'Fira Code', monospace" }}
            />
            <BlurText
              text="MILLER"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ color: 'hsl(0 0% 100%)', fontFamily: "'Fira Code', monospace" }}
            />

            {/* Portrait overlaid between the two name lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1686577677352-c9249ed5972a?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Marco Miller"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            <BlurText
              text="Tattooing out of Astoria, Queens"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center text-neutral-500"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-500" />
        </button>
      </main>
    </div>
  )
}
