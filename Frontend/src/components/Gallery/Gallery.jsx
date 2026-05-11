import { useEffect, useRef } from 'react'
import './Gallery.css'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=85', alt: 'Cafe Interior',  width: 700, hero: true },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',  alt: 'Coffee Art',     width: 360 },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',  alt: 'Espresso',       width: 440 },
  { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',  alt: 'Food',           width: 380 },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',     alt: 'Dessert',        width: 500 },
  { src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1000&q=80', alt: 'Cafe Ambience',  width: 400 },
]
const LOOP = [...IMAGES, ...IMAGES]

const SCROLL_STEP = 420
const SPEED       = 0.25

export default function Gallery() {
  const trackRef = useRef(null)
  const rafRef   = useRef(null)
  const pauseRef = useRef(false)
  const timerRef = useRef(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    const step = () => {
      if (!pauseRef.current && track) {
        frameRef.current += 1
        const isPausing = frameRef.current % 5000 < 80
        if (!isPausing) {
          track.scrollLeft += SPEED
          if (track.scrollLeft >= track.scrollWidth / 2) {
            track.scrollLeft -= track.scrollWidth / 2
            frameRef.current = 0
          }
        }
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const pause  = () => { pauseRef.current = true }
  const resume = () => { pauseRef.current = false }

  const scroll = (dir) => {
    pause()
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: 'smooth' })
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(resume, 3000)
  }

  return (
    <section id="gallery">
      <div className="sec-header" data-aos="fade-up">
        <div className="section-label">
          <div className="gold-line"></div> The Space <div className="gold-line"></div>
        </div>
        <h2 style={{ color: 'var(--deep-green)', marginTop: '14px' }}>
          A world apart from <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>the ordinary</em>
        </h2>
        <p style={{ color: 'var(--text-mid)' }}>
          Every corner is designed to inspire, delight and invite you to linger.
        </p>
      </div>

      <div className="gallery-strip-wrap">
        <button className="gallery-arrow gallery-arrow--left" onClick={() => scroll(-1)}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="gallery-track"
          ref={trackRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={() => {
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(resume, 2000)
          }}
        >
          {LOOP.map(({ src, alt, width, hero }, i) => (
            <div
              className={`gallery-card${hero ? ' gallery-card--hero' : ''}`}
              key={i}
              style={{ flex: `0 0 ${width}px` }}
            >
              <img src={src} alt={alt} />
              {hero && (
                <div className="gallery-card-overlay">
                  <span className="gallery-card-label">The Space</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="gallery-arrow gallery-arrow--right" onClick={() => scroll(1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
}
