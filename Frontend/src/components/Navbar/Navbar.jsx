import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getLenis } from '../../lib/lenis'
import './Navbar.css'

const NAV_LINKS = [
  ['about', 'Story'],
  ['menu', 'Menu'],
  ['team', 'Team'],
  ['gallery', 'Gallery'],
  ['events', 'Events'],
  ['testimonials', 'Reviews'],
]

const MOBILE_LINKS = [
  ['about', 'Our Story'],
  ['menu', 'Menu'],
  ['team', 'Our Team'],
  ['gallery', 'Gallery'],
  ['events', 'Events'],
  ['testimonials', 'Reviews'],
  ['reservation', 'Reserve'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [progress, setProgress] = useState(0)
  const observerRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  // Scroll: nav shadow + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(([href]) => href)
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach(s => observerRef.current.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  // Body scroll lock while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Escape key closes menu
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (e, target) => {
    e.preventDefault()
    closeMenu()
    if (isHome) {
      const l = getLenis()
      l ? l.scrollTo(`#${target}`) : document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', '/' + target)
    } else {
      navigate('/', { state: { scrollTo: target } })
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    closeMenu()
    if (isHome) {
      const l = getLenis()
      l ? l.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div className="nav-progress" style={{ width: `${progress}%` }} />

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-brand">
          <div className="mobile-menu-logo">Tiger<span>lily</span></div>
          <div className="mobile-menu-tagline">Where Nature Meets the Cup</div>
          <div className="mobile-menu-divider"></div>
        </div>
        <button className="mobile-close" onClick={closeMenu} aria-label="Close menu">
          <i className="fas fa-times"></i>
        </button>
        {MOBILE_LINKS.map(([href, label], i) => (
          <a
            key={href}
            href={href}
            className={`mobile-link ${menuOpen ? 'visible' : ''}`}
            style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
            onClick={e => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
      </div>

      {/* ── Desktop navbar ── */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="/" className="nav-logo" onClick={handleLogoClick}>
          Tiger<span>lily</span>
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className={activeId === href ? 'active' : ''}
                onClick={e => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservation"
              className="nav-cta"
              onClick={e => handleNavClick(e, 'reservation')}
            >
              Reserve a Table
            </a>
          </li>
        </ul>

        {/* ── Hamburger (morphs to ×) ── */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  )
}
