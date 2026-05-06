'use client'

import type { CSSProperties } from 'react'
import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'

const INK    = '#1C1814'
const ACCENT = '#B5623E'
const MUTED  = '#8C7B6E'
const RULE   = '#D4C9BC'
const BG     = '#F7F3EE'
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const C300:  CSSProperties = { fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300 }
const DM300: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 300 }
const DM400: CSSProperties = { fontFamily: '"DM Sans", sans-serif', fontWeight: 400 }


export default function ClarteAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef       = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}
    ;(async () => {
      const { default: gsap } = await import('gsap')
      const { ScrollTrigger }  = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (containerRef.current && imgRef.current) {
        ctx = gsap.context(() => {
          gsap.fromTo(
            imgRef.current,
            { y: '8%' },
            {
              y: '-8%',
              ease: 'none',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
              },
            }
          )
        })
      }
    })()

    return () => { if (ctx.revert) ctx.revert() }
  }, [])

  return (
    <section id="about" style={{ background: BG }}>
      <div className="grid grid-cols-1 lg:grid-cols-2" ref={containerRef}>

        {/* Portrait */}
        <div className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1470&auto=format&fit=crop"
            alt="Sophie Marchand, founder of Clarté"
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '120%',
              top: '-10%',
              objectFit: 'cover',
              objectPosition: 'center',
              willChange: 'transform',
            }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center" style={{ padding: 'clamp(48px, 7vw, 96px)' }}>
          <motion.p
            style={{ ...DM400, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: MUTED }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: '-80px' }}
          >
            The Studio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '48px', marginTop: 40 }}>

              <p style={{ ...DM300, fontSize: 16, lineHeight: 1.9, color: INK, margin: 0 }}>
                Our Tribeca studio is small by design. One room, one practitioner, one client at a time. You&apos;ll find us on Thomas Street — quiet, unhurried, nothing like a typical skin clinic. We built the space to feel like somewhere you exhale the moment you walk in.
              </p>

              <div style={{ width: '100%', height: '1px', backgroundColor: RULE }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "We don't upsell.",
                  "We don't book back-to-back.",
                  "Every treatment is adapted in the room, never decided in advance.",
                  "You'll see the same face every visit.",
                ].map((principle, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: ACCENT, ...DM300, fontSize: 14, marginTop: 2, flexShrink: 0 }}>—</span>
                    <p style={{ ...C300, fontStyle: 'italic', fontSize: 20, color: INK, margin: 0, lineHeight: 1.4 }}>
                      {principle}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
