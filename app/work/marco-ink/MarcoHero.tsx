'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'BOOK', href: '#contact' },
]

function BlurText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: 'blur(16px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 1.1, ease: 'easeOut' }}
      className="block text-white font-black leading-none tracking-tighter"
      style={{ fontSize: 'clamp(5rem, 15vw, 13rem)' }}
    >
      {text}
    </motion.span>
  )
}

export function MarcoHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <section id="home" className="relative min-h-screen bg-black flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-7 z-20 relative">
        <span className="text-white font-bold text-xs tracking-[0.25em] uppercase">
          Marco Miller
        </span>
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-neutral-500 text-xs tracking-[0.2em] uppercase no-underline hover:text-[#C3E41D] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[68px] left-0 right-0 bg-black border-b border-neutral-900 px-8 py-8 z-10 flex flex-col gap-7"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-neutral-400 text-sm tracking-[0.2em] uppercase no-underline hover:text-[#C3E41D] transition-colors"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 pt-8 pb-20 gap-12 lg:gap-20">
        {/* Left: name + tagline */}
        <div className="flex-1 min-w-0">
          <BlurText text="MARCO" delay={0} />
          <BlurText text="MILLER" delay={0.18} />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-neutral-500 text-lg mt-8 max-w-sm leading-relaxed"
            style={{ fontFamily: '"Antic", sans-serif' }}
          >
            Tattooing out of Astoria, Queens. Walk-ins welcome.
          </motion.p>
        </div>

        {/* Right: profile photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
          className="w-64 h-80 lg:w-72 lg:h-96 bg-neutral-900 flex items-center justify-center shrink-0"
        >
          <span className="text-neutral-700 text-xs font-mono tracking-widest uppercase">Profile Photo</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <ChevronDown className="w-5 h-5 text-neutral-700 animate-bounce" />
      </motion.div>
    </section>
  )
}
