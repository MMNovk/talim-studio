'use client'

import type { CSSProperties } from 'react'
import { useState, useEffect } from 'react'

const INK    = '#1C1814'
const ACCENT = '#B5623E'
const MUTED  = '#8C7B6E'
const RULE   = '#D4C9BC'
const BG     = '#F7F3EE'

const C300:  CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }
const DM300: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }
const DM400: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }

const SERVICES = [
  { name: 'HydraFacial',    price: '$185', duration: '60 min', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1800&q=80' },
  { name: 'LED Therapy',    price: '$95',  duration: '45 min', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1800&q=80' },
  { name: 'Microneedling',  price: '$275', duration: '75 min', img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1800&q=80' },
  { name: 'Gua Sha Ritual', price: '$120', duration: '60 min', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80' },
  { name: 'Chemical Peel',  price: '$150', duration: '45 min', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=80' },
  { name: 'Bespoke Facial', price: '$220', duration: '90 min', img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1800&q=80' },
]

export default function ClarteServices() {
  const [hovered, setHovered] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    SERVICES.forEach(s => {
      const img = new window.Image()
      img.src = s.img
    })
    const mq = window.matchMedia('(max-width: 1023px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section style={{ background: BG }}>
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left: treatment list */}
        <div style={{ padding: 'clamp(48px, 6vw, 88px)', minHeight: '100vh' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ ...DM400, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTED }}>
              Treatments
            </p>
            <h2 style={{ ...C300, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: INK, marginTop: 16 }}>
              Our Services
            </h2>
          </div>

          {SERVICES.map((s, i) => {
            const active = hovered === i
            const showMeta = isMobile || active
            return (
              <div
                key={s.name}
                onMouseEnter={() => setHovered(i)}
                style={{
                  borderTop: `1px solid ${RULE}`,
                  padding: '32px 0',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* draw underline */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: 2,
                  width: '100%',
                  background: ACCENT,
                  transform: active ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left center',
                  transition: 'transform 0.45s cubic-bezier(0.76,0,0.24,1)',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{
                    ...C300,
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                    color: INK,
                    lineHeight: 1,
                    transform: active ? 'translateX(16px)' : 'translateX(0)',
                    transition: 'transform 0.35s cubic-bezier(0.76,0,0.24,1)',
                  }}>
                    {s.name}
                  </h3>

                  <div style={{
                    textAlign: 'right',
                    flexShrink: 0,
                    marginLeft: 24,
                    opacity: showMeta ? 1 : 0,
                    transform: showMeta ? 'translateX(0)' : 'translateX(10px)',
                    transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
                  }}>
                    <span style={{ ...DM300, fontSize: 18, color: ACCENT, display: 'block' }}>{s.price}</span>
                    <span style={{ ...DM400, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, display: 'block', marginTop: 4 }}>
                      {s.duration}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
          <div style={{ borderTop: `1px solid ${RULE}` }} />
        </div>

        {/* Right: sticky image panel */}
        <div className="hidden lg:block" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {SERVICES.map((s, i) => (
            <img
              key={s.name}
              src={s.img}
              alt={s.name}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.65s ease',
                willChange: 'opacity',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
