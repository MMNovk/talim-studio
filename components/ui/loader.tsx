'use client'

import { useState, useEffect } from 'react'

export function ModifiedClassicLoader() {
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      style={{ animation: "orbit 3s linear infinite" }}
    >
      <defs>
        <path
          id="topCircle"
          d="M 110,110 m -80,0 a 80,80 0 1,1 160,0"
        />
        <path
          id="bottomCircle"
          d="M 110,110 m 80,0 a 80,80 0 1,1 -160,0"
        />
      </defs>
      <text
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontWeight="400"
        fontSize="13"
        fill="#F7F3EE"
        letterSpacing="12"
      >
        <textPath href="#topCircle" startOffset="0%">
          Clarté
        </textPath>
      </text>
      <text
        fontFamily="Cormorant Garamond"
        fontStyle="italic"
        fontWeight="400"
        fontSize="13"
        fill="#F7F3EE"
        letterSpacing="12"
      >
        <textPath href="#bottomCircle" startOffset="0%">
          Clarté
        </textPath>
      </text>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); transform-origin: 110px 110px; }
          to { transform: rotate(360deg); transform-origin: 110px 110px; }
        }
      `}</style>
    </svg>
  )
}

// ── Full-screen page loader ───────────────────────────────────────────
export default function PageLoader() {
  const [visible, setVisible]   = useState(true)
  const [mounted, setMounted]   = useState(true)

  useEffect(() => {
    const fadeTimer  = setTimeout(() => setVisible(false), 1800)
    const unmountTimer = setTimeout(() => setMounted(false), 2400)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
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
