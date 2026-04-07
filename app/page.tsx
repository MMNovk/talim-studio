import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import { Feature108 } from '@/components/ui/feature108'
import { RadialScrollGallery } from '@/components/RadialScrollGallery'
import Process from '@/components/Process'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Feature108
          badge=""
          heading="What We Build"
          description=""
          tabs={[
            {
              value: "tab-1",
              icon: null,
              label: "Starter",
              content: {
                badge: "$299",
                title: "4–5 pages. Deployed in days.",
                description: "Mobile responsive, contact form, deployed to Vercel. 1 round of revisions. 5–7 day delivery.",
                buttonText: "Start with Starter",
                imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
                imageAlt: "Starter",
              },
            },
            {
              value: "tab-2",
              icon: null,
              label: "Portfolio",
              content: {
                badge: "$449",
                title: "Bold layouts. Your work, elevated.",
                description: "6–8 pages, gallery/project grid, animations & transitions, custom typography. 2 rounds of revisions. 5–7 day delivery.",
                buttonText: "Build a Portfolio",
                imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
                imageAlt: "Portfolio",
              },
            },
            {
              value: "tab-3",
              icon: null,
              label: "Business + Booking",
              content: {
                badge: "$649",
                title: "Booking, maps, SEO. All in.",
                description: "Everything in Starter plus Calendly/Acuity booking integration, Google Maps embed, SEO setup. 2 rounds of revisions. 7–10 day delivery.",
                buttonText: "Book a Build",
                imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
                imageAlt: "Business",
              },
            },
            {
              value: "tab-4",
              icon: null,
              label: "Retainer",
              content: {
                badge: "$79/mo",
                title: "Always updated. Always live.",
                description: "Monthly content updates, hosting management, small design changes, priority response.",
                buttonText: "Keep It Running",
                imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
                imageAlt: "Retainer",
              },
            },
          ]}
        />
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
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
