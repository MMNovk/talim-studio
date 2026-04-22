'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'

const products = [
  {
    id: 1,
    brand: 'Augustinus Bader',
    name: 'The Cream',
    price: '$265',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=600&fit=crop&q=90',
  },
  {
    id: 2,
    brand: 'Biologique Recherche',
    name: 'Lotion P50',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=600&fit=crop&q=90',
  },
  {
    id: 3,
    brand: "Vintner's Daughter",
    name: 'Active Botanical Serum',
    price: '$295',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=600&fit=crop&q=90',
  },
  {
    id: 4,
    brand: 'Tatcha',
    name: 'The Water Cream',
    price: '$72',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=600&fit=crop&q=90',
  },
  {
    id: 5,
    brand: 'Luzern',
    name: 'Sérum Absolut',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=600&fit=crop&q=90',
  },
  {
    id: 6,
    brand: 'Dr. Barbara Sturm',
    name: 'Face Cream',
    price: '$320',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=600&fit=crop&q=90',
  },
]

export function ProductStrip() {
  const dragRef = useRef(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [leftConstraint, setLeftConstraint] = useState(0)

  useEffect(() => {
    setLeftConstraint(-(300 * products.length - window.innerWidth + 128))
  }, [])

  return (
    <section style={{
      backgroundColor: '#1C1814',
      padding: '80px 0 80px 64px',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingRight: '64px',
        marginBottom: '48px',
      }}>
        <div>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#8C7B6E',
            marginBottom: '12px',
          }}>
            The Edit
          </p>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 1.8vw, 1.6rem)',
            color: '#F7F3EE',
            margin: 0,
          }}>
            Products we use in the room, available to take home.
          </p>
        </div>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#8C7B6E',
        }}>
          Drag to explore →
        </p>
      </div>

      {/* Draggable product strip */}
      <motion.div
        ref={dragRef}
        drag="x"
        dragConstraints={{ right: 0, left: leftConstraint }}
        dragElastic={0.1}
        dragMomentum={true}
        style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
          cursor: 'grab',
        }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            onHoverStart={() => setHoveredId(product.id)}
            onHoverEnd={() => setHoveredId(null)}
            animate={{
              y: hoveredId === product.id ? -8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              width: '260px',
              height: '380px',
              flexShrink: 0,
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden',
              backgroundColor: '#2C2420',
            }}
          >
            {/* Product image */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(28,24,20,0.95) 0%, rgba(28,24,20,0.3) 50%, transparent 100%)',
            }} />

            {/* Product info */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '24px',
            }}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8C7B6E',
                margin: '0 0 6px 0',
              }}>
                {product.brand}
              </p>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: '20px',
                color: '#F7F3EE',
                margin: '0 0 8px 0',
                lineHeight: 1.2,
              }}>
                {product.name}
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: '#B5623E',
                margin: '0 0 16px 0',
              }}>
                {product.price}
              </p>

              {/* Add to Bag button — appears on hover */}
              <motion.div
                animate={{
                  opacity: hoveredId === product.id ? 1 : 0,
                  y: hoveredId === product.id ? 0 : 8,
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  border: '1px solid rgba(247,243,238,0.3)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#F7F3EE',
                  cursor: 'pointer',
                }}
              >
                Add to Bag
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
