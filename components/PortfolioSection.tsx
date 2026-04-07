'use client'

import { RadialScrollGallery } from './RadialScrollGallery'

export default function PortfolioSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 pt-20">
        <p className="text-sm tracking-widest uppercase text-muted-foreground font-mono">— Check out our work</p>
        <h2 className="text-6xl font-black uppercase mt-2">Portfolio</h2>
      </div>
      <RadialScrollGallery>
        {() => [
          <img key="1" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" className="w-48 h-64 object-cover rounded-xl" />,
          <img key="2" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80" className="w-48 h-64 object-cover rounded-xl" />,
          <img key="3" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80" className="w-48 h-64 object-cover rounded-xl" />,
          <img key="4" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" className="w-48 h-64 object-cover rounded-xl" />,
          <img key="5" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&q=80" className="w-48 h-64 object-cover rounded-xl" />,
          <img key="6" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80" className="w-48 h-64 object-cover rounded-xl" />,
        ]}
      </RadialScrollGallery>
    </section>
  )
}
