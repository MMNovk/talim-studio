'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export function ManifestoSection() {
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once: true, margin: '-100px' })

  return (
    <section style={{
      backgroundColor: '#F7F3EE',
      paddingTop: '0',
      paddingBottom: '0',
    }}>

      {/* Decorative CLARTÉ heading */}
      <div style={{
        width: '100%',
        paddingTop: '48px',
        paddingBottom: '0',
        textAlign: 'center',
        marginTop: '0',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          fontSize: 'clamp(8rem, 18vw, 18rem)',
          lineHeight: 1,
          paddingTop: '0',
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

      {/* Values section */}
      <section className="w-full flex flex-row items-stretch" style={{ minHeight: '460px' }}>

        {/* Left label — vertical "OUR MOTTO" */}
        <div style={{
          width: '220px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        }}>
          <p style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            letterSpacing: '0.12em',
            color: 'transparent',
            WebkitTextStroke: '1.5px #C8BEB4',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1,
            userSelect: 'none',
          }}>
            Our Motto
          </p>
        </div>

        {/* Image gallery */}
        <div style={{ flex: 1, paddingRight: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <div className="flex items-center gap-2 h-[460px] w-full">
            {[
              {
                src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=800&fit=crop&q=90',
                label: 'SLOW',
              },
              {
                src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop&q=90',
                label: 'INTENTIONAL',
              },
              {
                src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=800&fit=crop&q=90',
                label: 'PRECISE',
              },
              {
                src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=800&fit=crop&q=90',
                label: 'PERSONAL',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-full duration-500 hover:w-full"
              >
                <img
                  className="h-full w-full object-cover object-center"
                  src={item.src}
                  alt={item.label}
                  style={{ filter: 'none' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(28,24,20,0.75) 0%, transparent 60%)',
                }} />
                <p style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#F7F3EE',
                  margin: 0,
                }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </section>
  )
}
