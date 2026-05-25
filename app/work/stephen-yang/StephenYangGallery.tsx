'use client'

import { useRef } from 'react'
import { useInView } from 'motion/react'
import Image from 'next/image'

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

type Size = 'normal' | 'tall' | 'wide'

type Photo = {
  src: string
  title: string
  year: string
  size?: Size
  alt?: string
}

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="

// Array order is deliberate: with CSS dense auto-placement these 16 items fill
// a 3-col × 7-row grid with zero gaps.
const photos: Photo[] = [
  // Row 1 top
  { src: 'https://images.unsplash.com/photo-1697810694395-09755be017e1?w=1200&q=80', title: 'Coastal Aerial', year: '2024', size: 'wide' },
  { src: 'https://images.unsplash.com/photo-1553485580-4ffd03ed5ea1?w=800&q=80', title: 'Shore Study', year: '2024' },
  // Row 2–3
  { src: 'https://images.pexels.com/photos/28447599/pexels-photo-28447599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Alpine Study', year: '2024', size: 'tall', alt: 'Tokyo street at night' },
  { src: 'https://images.unsplash.com/photo-1514824068966-23f7d658a8b9?w=800&q=80', title: 'Passage', year: '2023' },
  { src: 'https://images.pexels.com/photos/4344753/pexels-photo-4344753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Signal', year: '2023', alt: 'Shinjuku empty street, wet pavement' },
  { src: 'https://images.pexels.com/photos/31161580/pexels-photo-31161580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Dawn Study', year: '2023', size: 'wide', alt: 'Modern urban architecture at night' },
  // Row 4
  { src: 'https://images.unsplash.com/photo-1642383942262-eda4be3f030e?w=800&q=80', title: 'Exposed', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1598084331228-71bd91b70e59?w=800&q=80', title: 'Aperture II', year: '2022' },
  { src: 'https://images.pexels.com/photos/30642656/pexels-photo-30642656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'High Country', year: '2022', alt: 'Black and white urban night walk' },
  // Row 5–6
  { src: 'https://images.pexels.com/photos/30315841/pexels-photo-30315841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Still Water', year: '2022', alt: 'Rainy street at night' },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80', title: 'Amber Valley', year: '2021' },
  { src: 'https://images.pexels.com/photos/2458127/pexels-photo-2458127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Forest Interior', year: '2021', size: 'tall', alt: 'Industrial site at night, glowing light' },
  { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200&q=80', title: 'Horizon Line', year: '2021', size: 'wide' },
  // Row 7
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', title: 'Open Road', year: '2020' },
  { src: 'https://images.pexels.com/photos/10493305/pexels-photo-10493305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Fog Study', year: '2020', alt: 'Ground-level city night reflections' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', title: 'Night Passage', year: '2019' },
]

function GalleryItem({ src, title, year, size = 'normal', delay = 0, alt: altProp, priority = false }: Photo & { delay?: number; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  const spanClass = size === 'tall' ? 'row-span-2' : size === 'wide' ? 'col-span-2' : ''
  const altText = altProp ?? title

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
      {priority && src.includes('unsplash.com') ? (
        <Image
          src={src}
          alt={altText}
          fill
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      ) : (
        <img
          src={src}
          alt={altText}
          className="w-full h-full object-cover"
          {...(priority ? { fetchPriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement> : { loading: 'lazy' })}
        />
      )}
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
          <GalleryItem key={photo.title} {...photo} delay={i * 60} priority={i < 4} />
        ))}
      </div>
    </section>
  )
}

