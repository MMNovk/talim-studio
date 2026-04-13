'use client'

import { useEffect, useState } from 'react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export default function StephenYangHeader() {
  const [galleryVisible, setGalleryVisible] = useState(false)
  const [nameBannerVisible, setNameBannerVisible] = useState(false)

  useEffect(() => {
    const gallery = document.getElementById('gallery-section')
    const nameBanner = document.getElementById('name-banner')
    if (!gallery || !nameBanner) return

    const galleryObserver = new IntersectionObserver(
      ([entry]) => setGalleryVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    const nameBannerObserver = new IntersectionObserver(
      ([entry]) => setNameBannerVisible(entry.isIntersecting),
      { threshold: 0 }
    )

    galleryObserver.observe(gallery)
    nameBannerObserver.observe(nameBanner)

    return () => {
      galleryObserver.disconnect()
      nameBannerObserver.disconnect()
    }
  }, [])

  // Show only during gallery scroll, never at the same time as the large NameBanner
  const visible = galleryVisible && !nameBannerVisible

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
