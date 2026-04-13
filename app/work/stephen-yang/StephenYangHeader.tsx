'use client'

import { useEffect, useState } from 'react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export default function StephenYangHeader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const gallery = document.getElementById('gallery-section')
    if (!gallery) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(gallery)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference"
      style={{
        transition: 'opacity 0.4s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <span className="text-white font-thin text-base tracking-widest" style={serif}>
        Stephen Yang
      </span>
    </header>
  )
}
