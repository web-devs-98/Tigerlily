import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './ParticipateForm.css'

export default function ParticipateForm() {
  const location = useLocation()
  const navigate  = useNavigate()
  const event     = location.state?.event

  const [form, setForm]           = useState({ name: '', email: '', phone: '', guests: '1', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  const goBack = () => navigate('/', { state: { scrollTo: 'events' } })

  return (
    <>
      <Navbar />

      <div className="pf-hero">
        <button className="pf-back-btn" onClick={goBack}>
          <i className="fas fa-arrow-left"></i> Back to Events
        </button>

        <div className="pf-hero-content">
          <div className="section-label" style={{ color: 'rgba(201,168,76,0.8)', justifyContent: 'center' }}>
            <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
            Tigerlily Cafe
            <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
          </div>
          <h1 className="pf-title">Event <em>Registration</em></h1>

          {event ? (
            <div className="pf-event-summary">
              <div className="pf-event-name">{event.title}</div>
              <div className="pf-event-meta">
                <span><i className="far fa-calendar-alt"></i> {event.date}</span>
                <span><i className="fas fa-clock"></i> {event.time}</span>
                <span><i className="fas fa-ticket-alt"></i> {event.ticket}</span>
              </div>
            </div>
          ) : (
            <p className="pf-no-event">No event selected. Please go back and choose an event.</p>
          )}
        </div>
      </div>

      <div className="pf-body">
        {event ? (
          submitted ? (
            <div className="pf-success">
              <i className="fas fa-check-circle"></i>
              <p>You're registered! We'll send confirmation details to <strong>{form.email}</strong>.</p>
            </div>
          ) : (
            <form className="pf-form" onSubmit={handleSubmit}>
              <div className="pf-field">
                <label>Full Name</label>
                <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="pf-field">
                <label>Email Address</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="pf-field">
                <label>Phone Number</label>
                <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="pf-field">
                <label>Number of Guests</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                </select>
              </div>
              <div className="pf-field pf-field--full">
                <label>Special Requests <span>(optional)</span></label>
                <textarea name="notes" rows={4} placeholder="Dietary requirements, accessibility needs, etc." value={form.notes} onChange={handleChange} />
              </div>
              <button className="pf-submit-btn" type="submit">
                Confirm Registration <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          )
        ) : (
          <div className="pf-no-event-body">
            <button className="pf-back-btn-body" onClick={goBack}>
              <i className="fas fa-arrow-left"></i> Go to Events
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  )
}
