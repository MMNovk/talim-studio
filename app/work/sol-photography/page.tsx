import Image from 'next/image'

export const metadata = {
  title: 'Sol Photography — Portraits, Events & Editorial, NYC',
  description: 'Freelance photographer based in NYC. Portraits from $350, events from $800, editorial from $500.',
}

const workGrid = [
  'photo-1531746020798-e6953c6e8e04',
  'photo-1524504388940-b1c1722653e1',
  'photo-1534528741775-53994a69daeb',
  'photo-1531746020798-e6953c6e8e04',
  'photo-1513956589380-bad6acb9b9d4',
  'photo-1541516160071-4bb0c5af65ba',
  'photo-1506794778202-cad84cf45f1d',
  'photo-1517841905240-472988babdf9',
  'photo-1524504388940-b1c1722653e1',
]

export default function SolPhotographyPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Top bar */}
      <header className="px-8 py-6 border-b border-ink/10 absolute top-0 left-0 right-0 z-10">
        <span className="font-black text-white text-lg tracking-wide mix-blend-difference" style={{ fontFamily: 'Syne, sans-serif' }}>
          SOL PHOTOGRAPHY
        </span>
      </header>

      {/* Hero full-bleed */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80"
          alt="Sol Photography hero"
          fill
          className="object-cover"
          loading="lazy"
          priority
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute bottom-12 left-8 md:left-12">
          <h1
            className="text-white font-black leading-none"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
            }}
          >
            SOL<br />PHOTOGRAPHY
          </h1>
        </div>
      </section>

      {/* Services */}
      <section className="px-8 md:px-16 py-20">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          SERVICES
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {[
            { name: 'Portraits', price: 'from $350', desc: 'Individual and couples sessions, natural light preferred.' },
            { name: 'Events', price: 'from $800', desc: 'Full coverage for launches, openings, and private gatherings.' },
            { name: 'Editorial', price: 'from $500', desc: 'Creative direction and photography for publications and brands.' },
          ].map((svc) => (
            <div key={svc.name} className="border-t border-ink/20 pt-6">
              <div className="flex justify-between items-baseline mb-3">
                <h3
                  className="font-black text-ink text-lg"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {svc.name}
                </h3>
                <span className="text-sm text-ink/40">{svc.price}</span>
              </div>
              <p className="text-sm text-ink/60 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work grid */}
      <section className="px-8 md:px-16 pb-20">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          SELECTED WORK
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-3">
          {workGrid.map((id, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={`https://images.unsplash.com/${id}?w=600&q=80`}
                alt={`Sol Photography work ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="px-8 md:px-16 py-20 bg-paper">
        <h2
          className="font-black text-ink text-2xl md:text-3xl mb-10"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Get in touch.
        </h2>
        {/* Static form — no action needed for mock portfolio */}
        <form action="#" className="max-w-lg flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-ink/40 tracking-widest">NAME</label>
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b border-ink/20 py-2 text-sm text-ink placeholder-ink/30 outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-ink/40 tracking-widest">EMAIL</label>
            <input
              type="email"
              placeholder="you@email.com"
              className="bg-transparent border-b border-ink/20 py-2 text-sm text-ink placeholder-ink/30 outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-ink/40 tracking-widest">PROJECT TYPE</label>
            <select className="bg-transparent border-b border-ink/20 py-2 text-sm text-ink outline-none focus:border-ink transition-colors">
              <option value="">Select...</option>
              <option value="portrait">Portrait</option>
              <option value="event">Event</option>
              <option value="editorial">Editorial</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-ink/40 tracking-widest">MESSAGE</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="bg-transparent border-b border-ink/20 py-2 text-sm text-ink placeholder-ink/30 outline-none focus:border-ink transition-colors resize-none"
            />
          </div>
          <button type="submit" className="mt-2 w-fit flex items-center gap-3 group no-underline bg-transparent border-none cursor-pointer p-0">
            <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-ink group-hover:stroke-white transition-colors duration-500">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-ink">Send</span>
          </button>
        </form>
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
