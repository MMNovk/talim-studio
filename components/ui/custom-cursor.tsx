'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface Props {
  isLoaderVisible?: boolean
}

export default function CustomCursor({ isLoaderVisible = false }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const ringRef    = useRef<HTMLDivElement>(null)
  const dotRef     = useRef<HTMLDivElement>(null)
  const mouse      = useRef<{ x: number; y: number } | null>(null)
  const lerp       = useRef<{ x: number; y: number } | null>(null)
  const [hovered, setHovered] = useState(false)
  const [ready,   setReady]   = useState(false)

  useEffect(() => {
    document.body.style.cursor = 'none'

    let rafId: number

    function onMove(e: MouseEvent) {
      if (!mouse.current) {
        mouse.current = { x: e.clientX, y: e.clientY }
        lerp.current  = { x: e.clientX, y: e.clientY }
        setReady(true)
      } else {
        mouse.current.x = e.clientX
        mouse.current.y = e.clientY
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top  = `${e.clientY}px`
      }

      // Hero detection — switch blend mode so ring is visible over WebGL canvas
      if (wrapperRef.current && ringRef.current) {
        const heroEl  = document.querySelector('.slider-wrapper')
        const overHero = heroEl
          ? (() => { const r = heroEl.getBoundingClientRect(); return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom })()
          : false
        wrapperRef.current.style.mixBlendMode = overHero ? 'normal' : 'difference'
        ringRef.current.style.border = `1.5px solid ${overHero ? 'rgba(255,255,255,0.9)' : '#ffffff'}`
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
      if (lerp.current && mouse.current && ringRef.current) {
        lerp.current.x += (mouse.current.x - lerp.current.x) * 0.12
        lerp.current.y += (mouse.current.y - lerp.current.y) * 0.12
        ringRef.current.style.left = `${lerp.current.x}px`
        ringRef.current.style.top  = `${lerp.current.y}px`
      }
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

  useLayoutEffect(() => {
    if (!ready || !ringRef.current || !dotRef.current || !lerp.current || !mouse.current) return
    ringRef.current.style.left = `${lerp.current.x}px`
    ringRef.current.style.top  = `${lerp.current.y}px`
    dotRef.current.style.left  = `${mouse.current.x}px`
    dotRef.current.style.top   = `${mouse.current.y}px`
  }, [ready])

  useEffect(() => {
    if (!ready || !ringRef.current || !dotRef.current) return
    ringRef.current.style.opacity = '1'
    dotRef.current.style.opacity  = '1'
  }, [ready])

  if (isLoaderVisible) return null

  return (
    <div
      ref={wrapperRef}
      style={{
        position:      'fixed',
        inset:         0,
        pointerEvents: 'none',
        zIndex:        999999,
        mixBlendMode:  'difference',
      }}
    >
      {ready && (
        <>
          <div
            ref={ringRef}
            style={{
              position:      'absolute',
              opacity:       0,
              width:         hovered ? 48 : 32,
              height:        hovered ? 48 : 32,
              border:        '1.5px solid #ffffff',
              background:    'transparent',
              borderRadius:  '50%',
              transform:     'translate(-50%, -50%)',
              pointerEvents: 'none',
              transition:    'opacity 300ms ease, width 300ms ease, height 300ms ease',
            }}
          />
          <div
            ref={dotRef}
            style={{
              position:      'absolute',
              opacity:       0,
              width:         hovered ? 6 : 4,
              height:        hovered ? 6 : 4,
              background:    '#ffffff',
              borderRadius:  '50%',
              transform:     'translate(-50%, -50%)',
              pointerEvents: 'none',
              transition:    'opacity 300ms ease, width 300ms ease, height 300ms ease',
            }}
          />
        </>
      )}
    </div>
  )
}
