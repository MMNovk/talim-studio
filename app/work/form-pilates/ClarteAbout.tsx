'use client'

import type { CSSProperties } from 'react'
import { useState, useEffect, useRef } from 'react'
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

function LineSlot({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden', lineHeight: 1.1 }}>
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '105%' }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.76, 0, 0.24, 1] }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function ClarteAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef       = useRef<HTMLImageElement>(null)
  const countElRef   = useRef<HTMLSpanElement>(null)
  const [count, setCount]     = useState(2018)
  const hasCounted            = useRef(false)

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

  useEffect(() => {
    const el = countElRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasCounted.current) {
        hasCounted.current = true
        let cur = 2018
        const iv = setInterval(() => {
          cur++
          setCount(cur)
          if (cur >= 2021) clearInterval(iv)
        }, 110)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
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
            Founder
          </motion.p>

          <h2 style={{ ...C300, fontSize: 'clamp(3rem, 5vw, 4rem)', color: INK, marginTop: 16, marginBottom: 32 }}>
            <LineSlot delay={0.1}>Sophie</LineSlot>
            <LineSlot delay={0.22}>Marchand</LineSlot>
          </h2>

          <motion.div
            style={{ width: '100%', height: 1, background: RULE, marginBottom: 32, transformOrigin: 'left center' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            viewport={{ once: true, margin: '-80px' }}
          />

          <motion.p
            style={{ ...DM300, fontSize: 16, lineHeight: 1.85, color: MUTED, maxWidth: 400 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            viewport={{ once: true, margin: '-80px' }}
          >
            I spent eight years training in Paris and working across some of New York&apos;s most
            sought-after skin clinics before opening Clarté in 2021. I started this studio
            because I believed skincare should be slow, intentional, and built around one
            person at a time. We see a limited number of clients each week by design. Every
            treatment is adapted in the room, not decided in advance.
          </motion.p>

          <motion.div
            style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${RULE}`, display: 'flex', gap: 48 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div>
              <span style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, display: 'block', marginBottom: 8 }}>
                Established
              </span>
              <span ref={countElRef} style={{ ...C300, fontSize: 24, color: ACCENT }}>{count}</span>
            </div>
            <div>
              <span style={{ ...DM400, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: MUTED, display: 'block', marginBottom: 8 }}>
                Location
              </span>
              <span style={{ ...C300, fontSize: 24, color: INK }}>Tribeca, NYC</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
