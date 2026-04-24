'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const values = [
  {
    src: 'https://images.unsplash.com/photo-1669093234697-b28cee17fbfb?q=80&w=987&auto=format&fit=crop',
    label: 'SLOW',
    description: 'We never rush a treatment. Every session is timed to your skin, not our schedule.',
  },
  {
    src: 'https://images.unsplash.com/photo-1700522924565-9fad1c05469e?q=80&w=987&auto=format&fit=crop',
    label: 'INTENTIONAL',
    description: 'Every product and technique is chosen with purpose. Nothing is applied by habit.',
  },
  {
    src: 'https://images.unsplash.com/photo-1731514771613-991a02407132?q=80&w=987&auto=format&fit=crop',
    label: 'PRECISE',
    description: 'We work with clinical detail, tracking changes session to session.',
  },
  {
    src: 'https://images.unsplash.com/photo-1668368753716-afb9ce4a5bbf?q=80&w=987&auto=format&fit=crop',
    label: 'PERSONAL',
    description: 'One room, one practitioner, one focus: you.',
  },
]

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
          padding: '0 64px 96px',
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
          We believe that good skin is the result of attention, not product. Every client who comes through our door gets one practitioner, one room, and a treatment that personally caters to them. We don&apos;t upsell. We don&apos;t rush. We see fewer people by design, so that everyone we see leaves different than they came in.
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
      <section className="w-full relative" style={{ paddingTop: '48px', paddingBottom: '48px', overflow: 'visible' }}>

        {/* OUR MOTTO — absolutely positioned, vertically centered */}
        <div style={{
          position: 'absolute',
          left: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}>
          <p style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
            letterSpacing: '0.12em',
            color: '#C8BEB4',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1,
            userSelect: 'none',
          }}>
            Our Motto
          </p>
        </div>

        {/* OUR MOTTO — right side (mirror of left) */}
        <div style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}>
          <p style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
            letterSpacing: '0.12em',
            color: '#C8BEB4',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1,
            userSelect: 'none',
          }}>
            Our Motto
          </p>
        </div>

        {/* Image gallery — centered on the page */}
        <div className="flex items-center gap-2 mx-auto" style={{
          height: '460px',
          width: 'calc(100% - 160px)',
          marginLeft: 'auto',
          marginRight: '80px',
        }}>
            {values.map((item, idx) => (
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
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(20,16,12,0)',
                  transition: 'background 0.4s ease',
                }} className="group-hover:[background:rgba(20,16,12,0.45)]" />
                {/* Hover description */}
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  width: '75%',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#F7F3EE',
                  margin: 0,
                  lineHeight: 1.6,
                  zIndex: 1,
                  textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(20,16,12,0.45)',
                    borderRadius: '6px',
                    padding: '8px 12px',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {item.description}
                  </span>
                </p>
                {/* Bottom label */}
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

      </section>

    </section>
  )
}
