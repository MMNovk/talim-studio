'use client'

import InteractiveBentoGallery from '@/components/blocks/interactive-bento-gallery'

const mediaItems = [
  {
    id: 1,
    type: 'image',
    title: 'Black & Grey',
    desc: 'Portrait realism, Astoria 2024',
    url: 'https://images.pexels.com/photos/4125666/pexels-photo-4125666.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Fine Line',
    desc: 'Botanical study, inner arm',
    url: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Blackwork',
    desc: 'Geometric sleeve detail',
    url: 'https://images.pexels.com/photos/4125672/pexels-photo-4125672.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'The Process',
    desc: 'Mid-session, ribcage piece',
    url: 'https://images.pexels.com/photos/5432021/pexels-photo-5432021.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 5,
    type: 'image',
    title: 'Portrait',
    desc: 'Black & grey realism, forearm',
    url: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 6,
    type: 'image',
    title: 'Dotwork',
    desc: 'Mandala back piece, 3 sessions',
    url: 'https://images.pexels.com/photos/4125671/pexels-photo-4125671.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 7,
    type: 'image',
    title: 'Custom Flash',
    desc: 'One-of-one, never repeated',
    url: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
]

export function MarcoGallery() {
  return (
    <section id="work" className="bg-black py-16">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Check out my work."
        description="Black & grey · Blackwork · Fine line — click to explore"
      />
    </section>
  )
}
