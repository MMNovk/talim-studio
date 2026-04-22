'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider-horizontal'
import Image from 'next/image'

const galleryImages = [
  { title: 'Treatment 1', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 2', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 3', image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 4', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 5', image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 6', image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 7', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop&q=80' },
  { title: 'Treatment 8', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=80' },
]

export function GalleryScroller() {
  return (
    <section style={{ backgroundColor: '#F7F3EE', padding: '80px 0' }}>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: '#8C7B6E',
        paddingLeft: '64px',
        marginBottom: '40px',
      }}>
        Our Work
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <InfiniteSlider direction="horizontal" duration={40}>
          {galleryImages.map((image) => (
            <div key={image.title} style={{ width: '280px', height: '200px', borderRadius: '2px', overflow: 'hidden', flexShrink: 0 }}>
              <Image
                src={image.image}
                alt={image.title}
                width={400}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </InfiniteSlider>
        <InfiniteSlider direction="horizontal" duration={40} reverse>
          {galleryImages.map((image) => (
            <div key={image.title + '-reverse'} style={{ width: '280px', height: '200px', borderRadius: '2px', overflow: 'hidden', flexShrink: 0 }}>
              <Image
                src={image.image}
                alt={image.title}
                width={400}
                height={400}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}
