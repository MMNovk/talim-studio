'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface StackItem {
  label: string
  description: string
  imageSrc: string
  clipVariant: 'clip-original' | 'clip-hexagons' | 'clip-pixels'
}

interface ConnoisseurStackProps {
  items: StackItem[]
  eyebrow?: string
}

export default function ConnoisseurStack({ items, eyebrow }: ConnoisseurStackProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const svgRef = useRef<SVGSVGElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  function createLoop(index: number) {
    if (tlRef.current) tlRef.current.kill()
    const svg = svgRef.current
    if (!svg) return

    const clipId = items[index].clipVariant
    const paths = svg.querySelectorAll(`#${clipId} .path`)

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 })
    tl.set(paths, { scale: 0, transformOrigin: '50% 50%' })
    tl.to(paths, {
      scale: 1,
      duration: 0.55,
      stagger: { each: 0.08, from: 'random' },
      ease: 'back.out(1.4)',
    })
    tl.to(
      paths,
      {
        scale: 1.04,
        duration: 0.3,
        ease: 'sine.inOut',
      },
      '+=1.4',
    )
    tl.to(
      paths,
      {
        scale: 0,
        duration: 0.45,
        stagger: { each: 0.06, from: 'end' },
        ease: 'power2.in',
      },
      '+=0.15',
    )

    tlRef.current = tl
  }

  useLayoutEffect(() => {
    createLoop(0)
    return () => {
      if (tlRef.current) tlRef.current.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleItemHover(index: number) {
    if (index === activeIndex) return
    setActiveIndex(index)
    createLoop(index)
  }

  if (!items.length) return null

  const activeItem = items[activeIndex]

  return (
    <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-screen bg-[#0a0a0a]">
      {/* SVG panel — top on mobile, right on desktop */}
      <div className="order-1 lg:order-2 lg:w-7/12 flex items-center justify-center bg-[#111111] p-6 lg:p-16 min-h-[300px] lg:min-h-0">
        <svg
          ref={svgRef}
          viewBox="0 0 500 600"
          className="w-full max-w-[260px] sm:max-w-sm lg:max-w-md h-auto"
          aria-hidden="true"
        >
          <defs>
            {/* clip-original: 5 diagonal slices */}
            <clipPath id="clip-original">
              <path className="path" d="M-10 0 L130 0 L110 600 L-10 600 Z" />
              <path className="path" d="M130 0 L250 0 L230 600 L110 600 Z" />
              <path className="path" d="M250 0 L370 0 L350 600 L230 600 Z" />
              <path className="path" d="M370 0 L490 0 L470 600 L350 600 Z" />
              <path className="path" d="M490 0 L510 0 L510 600 L470 600 Z" />
            </clipPath>

            {/* clip-hexagons: 6 hexagons in 2×3 grid */}
            <clipPath id="clip-hexagons">
              <polygon className="path" points="125,40 200,82 200,166 125,208 50,166 50,82" />
              <polygon className="path" points="375,40 450,82 450,166 375,208 300,166 300,82" />
              <polygon className="path" points="125,230 200,272 200,356 125,398 50,356 50,272" />
              <polygon className="path" points="375,230 450,272 450,356 375,398 300,356 300,272" />
              <polygon className="path" points="125,420 200,462 200,546 125,588 50,546 50,462" />
              <polygon className="path" points="375,420 450,462 450,546 375,588 300,546 300,462" />
            </clipPath>

            {/* clip-pixels: 9 rects in 3×3 grid */}
            <clipPath id="clip-pixels">
              <rect className="path" x="5" y="5" width="153" height="188" />
              <rect className="path" x="174" y="5" width="153" height="188" />
              <rect className="path" x="343" y="5" width="153" height="188" />
              <rect className="path" x="5" y="209" width="153" height="188" />
              <rect className="path" x="174" y="209" width="153" height="188" />
              <rect className="path" x="343" y="209" width="153" height="188" />
              <rect className="path" x="5" y="413" width="153" height="183" />
              <rect className="path" x="174" y="413" width="153" height="183" />
              <rect className="path" x="343" y="413" width="153" height="183" />
            </clipPath>
          </defs>

          {/* Dark background */}
          <rect width="500" height="600" fill="#111111" />

          {/* Clipped image — clipPath and href update with activeIndex via React */}
          <g clipPath={`url(#${activeItem.clipVariant})`}>
            <image
              href={activeItem.imageSrc}
              x="0"
              y="0"
              width="500"
              height="600"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>

      {/* Menu panel — bottom on mobile, left on desktop */}
      <div className="order-2 lg:order-1 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-20 lg:w-5/12 gap-8 lg:gap-10">
        {eyebrow && (
          <p className="text-orange-500 text-xs font-mono tracking-[0.3em] uppercase">{eyebrow}</p>
        )}
        {items.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => handleItemHover(i)}
            className={`cursor-pointer transition-all duration-500 ${
              i === activeIndex ? 'opacity-100' : 'opacity-25 hover:opacity-60'
            }`}
          >
            <span className="text-orange-500/60 font-mono text-xs tracking-widest">0{i + 1}</span>
            <h3
              className={`font-black leading-none mt-1 text-white transition-all duration-500 ${
                i === activeIndex ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'
              }`}
            >
              {item.label}
            </h3>
            <p className="text-white/35 text-sm mt-2 leading-relaxed max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
