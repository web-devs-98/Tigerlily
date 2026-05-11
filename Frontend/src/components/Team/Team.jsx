import './Team.css'

const team = [
  {
    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
    name: 'Arjun Mehta',
    role: 'Head Barista',
    icon: 'fa-coffee',
    bio: 'SCA-certified with 8 years of specialty coffee experience. Arjun trained in Melbourne and brought his passion for precision back to Hyderabad.',
    delay: 80,
  },
  {
    img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80',
    name: 'Priya Rajan',
    role: 'Executive Chef',
    icon: 'fa-utensils',
    bio: 'With roots in Chettinad cooking and training at Le Cordon Bleu Paris, Priya fuses classical technique with hyper-local Telangana ingredients.',
    delay: 180,
  },
  {
    img: 'https://images.unsplash.com/photo-1595475884562-073c30d45670?w=400&q=80',
    name: 'Divya Kapoor',
    role: 'Pastry Chef',
    icon: 'fa-birthday-cake',
    bio: 'A graduate of the Institute of Culinary Education, Divya creates edible art bridging French patisserie with Indian floral traditions.',
    delay: 280,
  },
  {
    img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&q=80',
    name: 'Rohan Pillai',
    role: 'Botanical Director',
    icon: 'fa-leaf',
    bio: "Rohan curates the cafe's living plant collection and rooftop herb garden, ensuring every ingredient is fresh, seasonal and sustainably grown.",
    delay: 380,
  },
]

export default function Team() {
  return (
    <section id="team">
      <div className="sec-header" data-aos="fade-up">
        <div className="section-label">
          <div className="gold-line"></div> The Artisans <div className="gold-line"></div>
        </div>
        <h2 style={{ color: 'var(--deep-green)', marginTop: '14px' }}>
          Hands behind <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>every cup</em>
        </h2>
        <p style={{ color: 'var(--text-mid)' }}>
          Our passionate craftspeople — baristas, chefs, and floralists — bring every creation to life with skill and soul.
        </p>
      </div>

      <div className="team-grid">
        {team.map(({ img, name, role, icon, bio, delay }) => (
          <div className="team-card" key={name} data-aos="fade-up" data-aos-delay={delay}>
            <div className="team-img-wrap">
              <img src={img} alt={name} className="team-img" />
              <div className="team-badge"><i className={`fas ${icon}`}></i></div>
            </div>
            <div className="team-name">{name}</div>
            <div className="team-role">{role}</div>
            <div className="team-bio">{bio}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
