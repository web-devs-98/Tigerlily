import { useEffect, useState } from 'react'
import './Hero.css'

import img1 from '../../assets/cafe-entrance.png'
import img2 from '../../assets/cafe-garden-patio.png'
import img3 from '../../assets/cafe-indoor-botanical.png'
import img4 from '../../assets/cafe-indoor-warm.png'
import img5 from '../../assets/cafe-outdoor-chairs.png'
import img6 from '../../assets/cafe-outdoor-chairs2.png'

const SLIDES = [img1, img2, img3, img4, img5, img6]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const pc = document.getElementById('particles')
    if (!pc) return

    // Regular rising dots
    for (let i = 0; i < 38; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 4 + 2          // 2–6 px (was 1–4)
      const drift = (Math.random() - 0.5) * 120   // horizontal drift ±60 px
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        --drift: ${drift}px;
        animation-duration: ${Math.random() * 10 + 8}s;
        animation-delay: ${Math.random() * 6}s;
      `
      pc.appendChild(p)
    }

    // Larger "ember" glows — sparse, dramatic
    for (let i = 0; i < 8; i++) {
      const e = document.createElement('div')
      e.className = 'particle particle-ember'
      const size = Math.random() * 7 + 6          // 6–13 px
      const drift = (Math.random() - 0.5) * 80
      e.style.cssText = `
        left: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        --drift: ${drift}px;
        animation-duration: ${Math.random() * 8 + 12}s;
        animation-delay: ${Math.random() * 8}s;
      `
      pc.appendChild(e)
    }
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero">
      <div className="hero-slideshow">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`hero-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-botanical">
        <svg className="leaf-deco leaf-deco-1" viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg">
          <path d="M210 560 C160 460 40 350 40 200 C40 90 110 20 210 20 C310 20 380 90 380 200 C380 350 260 460 210 560Z" fill="#4A7C5A"/>
          <line x1="210" y1="20" x2="210" y2="560" stroke="#2D5A3D" strokeWidth="2.5"/>
          <line x1="210" y1="160" x2="100" y2="260" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
          <line x1="210" y1="220" x2="320" y2="300" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
          <line x1="210" y1="300" x2="120" y2="380" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
          <line x1="210" y1="360" x2="310" y2="420" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
        </svg>
        <svg className="leaf-deco leaf-deco-2" viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="180" cy="240" rx="160" ry="230" fill="#7BA888" transform="rotate(-15 180 240)"/>
          <line x1="180" y1="20" x2="180" y2="460" stroke="#4A7C5A" strokeWidth="2" opacity="0.5"/>
        </svg>
        <svg className="leaf-deco leaf-deco-3" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 360 Q60 20 240 40 Q200 200 60 360Z" fill="#4A7C5A"/>
        </svg>
      </div>

      {/* Ambient radial glow — immediately visible, no delay */}
      <div className="hero-ambient"></div>

      <div className="particles" id="particles"></div>

      <div className="hero-content">
        <div className="hero-badge" data-aos="fade-down" data-aos-delay="200">
          <div className="hero-badge-dot"></div>
          <span>Est. 2021 &nbsp;·&nbsp; Hyderabad, India</span>
          <div className="hero-badge-dot"></div>
        </div>

        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="380">
          Where <em>Nature</em><br />Meets the Cup
        </h1>

        <div className="hero-divider" data-aos="fade-up" data-aos-delay="500">
          <div className="hdl hdl-left"></div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C11 2 4.5 6.5 4.5 12C4.5 15.6 7.4 18.5 11 18.5C14.6 18.5 17.5 15.6 17.5 12C17.5 6.5 11 2 11 2Z" fill="#C9A84C"/>
            <circle cx="11" cy="12" r="2.5" fill="#1A3329"/>
          </svg>
          <div className="hdl hdl-right"></div>
        </div>

        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="560">
          A lush sanctuary of flavours, botanicals &amp; handcrafted brews<br />
          in the heart of Hyderabad
        </p>

        <div className="hero-actions" data-aos="fade-up" data-aos-delay="700">
          <a href="#reservation" className="btn-primary" onClick={e => scrollTo(e, '#reservation')}>
            Reserve a Table
          </a>
          <a href="#menu" className="btn-ghost" onClick={e => scrollTo(e, '#menu')}>
            Explore Menu
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-label">Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  )
}
