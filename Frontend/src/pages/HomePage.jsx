import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLenis } from '../lib/lenis'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import VideoSection from '../components/VideoSection/VideoSection'
import Marquee from '../components/Marquee/Marquee'
import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Team from '../components/Team/Team'
import Gallery from '../components/Gallery/Gallery'
import Events from '../components/Events/Events'
import Reservation from '../components/Reservation/Reservation'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

export default function HomePage({ initialScrollTo }) {
  const location = useLocation()

  useEffect(() => {
    const target = initialScrollTo || location.state?.scrollTo
    if (!target) return
    const tryScroll = () => {
      const el = document.getElementById(target)
      if (el) {
        const l = getLenis()
        l ? l.scrollTo(el, { offset: 0 }) : el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else { setTimeout(tryScroll, 100) }
    }
    tryScroll()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <Marquee />
      <About />
      <Menu />
      <Team />
      <Gallery />
      <Events />
      <Reservation />
      <Testimonials />
      <Footer />
    </>
  )
}
