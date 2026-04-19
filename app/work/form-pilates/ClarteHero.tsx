'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

const cormorant = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }

const slides = [
  {
    title: 'HydraFacial',
    description: 'Deep cleanse, extract, and hydrate in one transformative session.',
    media: 'https://assets.codepen.io/7558/orange-portrait-001.jpg',
  },
  {
    title: 'LED Therapy',
    description: 'Wavelengths of light working beneath the surface to restore and renew.',
    media: 'https://assets.codepen.io/7558/orange-portrait-002.jpg',
  },
  {
    title: 'Microneedling',
    description: "Precision micro-channels that awaken your skin's natural repair.",
    media: 'https://assets.codepen.io/7558/orange-portrait-003.jpg',
  },
  {
    title: 'Gua Sha Ritual',
    description: 'An ancient practice, refined for the modern complexion.',
    media: 'https://assets.codepen.io/7558/orange-portrait-004.jpg',
  },
  {
    title: 'Chemical Peel',
    description: 'Controlled renewal that reveals the skin you were meant to have.',
    media: 'https://assets.codepen.io/7558/orange-portrait-005.jpg',
  },
  {
    title: 'Bespoke Facial',
    description: 'Formulated entirely around you. No two are ever the same.',
    media: 'https://assets.codepen.io/7558/orange-portrait-006.jpg',
  },
]

export default function ClarteHero() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative w-full h-[100svh] grid grid-cols-1 md:grid-cols-[52%_48%] overflow-hidden bg-[#1a0f0b]">

      {/* ── Mobile background image (behind everything) ── */}
      <div className="absolute inset-0 md:hidden">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.title}
            className="absolute inset-0"
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img src={slide.media} alt={slide.title} className="w-full h-full object-cover object-top" />
          </motion.div>
        ))}
        {/* Dark gradient so text stays legible on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0b] via-[#1a0f0b]/75 to-[#1a0f0b]/40" />
      </div>

      {/* ── Left panel — dark, nav + list ── */}
      <div className="relative z-10 flex flex-col px-8 md:px-14 pt-8 pb-10 md:py-12">

        {/* Nav */}
        <div className="flex items-center justify-between mb-auto">
          <span className="text-white text-xl italic tracking-wide" style={cormorant}>
            Clarté
          </span>
          <a
            href="#booking"
            className="text-white/60 text-[10px] tracking-[0.3em] uppercase border border-white/25 px-5 py-2.5 hover:bg-white/10 hover:text-white transition-colors duration-200"
          >
            Book Now
          </a>
        </div>

        {/* Treatment list */}
        <div className="flex flex-col mt-auto">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="py-4 md:py-5 border-t border-white/10 cursor-default group"
              onMouseEnter={() => setActive(i)}
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span className="text-white/20 text-[10px] tracking-widest mt-1 font-mono select-none shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h2
                    className="leading-tight transition-all duration-300"
                    style={{
                      ...cormorant,
                      fontSize: i === active ? 'clamp(1.9rem, 4.5vw, 3.4rem)' : 'clamp(1.5rem, 3.6vw, 2.6rem)',
                      color: i === active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.28)',
                    }}
                  >
                    {slide.title}
                  </h2>
                  {i === active && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-white/45 text-[13px] mt-1.5 leading-relaxed max-w-sm"
                    >
                      {slide.description}
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>

      {/* ── Right panel — portrait images, desktop only ── */}
      <div className="relative hidden md:block">
        {slides.map((slide, i) => (
          <motion.div
            key={slide.title}
            className="absolute inset-0"
            animate={{ opacity: i === active ? 1 : 0 }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
          >
            <img
              src={slide.media}
              alt={slide.title}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        ))}
      </div>

    </section>
  )
}
