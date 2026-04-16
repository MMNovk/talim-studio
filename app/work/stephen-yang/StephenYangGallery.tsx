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

const photos: Photo[] = [
  // tall → spans 2 rows; wide → spans 2 cols; normal → 1×1
  { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80', title: 'Alpine Study', year: '2024', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1697810694395-09755be017e1?w=1200&q=80', title: 'Coastal Aerial', year: '2024', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1553485580-4ffd03ed5ea1?w=800&q=80', title: 'Shore Study', year: '2024', size: 'normal' },
  { src: 'https://picsum.photos/seed/20/800/1000', title: 'Altitude Study I', year: '2023', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1620760585223-bfe4c8ece4be?w=800&q=80', title: 'Dawn Study', year: '2023', size: 'tall' },
  { src: 'https://picsum.photos/seed/22/1200/700', title: 'High Pass, 3am', year: '2023', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1642383942262-eda4be3f030e?w=800&q=80', title: 'Exposed', year: '2022', size: 'normal' },
  { src: 'https://images.unsplash.com/photo-1598084331228-71bd91b70e59?w=800&q=80', title: 'Aperture II', year: '2022', size: 'normal' },
  { src: 'https://picsum.photos/seed/24/800/1000', title: 'Urban Fragment', year: '2022', size: 'normal' },
  { src: 'https://picsum.photos/seed/25/1200/700', title: 'Horizon Line', year: '2022', size: 'wide' },
  { src: 'https://picsum.photos/seed/26/800/1000', title: 'Open Country', year: '2021', size: 'tall' },
  { src: 'https://picsum.photos/seed/27/800/800', title: 'Salt Flats', year: '2021', size: 'normal' },
  { src: 'https://picsum.photos/seed/28/800/800', title: 'Evening', year: '2020', size: 'normal' },
  { src: 'https://picsum.photos/seed/29/1200/700', title: 'Blue Hour', year: '2020', size: 'wide' },
]

function GalleryItem({ src, title, year, size = 'normal', delay = 0 }: Photo & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div
      ref={ref}
      className="relative group overflow-hidden"
      style={{
        gridRow: size === 'tall' ? 'span 2' : 'span 1',
        gridColumn: size === 'wide' ? 'span 2' : 'span 1',
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
