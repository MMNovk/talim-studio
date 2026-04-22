'use client'

import { useRef, useEffect } from 'react'

const words = "We built Clarté around a single belief: that good skin is the result of attention, not product. Every client who comes through our door gets one practitioner, one room, and a treatment that is decided in the moment — not in advance. We don’t upsell. We don’t rush. We see fewer people by design, so that everyone we see leaves different than they came in.".split(' ')

export default function ClarteManifesto() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.color = '#1C1814'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 1.0, rootMargin: '0px 0px -10% 0px' }
    )

    wordRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      style={{
        backgroundColor: '#F7F3EE',
        padding: '80px 64px',
        display: 'flex',
        alignItems: 'center',
        minHeight: '60vh',
      }}
    >
      <div style={{ maxWidth: '60%' }}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
            lineHeight: 2,
            letterSpacing: '0.01em',
            margin: '0 0 32px 0',
          }}
        >
          {words.map((word, i) => (
            <span key={i}>
              <span
                ref={(el) => { wordRefs.current[i] = el }}
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  color: '#D4C9BC',
                  transition: 'color 0.4s ease',
                }}
              >
                {word}
              </span>
              {i < words.length - 1 && ' '}
            </span>
          ))}
        </p>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#B5623E',
          }}
        >
          Sophie Marchand, Founder
        </span>
      </div>
    </section>
  )
}
