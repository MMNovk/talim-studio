'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MenuToggleIcon } from './MenuToggleIcon'
import { MenuVertical } from './MenuVertical'

const menuItems = [
  { label: 'Services', href: '#what-we-build' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)

  // Fade nav items in on mobile once user scrolls past hero
  useEffect(() => {
    const onScroll = () => setHeroVisible(window.scrollY < window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent scroll when overlay is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.classList.remove('menu-open')
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-end px-8 md:px-14 lg:px-20 h-16">
        <button
          onClick={() => setOpen((v) => !v)}
          className={`w-10 h-10 flex items-center justify-center text-ink cursor-pointer transition-opacity duration-300 ${heroVisible ? 'max-md:opacity-0' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <MenuToggleIcon open={open} className="w-7 h-7" />
        </button>
      </nav>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[99] bg-white/95 backdrop-blur-md flex items-center justify-center"
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          >
            <div onClick={() => setOpen(false)}>
              <MenuVertical menuItems={menuItems} color="#6B6B6B" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
