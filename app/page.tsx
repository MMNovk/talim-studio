import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import Work from '@/components/Work'
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
        <Ticker />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
