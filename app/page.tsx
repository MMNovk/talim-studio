import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import { Feature108 } from '@/components/ui/feature108'
import PortfolioSection from '@/components/PortfolioSection'
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
        <div className="flex justify-center py-5 bg-white">
          <a href="#portfolio" className="font-mono text-sm text-neutral-400 hover:text-black transition-colors no-underline">
            Check out my work ↗
          </a>
        </div>
        <Feature108
          heading="What I Build"
          description="Fast turnaround. Fixed prices."
          tabs={[
            {
              value: "tab-1",
              label: "Starter",
              content: {
                badge: "$499",
                title: "Deployed in days.",
                description: "4-5 pages, mobile responsive, contact form, deployed to Vercel, 1 round of revisions, 5-7 day delivery.",
                buttonText: "Start Here",
                imageSrc: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&h=600&fit=crop&q=80",
                imageAlt: "Starter tier",
              },
            },
            {
              value: "tab-2",
              label: "Portfolio",
              content: {
                badge: "$799",
                title: "Your work, elevated.",
                description: "6-8 pages, bold layouts, gallery/project grid, animations and transitions, custom typography, 2 rounds of revisions, 5-7 day delivery.",
                buttonText: "Create a Portfolio",
                imageSrc: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&h=600&fit=crop&q=80",
                imageAlt: "Portfolio tier",
              },
            },
            {
              value: "tab-3",
              label: "Business + Booking",
              content: {
                badge: "$1,099",
                title: "All in.",
                description: "Everything in Starter plus Calendly/Acuity booking integration, Google Maps embed, SEO setup, 2 rounds of revisions, 7-10 day delivery.",
                buttonText: "Book a Build",
                imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&q=80",
                imageAlt: "Business tier",
              },
            },
            {
              value: "tab-4",
              label: "Retainer",
              content: {
                badge: "$149/mo",
                title: "Always live.",
                description: "Monthly content updates, hosting management, small design changes, priority response.",
                buttonText: "Keep It Running",
                imageSrc: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=900&h=600&fit=crop&q=80",
                imageAlt: "Retainer tier",
              },
            },
          ]}
        />
        <PortfolioSection />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
