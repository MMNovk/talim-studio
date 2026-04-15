'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const photos = [
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', title: 'Altitude Study I', year: '2023' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', title: 'Portrait, Unknown', year: '2023' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', title: 'High Pass, 3am', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', title: 'Horizon Line', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', title: 'Aerial Study IV', year: '2021' },
  { src: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=800&q=80', title: 'Open Country', year: '2021' },
]

// Distribute across 3 columns
const columns: (typeof photos[number])[][] = [[], [], []]
photos.forEach((photo, i) => columns[i % 3].push(photo))

function GalleryItem({ src, title, year }: { src: string; title: string; year: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div
      ref={ref}
      className="relative group overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />
      {/* Title + year — bottom left, appears on hover */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4">
            {col.map(({ src, title, year }) => (
              <GalleryItem key={title} src={src} title={title} year={year} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
