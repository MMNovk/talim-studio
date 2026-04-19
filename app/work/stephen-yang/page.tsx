import ImmersiveScrollGallery from '@/components/ImmersiveScrollGallery'
import StephenYangGallery from './StephenYangGallery'
import BioContact from './BioContact'

export const metadata = {
  title: 'Stephen Yang — Fine Art Photography',
  description: 'Stephen Yang is a fine art photographer and visual artist based in New York.',
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=85&w=2000&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1553485580-4ffd03ed5ea1?q=85&w=2000&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1697810694395-09755be017e1?q=85&w=2000&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1598084331228-71bd91b70e59?q=85&w=2000&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1642383942262-eda4be3f030e?q=85&w=2000&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1620760585223-bfe4c8ece4be?q=85&w=2000&auto=format&fit=crop' },
]

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }

const stephenYangReveal = (
  <div className="w-full px-8">
    <h2
      className="text-white font-black uppercase leading-none tracking-tight whitespace-nowrap w-full block"
      style={{ fontSize: 'clamp(3rem, 11vw, 10rem)', letterSpacing: '-0.02em', fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      STEPHEN YANG
    </h2>
    <p className="text-[#666] text-sm mt-6 tracking-widest" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      New York · Fine Art Photography · Est. 2019
    </p>
  </div>
)

export default function StephenYangPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen" style={serif}>

      {/* Immersive scroll gallery — zooms into STEPHEN YANG */}
      <div id="gallery-section" className="bg-[#0a0a0a]">
        <ImmersiveScrollGallery images={galleryImages} revealContent={stephenYangReveal} />
      </div>

      {/* Selected works — 3-column masonry with hover title/year */}
      <StephenYangGallery />

      {/* Bio + Portrait + Contact */}
      <section className="bg-[#0a0a0a] px-8 md:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <p
            className="text-white font-thin text-xl md:text-2xl leading-relaxed"
            style={{ ...serif, lineHeight: 1.7 }}
          >
            Stephen Yang is a fine art photographer based in New York. He began shooting
            professionally in the early 2010s after studying visual arts at Columbia, initially
            documenting the built environment before the work turned inward — toward light,
            duration, and the uncanny stillness of inhabited spaces.
            <br /><br />
            His practice now spans landscape, portraiture, and architectural work. He has
            exhibited at galleries in New York, Berlin, and Seoul, and his images have appeared
            in <em>The New York Times Magazine</em>, <em>Aperture</em>, and <em>Foam</em>.
            His first monograph, <em>Aperture</em>, was published in 2022 by Steidl.
            <br /><br />
            He teaches at ICP New York and leads annual workshops in Iceland and Japan.
            His archive, dating to 2008, is an ongoing document of cities and people
            caught at the threshold of motion.
          </p>
          <BioContact />
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
