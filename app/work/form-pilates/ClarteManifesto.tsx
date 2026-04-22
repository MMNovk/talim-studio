'use client'

import { useEffect } from 'react'

const TEXT = "We built Clarté around a single belief: that good skin is the result of attention, not product. Every client who comes through our door gets one practitioner, one room, and a treatment that is decided in the moment — not in advance. We don't upsell. We don't rush. We see fewer people by design, so that everyone we see leaves different than they came in."
const words = TEXT.split(' ')

export default function ClarteManifesto() {
  useEffect(() => {
    const wordEls = document.querySelectorAll('.manifesto-word')

    const handleScroll = () => {
      wordEls.forEach((word, index) => {
        const rect = word.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight * 0.85) {
          setTimeout(() => {
            ;(word as HTMLElement).style.color = '#1C1814'
          }, index * 40)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      style={{
        backgroundColor: '#F7F3EE',
        padding: '160px 64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
            lineHeight: 2.2,
            letterSpacing: '0.01em',
            margin: '0 0 32px 0',
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="manifesto-word"
              style={{
                color: '#D4C9BC',
                transition: 'color 0.5s ease',
                display: 'inline-block',
                marginRight: '0.25em',
              }}
            >
              {word}
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
