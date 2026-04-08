'use client'

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
  description?: string;
}

export const ConnoisseurStack = ({
  items,
  className,
  eyebrow,
}: { items: MenuItem[]; className?: string; eyebrow?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;
    if (masterTl.current) masterTl.current.kill();
    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(selector, { scale: 1, duration: 0.8, stagger: { amount: 0.4, from: "random" }, ease: "expo.out" })
      .to(selector, { scale: 1.05, duration: 1.5, yoyo: true, repeat: 1, ease: "sine.inOut", stagger: { amount: 0.2, from: "center" } })
      .to(selector, { scale: 0, duration: 0.6, stagger: { amount: 0.3, from: "edges" }, ease: "expo.in" });
    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => { createLoop(0); }, containerRef);
    return () => ctx.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  if (!items.length) return null;

  return (
    <div ref={containerRef} className={`flex flex-col lg:flex-row min-h-[600px] lg:min-h-screen bg-[#0a0a0a] ${className ?? ""}`}>

      {/* Menu panel — bottom on mobile, left on desktop */}
      <div className="order-2 lg:order-1 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-20 lg:w-5/12 gap-8 lg:gap-10">
        {eyebrow && (
          <p className="text-orange-500 text-sm font-bold tracking-[0.25em] uppercase">{eyebrow}</p>
        )}
        <div className="flex flex-col gap-8 lg:gap-10">
          {items.map((item, index) => (
            <div key={index} onMouseEnter={() => handleItemHover(index)} className="group cursor-pointer">
              <div className={`transition-all duration-500 ${index === activeIndex ? "opacity-100" : "opacity-25 hover:opacity-60"}`}>
                <span className="text-orange-500/60 font-mono text-xs tracking-widest">{item.num}</span>
                <h3 className={`font-black leading-none mt-1 text-white transition-all duration-500 ${index === activeIndex ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"}`}>
                  {item.name.split(" ")[0]}<br />{item.name.split(" ")[1]}
                </h3>
                {item.description && activeIndex === index && (
                  <p className="text-white/35 text-sm mt-2 leading-relaxed max-w-xs">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SVG panel — top on mobile, right on desktop */}
      <div className="order-1 lg:order-2 lg:w-7/12 flex items-center justify-center bg-[#111111] p-6 lg:p-16 min-h-[300px] lg:min-h-0">
        <svg
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

            {/* clip-hexagons: 6 hexagons in 2x3 grid */}
            <clipPath id="clip-hexagons">
              <polygon className="path" points="125,40 200,82 200,166 125,208 50,166 50,82" />
              <polygon className="path" points="375,40 450,82 450,166 375,208 300,166 300,82" />
              <polygon className="path" points="125,230 200,272 200,356 125,398 50,356 50,272" />
              <polygon className="path" points="375,230 450,272 450,356 375,398 300,356 300,272" />
              <polygon className="path" points="125,420 200,462 200,546 125,588 50,546 50,462" />
              <polygon className="path" points="375,420 450,462 450,546 375,588 300,546 300,462" />
            </clipPath>

            {/* clip-pixels: 9 rects in 3x3 grid */}
            <clipPath id="clip-pixels">
              <rect className="path" x="5"   y="5"   width="153" height="188" />
              <rect className="path" x="174" y="5"   width="153" height="188" />
              <rect className="path" x="343" y="5"   width="153" height="188" />
              <rect className="path" x="5"   y="209" width="153" height="188" />
              <rect className="path" x="174" y="209" width="153" height="188" />
              <rect className="path" x="343" y="209" width="153" height="188" />
              <rect className="path" x="5"   y="413" width="153" height="183" />
              <rect className="path" x="174" y="413" width="153" height="183" />
              <rect className="path" x="343" y="413" width="153" height="183" />
            </clipPath>
          </defs>

          {/* Dark background */}
          <rect width="500" height="600" fill="#111111" />

          {/* Clipped image — refs allow GSAP to update href and clip-path directly */}
          <g ref={mainGroupRef} clipPath={`url(#${items[0].clipId})`}>
            <image
              ref={imageRef}
              href={items[0].image}
              x="0"
              y="0"
              width="500"
              height="600"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </svg>
      </div>

    </div>
  );
};

export default ConnoisseurStack;
