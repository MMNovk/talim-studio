import Image from 'next/image'

export default function OwnerSection() {
  return (
    <section className="bg-white py-24 px-8 md:px-14 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Portrait */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&q=80"
            alt="Mia Reyes, founder of Vela Nails"
            fill
            className="object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-6 md:pl-8 lg:pl-12">
          <p className="font-mono text-xs tracking-widest uppercase text-ink/40">The Owner</p>
          <h2 className="font-dm-sans font-bold text-3xl text-ink">Mia Reyes</h2>
          <div className="flex flex-col gap-4 font-dm-sans text-ink/55 leading-relaxed">
            <p>
              I&rsquo;ve been doing nails in Brooklyn for nine years. Vela is the studio I always
              wanted to work in &mdash; quiet, unhurried, with natural light and no rush to get you
              in and out.
            </p>
            <p>
              I trained in Seoul and worked in three Manhattan salons before opening Vela in 2020.
              I do all the nail art consultations myself. If you bring a reference, I&rsquo;ll tell
              you honestly whether I can execute it.
            </p>
            <p>
              We keep the team small on purpose. You&rsquo;ll see the same faces every visit.
              That&rsquo;s the whole idea.
            </p>
          </div>
          <hr className="border-ink/10" />
          <div className="flex gap-10">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-ink/35">Experience</p>
              <p className="font-mono text-xs tracking-widest uppercase text-ink/60 mt-1">9 years</p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-ink/35">Est.</p>
              <p className="font-mono text-xs tracking-widest uppercase text-ink/60 mt-1">2020</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
