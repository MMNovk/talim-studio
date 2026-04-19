'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

type Size = 'normal' | 'tall' | 'wide'

type Photo = {
  src: string
  title: string
  year: string
  size?: Size
}

// Array order is deliberate: with CSS dense auto-placement these 16 items fill
// a 3-col × 7-row grid with zero gaps.
// Layout:
//   Row 1: [wide 1-2] [normal 3]
//   Row 2: [tall 1 rows2-3] [normal 2] [normal 3]
//   Row 3: [tall cont.] [wide 2-3]
//   Row 4: [normal] [normal] [normal]
//   Row 5: [normal] [normal] [tall 3 rows5-6]
//   Row 6: [wide 1-2] [tall cont.]
//   Row 7: [normal] [normal] [normal]
const photos: Photo[] = [
  // Row 1 top
  { src: 'https://images.unsplash.com/photo-1697810694395-09755be017e1?w=1200&q=80', title: 'Coastal Aerial', year: '2024', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1553485580-4ffd03ed5ea1?w=800&q=80', title: 'Shore Study', year: '2024' },
  // Row 2–3
  { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80', title: 'Alpine Study', year: '2024', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1514824068966-23f7d658a8b9?w=800&q=80', title: 'Passage', year: '2023' },
  { src: 'https://images.unsplash.com/photo-1571164890821-dd30a1f9180d?w=800&q=80', title: 'Signal', year: '2023' },
  { src: 'https://images.unsplash.com/photo-1620760585223-bfe4c8ece4be?w=1200&q=80', title: 'Dawn Study', year: '2023', size: 'wide' },
  // Row 4
  { src: 'https://images.unsplash.com/photo-1642383942262-eda4be3f030e?w=800&q=80', title: 'Exposed', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1598084331228-71bd91b70e59?w=800&q=80', title: 'Aperture II', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', title: 'High Country', year: '2022' },
  // Row 5–6
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', title: 'Still Water', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80', title: 'Amber Valley', year: '2021' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', title: 'Forest Interior', year: '2021', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80', title: 'Horizon Line', year: '2021', size: 'wide' },
  // Row 7
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', title: 'Open Road', year: '2020' },
  { src: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800&q=80', title: 'Fog Study', year: '2020' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', title: 'Night Passage', year: '2019' },
]

function GalleryItem({ src, title, year, size = 'normal', delay = 0 }: Photo & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  const spanClass = size === 'tall' ? 'row-span-2' : size === 'wide' ? 'col-span-2' : ''

  return (
    <div
      ref={ref}
      className={`relative group overflow-hidden ${spanClass}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white font-thin text-sm leading-snug" style={serif}>{title}</p>
        <p className="text-white/60 text-xs mt-0.5">{year}</p>
      </div>
    </div>
  )
}

export default function StephenYangGallery() {
  return (
    <section className="bg-[#0a0a0a] px-8 md:px-16 py-32">
      <p className="text-[#666] text-xs tracking-[0.2em] uppercase mb-16">Selected Works</p>
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-3"
        style={{ gridAutoRows: '260px', gridAutoFlow: 'dense' }}
      >
        {photos.map((photo, i) => (
          <GalleryItem key={photo.title} {...photo} delay={i * 60} />
        ))}
      </div>
    </section>
  )
}
