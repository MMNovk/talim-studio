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
    imageUrl: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=900&h=600&fit=crop&q=80',
  },
  {
    title: 'Gel Extensions',
    subtitle: 'From $75',
    description: 'Length and structure built to last. Soft gel or hard gel, shaped to your preference. Includes full set and polish.',
    accent: '#A89B8C',
    imageUrl: 'https://images.unsplash.com/photo-1604655788043-1c7fe315ed5a?w=900&h=600&fit=crop&q=80',
  },
  {
    title: 'Nail Art',
    subtitle: 'From $20 add-on',
    description: 'Minimalist line work, abstract color blocking, negative space. Bring a reference or let us freestyle. Quoted at booking.',
    accent: '#B5A69A',
    imageUrl: 'https://images.unsplash.com/photo-1604907790077-c2ae3d3d5f32?w=900&h=600&fit=crop&q=80',
  },
  {
    title: 'Pedicure',
    subtitle: 'From $55',
    description: 'Full foot soak, exfoliation, shaping, and polish. A full reset. Add a paraffin treatment for $15.',
    accent: '#9E8E7E',
    imageUrl: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=900&h=600&fit=crop&q=80',
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
      {/* Section header */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pt-16 pb-8">
        <h2 className="text-3xl font-semibold text-ink">What We Offer</h2>
      </div>

      {/* Main layout */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12">

        {/* Left: text */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <span className="text-ink/30 text-xs font-mono tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(VELA_SLIDES.length).padStart(2, '0')}
          </span>

          <h2
            className="font-dm-sans font-black leading-tight transition-opacity duration-300"
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
            className="text-ink/50 leading-relaxed max-w-sm transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            {slide.description}
          </p>

          <a
            href="#book"
            className="w-fit bg-black text-white px-8 py-3 text-xs font-bold tracking-widest no-underline hover:bg-ink/80 transition-colors"
          >
            BOOK NOW
          </a>

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
        <div className="relative h-[480px] lg:h-[560px] overflow-hidden order-1 lg:order-2">
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover transition-opacity duration-300"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          />
        </div>
      </div>

      {/* Thumbnail nav */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-14 lg:px-20 pb-16 flex gap-6 overflow-x-auto">
        {VELA_SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="text-left flex-shrink-0"
            aria-label={`Go to ${s.title}`}
          >
            <div className="h-px bg-ink/10 mb-2 overflow-hidden w-28">
              <div
                className="h-full bg-ink transition-all duration-100"
                style={{
                  width: i === currentIndex ? `${progress}%` : i < currentIndex ? '100%' : '0%',
                }}
              />
            </div>
            <span className={`text-xs ${i === currentIndex ? 'text-ink' : 'text-ink/40'}`}>
              {s.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
