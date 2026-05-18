'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 h-16 bg-paper/90 backdrop-blur-md border-b border-ink/[0.08]">
        <a href="#" className="font-syne font-extrabold text-[17px] tracking-tight text-ink no-underline">
          <span className="inline-block bg-ink text-accent px-1.5 py-[1px] rounded-[3px] mr-0.5">T</span>
          alim Studio
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-9 list-none">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href} className="text-[13px] font-medium text-ink-2 no-underline tracking-wide hover:text-ink transition-colors">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[13px] font-medium bg-ink text-accent px-[18px] py-2 rounded-sm no-underline hover:opacity-85 transition-opacity"
            >
              Start a project
            </a>
          </li>
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] -mr-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-px bg-ink transition-all duration-300 origin-center ${open ? 'translate-y-[6px] rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-ink transition-all duration-300 origin-center ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-paper flex flex-col pt-16 transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col list-none px-6 pt-10 gap-1">
          {links.map(({ href, label }, i) => (
            <li key={label}>
              <a
                href={href}
                onClick={close}
                className="block font-syne font-extrabold text-[clamp(32px,9vw,48px)] tracking-tight text-ink no-underline py-2 border-b border-ink/[0.07] hover:text-ink-2 transition-colors"
                style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-8">
          <a
            href="#contact"
            onClick={close}
            className="inline-flex items-center gap-2.5 bg-ink text-accent font-syne font-bold text-base tracking-wide px-7 py-4 rounded-sm no-underline"
          >
            Start a project →
          </a>
        </div>

        <p className="px-6 mt-auto mb-8 text-xs text-ink-3 tracking-wide">
          Starting at $399 · 1-week delivery
        </p>
      </div>
    </>
  )
}
