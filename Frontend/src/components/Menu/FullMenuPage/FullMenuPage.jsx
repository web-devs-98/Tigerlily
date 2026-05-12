import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLenis } from '../../../lib/lenis'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { BRANCH_MENU } from '../../../data/menuData'
import './FullMenuPage.css'

export default function FullMenuPage() {
  const [menuState,      setMenuState]      = useState('branch-picker')
  const [selectedBranch, setSelectedBranch] = useState(null)
  const navigate = useNavigate()

  useEffect(() => { const l = getLenis(); l ? l.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0) }, [])

  const selectBranch = (key) => {
    setSelectedBranch(key)
    setMenuState('full-menu')
  }

  const goBack = () => {
    setMenuState('branch-picker')
    setSelectedBranch(null)
  }

  return (
    <>
      <Navbar />

      {/* ── Page hero header ── */}
      <div className="fmp-hero">
        {/* Botanical SVG decorations */}
        <div className="fmp-botanical">
          <svg className="fmp-leaf fmp-leaf-1" viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg">
            <path d="M210 560 C160 460 40 350 40 200 C40 90 110 20 210 20 C310 20 380 90 380 200 C380 350 260 460 210 560Z" fill="#4A7C5A"/>
            <line x1="210" y1="20" x2="210" y2="560" stroke="#2D5A3D" strokeWidth="2.5"/>
            <line x1="210" y1="160" x2="100" y2="260" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
            <line x1="210" y1="220" x2="320" y2="300" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
            <line x1="210" y1="300" x2="120" y2="380" stroke="#2D5A3D" strokeWidth="1.5" opacity="0.6"/>
          </svg>
          <svg className="fmp-leaf fmp-leaf-2" viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="180" cy="240" rx="160" ry="230" fill="#7BA888" transform="rotate(-15 180 240)"/>
          </svg>
        </div>

        <div className="fmp-hero-content">
          <div className="section-label" style={{ color: 'rgba(201,168,76,0.8)', justifyContent: 'center' }}>
            <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
            Tigerlily Cafe
            <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
          </div>

          <h1 className="fmp-title">Our Full <em>Menu</em></h1>

          <div className="fmp-divider">
            <div className="fmp-dl fmp-dl-left"></div>
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path d="M11 2C11 2 4.5 6.5 4.5 12C4.5 15.6 7.4 18.5 11 18.5C14.6 18.5 17.5 15.6 17.5 12C17.5 6.5 11 2 11 2Z" fill="#C9A84C"/>
              <circle cx="11" cy="12" r="2.5" fill="#1A3329"/>
            </svg>
            <div className="fmp-dl fmp-dl-right"></div>
          </div>

          <p className="fmp-subtitle">
            Select your nearest branch to explore the complete seasonal menu
          </p>
        </div>
      </div>

      {/* ── Page body ── */}
      <div className="fmp-body">

        {/* Branch picker */}
        {menuState === 'branch-picker' && (
          <div className="fmp-branch-picker">
            <p className="fmp-branch-label">Choose your nearest branch</p>
            <div className="fmp-branch-cards">
              {Object.entries(BRANCH_MENU).map(([key, branch]) => (
                <button key={key} className="fmp-branch-card" onClick={() => selectBranch(key)}>
                  <i className="fas fa-map-marker-alt"></i>
                  <span className="fmp-branch-name">{branch.label}</span>
                  <span className="fmp-branch-addr">{branch.address}</span>
                  <span className="fmp-branch-cta">
                    View Menu <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Full text menu */}
        {menuState === 'full-menu' && selectedBranch && (
          <div className="fmp-full-menu">
            <div className="fmp-full-menu-header">
              <button className="fmp-back-btn" onClick={goBack}>
                <i className="fas fa-arrow-left"></i> All Branches
              </button>
              <div className="fmp-branch-tag">
                <i className="fas fa-map-marker-alt"></i>
                {BRANCH_MENU[selectedBranch].label}
              </div>
            </div>

            <div className="fmp-menu-grid">
              {BRANCH_MENU[selectedBranch].categories.map(cat => (
                <div key={cat.name} className="fmp-category">
                  <h3 className="fmp-cat-title">{cat.name}</h3>
                  <ul className="fmp-item-list">
                    {cat.items.map(item => (
                      <li key={item.name} className="fmp-item">
                        <span className="fmp-item-name">{item.name}</span>
                        <span className="fmp-item-dots"></span>
                        <span className="fmp-item-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="fmp-reserve-nudge">
              <p>Ready to visit? Reserve your table.</p>
              <button
                className="fmp-reserve-btn"
                onClick={() => navigate('/', { state: { scrollTo: 'reservation' } })}
              >
                Reserve a Table <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}
