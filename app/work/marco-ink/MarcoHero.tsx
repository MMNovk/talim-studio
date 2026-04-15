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

// MARC + portrait-as-O in a single inline row
function MarcoLine() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => { if (ref.current) observer.unobserve(ref.current) }
  }, [])

  return (
    <div
      ref={ref}
      className="inline-flex items-center justify-center font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.9] tracking-[0.06em] uppercase whitespace-nowrap"
      style={{ color: 'hsl(0 0% 100%)', fontFamily: "'Fira Code', monospace" }}
    >
      {['M', 'A', 'R', 'C'].map((letter, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
            transition: `all 0.5s ease-out ${i * 100}ms`,
          }}
        >
          {letter}
        </span>
      ))}
      {/* Portrait replaces the "O" — sized to match the letter */}
      <span
        className="group inline-block overflow-hidden rounded-full cursor-pointer"
        style={{
          width: '1ch',
          height: '0.82em',
          flexShrink: 0,
          filter: inView ? 'blur(0px)' : 'blur(10px)',
          opacity: inView ? 1 : 0,
          transition: 'all 0.5s ease-out 400ms',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1686577677352-c9249ed5972a?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Marco Miller"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </span>
    </div>
  )
}

export function MarcoHero() {
  const [mmVisible, setMmVisible] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => { document.documentElement.classList.remove('dark') }
  }, [])

  // MM visible only while the hero section is in view
  useEffect(() => {
    let aboutVisible = false
    let workVisible  = false
    let bookVisible  = false
    const update = () => setMmVisible(!aboutVisible && !workVisible && !bookVisible)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'about') aboutVisible = entry.isIntersecting
        if (entry.target.id === 'work')  workVisible  = entry.isIntersecting
        if (entry.target.id === 'book')  bookVisible  = entry.isIntersecting
      })
      update()
    }, { threshold: 0.05 })

    const about = document.querySelector('#about')
    const work  = document.querySelector('#work')
    const book  = document.querySelector('#book')
    if (about) observer.observe(about)
    if (work)  observer.observe(work)
    if (book)  observer.observe(book)
    return () => observer.disconnect()
  }, [])

  return (
    <div id="hero" style={{ backgroundColor: 'hsl(0 0% 0%)', color: 'hsl(0 0% 100%)', minHeight: '100vh' }}>
      {/* Header — MM centered, fades when about enters view */}
      <header className="fixed top-0 left-0 right-0 z-[250] px-6 py-5 pointer-events-none">
        <div className="flex items-center justify-center">
          <span
            className="text-4xl select-none"
            style={{
              color: 'hsl(0 0% 100%)',
              fontFamily: '"Dancing Script", "Brush Script MT", cursive',
              opacity: mmVisible ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          >
            MM
          </span>
        </div>
      </header>

      {/* Hero */}
      <main className="relative min-h-screen flex flex-col">
        {/* MARCO (portrait as O) / MILLER */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="flex flex-col items-center w-full gap-1 sm:gap-2 md:gap-3">
            <MarcoLine />
            <BlurText
              text="MILLER"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.9] tracking-[0.06em] uppercase justify-center whitespace-nowrap"
              style={{ color: 'hsl(0 0% 100%)', fontFamily: "'Fira Code', monospace" }}
            />
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
