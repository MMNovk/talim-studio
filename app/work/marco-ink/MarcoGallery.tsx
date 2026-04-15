'use client'

import InteractiveBentoGallery from '@/components/blocks/interactive-bento-gallery'

const mediaItems = [
  {
    id: 1,
    type: 'image',
    title: 'Black & Grey',
    desc: 'Portrait realism, Astoria 2024',
    url: 'https://images.unsplash.com/photo-1648421831863-1f608a20625a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'image',
    title: 'Blackwork',
    desc: 'Bold blackwork, chest piece',
    url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800',
    span: 'md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Fine Line',
    desc: 'Delicate line work, forearm',
    url: 'https://images.unsplash.com/photo-1561377455-190afb395ed7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Realism',
    desc: 'Black & grey realism, upper arm',
    url: 'https://images.unsplash.com/photo-1712027858638-8ab98bd7ca50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 5,
    type: 'image',
    title: 'Fine Line Portrait',
    desc: 'Fine line portrait, inner arm',
    url: 'https://images.unsplash.com/photo-1656016977634-54a275682d17?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 6,
    type: 'image',
    title: 'Dotwork',
    desc: 'Mandala back piece, 3 sessions',
    url: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 7,
    type: 'image',
    title: 'Custom Flash',
    desc: 'One-of-one, never repeated',
    url: 'https://images.unsplash.com/photo-1770112035323-b8da0cdefa00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
