import { useEffect } from 'react'
import './Loader.css'

export default function Loader({ exiting, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2300)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`loader${exiting ? ' loader--exit' : ''}`} aria-label="Loading Tigerlily">
      <div className="loader-inner">
        <svg className="loader-leaf" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 4 C14 12,6 30,10 54 C18 44,26 28,30 4Z" fill="rgba(201,168,76,0.45)" />
          <path d="M30 4 C46 12,54 30,50 54 C42 44,34 28,30 4Z" fill="rgba(201,168,76,0.28)" />
          <line x1="30" y1="6" x2="30" y2="74" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
        </svg>
        <div className="loader-brand">Tigerlily</div>
        <div className="loader-sub">Jubilee Hills · Hyderabad</div>
        <div className="loader-line" />
      </div>
    </div>
  )
}
