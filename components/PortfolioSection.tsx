'use client'

import { RadialScrollGallery } from './RadialScrollGallery'

export default function PortfolioSection() {
  return (
    <section className="bg-white relative" id="portfolio">
      <div className="flex flex-col items-center justify-center pt-24 pb-4 text-center">
        <p className="text-base text-ink/40 mb-3">Check out my work</p>
        <h2 className="text-6xl font-black">Portfolio</h2>
        <p className="text-base text-ink/40 mt-3">↓ Scroll</p>
      </div>
      <RadialScrollGallery
        scrollDuration={2500}
        visiblePercentage={45}
        baseRadius={550}
        mobileRadius={220}
      >
        {() => [
          <div key="1" className="group relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Nature</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>,
          <div key="2" className="group relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Mountains</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>,
          <div key="3" className="group relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Wildlife</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>,
          <div key="4" className="group relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Landscape</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>,
          <div key="5" className="group relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Aerial</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>,
          <div key="6" className="group relative w-48 h-72 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&q=80" className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">Forest</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>,
        ]}
      </RadialScrollGallery>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
