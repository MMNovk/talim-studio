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
    imageSrc: '/images/truck.jpg',
    imageAlt: 'Food truck at a market',
  },
  {
    period: '2021',
    heading: 'The space found us.',
    body: "We weren't looking for a storefront. But when a 900-square-foot space on Myrtle Ave came up, we signed the lease in the same week. Three months of nights and weekends and we opened the doors in October.",
    imageSrc: '/images/space.jpg',
    imageAlt: 'Restaurant interior',
  },
  {
    period: '2022 – Present',
    heading: 'The regulars built it.',
    body: "We didn't run ads in year one. Word spread because the food was good and the people behind the counter cared. The regulars shaped the menu — that's why the banana pudding exists.",
    imageSrc: '/images/regular.jpg',
    imageAlt: 'Diner scene',
  },
]

export default function CinderCoAboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* SECTION A — Full-bleed hero */}
      <section className="relative h-[60vh] flex items-end pb-16 px-8 md:px-14 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/storyheader.jpg"
            alt="Cinder & Co."
            fill
            priority
            quality={100}
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-xl w-full">
          <h1
            className="text-white font-black leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Four years<br />in Ridgewood.
          </h1>
          <p className="font-sans text-sm font-light text-white/50 tracking-wide mt-3">Our story</p>
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
                <span className="text-orange-500 font-sans text-xs tracking-widest">{block.period}</span>
                <h2 className="text-white font-black text-3xl lg:text-4xl">{block.heading}</h2>
                <p className="text-white/45 leading-relaxed">{block.body}</p>
              </div>
              {/* Image */}
              <div className="relative h-72 lg:h-96 overflow-hidden">
                <Image
                  src={block.imageSrc}
                  alt={block.imageAlt}
                  fill
                  quality={100}
                  priority={i === 0}
                  loading={i === 0 ? undefined : 'eager'}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION D — Footer */}
      <footer className="border-t border-white/10 py-6 px-8 md:px-14 lg:px-20">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="/work/mesa-kitchen"
            className="font-bold text-sm text-white no-underline hover:text-white/70 transition-colors"
          >
            ← Cinder &amp; Co.
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
