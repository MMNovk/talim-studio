import ScrollReveal from './ScrollReveal'

const workItems = [
  {
    name: 'Petal & Stem',
    type: 'Small Business · E-Commerce + Booking',
    delay: 0,
    bgStyle: {
      background: 'linear-gradient(135deg, #1b2a1b 0%, #2e4a2e 50%, #3d6b3d 100%)',
      color: '#c8e6c8',
    },
    meta: 'Florist · Ridgewood, NY',
    badge1: 'Online Shop',
    badge2: 'Custom Orders',
    accent: '✿',
    cardType: 'florist',
  },
  {
    name: 'Muro Ink',
    type: 'Creative · Portfolio + Booking',
    delay: 100,
    bgStyle: { background: '#0a0a0a', color: '#e8e8e8' },
    meta: 'Tattoo · Brooklyn, NY',
    sub: 'Fine line · Blackwork · Booking',
    accent: '⬡',
    cardType: 'tattoo',
  },
  {
    name: 'Form Studio',
    type: 'Small Business · Starter Site + Scheduling',
    delay: 150,
    bgStyle: {
      background: 'linear-gradient(160deg, #f5ede4 0%, #e8d5c4 50%, #d4b89a 100%)',
      color: '#3a2a1a',
    },
    meta: 'Pilates · Astoria, NY',
    sub: 'Reformer · Mat · Private Sessions',
    cardType: 'pilates',
  },
  {
    name: 'Clara Reyes Photography',
    type: 'Creative · Portfolio Site',
    delay: 200,
    bgStyle: {
      background: 'linear-gradient(135deg, #14181c 0%, #1e2832 50%, #263040 100%)',
      color: '#d0dce8',
    },
    meta: 'Photography · New York',
    sub: 'Editorial · Events · Portraits',
    cardType: 'photo',
  },
]

export default function Work() {
  return (
    <section className="px-12 py-[120px] bg-ink max-md:px-6 max-md:py-20" id="work">
      <ScrollReveal>
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/40 mb-14 flex items-center gap-2.5 before:content-[''] before:inline-block before:w-7 before:h-px before:bg-white/30">
          Selected work
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {workItems.map((item) => (
          <ScrollReveal key={item.name} delay={item.delay}>
            <div className="rounded-lg overflow-hidden relative aspect-[16/10] cursor-pointer group">
              {/* Card background */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={item.bgStyle}
              >
                {/* Florist card */}
                {item.cardType === 'florist' && (
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] tracking-[0.12em] uppercase opacity-60 font-dm-sans font-normal"
                        style={{ color: '#c8e6c8' }}>
                        {item.meta}
                      </span>
                      <span className="w-8 h-8 border border-[rgba(200,230,200,0.3)] rounded-full flex items-center justify-center text-base">
                        {item.accent}
                      </span>
                    </div>
                    <div>
                      <div className="text-[clamp(24px,3vw,40px)] font-extrabold tracking-tight mb-2">
                        {item.name}
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[11px] px-2.5 py-1 border border-[rgba(200,230,200,0.3)] rounded-full font-dm-sans opacity-70">
                          {item.badge1}
                        </span>
                        <span className="text-[11px] px-2.5 py-1 border border-[rgba(200,230,200,0.3)] rounded-full font-dm-sans opacity-70">
                          {item.badge2}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tattoo card */}
                {item.cardType === 'tattoo' && (
                  <>
                    <div className="absolute inset-0"
                      style={{ background: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,0.012) 40px,rgba(255,255,255,0.012) 41px)' }} />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div className="flex justify-between items-start">
                        <span className="text-[11px] tracking-[0.12em] uppercase text-white/40 font-dm-sans font-normal">
                          {item.meta}
                        </span>
                        <span className="text-lg opacity-40">{item.accent}</span>
                      </div>
                      <div>
                        <div className="text-[clamp(24px,3vw,40px)] font-extrabold tracking-tight mb-2 text-[#e8e8e8]">
                          {item.name}
                        </div>
                        <div className="w-10 h-0.5 bg-accent mb-2.5" />
                        <div className="text-xs font-dm-sans font-light text-[rgba(232,232,232,0.5)] tracking-[0.04em]">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Pilates card */}
                {item.cardType === 'pilates' && (
                  <>
                    <div className="absolute -top-10 -right-10 w-[180px] h-[180px] rounded-full border border-[rgba(58,42,26,0.08)]" />
                    <div className="absolute -top-2.5 -right-2.5 w-[120px] h-[120px] rounded-full border border-[rgba(58,42,26,0.06)]" />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <span className="text-[11px] tracking-[0.12em] uppercase text-[rgba(58,42,26,0.45)] font-dm-sans font-normal">
                        {item.meta}
                      </span>
                      <div>
                        <div className="text-[clamp(24px,3vw,38px)] font-extrabold tracking-tight leading-none mb-1.5 text-[#3a2a1a]">
                          {item.name}
                        </div>
                        <div className="text-xs font-dm-sans font-light text-[rgba(58,42,26,0.55)] mb-2.5">
                          {item.sub}
                        </div>
                        <span className="text-[11px] px-3 py-[5px] bg-[rgba(58,42,26,0.1)] rounded-full font-dm-sans text-[rgba(58,42,26,0.7)]">
                          Class scheduling live
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Photo card */}
                {item.cardType === 'photo' && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(90deg, transparent, rgba(200,255,0,0.5), transparent)' }} />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                      <div className="flex justify-between items-start">
                        <span className="text-[11px] tracking-[0.12em] uppercase text-[rgba(208,220,232,0.4)] font-dm-sans font-normal">
                          {item.meta}
                        </span>
                        <span className="text-sm opacity-30 text-[#d0dce8]">◎</span>
                      </div>
                      <div>
                        <div className="text-[clamp(22px,2.8vw,36px)] font-extrabold tracking-tight mb-1 text-[#d0dce8]">
                          Clara Reyes
                        </div>
                        <div className="text-xs font-dm-sans font-light text-[rgba(208,220,232,0.5)] mb-3 tracking-[0.04em]">
                          {item.sub}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                          <span className="text-[11px] font-dm-sans text-[rgba(208,220,232,0.5)]">
                            Available for bookings
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300 flex flex-col justify-end p-7">
                <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="font-syne font-bold text-lg text-white mb-1">{item.name}</p>
                  <p className="text-xs text-accent tracking-[0.08em] uppercase font-medium">
                    {item.type}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
