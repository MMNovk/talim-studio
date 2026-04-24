'use client'

import { ReactLenis } from 'lenis/react'

const leftImages = [
  'https://images.unsplash.com/photo-1643402305704-474b129161a5?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1757689373248-a6cd07328ba5?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1731514899894-86ae464a9a21?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1643685276743-1b52832c58d5?q=80&w=1064&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1731514798247-2d7ecb6fa45a?q=80&w=987&auto=format&fit=crop',
]

const centerImages = [
  'https://images.unsplash.com/photo-1650158638285-d137b8428582?q=80&w=1064&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1733685373334-c5ea7c0ee009?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1677682692989-0e54aa104350?q=80&w=2070&auto=format&fit=crop',
]

const rightImages = [
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=987&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=987&auto=format&fit=crop',
]

export default function OurWorkScroll() {
  return (
    <>
      <p
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#C8BEB4',
          textAlign: 'center',
          width: '100%',
          padding: '80px 32px 32px',
          backgroundColor: '#F7F3EE',
          margin: 0,
        }}
      >
        Our Work
      </p>

      <ReactLenis root>
        <main style={{ backgroundColor: '#F7F3EE' }}>
          <section
            className="grid grid-cols-3 gap-3 p-3"
            style={{ backgroundColor: '#F7F3EE' }}
          >
            {/* Left column */}
            <div className="grid gap-3">
              {leftImages.map((src, i) => (
                <figure key={i} className="m-0 overflow-hidden" style={{ borderRadius: '2px' }}>
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '2px', display: 'block' }}
                  />
                </figure>
              ))}
            </div>

            {/* Center column — sticky */}
            <div className="sticky top-0 h-screen grid gap-3 overflow-hidden">
              {centerImages.map((src, i) => (
                <figure key={i} className="m-0 overflow-hidden" style={{ borderRadius: '2px' }}>
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '2px', display: 'block' }}
                  />
                </figure>
              ))}
            </div>

            {/* Right column */}
            <div className="grid gap-3">
              {rightImages.map((src, i) => (
                <figure key={i} className="m-0 overflow-hidden" style={{ borderRadius: '2px' }}>
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '2px', display: 'block' }}
                  />
                </figure>
              ))}
            </div>
          </section>
        </main>
      </ReactLenis>
    </>
  )
}
