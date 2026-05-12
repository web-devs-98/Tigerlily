import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dot = useRef(null)

  useEffect(() => {
    const move = (e) => {
      dot.current.style.opacity = '1'
      dot.current.style.setProperty('--tx', `${e.clientX}px`)
      dot.current.style.setProperty('--ty', `${e.clientY}px`)
    }
    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-dot" ref={dot} style={{ opacity: 0 }} />
}
