import ImmersiveScrollGallery from '@/components/ImmersiveScrollGallery'
import NameBanner from './NameBanner'
import StephenYangHeader from './StephenYangHeader'
import StephenYangGallery from './StephenYangGallery'

export const metadata = {
  title: 'Stephen Yang — Fine Art Photography',
  description: 'Stephen Yang is a fine art photographer and visual artist based in New York.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=2400&q=100' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=90' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&q=90', imgClass: 'object-[50%_30%]' },
  { src: 'https://images.unsplash.com/photo-1733131404035-9bc3b0e6a5ee?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

export default function StephenYangPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen" style={serif}>

      {/* Minimal navbar */}
      <StephenYangHeader />

      {/* Immersive scroll gallery */}
      <div id="gallery-section" className="bg-[#0a0a0a]">
        <ImmersiveScrollGallery images={galleryImages} />
      </div>

      {/* Full-bleed typographic name banner */}
      <div id="name-banner">
        <NameBanner />
      </div>

      {/* Selected works — 3-column masonry with hover title/year */}
      <StephenYangGallery />

      {/* Bio + Portrait */}
      <section className="bg-[#0a0a0a] px-8 md:px-16 py-24 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <p
            className="text-white font-thin text-xl md:text-2xl leading-relaxed"
            style={{ ...serif, lineHeight: 1.7 }}
          >
            Stephen Yang is a fine art photographer based in New York. His practice spans landscape,
            portraiture, and architectural work, with a focus on light and duration. He has shown at
            galleries in New York, Berlin, and Seoul. His first monograph, <em>Aperture</em>, was
            published in 2022.
          </p>
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1633177188754-980c2a6b6266?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Stephen Yang"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer — email left, credit right */}
      <footer className="bg-[#0a0a0a] px-8 md:px-16 py-8 border-t border-white/10 flex items-center justify-between">
        <a
          href="mailto:hello@stephenyang.com"
          className="text-white/50 font-thin text-sm no-underline hover:text-white transition-colors duration-300"
          style={serif}
        >
          hello@stephenyang.com
        </a>
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
