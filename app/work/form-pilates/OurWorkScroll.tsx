'use client'

import { ReactLenis } from 'lenis/react'

const leftImages = [
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&auto=format&fit=crop&q=80',
]

const centerImages = [
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&auto=format&fit=crop&q=80',
]

const rightImages = [
  'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=500&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&auto=format&fit=crop&q=80',
]

export default function OurWorkScroll() {
  return (
    <>
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#8C7B6E',
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
