import ImmersiveScrollGallery from '@/components/ImmersiveScrollGallery'
import NameBanner from './NameBanner'
import StephenYangHeader from './StephenYangHeader'

export const metadata = {
  title: 'Stephen Yang — Fine Art Photography',
  description: 'Stephen Yang is a fine art photographer and visual artist based in New York.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1400&q=90' },
]

const selectedWorks = [
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', title: 'Altitude Study I', year: '2023' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', title: 'Portrait, Unknown', year: '2023' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', title: 'High Pass, 3am', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', title: 'Horizon Line', year: '2022' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', title: 'Aerial Study IV', year: '2021' },
  { src: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=800&q=80', title: 'Open Country', year: '2021' },
]

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export default function StephenYangPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen" style={serif}>

      {/* Minimal navbar — hides while gallery is in view */}
      <StephenYangHeader />

      {/* Immersive scroll gallery */}
      <div id="gallery-section" className="bg-[#0a0a0a]">
        <ImmersiveScrollGallery images={galleryImages} />
      </div>

      {/* Full-bleed typographic name banner */}
      <NameBanner />

      {/* Selected works */}
      <section className="bg-[#0a0a0a] px-8 md:px-16 py-32">
        <p className="text-[#666] text-xs tracking-[0.2em] uppercase mb-16">Selected Works</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 max-md:grid-cols-1">
          {selectedWorks.map(({ src, title, year }) => (
            <div key={title}>
              <div className="relative w-full aspect-[3/2] overflow-hidden mb-4">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <p className="text-white font-thin text-sm" style={serif}>{title}</p>
              <p className="text-[#666] text-xs mt-0.5">{year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="bg-[#0a0a0a] px-8 md:px-16 py-24 border-t border-white/10">
        <p
          className="text-white font-thin text-xl md:text-2xl leading-relaxed max-w-2xl"
          style={{ ...serif, lineHeight: 1.7 }}
        >
          Stephen Yang is a fine art photographer based in New York. His practice spans landscape,
          portraiture, and architectural work, with a focus on light and duration. He has shown at
          galleries in New York, Berlin, and Seoul. His first monograph, <em>Aperture</em>, was
          published in 2022.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-[#0a0a0a] px-8 py-24 flex justify-center border-t border-white/10">
        <a
          href="mailto:hello@stephenyang.com"
          className="text-white font-thin text-base tracking-widest no-underline hover:text-[#666] transition-colors duration-300"
          style={serif}
        >
          hello@stephenyang.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] px-8 py-8 border-t border-white/10 flex justify-center">
        <a
          href="https://talimstudio.com"
          className="text-[#444] text-xs no-underline hover:text-[#666] transition-colors duration-300"
          style={serif}
        >
          Built by Talim Studio →
        </a>
      </footer>

    </div>
  )
}
