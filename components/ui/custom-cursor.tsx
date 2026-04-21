'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  isLoaderVisible?: boolean
}

export default function CustomCursor({ isLoaderVisible = false }: Props) {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: -100, y: -100 })
  const lerp    = useRef({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const ringEl = ringRef.current!
    const dotEl  = dotRef.current!
    if (!ringEl || !dotEl) return

    document.body.style.cursor = 'none'

    // Position and opacity are owned entirely by direct DOM — never by React.
    // React only manages width/height (hover size) via state above.
    ringEl.style.left    = '-100px'
    ringEl.style.top     = '-100px'
    ringEl.style.opacity = '0'
    dotEl.style.left     = '-100px'
    dotEl.style.top      = '-100px'
    dotEl.style.opacity  = '0'

    let rafId: number
    let started = false

    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      // Dot follows exactly — direct DOM only
      dotEl.style.left = `${e.clientX}px`
      dotEl.style.top  = `${e.clientY}px`

      if (!started) {
        started = true
        lerp.current.x   = e.clientX
        lerp.current.y   = e.clientY
        ringEl.style.opacity = '1'
        dotEl.style.opacity  = '1'
      }
    }

    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor="hover"]')) {
        setHovered(true)
      }
    }

    function onOut(e: MouseEvent) {
      const target  = e.target as HTMLElement
      const related = e.relatedTarget as HTMLElement | null
      if (target.closest('a, button, [data-cursor="hover"]') &&
          !related?.closest('a, button, [data-cursor="hover"]')) {
        setHovered(false)
      }
    }

    function tick() {
      lerp.current.x += (mouse.current.x - lerp.current.x) * 0.12
      lerp.current.y += (mouse.current.y - lerp.current.y) * 0.12
      // Ring position — direct DOM only
      ringEl.style.left = `${lerp.current.x}px`
      ringEl.style.top  = `${lerp.current.y}px`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isLoaderVisible) return null

  return (
    // mix-blend-mode: difference — cursor inverts on light/dark backgrounds
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999, mixBlendMode: 'difference' }}>

      {/* Outer ring — position/opacity via direct DOM, size via React state */}
      <div
        ref={ringRef}
        style={{
          position: 'absolute',
          width:        hovered ? 48 : 32,
          height:       hovered ? 48 : 32,
          border:       '1.5px solid #ffffff',
          background:   'transparent',
          borderRadius: '50%',
          transform:    'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition:   'width 300ms ease, height 300ms ease',
        }}
      />

      {/* Inner dot — position/opacity via direct DOM, size via React state */}
      <div
        ref={dotRef}
        style={{
          position:     'absolute',
          width:        hovered ? 6 : 4,
          height:       hovered ? 6 : 4,
          background:   '#ffffff',
          borderRadius: '50%',
          transform:    'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition:   'width 300ms ease, height 300ms ease',
        }}
      />

    </div>
  )
}
