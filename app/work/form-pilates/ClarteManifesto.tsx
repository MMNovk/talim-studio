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
  const [scrollProgress, setScrollProgress] = useState(0)
  const [wordProgress, setWordProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      const totalScrollDistance = sectionHeight + windowHeight
      const scrolled = windowHeight - rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance))
      setScrollProgress(progress)

      const wordStart = 0.15
      const wordEnd = 0.75
      const wordProg = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)))
      setWordProgress(wordProg)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const interpolateColor = (start: number[], end: number[], t: number) =>
    start.map((s, i) => Math.round(s + (end[i] - s) * t))

  const bg = interpolateColor([10, 10, 10], [247, 243, 238], scrollProgress)
  const backgroundColor = `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`

  const textColor = interpolateColor([247, 243, 238], [28, 24, 20], scrollProgress)
  const mainTextColor = `rgb(${textColor[0]}, ${textColor[1]}, ${textColor[2]})`

  const mutedColor = `rgba(${interpolateColor([200, 190, 180], [140, 123, 110], scrollProgress).join(',')}, 0.6)`

  const totalWords = words.length

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor,
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
          opacity: 0.6,
          margin: 0,
          transition: 'none',
        }}>
          Sophie Marchand, Founder
        </p>
      </div>
    </section>
  )
}
