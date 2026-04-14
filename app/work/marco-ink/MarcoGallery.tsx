'use client'

import InteractiveBentoGallery from '@/components/blocks/interactive-bento-gallery'

const mediaItems = [
  {
    id: 1,
    type: 'image',
    title: 'Black & Grey',
    desc: 'Portrait realism, Astoria 2024',
    url: 'https://images.unsplash.com/photo-1562962230-16ae0034af9a?auto=format&fit=crop&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Fine Line',
    desc: 'Botanical study, inner arm',
    url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800',
    span: 'md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Blackwork',
    desc: 'Geometric sleeve detail',
    url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Realism',
    desc: 'Black & grey, upper arm',
    url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 5,
    type: 'image',
    title: 'Fine Line Portrait',
    desc: 'Delicate line work, forearm',
    url: 'https://images.unsplash.com/photo-1547619292-240d702bef6a?auto=format&fit=crop&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 6,
    type: 'image',
    title: 'Dotwork',
    desc: 'Mandala back piece, 3 sessions',
    url: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=800',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 7,
    type: 'image',
    title: 'Custom Flash',
    desc: 'One-of-one, never repeated',
    url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
]

export function MarcoGallery() {
  return (
    <section id="work" className="bg-black py-16">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Check out my work."
      />
    </section>
  )
}
