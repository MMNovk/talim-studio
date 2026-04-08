'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'BOOK', href: '#book' },
]

function BlurIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(24px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ delay, duration: 1.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function MarcoHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-14 py-7 z-20 relative">
        {/* MM cursive signature */}
        <span
          className="text-white text-2xl select-none"
          style={{ fontFamily: '"Dancing Script", cursive, Georgia, serif', fontStyle: 'italic' }}
        >
          MM
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-neutral-500 text-xs tracking-[0.22em] uppercase no-underline hover:text-[#C3E41D] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] p-1 z-30"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-0 right-0 bg-black border-b border-neutral-900 px-8 py-8 z-10 flex flex-col gap-6"
          >
            {NAV_LINKS.map(({ label, href }) => (
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
      </AnimatePresence>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 pt-4 relative">
        {/* MARCO */}
        <BlurIn
          delay={0}
          className="self-start md:self-auto md:mr-auto"
        >
          <span
            className="block font-bold leading-[0.85] tracking-tighter text-[#C3E41D]"
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 'clamp(4.5rem, 15vw, 13rem)',
            }}
          >
            MARCO
          </span>
        </BlurIn>

        {/* Circular portrait — sits between the two name lines */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          className="relative z-10 my-2 md:my-3"
        >
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border border-[#C3E41D]/40 ring-1 ring-[#C3E41D]/10">
            <img
              src="https://i.pravatar.cc/300?img=11"
              alt="Marco Miller"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* MILLER */}
        <BlurIn
          delay={0.2}
          className="self-end md:self-auto md:ml-auto"
        >
          <span
            className="block font-bold leading-[0.85] tracking-tighter text-[#C3E41D]"
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 'clamp(4.5rem, 15vw, 13rem)',
            }}
          >
            MILLER
          </span>
        </BlurIn>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-neutral-400 text-base md:text-lg mt-10 text-center max-w-sm leading-relaxed"
          style={{ fontFamily: '"Antic", sans-serif' }}
        >
          Tattooing out of Astoria, Queens. Walk-ins welcome.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-neutral-700 animate-bounce" />
      </motion.div>
    </section>
  )
}
