import Image from 'next/image'

export const metadata = {
  title: 'Marco Ink — Fine Line & Blackwork Tattoo, NYC',
  description: 'Marco Reyes is a New York-based tattoo artist specializing in fine line and blackwork. Currently booking 4–6 weeks out.',
}

const galleryIds = [
  'photo-1598354047697-a12e78d92b8f',
  'photo-1562887245-e4bd0c193f1a',
  'photo-1590246815117-9b786a14ae3d',
  'photo-1577493340887-b7bfff550145',
  'photo-1611501275019-9b5cda994e8d',
  'photo-1612459284270-b08b56bd0e03',
  'photo-1567361808960-af4a5e0040db',
  'photo-1598354047738-8ff99a5b16bb',
  'photo-1598354047697-a12e78d92b8f',
  'photo-1562887245-e4bd0c193f1a',
  'photo-1590246815117-9b786a14ae3d',
  'photo-1577493340887-b7bfff550145',
]

export default function MarcoInkPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Top bar */}
      <header className="px-8 py-6 border-b border-white/10 bg-black">
        <span className="font-black text-white text-lg tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
          MARCO INK
        </span>
      </header>

      {/* Hero */}
      <section className="bg-black text-white px-8 md:px-16 pt-24 pb-28">
        <h1
          className="font-black leading-none text-white"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(4rem, 12vw, 10rem)',
          }}
        >
          MARCO INK
        </h1>
        <p className="mt-6 text-white/50 text-base md:text-lg tracking-wide">
          Fine Line &amp; Blackwork · NYC
        </p>
        <a href="#booking" className="mt-10 w-fit flex items-center gap-3 group no-underline">
          <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white transition-all duration-500">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-white group-hover:stroke-black transition-colors duration-500">
              <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm font-bold text-white">Book a session</span>
        </a>
      </section>

      {/* Gallery */}
      <section className="px-8 md:px-16 py-20">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          WORK
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4">
          {galleryIds.map((id, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={`https://images.unsplash.com/${id}?w=600&q=80`}
                alt={`Marco Ink work ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="px-8 md:px-16 py-20 bg-paper">
        <div className="max-w-2xl">
          <h2
            className="font-black text-ink text-2xl md:text-3xl mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            About Marco
          </h2>
          <p className="text-ink/70 leading-relaxed">
            Marco Reyes is a New York-based tattoo artist specializing in fine line and blackwork. His work is precise, intentional, and built to last. Currently booking 4–6 weeks out.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="px-8 md:px-16 py-20">
        <h2
          className="font-black text-ink text-2xl md:text-3xl mb-6"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Book a session.
        </h2>
        <p className="text-ink/70 text-sm mb-2">
          Walk-ins welcome Tue–Thu
        </p>
        <p className="text-ink/70 text-sm">
          Book via Instagram{' '}
          <a
            href="https://instagram.com/marcoink"
            className="underline underline-offset-2 text-ink hover:text-ink/60 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            @marcoink
          </a>
        </p>
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
