import Image from 'next/image'

interface About3Props {
  title: string
  description: string
  mainImage: string
  secondaryImage: string
}

export default function About3({
  title,
  description,
  mainImage,
  secondaryImage,
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
          </div>
          <div className="relative h-72 lg:h-96 overflow-hidden">
            <Image src={mainImage} alt={title} fill quality={100} className="object-cover" />
          </div>
        </div>

        {/* Secondary image — full width */}
        <div className="relative w-full aspect-[16/7] overflow-hidden">
          <Image src={secondaryImage} alt="" fill quality={100} className="object-cover" />
        </div>

      </div>
    </section>
  )
}
