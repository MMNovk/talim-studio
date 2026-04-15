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
          heading="What I Build"
          description="Fast turnaround. Fixed prices."
          tabs={[
            {
              value: "tab-1",
              label: "Starter",
              content: {
                badge: "$499",
                title: "Your corner of the internet, built clean and fast.",
                description: "Up to 5 sections, mobile-responsive, contact form, and deployed live. Structure tailored to your content — single-page or multi-page, whatever fits. Ready in 5–7 days with one round of revisions.",
                buttonText: "Start Here",
                imageSrc: "https://images.unsplash.com/photo-1631885777506-69a414ca3735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageAlt: "Starter tier",
              },
            },
            {
              value: "tab-2",
              label: "Portfolio",
              content: {
                badge: "$799",
                title: "A site that actually looks like your work.",
                description: "For creatives who need a site that actually looks like their work. Up to 8 sections with bold layouts, gallery or project grid, animations, and custom typography. Structure tailored to your content. Two rounds of revisions, delivered in 5–7 days.",
                buttonText: "Build a Portfolio",
                imageSrc: "https://images.unsplash.com/photo-1737328519608-ee80fc77f72e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageAlt: "Portfolio tier",
              },
            },
            {
              value: "tab-3",
              label: "Storefront",
              content: {
                badge: "$1,099",
                title: "Built for a business that runs on bookings.",
                description: "Everything in Starter, built for a business that runs on bookings. Includes Calendly or Acuity scheduling, Google Business Profile setup and optimization, a verified Maps embed, and on-page SEO. Two rounds of revisions, delivered in 7–10 days.",
                buttonText: "Book a Build",
                imageSrc: "https://images.unsplash.com/photo-1650735311937-1876825e971b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageAlt: "Storefront tier",
              },
            },
            {
              value: "tab-4",
              label: "Site Care",
              content: {
                badge: "$79/mo",
                title: "Updates handled. No tech headaches.",
                description: "Up to 2 content or design updates per month — copy changes, photo swaps, hours updates, whatever comes up. Priority turnaround, no tech headaches on your end.",
                buttonText: "Get Site Care",
                imageSrc: "https://images.unsplash.com/photo-1772475385509-93fd87a2d4ba?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageAlt: "Site Care tier",
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
