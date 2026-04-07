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
        <Feature108
          badge=""
          heading="What I Build"
          description="Fast turnaround. Fixed prices."
          tabs={[
            {
              value: "tab-1",
              icon: null,
              label: "Starter",
              content: {
                badge: "$499",
                title: "Deployed in days.",
                description: "4-5 pages, mobile responsive, contact form, deployed to Vercel, 1 round of revisions, 5-7 day delivery.",
                buttonText: "Start Here",
                imageSrc: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80",
                imageAlt: "Hands crafting — warm artisan light",
              },
            },
            {
              value: "tab-2",
              icon: null,
              label: "Portfolio",
              content: {
                badge: "$799",
                title: "Your work, elevated.",
                description: "6-8 pages, bold layouts, gallery/project grid, animations & transitions, custom typography, 2 rounds of revisions, 5-7 day delivery.",
                buttonText: "Create a Portfolio",
                imageSrc: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80",
                imageAlt: "Gallery wall — minimal editorial",
              },
            },
            {
              value: "tab-3",
              icon: null,
              label: "Business + Booking",
              content: {
                badge: "$1,099",
                title: "All in.",
                description: "Everything in Starter plus Calendly/Acuity booking integration, Google Maps embed, SEO setup, 2 rounds of revisions, 7-10 day delivery.",
                buttonText: "Book a Build",
                imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
                imageAlt: "Architectural interior — clean geometry",
              },
            },
            {
              value: "tab-4",
              icon: null,
              label: "Retainer",
              content: {
                badge: "$149/mo",
                title: "Always live.",
                description: "Monthly content updates, hosting management, small design changes, priority response.",
                buttonText: "Keep It Running",
                imageSrc: "https://images.unsplash.com/photo-1491016253668-b48ef9f4e746?w=800&q=80",
                imageAlt: "Morning light through window — calm ambient",
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
