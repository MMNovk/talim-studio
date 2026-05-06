'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

interface SlideData {
  title: string
  subtitle: string
  description: string
  accent: string
  imageUrl: string
}

const VELA_SLIDES: SlideData[] = [
  {
    title: 'Classic Manicure',
    subtitle: 'From $35',
    description: 'A timeless treatment. Shaping, cuticle care, and your choice of polish. Done with care, not in a hurry.',
    accent: '#C4A882',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1200&q=90',
  },
  {
    title: 'Gel Extensions',
    subtitle: 'From $75',
    description: 'Length and structure built to last. Soft gel or hard gel, shaped to your preference. Includes full set and polish.',
    accent: '#A89B8C',
    imageUrl: '/images/vela/gel-extensions.jpg',
  },
  {
    title: 'Nail Art',
    subtitle: 'From $20 add-on',
    description: 'Minimalist line work, abstract color blocking, negative space. Bring a reference or let us freestyle. Quoted at booking.',
    accent: '#B5A69A',
    imageUrl: '/images/vela/nail-art.jpg',
  },
  {
    title: 'Pedicure',
    subtitle: 'From $55',
    description: 'Full foot soak, exfoliation, shaping, and polish. A full reset. Add a paraffin treatment for $15.',
    accent: '#9E8E7E',
    imageUrl: 'https://images.unsplash.com/photo-1628610726537-6e9d2799f871?q=80&w=1480&auto=format&fit=crop',
  },
]

const SLIDE_DURATION = 6000

export default function VelaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToSlide = useCallback((index: number, dir?: 'next' | 'prev') => {
    if (isTransitioning || index === currentIndex) return
    setDirection(dir || (index > currentIndex ? 'next' : 'prev'))
    setIsTransitioning(true)
    setProgress(0)
    setTimeout(() => {
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }, [isTransitioning, currentIndex])

  const goNext = useCallback(() => {
    goToSlide((currentIndex + 1) % VELA_SLIDES.length, 'next')
  }, [currentIndex, goToSlide])

  const goPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + VELA_SLIDES.length) % VELA_SLIDES.length, 'prev')
  }, [currentIndex, goToSlide])

  useEffect(() => {
    if (isPaused) return
    progressRef.current = setInterval(() => {
      setProgress(prev => Math.min(prev + 100 / (SLIDE_DURATION / 50), 100))
    }, 50)
    intervalRef.current = setInterval(goNext, SLIDE_DURATION)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [currentIndex, isPaused, goNext])

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX }
  const handleTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.targetTouches[0].clientX }
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 60) { if (diff > 0) goNext(); else goPrev() }
  }

  const slide = VELA_SLIDES[currentIndex]

  return (
    <section
      className="overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ===== MOBILE LAYOUT — lg:hidden ===== */}
      <div className="lg:hidden">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-ink px-5 pt-6 pb-3">The Services</h2>

        {/* Full-width image */}
        <div className="relative w-full h-[calc(100vw)] overflow-hidden">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Two-column row */}
        <div className="flex pb-5">
          {/* Left 40% — tab buttons */}
          <div className="w-[40%] flex flex-col border-r border-ink/10">
            {VELA_SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setProgress(0) }}
                className={`text-xs text-left py-3 border-b border-ink/10 w-full pl-3 ${
                  i === currentIndex
                    ? 'font-bold text-ink border-l-2'
                    : 'text-[#6B6B6B]'
                }`}
                style={i === currentIndex ? { borderLeftColor: '#0e0e0e' } : undefined}
                aria-label={`Go to ${s.title}`}
              >
                {(['Classic', 'Gel Ext.', 'Nail Art', 'Pedicure'] as const)[i]}
              </button>
            ))}
          </div>

          {/* Right 60% — active service details */}
          <div className="w-[60%] pl-4 pr-5 pt-3 flex flex-col">
            <span className="text-xs mb-1" style={{ color: '#6B6B6B' }}>
              {String(currentIndex + 1).padStart(2, '0')} / {String(VELA_SLIDES.length).padStart(2, '0')}
            </span>
            <p className="font-bold text-base text-ink mb-1">{slide.title}</p>
            <p className="text-sm mb-2" style={{ color: slide.accent }}>{slide.subtitle}</p>
            <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#6B6B6B' }}>{slide.description}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={goPrev}
                className="w-8 h-8 border border-ink/20 flex items-center justify-center"
                aria-label="Previous"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-8 h-8 border border-ink/20 flex items-center justify-center"
                aria-label="Next"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-lg:hidden max-w-3xl mx-auto px-8 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16 pb-12">

        {/* Mobile-only heading — order-0 so it appears above the image on mobile */}
        <div className="lg:hidden order-[0]">
          <h2 className="text-3xl font-semibold text-ink">The Services</h2>
        </div>

        {/* Left: text */}
        <div className="flex flex-col gap-5 order-2 lg:order-1 max-md:gap-2">
          <h2 className="text-3xl font-semibold text-ink mb-3 max-lg:hidden">The Services</h2>
          <span className="text-xs font-mono tracking-widest" style={{ color: '#6B6B6B' }}>
            {String(currentIndex + 1).padStart(2, '0')} / {String(VELA_SLIDES.length).padStart(2, '0')}
          </span>

          <h2
            className="font-dm-sans font-black leading-tight transition-opacity duration-300 max-md:text-2xl"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              opacity: isTransitioning ? 0 : 1,
            }}
          >
            {slide.title}
          </h2>

          <p
            className="text-xl font-medium transition-opacity duration-300"
            style={{ color: slide.accent, opacity: isTransitioning ? 0 : 1 }}
          >
            {slide.subtitle}
          </p>

          <p
            className="leading-relaxed max-w-sm transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0 : 1, color: '#6B6B6B' }}
          >
            {slide.description}
          </p>

          {/* Prev / Next */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={goPrev}
              className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink/5 transition-colors"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="w-11 h-11 border border-ink/20 flex items-center justify-center hover:bg-ink/5 transition-colors"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: image */}
        <div className="relative h-[260px] max-md:h-[160px] overflow-hidden order-1 lg:order-2">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          />
        </div>
      </div>

      {/* Thumbnail nav */}
      <div className="max-lg:hidden max-w-3xl mx-auto px-8 md:px-14 lg:px-20 pb-8 flex gap-6 overflow-x-auto">
        {VELA_SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="text-left flex-shrink-0 max-md:flex-shrink max-md:w-[calc(50%-6px)]"
            aria-label={`Go to ${s.title}`}
          >
            <div className="h-px bg-ink/10 mb-2 overflow-hidden w-full">
              <div
                className="h-full bg-ink transition-all duration-100"
                style={{
                  width: i === currentIndex ? `${progress}%` : i < currentIndex ? '100%' : '0%',
                }}
              />
            </div>
            <span className="text-xs" style={{ color: i === currentIndex ? '#0e0e0e' : '#6B6B6B' }}>
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
