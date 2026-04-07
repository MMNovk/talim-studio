'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, MotionConfig } from 'motion/react'

export type IMenu = {
  id: number
  title: string
  url: string
  dropdown?: boolean
  items?: IMenu[]
}

const SOL_NAV: IMenu[] = [
  { id: 1, title: 'New Arrivals', url: '#shop' },
  { id: 2, title: 'Ready-to-wear', url: '#shop' },
  { id: 3, title: 'Knitwear', url: '#shop' },
  { id: 4, title: 'Outerwear', url: '#shop' },
  {
    id: 5,
    title: 'More',
    url: '#',
    dropdown: true,
    items: [
      { id: 51, title: 'Accessories', url: '#shop' },
      { id: 52, title: 'Archive', url: '#shop' },
      { id: 53, title: 'About', url: '#about' },
      { id: 54, title: 'Contact', url: '#contact' },
    ],
  },
]

export default function SolNav() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-screen-xl mx-auto px-8 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-dm-sans font-bold text-base tracking-widest text-black no-underline"
        >
          SOL
        </Link>

        {/* Center nav - hidden on mobile */}
        <MotionConfig transition={{ duration: 0.15 }}>
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {SOL_NAV.map((item) => (
              <li key={item.id} className="relative">
                <Link
                  href={item.url}
                  className="relative font-mono text-xs tracking-widest uppercase text-black/45 hover:text-black transition-colors no-underline py-1 inline-block"
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.title}
                  {hovered === item.id && !item.dropdown && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-black"
                    />
                  )}
                </Link>

                {item.dropdown && hovered === item.id && (
                  <div
                    className="absolute top-full left-0 bg-white border border-black/10 py-1.5 min-w-[140px] z-50 mt-2"
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {item.items?.map((nav) => (
                      <Link
                        key={nav.id}
                        href={nav.url}
                        className="block px-4 py-2 font-mono text-xs tracking-widest uppercase text-black/45 hover:text-black transition-colors no-underline"
                      >
                        {nav.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </MotionConfig>

        {/* Visit Us */}
        <Link
          href="#contact"
          className="font-mono text-xs tracking-widest uppercase text-black/70 border border-black/20 px-4 py-2 no-underline hover:bg-black hover:text-white transition-colors"
        >
          Visit Us
        </Link>
      </div>
    </nav>
  )
}
