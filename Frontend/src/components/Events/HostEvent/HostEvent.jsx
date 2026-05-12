import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './HostEvent.css'

export default function HostEvent() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '', email: '', phone: '', organization: '',
    eventTitle: '', eventType: '', date: '', guests: '', timeSlot: '', description: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/events/host', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setSubmitted(true)
        setForm({
          name: '', email: '', phone: '', organization: '',
          eventTitle: '', eventType: '', date: '', guests: '', timeSlot: '', description: ''
        })
        setTimeout(() => setSubmitted(false), 3500)
      } else {
        alert('Failed to submit event proposal. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting event proposal:', error)
      alert('An error occurred. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const goBack = () => navigate('/', { state: { scrollTo: 'events' } })

  return (
    <>
      <Navbar />

      <div className="he-hero">
        <button className="he-back-btn" onClick={goBack}>
          <i className="fas fa-arrow-left"></i> Back to Events
        </button>

        <div className="he-hero-content">
          <div className="section-label" style={{ color: 'rgba(201,168,76,0.8)', justifyContent: 'center' }}>
            <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
            Tigerlily Cafe
            <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
          </div>
          <h1 className="he-title">Propose an <em>Event</em></h1>
          <p className="he-subtitle">Tell us about your vision and we'll be in touch.</p>
        </div>
      </div>

      <div className="he-body">
        {submitted ? (
          <div className="he-success">
            <i className="fas fa-check-circle"></i>
            <p>We've received your proposal. Our events team will reach out within <strong>2–3 business days</strong>.</p>
          </div>
        ) : (
          <form className="he-form" onSubmit={handleSubmit}>
            <div className="he-field">
              <label>Organizer Name</label>
              <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="he-field">
              <label>Email Address</label>
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="he-field">
              <label>Phone Number</label>
              <input name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} required />
            </div>
            <div className="he-field">
              <label>Organization / Company <span>(optional)</span></label>
              <input name="organization" type="text" placeholder="Your organization" value={form.organization} onChange={handleChange} />
            </div>
            <div className="he-field he-field--full">
              <label>Event Title</label>
              <input name="eventTitle" type="text" placeholder="What would you like to call this event?" value={form.eventTitle} onChange={handleChange} required />
            </div>
            <div className="he-field">
              <label>Event Type</label>
              <select name="eventType" value={form.eventType} onChange={handleChange} required>
                <option value="" disabled>Select a type</option>
                <option>Workshop</option>
                <option>Music / Performance</option>
                <option>Food &amp; Tasting</option>
                <option>Private Party</option>
                <option>Corporate</option>
                <option>Pop-up</option>
                <option>Other</option>
              </select>
            </div>
            <div className="he-field">
              <label>Preferred Date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange} required />
            </div>
            <div className="he-field">
              <label>Expected Guest Count</label>
              <select name="guests" value={form.guests} onChange={handleChange} required>
                <option value="" disabled>Select range</option>
                <option>Up to 20</option>
                <option>20–50</option>
                <option>50–100</option>
                <option>100+</option>
              </select>
            </div>
            <div className="he-field">
              <label>Preferred Time Slot</label>
              <select name="timeSlot" value={form.timeSlot} onChange={handleChange} required>
                <option value="" disabled>Select a slot</option>
                <option>Morning (9AM–12PM)</option>
                <option>Afternoon (12PM–4PM)</option>
                <option>Evening (5PM–9PM)</option>
                <option>Flexible</option>
              </select>
            </div>
            <div className="he-field he-field--full">
              <label>Event Description / Vision</label>
              <textarea name="description" rows={4} placeholder="Tell us about your event concept, theme, special requirements…" value={form.description} onChange={handleChange} required />
            </div>
            <button className="he-submit-btn" type="submit" disabled={loading}>
              {loading ? 'Submitting...' : <><>Submit Proposal </> <i className="fas fa-arrow-right"></i></>}
            </button>
          </form>
        )}
      </div>

      <Footer />
    </>
  )
}
