import { useNavigate } from 'react-router-dom'
import './Events.css'

const events = [
  {
    date: 'May 18, 2026',
    title: 'Sunday Jazz & Brew Session',
    desc: "A lazy Sunday afternoon with live jazz by Hyderabad's finest quartet, paired with our signature botanical coffee flights and seasonal small plates.",
    time: '4:00 PM – 8:00 PM',
    ticket: '₹500 per person',
    delay: 100,
  },
  {
    date: 'May 24, 2026',
    title: 'Terrarium & Tea Workshop',
    desc: 'Create your own miniature botanical world while sipping our curated herbal tea flights. Expert guidance, all materials included.',
    time: '11:00 AM – 1:30 PM',
    ticket: '₹1,200 per person',
    delay: 200,
  },
  {
    date: 'Jun 7, 2026',
    title: 'Monsoon Tasting Menu',
    desc: 'A five-course seasonal menu inspired by the first rains — petrichor, wild herbs and forest flavours presented on the plate as poetry.',
    time: '7:00 PM – 10:00 PM',
    ticket: '₹2,200 per person',
    delay: 300,
  },
]

export default function Events() {
  const navigate = useNavigate()

  const handleParticipate = (event) => {
    navigate('/events/participate-form', {
      state: { event: { title: event.title, date: event.date, time: event.time, ticket: event.ticket } }
    })
  }

  return (
    <section id="events">
      <div className="sec-header" data-aos="fade-up">
        <div className="section-label" style={{ color: 'rgba(201,168,76,0.8)' }}>
          <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
          Upcoming
          <div className="gold-line" style={{ background: 'rgba(201,168,76,0.6)' }}></div>
        </div>
        <h2 style={{ color: 'white', marginTop: '14px' }}>
          Events &amp; <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Experiences</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)' }}>
          From intimate jazz evenings to botanical terrarium workshops — we host moments worth remembering.
        </p>
      </div>

      <div className="events-grid">
        {events.map(({ date, title, desc, time, ticket, delay }) => (
          <div className="event-card" key={title} data-aos="fade-up" data-aos-delay={delay}>
            <div className="event-date">
              <i className="far fa-calendar-alt" style={{ color: 'var(--gold)', fontSize: '0.7rem' }}></i>
              <span>{date}</span>
            </div>
            <div className="event-title">{title}</div>
            <div className="event-desc">{desc}</div>
            <div className="event-meta">
              <div className="event-meta-item">
                <i className="fas fa-clock"></i> {time}
              </div>
              <div className="event-meta-item">
                <i className="fas fa-ticket-alt"></i> {ticket}
              </div>
            </div>
            <button
              className="event-participate-btn"
              onClick={() => handleParticipate({ title, date, time, ticket })}
            >
              Reserve Your Seat <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="events-host-wrap" data-aos="fade-up" data-aos-delay="200">
        <p className="events-host-label">Have a vision for your own event?</p>
        <button className="events-host-btn" onClick={() => navigate('/events/host-event')}>
          Host an Event at Tigerlily <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  )
}
