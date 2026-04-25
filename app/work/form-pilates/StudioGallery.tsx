'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { PanInfo } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const studioItems = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop&q=90',
    title: 'The Treatment Room',
    description: 'One room. Always the same one. We keep it quiet, warm, and entirely yours for the duration of your visit. Nothing is rushed here.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=800&fit=crop&q=90',
    title: 'The Consultation',
    description: 'Every visit begins with a conversation. We ask about your skin, your week, your stress levels. The treatment is built around what we learn in that first five minutes.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&h=800&fit=crop&q=90',
    title: 'The Touch',
    description: "We don't use machines as a shortcut. Every treatment involves hands — reading the skin, adjusting pressure, responding in real time to what it needs.",
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&h=800&fit=crop&q=90',
    title: 'The Products',
    description: "We use what works, not what's trending. Every product in the room has been chosen for a reason and is explained to you before it touches your skin.",
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=800&fit=crop&q=90',
    title: 'The Atmosphere',
    description: "No music you didn't choose. No unnecessary conversation. No clock watching. Just the kind of quiet that's hard to find anywhere else in this city.",
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop&q=90',
    title: 'The Detail',
    description: "We notice things. The tension you're holding in your jaw. The dryness along your hairline. The things you didn't think to mention. That attention is the whole point.",
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&h=800&fit=crop&q=90',
    title: 'After Your Visit',
    description: "You leave with a simple, specific routine — not a bag of products. We tell you exactly what to do and what to avoid. No guesswork, no pressure.",
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=90',
    title: 'The Return',
    description: "Most of our clients come back. Not because we ask them to — because their skin tells them to. We keep your history and pick up exactly where we left off.",
  },
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
      <div className="px-16">

        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
            letterSpacing: '0.12em',
            color: '#C8BEB4',
            textTransform: 'uppercase',
            margin: '0 0 48px',
          }}
        >
          THE STUDIO
        </p>

        {/* Split layout: 3fr photo + 2fr description */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '64px', alignItems: 'start' }}>

          {/* Left column — carousel + thumbnails */}
          <div>
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
                      className="w-full h-full object-cover select-none pointer-events-none"
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
            </div>

            {/* Thumbnail strip — under photo only */}
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
                    width: 72,
                    height: 50,
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

          {/* Right column — animated description panel */}
          <div style={{ paddingTop: '48px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '0 16px' }}
            >
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#B5623E',
                  margin: 0,
                }}
              >
                {String(current + 1).padStart(2, '0')} / {String(studioItems.length).padStart(2, '0')}
              </p>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  color: '#1C1814',
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {studioItems[current].title}
              </h3>
              <div style={{ width: '48px', height: '1px', backgroundColor: '#D4C9BC' }} />
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#8C7B6E',
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                {studioItems[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
