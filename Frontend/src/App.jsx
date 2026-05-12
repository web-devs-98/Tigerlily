import { useEffect, useState } from 'react'
import { Routes, Route, useParams, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Lenis from 'lenis'
import { setLenis } from './lib/lenis'
import Cursor from './components/Cursor/Cursor'
import Loader from './components/Loader/Loader'

import HomePage from './pages/HomePage'
import FullMenuPage from './components/Menu/FullMenuPage/FullMenuPage'
import ParticipateForm from './components/Events/ParticipateForm/ParticipateForm'
import HostEvent from './components/Events/HostEvent/HostEvent'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const VALID_SECTIONS = new Set(['about', 'menu', 'team', 'gallery', 'events', 'testimonials', 'reservation'])

function SectionRedirect() {
  const { section } = useParams()
  if (!VALID_SECTIONS.has(section)) return <NotFoundPage />
  return <HomePage initialScrollTo={section} />
}

function AppInner() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="route-fade">
      <Routes>
        <Route path="/"                        element={<HomePage />} />
        <Route path="/menu/full-menu"          element={<FullMenuPage />} />
        <Route path="/events/participate-form" element={<ParticipateForm />} />
        <Route path="/events/host-event"       element={<HostEvent />} />
        <Route path="/:section"               element={<SectionRedirect />} />
        <Route path="*"                       element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

function App() {
  const [appReady,      setAppReady]      = useState(() => !!sessionStorage.getItem('tl-loaded'))
  const [loaderExiting, setLoaderExiting] = useState(false)

  useEffect(() => {
    const l = new Lenis({
      lerp: 0.08,
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    setLenis(l)
    let rafId
    function raf(time) { l.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    AOS.init({ duration: 850, once: true, easing: 'ease-out-cubic', offset: 70 })
    return () => { l.destroy(); cancelAnimationFrame(rafId) }
  }, [])

  const handleLoaderDone = () => {
    setLoaderExiting(true)
    setTimeout(() => {
      sessionStorage.setItem('tl-loaded', '1')
      setAppReady(true)
    }, 700)
  }

  return (
    <>
      <Cursor />
      {!appReady && <Loader exiting={loaderExiting} onDone={handleLoaderDone} />}
      <div className="film-grain" aria-hidden="true" />
      <AppInner />
    </>
  )
}

export default App
