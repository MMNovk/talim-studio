import Image from 'next/image'

export const metadata = {
  title: 'Our Story — Cinder & Co.',
  description: 'How a food truck in Ridgewood became a diner worth the trip.',
}

const storyBlocks = [
  {
    period: '2018 – 2021',
    heading: 'We started with a truck.',
    body: "Long before there was a dining room, there was a beat-up food truck parked outside weekend markets in Ridgewood. We served two things: a smash burger and loaded fries. Lines started short. They got longer.",
    imageSrc: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=80',
    imageAlt: 'Food truck at a market',
  },
  {
    period: '2021',
    heading: 'The space found us.',
    body: "We weren't looking for a storefront. But when a 900-square-foot space on Myrtle Ave came up, we signed the lease in the same week. Three months of nights and weekends and we opened the doors in October.",
    imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    imageAlt: 'Restaurant interior',
  },
  {
    period: '2022 – Present',
    heading: 'The regulars built it.',
    body: "We didn't run ads in year one. Word spread because the food was good and the people behind the counter cared. The regulars shaped the menu — that's why the banana pudding exists.",
    imageSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    imageAlt: 'Diner scene',
  },
]

const values = [
  {
    number: '01',
    title: 'Sourced Within 150 Miles',
    body: "Beef from a farm in the Hudson Valley. Buns from a bakery in Bushwick. If we can't trace it, we don't serve it.",
  },
  {
    number: '02',
    title: 'No Frozen Patties. Ever.',
    body: 'Fresh beef every morning. Ground in-house. Smashed to order. The extra effort shows up in every bite.',
  },
  {
    number: '03',
    title: 'Open Late for a Reason',
    body: "Ridgewood stays up. We stay open. Midnight on a Friday is exactly when you need a double stack.",
  },
]

export default function CinderCoAboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* SECTION A — Full-bleed 60vh hero */}
      <section className="relative h-[60vh] flex items-end pb-16 px-8 md:px-14 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=1600&q=80"
            alt="Cinder & Co."
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl w-full">
          <p className="text-orange-500 text-xs font-mono tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1
            className="text-white font-black leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            We started<br />with a truck.
          </h1>
        </div>
      </section>

      {/* SECTION B — Alternating story blocks */}
      <section className="py-24 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-24">
          {storyBlocks.map((block, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:[&>:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <div className="flex flex-col gap-4">
                <span className="text-orange-500 font-mono text-xs tracking-widest">{block.period}</span>
                <h2 className="text-white font-black text-3xl lg:text-4xl">{block.heading}</h2>
                <p className="text-white/45 leading-relaxed">{block.body}</p>
              </div>
              {/* Image */}
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden">
                <Image src={block.imageSrc} alt={block.imageAlt} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION C — Values */}
      <section className="py-24 px-8 md:px-14 lg:px-20 bg-[#111111]">
        <div className="max-w-screen-xl mx-auto">
          <h2
            className="text-white font-black mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="border border-white/10 p-8 flex flex-col gap-4">
                <span className="text-orange-500 font-black text-5xl font-mono">{v.number}</span>
                <h3 className="text-white font-black text-lg">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — Pull quote */}
      <section className="py-32 px-8 md:px-14 lg:px-20">
        <div className="max-w-3xl">
          <blockquote
            className="text-white font-thin italic leading-tight"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3.5rem)',
              fontFamily: 'Georgia, "Times New Roman", serif',
            }}
          >
            &ldquo;We make the burger you&rsquo;d drive across the borough for. No gimmicks. Just a
            flat-top that never cools down.&rdquo;
          </blockquote>
          <p className="text-white/30 text-sm mt-8 tracking-widest font-mono">
            — Marcus &amp; Priya, Co-founders
          </p>
        </div>
      </section>

      {/* SECTION E — Footer */}
      <footer className="border-t border-white/10 py-6 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="/work/mesa-kitchen"
            className="font-bold text-sm text-white no-underline hover:text-white/70 transition-colors"
          >
            ← Cinder & Co.
          </a>
          <span className="text-xs text-white/25">Myrtle Ave, Ridgewood, Queens</span>
          <a
            href="https://talimstudio.com"
            className="text-xs text-white/20 no-underline hover:text-white/40 transition-colors"
          >
            Built by Talim Studio →
          </a>
        </div>
      </footer>

    </div>
  )
}
