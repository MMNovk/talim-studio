'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'

const values = [
  {
    word: 'Slow',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=1000&fit=crop&q=90',
  },
  {
    word: 'Intentional',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop&q=90',
  },
  {
    word: 'Precise',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=1000&fit=crop&q=90',
  },
  {
    word: 'Honest',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop&q=90',
  },
  {
    word: 'Personal',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=1000&fit=crop&q=90',
  },
]

export function ManifestoSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once: true, margin: '-100px' })

  return (
    <section style={{
      backgroundColor: '#F7F3EE',
      paddingTop: '120px',
      paddingBottom: '0',
    }}>

      {/* Manifesto text */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 64px 48px',
        }}
      >
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
          lineHeight: 2.1,
          color: '#1C1814',
          margin: '0 0 32px 0',
          letterSpacing: '0.01em',
        }}>
          At Clarté, we believe that good skin is the result of attention, not product. Every client who comes through our door gets one practitioner, one room, and a treatment that personally caters to them. We don&apos;t upsell. We don&apos;t rush. We see fewer people by design, so that everyone we see leaves different than they came in.
        </p>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#B5623E',
          margin: 0,
          opacity: 0.8,
        }}>
          Sophie Marchand, Founder
        </p>
      </motion.div>

      {/* Value cards — accordion expand on hover */}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        height: '560px',
        width: '100%',
        gap: '2px',
        backgroundColor: '#1C1814',
      }}>
        {values.map((value, index) => (
          <motion.div
            key={value.word}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            animate={{
              flexGrow: hoveredIndex === index ? 4 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              flexShrink: 1,
              flexBasis: 0,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {/* Background image */}
            <img
              src={value.image}
              alt={value.word}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />

            {/* Dark overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: hoveredIndex === index
                ? 'linear-gradient(to top, rgba(28,24,20,0.85) 0%, rgba(28,24,20,0.1) 60%, transparent 100%)'
                : 'linear-gradient(to top, rgba(28,24,20,0.95) 0%, rgba(28,24,20,0.6) 100%)',
              transition: 'background 500ms ease',
            }} />

            {/* Value word */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '28px 24px',
            }}>
              <motion.p
                animate={{
                  fontSize: hoveredIndex === index ? 'clamp(2rem, 3vw, 2.8rem)' : '14px',
                  letterSpacing: hoveredIndex === index ? '-0.01em' : '0.2em',
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  fontFamily: hoveredIndex === index ? 'Cormorant Garamond, serif' : 'DM Sans, sans-serif',
                  fontWeight: 300,
                  textTransform: hoveredIndex === index ? 'none' : 'uppercase',
                  color: '#F7F3EE',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {value.word}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative CLARTÉ heading */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: '0',
        paddingBottom: '0',
        textAlign: 'center',
        marginTop: '-2px',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(8rem, 18vw, 18rem)',
          lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(28, 24, 20, 0.2)',
          letterSpacing: '0.15em',
          margin: 0,
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          CLARTÉ
        </p>
      </div>

    </section>
  )
}
