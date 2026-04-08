import Image from 'next/image'

export default function OwnerSection() {
  return (
    <section className="bg-white py-24 px-8 md:px-14 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Portrait */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
          <Image
            src="/images/vela/mia-portrait.jpg"
            alt="Mia Reyes, founder of Vela Nails"
            fill
            className="object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col gap-6 md:pl-8 lg:pl-12">
          <p className="text-xs tracking-widest uppercase text-ink/40">The Owner</p>
          <h2 className="font-semibold text-3xl text-ink">Mia Reyes</h2>
          <div className="flex flex-col gap-4 text-ink/60 leading-relaxed">
            <p>
              I&rsquo;ve been doing nails in Brooklyn for nine years. Before I opened Vela in 2020,
              I trained in Seoul and worked across several salons in Manhattan &mdash; learning
              everything from classic gel work to freehand nail art and everything in between.
            </p>
            <p>
              Nails are how I got into beauty, and they&rsquo;re still the thing I care most about
              getting right. I opened Vela because I wanted a space where the work could be slow and
              intentional &mdash; where clients aren&rsquo;t rushed through and techniques aren&rsquo;t
              cut short.
            </p>
            <p>
              We&rsquo;re a small team on purpose. You&rsquo;ll see the same faces every visit, and
              the vibe in here is always quiet. That&rsquo;s exactly how we like it.
            </p>
          </div>
          <hr className="border-ink/10" />
          <div className="flex gap-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-ink/35">Experience</p>
              <p className="text-xs tracking-widest uppercase text-ink/60 mt-1">9 years</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-ink/35">Est.</p>
              <p className="text-xs tracking-widest uppercase text-ink/60 mt-1">2020</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
