import { useState } from 'react'
import './Reservation.css'

const details = [
  {
    icon: 'fa-map-marker-alt',
    label: 'Location',
    text: '12/4, Banjara Hills Road No. 2, Hyderabad, Telangana 500034',
  },
  {
    icon: 'fa-clock',
    label: 'Hours',
    text: 'Mon–Fri: 8:00 AM – 10:00 PM\nSat–Sun: 9:00 AM – 11:00 PM',
  },
  {
    icon: 'fa-phone',
    label: 'Call Us',
    text: '+91 40 1234 5678',
  },
  {
    icon: 'fa-envelope',
    label: 'Email',
    text: 'hello@tigerlilyhyderabad.com',
  },
]

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section id="reservation">
      <div className="res-wrapper">
        <div className="res-info" data-aos="fade-right">
          <div className="section-label" style={{ justifyContent: 'flex-start' }}>
            <div className="gold-line"></div> Reserve <div className="gold-line"></div>
          </div>
          <h2>
            Book your table at <em>Tigerlily</em>
          </h2>
          <p>
            Whether it's an intimate date, a family brunch, or a celebration — we'll set the scene.
            Reserve your spot at Hyderabad's most beautiful botanical cafe.
          </p>

          <div className="res-details">
            {details.map(({ icon, label, text }) => (
              <div className="res-detail" key={label}>
                <div className="res-icon"><i className={`fas ${icon}`}></i></div>
                <div className="res-detail-text">
                  <strong>{label}</strong>
                  <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="res-form" data-aos="fade-left" data-aos-delay="200">
          <div className="res-form-title">Make a Reservation</div>
          <div className="res-form-sub">We'll confirm your booking within 2 hours</div>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Arjun" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Sharma" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Number of Guests</label>
              <select>
                <option>1 Person</option>
                <option>2 People</option>
                <option defaultValue>3–4 People</option>
                <option>5–6 People</option>
                <option>7+ People</option>
              </select>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" />
            </div>
          </div>
          <div className="form-group">
            <label>Special Requests</label>
            <textarea rows="3" placeholder="Dietary requirements, celebrations, seating preferences..."></textarea>
          </div>
          <button
            className={`form-submit ${submitted ? 'sent' : ''}`}
            onClick={handleSubmit}
          >
            {submitted ? '✓ Reservation Sent!' : 'Confirm Reservation →'}
          </button>
        </div>
      </div>
    </section>
  )
}
