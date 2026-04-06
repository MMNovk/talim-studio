'use client'

import ScrollReveal from './ScrollReveal'
import { RadialScrollGallery } from './RadialScrollGallery'

/* Placeholder images — kept as-is */
const IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&q=80',
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
]

function GalleryCard({ src }: { src: string }) {
  return (
    <div className="w-[180px] h-[180px] md:w-[230px] md:h-[230px] rounded-2xl overflow-hidden shadow-lg">
      <img src={src} alt="Portfolio item" className="w-full h-full object-cover" />
    </div>
  )
}

export default function Work() {
  return (
    <section className="bg-white" id="work">
      {/* Section header */}
      <div className="px-12 pt-[120px] pb-4 max-md:px-6">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-ink-3 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-ink-3">
            Check out our work
          </p>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <h2 className="font-syne font-black text-[clamp(52px,8vw,108px)] leading-[0.9] tracking-tighter text-ink mt-4">
            Portfolio
          </h2>
        </ScrollReveal>
      </div>

      {/* Radial gallery — component handles bottom fade-to-white via mask gradient */}
      <RadialScrollGallery
        baseRadius={550}
        mobileRadius={220}
        scrollDuration={2500}
        visiblePercentage={45}
        className="bg-white"
      >
        {() => IMAGES.map((src, i) => <GalleryCard key={i} src={src} />)}
      </RadialScrollGallery>
    </section>
  )
}
