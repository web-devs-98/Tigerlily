import { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

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

function App() {
  useEffect(() => {
    AOS.init({ duration: 850, once: true, easing: 'ease-out-cubic', offset: 70 })
  }, [])

  return (
    <Routes>
      <Route path="/"         element={<HomePage />} />
      <Route path="/menu/full-menu"          element={<FullMenuPage />} />
      <Route path="/events/participate-form" element={<ParticipateForm />} />
      <Route path="/events/host-event"       element={<HostEvent />} />
      <Route path="/:section"               element={<SectionRedirect />} />
      <Route path="*"                       element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
