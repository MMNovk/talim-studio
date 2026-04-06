import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import { Feature108 } from '@/components/Feature108'
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
        <Feature108 />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
