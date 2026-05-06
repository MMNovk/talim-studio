'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const products = [
  {
    id: 1,
    brand: 'Augustinus Bader',
    name: 'The Cream',
    price: '$265',
    note: 'Our most-recommended moisturizer.',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop&q=90',
  },
  {
    id: 2,
    brand: 'Biologique Recherche',
    name: 'Lotion P50',
    price: '$68',
    note: 'The cult exfoliant we use on almost everyone.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop&q=90',
  },
  {
    id: 3,
    brand: "Vintner's Daughter",
    name: 'Active Botanical Serum',
    price: '$295',
    note: '22 active botanicals. Nothing unnecessary.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop&q=90',
  },
  {
    id: 4,
    brand: 'Tatcha',
    name: 'The Water Cream',
    price: '$72',
    note: 'Weightless hydration for every skin type.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop&q=90',
  },
  {
    id: 5,
    brand: 'Luzern',
    name: 'Sérum Absolut',
    price: '$180',
    note: 'Swiss alpine actives for deep repair.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&h=800&fit=crop&q=90',
  },
  {
    id: 6,
    brand: 'Dr. Barbara Sturm',
    name: 'Face Cream',
    price: '$320',
    note: 'Anti-inflammatory. Visibly transformative.',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=800&fit=crop&q=90',
  },
]

export function ProductGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section style={{
      backgroundColor: '#F7F3EE',
      padding: '80px 64px',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
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
          color: '#1C1814',
          margin: 0,
        }}>
          Products we use in the room, available to take home.
        </p>
      </div>

      {/* Gallery */}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: '8px',
        height: '480px',
        width: '100%',
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: 'relative',
              flexGrow: hoveredId === product.id ? 4 : 1,
              flexShrink: 1,
              flexBasis: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'flex-grow 500ms ease',
              cursor: 'pointer',
            }}
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
              draggable={false}
            />

            {/* Dark gradient overlay — always present */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(28,24,20,0.92) 0%, rgba(28,24,20,0.2) 60%, transparent 100%)',
            }} />

            {/* Product info — always visible at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px',
            }}>
              {/* Brand — always visible */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#8C7B6E',
                margin: '0 0 4px 0',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {product.brand}
              </p>

              {/* Name — always visible */}
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: hoveredId === product.id ? '22px' : '14px',
                color: '#F7F3EE',
                margin: '0 0 4px 0',
                lineHeight: 1.2,
                transition: 'font-size 300ms ease',
                whiteSpace: hoveredId === product.id ? 'normal' : 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {product.name}
              </p>

              {/* Price — always visible */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: '#B5623E',
                margin: 0,
              }}>
                {product.price}
              </p>

              {/* Note + button — only on hover */}
              <AnimatePresence>
                {hoveredId === product.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ marginTop: '12px' }}
                  >
                    <p style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 300,
                      fontSize: '12px',
                      color: 'rgba(247,243,238,0.7)',
                      margin: '0 0 16px 0',
                      lineHeight: 1.6,
                    }}>
                      {product.note}
                    </p>
                    <div style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      border: '1px solid rgba(247,243,238,0.3)',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#F7F3EE',
                    }}>
                      Add to Bag
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
