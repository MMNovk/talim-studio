import Image from 'next/image'

export const metadata = {
  title: 'Drift Creative — Art Direction & Graphic Design, New York',
  description: 'Drift is the studio of Alex Mora, an art director and graphic designer based in New York.',
}

const projects = [
  { title: 'Kova Coffee', category: 'Branding', id: 'photo-1558618666-fcd25c85cd64' },
  { title: 'Lune Magazine', category: 'Editorial', id: 'photo-1561070791-2526d30994b5' },
  { title: 'Aether Skincare', category: 'Identity', id: 'photo-1626785774573-4b799315345d' },
  { title: 'Nordvik Type', category: 'Typography', id: 'photo-1636761313099-a34c1dfb77e9' },
  { title: 'Form Studio', category: 'Art Direction', id: 'photo-1558618047-3c8c76ca7d2a' },
  { title: 'Drift Annual', category: 'Print', id: 'photo-1609921212029-bb5a28e60960' },
]

const terracotta = '#C0654A'

export default function DriftCreativePage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Top bar */}
      <header className="px-8 py-6 border-b border-ink/10">
        <span className="font-black text-ink text-lg tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
          DRIFT
        </span>
      </header>

      {/* Hero — typographic, no image */}
      <section className="px-8 md:px-16 pt-16 pb-20">
        <h1
          className="font-black leading-none text-ink"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(6rem, 20vw, 18rem)',
          }}
        >
          DRIFT
        </h1>
        <p
          className="mt-4 text-base md:text-lg font-medium"
          style={{ color: terracotta }}
        >
          Art direction &amp; graphic design
        </p>
      </section>

      {/* Selected work grid */}
      <section className="px-8 md:px-16 py-20 border-t border-ink/10">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          SELECTED WORK
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                <Image
                  src={`https://images.unsplash.com/${project.id}?w=800&q=80`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <h3
                  className="font-bold text-ink text-base"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {project.title}
                </h3>
                <span className="text-xs font-medium" style={{ color: terracotta }}>
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-8 md:px-16 py-20 bg-paper">
        <div className="max-w-xl">
          <h2
            className="font-black text-ink text-2xl md:text-3xl mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            About Drift.
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Drift is the studio of Alex Mora, an art director and graphic designer based in New York. Clients include independent brands, publishers, and studios looking for work that means something.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-8 md:px-16 py-20">
        <h2
          className="font-black text-ink text-2xl md:text-3xl mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Got a project? Let&rsquo;s talk.
        </h2>
        <p className="text-ink/50 text-sm mb-8">
          hello@driftcreative.co
        </p>
        <a href="mailto:hello@driftcreative.co" className="w-fit flex items-center gap-3 group no-underline">
          <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-ink group-hover:stroke-white transition-colors duration-500">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-bold text-ink">Send an email</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 border-t border-ink/10">
        <a
          href="https://talimstudio.com"
          className="text-xs text-ink/40 no-underline hover:text-ink/60 transition-colors"
        >
          Built by Talim Studio →
        </a>
      </footer>

    </div>
  )
}
