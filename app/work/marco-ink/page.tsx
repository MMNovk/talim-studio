import { MarcoHero } from './MarcoHero'
import { MarcoAbout } from './MarcoAbout'
import { MarcoGallery } from './MarcoGallery'

export const metadata = {
  title: 'Marco Miller — Tattoo Artist, Astoria Queens',
  description: 'Custom black and grey realism, blackwork, and fine line tattoos. Private studio on 31st Ave, Astoria, NY. Walk-ins welcome.',
}

export default function MarcoInkPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* SECTION 1 — Hero */}
      <MarcoHero />

      {/* SECTION 2 — About (parallax) */}
      <MarcoAbout />

      {/* SECTION 3 — Gallery (kinetic scroll) */}
      <MarcoGallery />

      {/* SECTION 4 — Contact / Booking */}
      <section id="contact" className="bg-neutral-950 py-32 px-8 md:px-16">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-white font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Like what you see?
          </h2>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Fill out the form and I&rsquo;ll get back to you within 48 hours.
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Describe what you're thinking — style, size, placement, references"
              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors resize-none"
            />
            <input
              type="text"
              placeholder="Instagram handle or phone number"
              className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 px-5 py-4 text-sm focus:border-white focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors mt-2"
            >
              Book a Consultation
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 5 — Footer */}
      <footer className="bg-black border-t border-neutral-900 py-8 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="sm:text-left text-center">
            <p className="text-white font-bold text-sm tracking-widest uppercase">Marco Miller</p>
            <p className="text-neutral-600 text-xs font-mono mt-0.5">Astoria, Queens, NY</p>
          </div>
          <p className="text-neutral-700 text-xs text-center">
            &copy; 2025 Marco Miller. All rights reserved.
          </p>
          <a
            href="/"
            className="text-neutral-600 text-sm no-underline hover:text-white transition-colors sm:text-right text-center"
          >
            ← Back to Talim Studio
          </a>
        </div>
      </footer>

    </div>
  )
}
