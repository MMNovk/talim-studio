'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { RadialScrollGallery } from './RadialScrollGallery'

const portfolioItems = [
  {
    key: '1',
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    label: 'Vela Nails',
    tier: 'Starter · $499',
    slug: '/work/vela-nails',
  },
  {
    key: '2',
    src: 'https://images.unsplash.com/photo-1598354047697-a12e78d92b8f?w=600&q=80',
    label: 'Marco Ink',
    tier: 'Portfolio · $799',
    slug: '/work/marco-ink',
  },
  {
    key: '3',
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    label: 'Form Pilates',
    tier: 'Business + Booking · $1,099',
    slug: '/work/form-pilates',
  },
  {
    key: '4',
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    label: 'SOL New York',
    tier: 'Starter · $499',
    slug: '/work/sol-store',
  },
  {
    key: '5',
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&q=80',
    label: 'Cinder & Co.',
    tier: 'Starter · $499',
    slug: '/work/mesa-kitchen',
  },
  {
    key: '6',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80',
    label: 'Stephen Yang',
    tier: 'Portfolio · $799',
    slug: '/work/stephen-yang',
  },
]

export default function PortfolioSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section className="bg-white relative overflow-hidden" id="portfolio">
      <div className="flex flex-col items-center justify-center pt-24 pb-4 text-center">
        <p className="text-base text-ink/40 mb-3">Check out my work</p>
        <h2 className="text-6xl font-black">Portfolio</h2>
        {!isMobile && <p className="text-base text-ink/40 mt-3">↓ Scroll</p>}
      </div>

      {isMobile ? (
        /* Mobile: 2-column photo grid */
        <div className="px-4 pb-16 mt-6 grid grid-cols-2 gap-3">
          {portfolioItems.map(({ key, src, label, tier, slug }) => (
            <Link key={key} href={slug} className="block no-underline group">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="inline-block bg-black/60 text-white font-bold text-xs px-2.5 py-1 rounded-full">
                    {label}
                  </span>
                  <p className="mt-0.5 text-white/70 text-[10px] px-1">{tier}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Desktop: RadialScrollGallery */
        <>
          <RadialScrollGallery
            scrollDuration={2500}
            visiblePercentage={45}
            mobileVisiblePercentage={35}
            baseRadius={550}
            mobileRadius={120}
          >
            {() => portfolioItems.map(({ key, src, label, tier, slug }) => (
              <Link key={key} href={slug} className="no-underline group block relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
                <img src={src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={label} loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="block bg-white text-black font-bold px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </span>
                  <span className="block text-white/80 text-xs mt-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tier}
                  </span>
                </div>
              </Link>
            ))}
          </RadialScrollGallery>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </>
      )}
    </section>
  )
}
