'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { PanInfo } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const studioItems = [
  { id: 1, url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=90', title: 'The studio' },
  { id: 2, url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=800&fit=crop&q=90', title: 'Treatment room' },
  { id: 3, url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=800&fit=crop&q=90', title: 'The space' },
  { id: 4, url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=800&fit=crop&q=90', title: 'Ambiance' },
  { id: 5, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop&q=90', title: 'Details' },
  { id: 6, url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop&q=90', title: 'Interior' },
  { id: 7, url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&h=800&fit=crop&q=90', title: 'Room' },
  { id: 8, url: 'https://images.unsplash.com/photo-1596178060810-72660ee6e878?w=1200&h=800&fit=crop&q=90', title: 'Atmosphere' },
]

const DRAG_THRESHOLD = 80

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function StudioGallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const goTo = (index: number) => {
    setDirection(index >= current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + studioItems.length) % studioItems.length)
  const next = () => goTo((current + 1) % studioItems.length)

  useEffect(() => {
    const strip = thumbsRef.current
    if (!strip) return
    const thumb = strip.children[current] as HTMLButtonElement
    if (!thumb) return
    const stripRect = strip.getBoundingClientRect()
    const thumbRect = thumb.getBoundingClientRect()
    const scrollLeft =
      strip.scrollLeft + thumbRect.left - stripRect.left - stripRect.width / 2 + thumbRect.width / 2
    strip.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [current])

  return (
    <section id="about" style={{ backgroundColor: '#F7F3EE', padding: '80px 0' }}>
      <div className="max-w-4xl mx-auto px-16">
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#8C7B6E',
            margin: '0 0 24px',
          }}
        >
          THE STUDIO
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
            color: '#8C7B6E',
            maxWidth: '600px',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}
        >
          One room, one practitioner, one client at a time. Our Thomas Street studio is quiet by design — nothing like a typical skin clinic.
        </p>

        {/* Main carousel */}
        <div
          className="relative overflow-hidden"
          style={{ backgroundColor: '#EDE8E2', borderRadius: '2px', aspectRatio: '880 / 600' }}
        >
          {/* Drag capture layer */}
          <motion.div
            className="absolute inset-0 z-10"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
              if (info.offset.x < -DRAG_THRESHOLD) next()
              else if (info.offset.x > DRAG_THRESHOLD) prev()
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30, restDelta: 0.001 }}
                className="absolute inset-0"
              >
                <img
                  src={studioItems[current].url}
                  alt={studioItems[current].title}
                  className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-opacity hover:opacity-75"
            style={{
              backgroundColor: '#F7F3EE',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <ChevronLeft size={18} color="#1C1814" />
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full transition-opacity hover:opacity-75"
            style={{
              backgroundColor: '#F7F3EE',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            <ChevronRight size={18} color="#1C1814" />
          </button>

          {/* Counter pill */}
          <div
            className="absolute bottom-4 right-4 z-20 text-white"
            style={{
              backgroundColor: 'rgba(28,24,20,0.6)',
              fontSize: '12px',
              fontFamily: 'DM Sans, sans-serif',
              letterSpacing: '0.05em',
              padding: '4px 12px',
              borderRadius: '20px',
            }}
          >
            {String(current + 1).padStart(2, '0')} / {String(studioItems.length).padStart(2, '0')}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div
          ref={thumbsRef}
          className="flex gap-2 mt-3 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        >
          {studioItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              aria-label={item.title}
              className="flex-shrink-0 overflow-hidden"
              style={{
                width: 80,
                height: 56,
                borderRadius: '2px',
                border: `2px solid ${i === current ? '#B5623E' : 'transparent'}`,
                padding: 0,
                cursor: 'pointer',
                opacity: i === current ? 1 : 0.6,
                transition: 'opacity 0.2s ease, border-color 0.2s ease',
              }}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
