'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const photos = [
  { src: 'https://picsum.photos/seed/10/600/900', title: 'Morning Study', year: '2024' },
  { src: 'https://picsum.photos/seed/11/600/900', title: 'Portrait, Unnamed', year: '2024' },
  { src: 'https://picsum.photos/seed/12/600/900', title: 'Coastal Light', year: '2024' },
  { src: 'https://picsum.photos/seed/13/600/900', title: 'High Pass', year: '2023' },
  { src: 'https://picsum.photos/seed/14/600/900', title: 'Altitude Study II', year: '2023' },
  { src: 'https://picsum.photos/seed/15/600/900', title: 'Open Water', year: '2023' },
  { src: 'https://picsum.photos/seed/16/600/900', title: 'Evening, Exposed', year: '2023' },
  { src: 'https://picsum.photos/seed/17/600/900', title: 'Still Life No. 4', year: '2023' },
  { src: 'https://picsum.photos/seed/18/600/900', title: 'Urban Negative', year: '2022' },
  { src: 'https://picsum.photos/seed/19/600/900', title: 'Long Exposure', year: '2022' },
  { src: 'https://picsum.photos/seed/20/600/900', title: 'Horizon Study', year: '2022' },
  { src: 'https://picsum.photos/seed/21/600/900', title: 'Figure in Light', year: '2022' },
  { src: 'https://picsum.photos/seed/22/600/900', title: 'Aerial Study III', year: '2022' },
  { src: 'https://picsum.photos/seed/23/600/900', title: 'Forest, Morning', year: '2021' },
  { src: 'https://picsum.photos/seed/24/600/900', title: 'Salt Flats', year: '2021' },
  { src: 'https://picsum.photos/seed/25/600/900', title: 'Dusk Study', year: '2021' },
  { src: 'https://picsum.photos/seed/26/600/900', title: 'Interior No. 2', year: '2021' },
  { src: 'https://picsum.photos/seed/27/600/900', title: 'Rain Study', year: '2021' },
  { src: 'https://picsum.photos/seed/28/600/900', title: 'Blue Hour', year: '2020' },
  { src: 'https://picsum.photos/seed/29/600/900', title: 'Still Life No. 7', year: '2020' },
  { src: 'https://picsum.photos/seed/30/600/900', title: 'Portrait, Winter', year: '2020' },
  { src: 'https://picsum.photos/seed/31/600/900', title: 'Mountain Pass', year: '2020' },
  { src: 'https://picsum.photos/seed/32/600/900', title: 'Negative Space', year: '2020' },
  { src: 'https://picsum.photos/seed/33/600/900', title: 'Shoreline', year: '2019' },
  { src: 'https://picsum.photos/seed/34/600/900', title: 'Low Tide', year: '2019' },
  { src: 'https://picsum.photos/seed/35/600/900', title: 'Aperture Study', year: '2019' },
  { src: 'https://picsum.photos/seed/36/600/900', title: 'Grain', year: '2019' },
  { src: 'https://picsum.photos/seed/37/600/900', title: 'Threshold', year: '2019' },
  { src: 'https://picsum.photos/seed/38/600/900', title: 'Soft Focus', year: '2018' },
  { src: 'https://picsum.photos/seed/39/600/900', title: 'Late Light', year: '2018' },
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
