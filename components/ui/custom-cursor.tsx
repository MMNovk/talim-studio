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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const ringEl = ringRef.current!
    const dotEl  = dotRef.current!
    if (!ringEl || !dotEl) return

    let rafId: number
    let started = false

    function onMove(e: MouseEvent) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      if (!started) {
        started = true
        lerp.current.x = e.clientX
        lerp.current.y = e.clientY
        setVisible(true)
      }

      dotEl.style.left = `${e.clientX}px`
      dotEl.style.top  = `${e.clientY}px`
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
      ringEl.style.left = `${lerp.current.x}px`
      ringEl.style.top  = `${lerp.current.y}px`
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    rafId = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isLoaderVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
      }}
    >
      {/* Outer ring — lerp-smoothed */}
      <div
        ref={ringRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width:  hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          border: '1.5px solid #ffffff',
          background: 'transparent',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 300ms ease, width 300ms ease, height 300ms ease',
        }}
      />
      {/* Inner dot — exact position */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width:  hovered ? 6 : 4,
          height: hovered ? 6 : 4,
          background: '#ffffff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 300ms ease, width 300ms ease, height 300ms ease',
        }}
      />
    </div>
  )
}
