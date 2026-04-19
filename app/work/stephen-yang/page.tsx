import ImmersiveScrollGallery from '@/components/ImmersiveScrollGallery'
import NameBanner from './NameBanner'
import StephenYangGallery from './StephenYangGallery'
import StephenYangContact from './StephenYangContact'

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

export default function StephenYangPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen" style={serif}>

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

      {/* Immersive portrait zoom → contact form */}
      <StephenYangContact />

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
