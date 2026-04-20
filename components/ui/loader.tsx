'use client'

import { useState, useEffect } from 'react'

// ── Orbit animation injected once ────────────────────────────────────
const ORBIT_CSS = `
@keyframes clarte-orbit {
  from { rotate: 0deg; }
  to   { rotate: 360deg; }
}
@keyframes clarte-counter {
  from { rotate: 0deg; }
  to   { rotate: -360deg; }
}
`

function OrbitStyles() {
  return <style dangerouslySetInnerHTML={{ __html: ORBIT_CSS }} />
}

// ── Loader (replaces ModifiedClassicLoader) ───────────────────────────
export function ModifiedClassicLoader() {
  const spanBase: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontFamily: 'var(--font-cormorant), Georgia, serif',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 11,
    color: '#F7F3EE',
    letterSpacing: '0.15em',
    whiteSpace: 'nowrap',
    animation: 'clarte-counter 3s linear infinite',
  }

  return (
    <>
      <OrbitStyles />
      <div
        style={{
          position: 'relative',
          width: 64,
          height: 64,
          animation: 'clarte-orbit 3s linear infinite',
        }}
      >
        {/* top — rotate(0deg) translateY(-22px) */}
        <span
          style={{
            ...spanBase,
            transform: 'translate(-50%, -50%) rotate(0deg) translateY(-22px)',
          }}
        >
          Clarté
        </span>
        {/* bottom — rotate(180deg) translateY(-22px) */}
        <span
          style={{
            ...spanBase,
            transform: 'translate(-50%, -50%) rotate(180deg) translateY(-22px)',
          }}
        >
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
        background: '#1C1814',
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
