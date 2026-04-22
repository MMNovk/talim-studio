'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface Review {
  id: number
  name: string
  affiliation: string
  quote: string
  joined: string
  specialization: string
  imageSrc: string
  thumbnailSrc: string
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 240 : -240,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: EASE },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -240 : 240,
    opacity: 0,
    transition: { duration: 0.3, ease: EASE },
  }),
}

export function TestimonialSlider({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleThumbnailClick = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const review = reviews[current]

  return (
    <div
      className="min-h-[650px] md:min-h-[600px] p-8 md:p-12"
      style={{ backgroundColor: '#F7F3EE' }}
    >
      <div className="grid grid-cols-12 gap-6 items-start">

        {/* Left col: thumbnails — md:col-span-2 */}
        <div className="col-span-2 flex flex-col items-center gap-2 pt-1">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              onClick={() => handleThumbnailClick(i)}
              style={{
                width: 56,
                height: 72,
                borderRadius: '2px',
                overflow: 'hidden',
                opacity: i === current ? 1 : 0.35,
                transition: 'opacity 0.3s ease',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'block',
              }}
            >
              <img
                src={r.thumbnailSrc}
                alt={r.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </button>
          ))}
        </div>

        {/* Animated content: image + text — col-span-10 */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={review.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="col-span-10 grid grid-cols-10 gap-8 items-start"
          >
            {/* Center col: image — col-span-6 */}
            <div
              className="col-span-6"
              style={{ width: '100%', minHeight: '620px', position: 'relative', overflow: 'hidden' }}
            >
              <img
                src={review.imageSrc}
                alt={review.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>

            {/* Right col: text + nav — col-span-4 */}
            <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 8 }}>

              {/* Pagination */}
              <span style={{ fontFamily: '"DM Sans", sans-serif', color: '#8C7B6E', fontSize: 11 }}>
                {String(current + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
              </span>

              {/* Name */}
              <h3 style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontSize: 40,
                color: '#1C1814',
                margin: 0,
                lineHeight: 1.1,
              }}>
                {review.name}
              </h3>

              {/* Affiliation */}
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B5623E',
                margin: 0,
              }}>
                {review.affiliation}
              </p>

              {/* Quote */}
              <blockquote style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
                color: '#1C1814',
                margin: 0,
                lineHeight: 1.65,
              }}>
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              {/* Joined */}
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8C7B6E', marginTop: '24px' }}>
                {review.joined}
              </p>

              {/* Specialization */}
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B5623E', marginTop: '8px' }}>
                {review.specialization}
              </p>

              {/* Navigation */}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <div
                  onClick={handlePrev}
                  style={{
                    width: 44,
                    height: 44,
                    border: '1px solid #D4C9BC',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#F7F3EE',
                  }}
                >
                  <ArrowLeft size={16} color="#1C1814" />
                </div>
                <div
                  onClick={handleNext}
                  style={{
                    width: 44,
                    height: 44,
                    border: '1px solid #1C1814',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#1C1814',
                  }}
                >
                  <ArrowRight size={16} color="#F7F3EE" />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}

