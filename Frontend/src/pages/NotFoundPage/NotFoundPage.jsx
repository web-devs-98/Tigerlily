import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="nfp-root">

      {/* Ghost 404 background numeral */}
      <div className="nfp-ghost">404</div>

      {/* Botanical leaf decorations */}
      <div className="nfp-botanical">
        <svg className="nfp-leaf nfp-leaf-1" viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg">
          <path d="M210 560 C160 460 40 350 40 200 C40 90 110 20 210 20 C310 20 380 90 380 200 C380 350 260 460 210 560Z" fill="#4A7C5A"/>
          <line x1="210" y1="20"  x2="210" y2="560" stroke="#2D5A3D" strokeWidth="2.5"/>
          <line x1="210" y1="160" x2="100" y2="260" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
          <line x1="210" y1="220" x2="320" y2="300" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
          <line x1="210" y1="300" x2="120" y2="380" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
        </svg>
        <svg className="nfp-leaf nfp-leaf-2" viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="180" cy="240" rx="160" ry="230" fill="#7BA888" transform="rotate(-15 180 240)"/>
        </svg>
        <svg className="nfp-leaf nfp-leaf-3" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 400 C110 320 30 240 30 140 C30 60 80 10 150 10 C220 10 270 60 270 140 C270 240 190 320 150 400Z" fill="#3D6B4F"/>
          <line x1="150" y1="10" x2="150" y2="400" stroke="#2D5A3D" strokeWidth="2" opacity="0.7"/>
        </svg>
      </div>

      {/* Ambient glow */}
      <div className="nfp-glow" />

      {/* Main content */}
      <div className="nfp-content">
        <div className="nfp-label">
          <div className="nfp-line"></div>
          Tigerlily Cafe
          <div className="nfp-line"></div>
        </div>

        <h1 className="nfp-title">
          Lost in the <em>Garden</em>
        </h1>

        <div className="nfp-divider">
          <div className="nfp-dl nfp-dl-left"></div>
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C11 2 4.5 6.5 4.5 12C4.5 15.6 7.4 18.5 11 18.5C14.6 18.5 17.5 15.6 17.5 12C17.5 6.5 11 2 11 2Z" fill="#C9A84C"/>
            <circle cx="11" cy="12" r="2.5" fill="#1A3329"/>
          </svg>
          <div className="nfp-dl nfp-dl-right"></div>
        </div>

        <p className="nfp-subtitle">
          This path doesn't exist in our world.<br />
          Allow us to guide you back.
        </p>

        <div className="nfp-actions">
          <button className="nfp-btn-primary" onClick={() => navigate('/')}>
            Return Home <i className="fas fa-arrow-right"></i>
          </button>
          <button className="nfp-btn-ghost" onClick={() => navigate('/menu/full-menu')}>
            Explore the Menu
          </button>
        </div>
      </div>

    </div>
  )
}
