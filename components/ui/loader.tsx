'use client'

import { useState, useEffect } from 'react'

export function ModifiedClassicLoader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: 'clamp(2.8rem, 8vw, 5rem)',
        letterSpacing: '0.3em',
        color: '#F7F3EE',
        margin: 0,
        animation: 'clarte-breathe 2.8s ease-in-out infinite',
      }}>
        Clarté
      </p>
      <style>{`
        @keyframes clarte-breathe {
          0%   { opacity: 0;    transform: translateY(6px); }
          25%  { opacity: 1;    transform: translateY(0);   }
          70%  { opacity: 1;    transform: translateY(0);   }
          100% { opacity: 0;    transform: translateY(-4px);}
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
