import { useLocation, useNavigate } from 'react-router-dom'
import './Footer.css'

const navLinks = [
  ['about', 'Our Story'],
  ['menu', 'Menu'],
  ['team', 'The Team'],
  ['gallery', 'Gallery'],
  ['events', 'Events'],
  ['testimonials', 'Reviews'],
  ['reservation', 'Reserve'],
]

const socials = [
  { icon: 'fa-instagram', href: '#' },
  { icon: 'fa-facebook-f', href: '#' },
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-youtube', href: '#' },
  { icon: 'fa-pinterest-p', href: '#' },
]

const hours = [
  { day: 'Monday – Friday', val: '8AM–10PM' },
  { day: 'Saturday', val: '9AM–11PM' },
  { day: 'Sunday', val: '9AM–11PM' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleNavClick = (e, target) => {
    e.preventDefault()
    if (isHome) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: target } })
    }
  }

  return (
    <footer>
      <div className="footer-top">
        <div>
          <a href="/" className="footer-logo" onClick={e => { e.preventDefault(); isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/') }}>
            Tiger<span>lily</span>
          </a>
          <p className="footer-about">
            A botanical sanctuary in the heart of Hyderabad, where every cup is a journey and every
            dish tells a story. Come as you are. Stay a while.
          </p>
          <div className="footer-socials">
            {socials.map(({ icon, href }) => (
              <a key={icon} href={href} className="footer-social">
                <i className={`fab ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="footer-links">
            {navLinks.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={e => handleNavClick(e, id)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <ul className="footer-links">
            <li><a href="#">12/4, Banjara Hills</a></li>
            <li><a href="#">Road No. 2, Hyderabad</a></li>
            <li><a href="#">Telangana 500034</a></li>
            <li><a href="#" style={{ marginTop: '8px', display: 'block' }}>+91 40 1234 5678</a></li>
            <li><a href="#">hello@tigerlilyhyderabad.com</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <div className="footer-hours">
            {hours.map(({ day, val }) => (
              <div className="hour-row" key={day}>
                <span>{day}</span>
                <span className="hour-val">{val}</span>
              </div>
            ))}
            <div className="hours-note">
              Kitchen closes 30 minutes before closing time. Holiday hours may vary.
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Tigerlily Cafe, Hyderabad. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
