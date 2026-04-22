'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { PanInfo } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Lens } from '@/components/ui/magnifier-lens'

const items = [
  { id: 1,  url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop&q=90', title: 'Facial treatment' },
  { id: 2,  url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=800&fit=crop&q=90', title: 'HydraFacial' },
  { id: 3,  url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&h=800&fit=crop&q=90', title: 'LED therapy' },
  { id: 4,  url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop&q=90', title: 'Gua sha' },
  { id: 5,  url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&h=800&fit=crop&q=90', title: 'Bespoke facial' },
  { id: 6,  url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&h=800&fit=crop&q=90', title: 'Microneedling' },
  { id: 7,  url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=90', title: 'Skin treatment' },
  { id: 8,  url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=800&fit=crop&q=90', title: 'Spa treatment' },
  { id: 9,  url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=800&fit=crop&q=90', title: 'Face massage' },
  { id: 10, url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=800&fit=crop&q=90', title: 'Skin care' },
  { id: 11, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop&q=90', title: 'Facial massage' },
  { id: 12, url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=1200&h=800&fit=crop&q=90', title: 'Chemical peel' },
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

export default function OurWorkGallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [lensEnabled, setLensEnabled] = useState(true)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const goTo = (index: number) => {
    setDirection(index >= current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + items.length) % items.length)
  const next = () => goTo((current + 1) % items.length)

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
    <section style={{ backgroundColor: '#F7F3EE', padding: '80px 0' }}>
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#8C7B6E',
          padding: '0 64px 40px',
          margin: 0,
        }}
      >
        OUR WORK
      </p>

      <div className="max-w-5xl mx-auto px-16">
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
          {/* Left column — hint + lens toggle */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '24px',
            paddingRight: '32px',
            minWidth: '180px',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '18px',
              color: '#1C1814',
              lineHeight: 1.6,
            }}>
              Hover over any image to inspect the detail up close.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                onClick={() => setLensEnabled(prev => !prev)}
                style={{
                  width: '40px',
                  height: '22px',
                  borderRadius: '11px',
                  backgroundColor: lensEnabled ? '#B5623E' : '#D4C9BC',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'background-color 300ms ease',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '3px',
                  left: lensEnabled ? '21px' : '3px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#F7F3EE',
                  transition: 'left 300ms ease',
                }} />
              </div>
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#8C7B6E',
              }}>
                {lensEnabled ? 'Lens On' : 'Lens Off'}
              </span>
            </div>
          </div>

          {/* Right column — carousel */}
          <div style={{ flex: 1, minWidth: 0 }}>
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
                {lensEnabled ? (
                  <Lens zoomFactor={2.5} lensSize={180}>
                    <img
                      src={items[current].url}
                      alt={items[current].title}
                      className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                      draggable={false}
                    />
                  </Lens>
                ) : (
                  <img
                    src={items[current].url}
                    alt={items[current].title}
                    className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                    draggable={false}
                  />
                )}
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
            {String(current + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div
          ref={thumbsRef}
          className="flex gap-2 mt-3 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        >
          {items.map((item, i) => (
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
          </div>{/* right column */}
        </div>{/* flex row */}
      </div>
    </section>
  )
}
