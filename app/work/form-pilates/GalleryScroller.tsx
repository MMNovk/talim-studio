'use client'

import { DraggableContainer, GridBody, GridItem } from '@/components/ui/infinite-drag-scroll'

const images = [
  { id: 1,  alt: "Facial treatment", src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { id: 2,  alt: "Skin care",        src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80" },
  { id: 3,  alt: "LED therapy",      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80" },
  { id: 4,  alt: "Gua sha",          src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  { id: 5,  alt: "Facial massage",   src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80" },
  { id: 6,  alt: "Microneedling",    src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
  { id: 7,  alt: "Skin treatment",   src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
  { id: 8,  alt: "Beauty ritual",    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80" },
  { id: 9,  alt: "Clean skin",       src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&q=80" },
  { id: 10, alt: "Face mask",        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
  { id: 11, alt: "Spa treatment",    src: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80" },
  { id: 12, alt: "Skin glow",        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { id: 13, alt: "Face care",        src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80" },
  { id: 14, alt: "Hydrafacial",      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80" },
  { id: 15, alt: "Ritual",           src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  { id: 16, alt: "Glow treatment",   src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80" },
  { id: 17, alt: "Studio",           src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80" },
  { id: 18, alt: "Clarté",           src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
]

export function GalleryScroller() {
  return (
    <section style={{ backgroundColor: '#F7F3EE' }}>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: '#8C7B6E',
        padding: '64px 64px 32px',
      }}>
        Our Work
      </p>
      <DraggableContainer variant="masonry">
        <GridBody>
          {images.map((image) => (
            <GridItem
              key={image.id}
              className="relative h-54 w-36 md:h-96 md:w-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="pointer-events-none absolute h-full w-full object-cover"
              />
            </GridItem>
          ))}
        </GridBody>
      </DraggableContainer>
    </section>
  )
}
