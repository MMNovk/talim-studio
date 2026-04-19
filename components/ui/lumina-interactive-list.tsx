'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

export interface LuminaSlide {
  title: string
  description: string
  media: string
}

interface LuminaInteractiveListProps {
  slides: LuminaSlide[]
  studioName?: string
  ctaHref?: string
  ctaLabel?: string
}

export default function LuminaInteractiveList({
  slides,
  studioName = 'Studio',
  ctaHref = '#booking',
  ctaLabel = 'Book Now',
}: LuminaInteractiveListProps) {
  const [active, setActive] = useState(0)

  return (
    <section className="relative w-full h-[100svh] flex flex-col overflow-hidden bg-[#180f0a]">

      {/* Background images — full bleed on mobile, right panel on desktop */}
      <div className="absolute inset-0 md:left-[52%]">
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

      {/* Gradient overlay: covers full screen on mobile, left-fade on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#180f0a] via-[#180f0a]/70 to-[#180f0a]/30 md:bg-none" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#180f0a] via-[#180f0a]/85 to-[#180f0a]/10" style={{ right: '48%' }} />
      <div className="absolute inset-0 hidden md:block" style={{ left: '52%', background: 'linear-gradient(to right, rgba(24,15,10,0.5) 0%, transparent 35%)' }} />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-7 md:px-14 pt-7 pb-4">
        <span className="text-white font-playfair text-xl md:text-2xl italic tracking-wide">
          {studioName}
        </span>
        <a
          href={ctaHref}
          className="text-white/75 text-[10px] tracking-[0.3em] uppercase border border-white/25 px-5 py-2.5 hover:bg-white/10 hover:text-white transition-colors duration-200"
        >
          {ctaLabel}
        </a>
      </nav>

      {/* Treatment list */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-7 md:px-14 pb-10 md:pb-16 w-full md:w-[52%]">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className="py-3 md:py-3.5 border-t border-white/15 cursor-default"
            onMouseEnter={() => setActive(i)}
          >
            <div className="flex items-start gap-4 md:gap-6">
              <span className="text-white/25 text-[10px] tracking-widest mt-1.5 font-mono select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <h2
                  className={`font-playfair leading-tight transition-all duration-300 ${
                    i === active
                      ? 'text-white text-[8.5vw] md:text-[3.8vw]'
                      : 'text-white/40 text-[7vw] md:text-[3.2vw] hover:text-white/65'
                  }`}
                >
                  {slide.title}
                </h2>
                {i === active && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-white/50 text-[13px] mt-1.5 leading-relaxed max-w-sm font-dm-sans"
                  >
                    {slide.description}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-white/15" />
      </div>
    </section>
  )
}
