import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.css'

const menuData = {
  drinks: [
    {
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
      tag: 'Signature',
      name: 'Tigerlily Latte',
      desc: 'Single-origin espresso with butterfly pea flower milk, saffron foam & edible tiger lily petals',
      price: '₹320',
    },
    {
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
      tag: 'Cold Brew',
      name: 'Forest Cold Brew',
      desc: '18-hour cold-steeped Araku beans with fresh mint, basil & a hint of bergamot',
      price: '₹280',
    },
    {
      img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
      tag: 'Botanical Tea',
      name: 'Rose & Hibiscus Bloom',
      desc: 'Loose-leaf herbal blend with dried rose, hibiscus, cardamom & lemongrass',
      price: '₹220',
    },
  ],
  food: [
    {
      img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
      tag: 'Signature',
      name: 'Garden Harvest Bowl',
      desc: 'Seasonal roasted vegetables over quinoa, pomegranate molasses, herb yogurt & toasted seeds',
      price: '₹480',
    },
    {
      img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
      tag: 'Brunch',
      name: 'Botanical Avocado Toast',
      desc: 'Sourdough, smashed avocado, microgreens, chilli oil, pickled radish & poached egg',
      price: '₹420',
    },
    {
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
      tag: 'Mains',
      name: 'Forest Mushroom Pasta',
      desc: 'Handmade tagliatelle, wild forest mushrooms, truffle cream, sage butter & aged parmesan',
      price: '₹540',
    },
  ],
  desserts: [
    {
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
      tag: 'Patisserie',
      name: 'Petal Chiffon Cake',
      desc: 'Light chiffon with rosewater cream, crystallised edible flowers & raspberry coulis',
      price: '₹380',
    },
    {
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
      tag: 'Frozen',
      name: 'Matcha Tiramisu',
      desc: 'Ceremonial grade matcha, mascarpone cream, hojicha-soaked ladyfingers & matcha dusting',
      price: '₹360',
    },
    {
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
      tag: 'Pastry',
      name: 'Lemon Verbena Tart',
      desc: 'Buttery pastry shell, tangy lemon curd, verbena cream & gold-dusted meringue kisses',
      price: '₹340',
    },
  ],
}

const tabs = [
  { key: 'drinks',   label: 'Drinks' },
  { key: 'food',     label: 'Food' },
  { key: 'desserts', label: 'Desserts' },
]

export default function Menu() {
  const [activeTab, setActiveTab] = useState('drinks')
  const navigate = useNavigate()

  return (
    <section id="menu">
      <div className="sec-header" data-aos="fade-up">
        <div className="section-label" style={{ color: 'rgba(201,168,76,0.8)' }}>
          <div className="gold-line" style={{ background: 'rgba(201,168,76,0.7)' }}></div>
          Our Menu
          <div className="gold-line" style={{ background: 'rgba(201,168,76,0.7)' }}></div>
        </div>
        <h2 style={{ color: 'white', marginTop: '14px' }}>
          Crafted with <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>intention</em>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.55)' }}>
          Each creation reflects seasonal ingredients, mindful preparation, and a deep respect for flavour.
        </p>
      </div>

      <div className="menu-tabs" data-aos="fade-up" data-aos-delay="100">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`menu-tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="menu-grid" data-aos="fade-up">
        {menuData[activeTab].map((item) => (
          <div className="menu-card" key={item.name}>
            <img src={item.img} alt={item.name} className="menu-card-img" />
            <div className="menu-card-body">
              <div className="mc-tag">{item.tag}</div>
              <div className="mc-name">{item.name}</div>
              <div className="mc-desc">{item.desc}</div>
              <div className="mc-footer">
                <div className="mc-price">{item.price}</div>
                <button className="mc-btn"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="menu-viewmore-wrap" data-aos="fade-up">
        <button className="menu-viewmore-btn" onClick={() => navigate('/menu/full-menu')}>
          View Full Menu <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  )
}
