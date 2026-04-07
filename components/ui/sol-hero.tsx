'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const NAV_CATEGORIES = ['Ready-to-wear', 'Knitwear', 'Outerwear', 'Accessories', 'Archive']

export default function SolHero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left: editorial fashion image */}
      <div className="relative w-full md:w-1/2 h-[60vw] md:h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=1600&fit=crop&q=80"
          alt="SOL Fall Winter 2025"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right: brand content */}
      <div className="w-full md:w-1/2 flex flex-col justify-between px-10 py-12 md:px-16 md:py-16 md:min-h-screen">
        {/* Top: wordmark + category nav */}
        <div className="flex items-start justify-between">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-dm-sans font-bold text-5xl md:text-7xl tracking-tighter text-black leading-none"
          >
            SOL.
          </motion.span>

          <nav className="hidden md:flex flex-col items-end gap-2.5 pt-2">
            {NAV_CATEGORIES.map((item, index) => (
              <motion.a
                key={item}
                href="#shop"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="font-mono text-xs tracking-widest uppercase text-black/30 hover:text-black transition-colors no-underline"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Bottom: collection info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="flex flex-col gap-4 mt-12 md:mt-0"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-black/40">
            Fall / Winter 2025
          </p>
          <p className="font-dm-sans text-base md:text-lg text-black/60 leading-relaxed max-w-sm">
            &ldquo;Undone&rdquo; is a collection about the beauty of the unfinished. Raw hems,
            exposed seams, and linen left to wrinkle. Tailoring that trusts the body beneath it.
            Everything made in small runs, never restocked.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
