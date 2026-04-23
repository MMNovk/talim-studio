'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const TEXT = "We built Clarté around a single belief: that good skin is the result of attention, not product. Every client who comes through our door gets one practitioner, one room, and a treatment that is decided in the moment — not in advance. We don't upsell. We don't rush. We see fewer people by design, so that everyone we see leaves different than they came in."

export function ManifestoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      style={{
        backgroundColor: '#F7F3EE',
        padding: '120px 64px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: '720px', textAlign: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
            lineHeight: 2.1,
            margin: '0 0 40px 0',
            letterSpacing: '0.01em',
            color: '#1C1814',
          }}>
            {TEXT}
          </p>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#1C1814',
            opacity: 0.5,
            margin: 0,
          }}>
            Sophie Marchand, Founder
          </p>
        </motion.div>
      </div>
    </section>
  )
}
