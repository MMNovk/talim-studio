'use client'

import { useState, useEffect } from 'react'

export function ModifiedClassicLoader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: 'clamp(2.8rem, 8vw, 5rem)',
        letterSpacing: '0.3em',
        margin: 0,
        background: 'linear-gradient(90deg, rgba(247,243,238,0.08) 0%, rgba(247,243,238,1) 50%, rgba(247,243,238,0.08) 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'clarte-sweep 2.2s ease-in-out infinite',
      }}>
        Clarté
      </p>
      <style>{`
        @keyframes clarte-sweep {
          0%   { background-position: 150% center; }
          100% { background-position: -50% center; }
        }
      `}</style>
    </div>
  )
}

// ── Full-screen page loader ───────────────────────────────────────────
export default function PageLoader() {
  const [visible, setVisible]   = useState(true)
  const [mounted, setMounted]   = useState(true)

  useEffect(() => {
    const dismiss = () => {
      // Wait 1000ms — matches the slider-wrapper opacity transition duration in clarte-hero.css
      // so the hero is fully opaque before the loader starts fading out
      setTimeout(() => {
        setVisible(false)
        setTimeout(() => setMounted(false), 800)
      }, 1000)
    }

    window.addEventListener('clarte-hero-ready', dismiss, { once: true })
    const fallback = setTimeout(dismiss, 3000)

    return () => {
      window.removeEventListener('clarte-hero-ready', dismiss)
      clearTimeout(fallback)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 600ms ease-in-out',
      }}
    >
      <ModifiedClassicLoader />
    </div>
  )
}
