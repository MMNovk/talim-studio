'use client'

import { useState, useEffect } from 'react'

const ORBIT_CSS = `
@keyframes orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
`

const spanBase: React.CSSProperties = {
  position: 'absolute',
  left: '50%',
  fontFamily: 'var(--font-cormorant), Georgia, serif',
  fontStyle: 'italic',
  fontWeight: 300,
  fontSize: 11,
  color: '#F7F3EE',
  letterSpacing: '0.15em',
  whiteSpace: 'nowrap',
}

export function ModifiedClassicLoader() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ORBIT_CSS }} />
      <div
        style={{
          position: 'relative',
          width: 80,
          height: 80,
          animation: 'orbit 2.5s linear infinite',
        }}
      >
        <span style={{ ...spanBase, top: 0, transform: 'translateX(-50%)' }}>
          Clarté
        </span>
        <span style={{ ...spanBase, bottom: 0, transform: 'translateX(-50%) rotate(180deg)' }}>
          Clarté
        </span>
      </div>
    </>
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
