import './Marquee.css'

const items = [
  'Artisan Coffee',
  'Botanical Teas',
  'Handcrafted Brews',
  'Garden Fresh Cuisine',
  "Hyderabad's Finest",
  'Live Experiences',
  'Single Origin Beans',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item} <div className="mdot"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
