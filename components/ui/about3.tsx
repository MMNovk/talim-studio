import Image from 'next/image'

interface About3Props {
  title: string
  description: string
  mainImage: string
  secondaryImage: string
  breakout: {
    src: string
    title: string
    description: string
    buttonText: string
    buttonUrl: string
  }
}

export default function About3({
  title,
  description,
  mainImage,
  secondaryImage,
  breakout,
}: About3Props) {
  return (
    <section className="bg-[#0a0a0a] py-24 px-8 md:px-14 lg:px-20">
      <div className="max-w-screen-xl mx-auto">

        {/* Top: title + description left, main image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-start">
          <div className="flex flex-col gap-6">
            <h2
              className="text-white font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {title}
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md">{description}</p>
            <a
              href={breakout.buttonUrl}
              className="text-orange-500 text-sm font-mono tracking-widest uppercase no-underline hover:opacity-70 transition-opacity w-fit"
            >
              {breakout.buttonText} →
            </a>
          </div>
          <div className="relative h-72 lg:h-96 overflow-hidden">
            <Image src={mainImage} alt={title} fill quality={100} className="object-cover" />
          </div>
        </div>

        {/* Full-width secondary image */}
        <div className="relative w-full aspect-[16/7] overflow-hidden">
          <Image src={secondaryImage} alt="" fill quality={100} className="object-cover" />
        </div>

      </div>
    </section>
  )
}
