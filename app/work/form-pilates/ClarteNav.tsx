'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MenuToggleIcon } from '@/components/MenuToggleIcon'
import { ArrowRight } from 'lucide-react'

const ACCENT = '#B5623E'

const menuItems = [
  { label: 'Treatments',    href: '#treatments'    },
  { label: 'Our Work',      href: '#our-work'      },
  { label: 'The Studio',    href: '#about'         },
  { label: 'Meet the Team', href: '#meet-the-team' },
  { label: 'Book a Visit',  href: '#booking'       },
  { label: 'Find Us',       href: '#find-us'       },
]

export default function ClarteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-end px-8 md:px-14 lg:px-20 h-16">
        <button
          onClick={() => setOpen(v => !v)}
          className="w-10 h-10 flex items-center justify-center cursor-pointer transition-colors duration-300"
          style={{ color: scrolled ? '#1C1814' : '#F7F3EE' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <MenuToggleIcon open={open} className="w-7 h-7" />
        </button>
      </nav>

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
            <div className="flex w-fit flex-col gap-4 px-10">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="group/nav flex items-center gap-2 cursor-pointer text-zinc-900"
                  initial="initial"
                  whileHover="hover"
                  onClick={() => scrollTo(item.href)}
                >
                  <motion.div
                    variants={{
                      initial: { x: '-100%', color: 'inherit', opacity: 0 },
                      hover: { x: 0, color: ACCENT, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <ArrowRight strokeWidth={3} className="size-10" />
                  </motion.div>
                  <motion.span
                    variants={{
                      initial: { x: -40, color: 'inherit' },
                      hover: { x: 0, color: ACCENT },
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-4xl"
                    style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
