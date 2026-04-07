import Image from 'next/image'

export const metadata = {
  title: 'Form Pilates — Boutique Pilates Studio, West Village NYC',
  description: 'Boutique Pilates studio in the West Village. Mat, Reformer, and private sessions with certified instructor Sofia Almeida.',
}

export default function FormPilatesPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'DM Sans, sans-serif' }}>

      {/* Top bar */}
      <header className="px-8 py-6 border-b border-ink/10">
        <span className="font-black text-ink text-lg tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
          FORM PILATES
        </span>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=80"
          alt="Form Pilates studio"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <h1
            className="font-black text-ink text-[clamp(2.5rem,7vw,6rem)] leading-none"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Move with intention.
          </h1>
          <a href="#booking" className="mt-8 w-fit flex items-center gap-3 group no-underline">
            <div className="w-14 h-14 rounded-full border border-ink/20 flex items-center justify-center group-hover:bg-ink transition-all duration-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-ink group-hover:stroke-white transition-colors duration-500">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-bold text-ink">View class schedule</span>
          </a>
        </div>
      </section>

      {/* Classes */}
      <section className="px-8 md:px-16 py-20">
        <h2
          className="text-xs font-bold text-ink/40 mb-10 tracking-widest"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          CLASSES
        </h2>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {[
            {
              name: 'Mat Pilates',
              price: '$35/class',
              desc: 'Core-focused floor work that builds strength and flexibility. Suitable for all levels, no equipment needed.',
            },
            {
              name: 'Reformer',
              price: '$55/class',
              desc: 'Machine-based resistance training for deeper muscle engagement. Small groups of four or fewer.',
            },
            {
              name: 'Private Session',
              price: '$120/session',
              desc: 'One-on-one instruction tailored to your goals, pace, and body. Ideal for beginners or focused recovery work.',
            },
          ].map((cls) => (
            <div key={cls.name} className="border border-ink/10 rounded-2xl p-7">
              <div className="flex justify-between items-start mb-4">
                <h3
                  className="font-black text-ink text-lg"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {cls.name}
                </h3>
                <span className="text-sm text-ink/50 font-medium">{cls.price}</span>
              </div>
              <p className="text-sm text-ink/60 leading-relaxed">{cls.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="px-8 md:px-16 py-20 bg-stone-50 flex flex-col md:flex-row gap-12 items-center">
        <div className="relative w-full md:w-56 h-64 rounded-2xl overflow-hidden flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80"
            alt="Sofia Almeida, founder"
            fill
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h2
            className="font-black text-ink text-2xl md:text-3xl mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Sofia Almeida
          </h2>
          <p className="text-ink/50 text-sm mb-4">Founder &amp; Lead Instructor</p>
          <p className="text-ink/70 leading-relaxed max-w-lg">
            12 years of movement practice, certified STOTT Pilates instructor. Sofia started Form after a decade of teaching at studios across the city. She believes movement should feel earned, never punishing.
          </p>
        </div>
      </section>

      {/* Booking placeholder */}
      <section id="booking" className="px-8 md:px-16 py-20">
        <div className="rounded-2xl bg-stone-50 border border-ink/10 p-10 max-w-xl">
          <h2
            className="font-black text-ink text-2xl mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Book a class.
          </h2>
          <p className="text-ink/50 text-sm mb-6 leading-relaxed">
            Our booking calendar is loading below. If it does not appear, email us directly.
          </p>
          <div className="bg-white border border-ink/10 rounded-xl p-8 text-center text-ink/30 text-sm">
            Booking calendar loading...
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-8 md:px-16 py-20 border-t border-ink/10">
        <h2
          className="font-black text-ink text-2xl md:text-3xl mb-8"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Visit us.
        </h2>
        <div className="flex flex-col gap-4 text-sm text-ink/70">
          <p>
            <span className="font-bold text-ink">Address</span><br />
            42 Perry St, New York NY 10014
          </p>
          <p>
            <span className="font-bold text-ink">Hours</span><br />
            Mon–Fri 6am–8pm · Sat–Sun 8am–2pm
          </p>
        </div>
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
