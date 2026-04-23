'use client'

import { useEffect, useRef, useState } from 'react'

const words = [
  'We', 'built', 'Clarté', 'around', 'a', 'single', 'belief:', 'that', 'good',
  'skin', 'is', 'the', 'result', 'of', 'attention,', 'not', 'product.', 'Every',
  'client', 'who', 'comes', 'through', 'our', 'door', 'gets', 'one', 'practitioner,',
  'one', 'room,', 'and', 'a', 'treatment', 'that', 'is', 'decided', 'in', 'the',
  'moment', '—', 'not', 'in', 'advance.', 'We', "don't", 'upsell.', 'We', "don't",
  'rush.', 'We', 'see', 'fewer', 'people', 'by', 'design,', 'so', 'that', 'everyone',
  'we', 'see', 'leaves', 'different', 'than', 'they', 'came', 'in.',
]

export function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [wordProgress, setWordProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      const scrolled = windowHeight - rect.top
      const total = sectionHeight + windowHeight
      const progress = Math.max(0, Math.min(1, scrolled / total))

      const wordStart = 0.1
      const wordEnd = 0.65
      const wordProg = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)))
      setWordProgress(wordProg)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const backgroundColor = '#0A0A0A'
  const mainTextColor   = '#F7F3EE'
  const mutedColor      = 'rgba(247, 243, 238, 0.2)'

  const totalWords = words.length

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor,
        margin: 0,
        padding: '120px 64px',
        transition: 'none',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '720px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
          lineHeight: 2.1,
          margin: '0 0 40px 0',
          letterSpacing: '0.01em',
        }}>
          {words.map((word, i) => {
            const wordThreshold = i / totalWords
            const isRevealed = wordProgress >= wordThreshold
            const color = isRevealed ? mainTextColor : mutedColor
            return (
              <span
                key={i}
                style={{
                  color,
                  transition: 'color 0.3s ease',
                  marginRight: '0.3em',
                  display: 'inline-block',
                }}
              >
                {word}
              </span>
            )
          })}
        </p>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: mainTextColor,
          opacity: 0.5,
          margin: 0,
          transition: 'none',
        }}>
          Sophie Marchand, Founder
        </p>
      </div>
    </section>
  )
}
