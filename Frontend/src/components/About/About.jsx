import './About.css'
import cafeImg from '../../assets/storypg-main.png'
import coffeeImg from '../../assets/storypg-coffee.png'

export default function About() {
  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-img-wrap" data-aos="fade-right">
          <img
            src={cafeImg}
            alt="Tigerlily Cafe Interior"
            className="about-img-main"
          />
          <img
            src={coffeeImg}
            alt="Barista crafting coffee"
            className="about-img-float"
          />
          <div className="about-stat-badge">
            <div className="stat-num">4.9★</div>
            <div className="stat-lbl">Guest Rating</div>
          </div>
        </div>

        <div className="about-text" data-aos="fade-left" data-aos-delay="200">
          <div className="section-label" style={{ justifyContent: 'flex-start' }}>
            <div className="gold-line"></div> Our Story <div className="gold-line"></div>
          </div>
          <h2 style={{ marginTop: '18px' }}>
            Born from a <em>love of flora</em> &amp; fine coffee
          </h2>
          <p>
            Tigerlily was conceived as a living, breathing garden where the city's pace dissolves into
            the rustle of leaves. Nestled in the heart of Hyderabad, every corner was crafted to feel
            like stepping into a lush conservatory — somewhere between a tropical greenhouse and an
            intimate salon.
          </p>
          <p>
            We source our beans from single-origin farms in Coorg and Araku Valley, our herbs fresh
            from our own rooftop garden, and our seasonal menu draws from Hyderabad's rich culinary
            heritage — reimagined with botanical finesse and a global palate.
          </p>

          <div className="about-feats">
            {[
              { icon: 'fa-leaf', title: 'Botanical Sourcing', desc: 'Fresh herbs from our rooftop garden' },
              { icon: 'fa-coffee', title: 'Single Origin', desc: 'Coorg & Araku Valley beans' },
              { icon: 'fa-heart', title: 'Made with Soul', desc: 'Every cup, crafted by hand' },
            ].map(({ icon, title, desc }) => (
              <div className="about-feat" key={title}>
                <div className="feat-icon"><i className={`fas ${icon}`}></i></div>
                <div className="feat-text">
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
