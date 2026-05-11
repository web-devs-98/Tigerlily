import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote: "It is a really good cafe to eat, hangout with friends or have a date. The ambience is beautiful and everything we ordered was top notch.",
    name: 'Khushi A.',
    occasion: 'Jubilee Hills',
    rating: 5,
  },
  {
    quote: "The ambience was warm, spacious and open — a perfect place to relax. The food was absolutely delicious: fresh, well-presented, and full of flavour.",
    name: 'Fatima K.',
    occasion: 'Jubilee Hills',
    rating: 5,
  },
  {
    quote: "Delicious food and a beautiful ambience. The pita chips with cheese dip were so good, and the mousse dessert is just yumm.",
    name: 'Sravani G.',
    occasion: 'Jubilee Hills',
    rating: 5,
  },
  {
    quote: "The ambience is good and on top of that it's pet friendly as well. We had the tempura fish, jhol momo, brownie frappe, hot chocolate with marshmallows & chicken caesar salad and everything was absolutely delicious.Had a good time and yes the service was excellent.",
    name: 'Satyajeet Mohanty',
    occasion: 'Jubilee Hills',
    rating: 5,
  },
  {
    quote: "Delicious food and great service. My friends and I, a group of 10, had a great time and would love to return!",
    name: 'Vishwa Poswal',
    occasion: 'jubilee Hills',
    rating: 5,
  },
  {
    quote: "The place is really nice to hang out — great atmosphere and vibes. The service is quite good and the staff are genuinely friendly.",
    name: 'Geethika P.',
    occasion: 'Jubilee Hills',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (index) => {
    if (animating || index === active) return
    setAnimating(true)
    clearInterval(timerRef.current)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
      startTimer()
    }, 300)
  }

  const pause = () => clearInterval(timerRef.current)
  const resume = () => startTimer()

  const t = TESTIMONIALS[active]

  return (
    <section id="testimonials">
      <div className="sec-header" data-aos="fade-up">
        <div className="section-label" style={{ color: 'rgba(201,168,76,0.8)' }}>
          <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
          Guest Voices
          <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
        </div>
        <h2 style={{ color: 'white', marginTop: '14px' }}>
          Words from <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>our Table</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>
          Moments shared by the guests who make Tigerlily what it is.
        </p>
      </div>

      <div
        className="tst-stage"
        onMouseEnter={pause}
        onMouseLeave={resume}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className={`tst-quote-wrap ${animating ? 'tst-fade-out' : 'tst-fade-in'}`}>
          <div className="tst-mark">"</div>
          <blockquote className="tst-text">{t.quote}</blockquote>
          <div className="tst-stars">
            {Array.from({ length: t.rating }).map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
            {Array.from({ length: 5 - t.rating }).map((_, i) => (
              <i key={`e-${i}`} className="far fa-star tst-star-empty"></i>
            ))}
          </div>
          <div className="tst-author">
            <span className="tst-name">{t.name}</span>
            <span className="tst-sep">·</span>
            <span className="tst-occasion">{t.occasion}</span>
          </div>
        </div>

        <div className="tst-dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`tst-dot ${i === active ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
