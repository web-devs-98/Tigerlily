import './VideoSection.css'

export default function VideoSection() {
  return (
    <section className="vs-wrap">
      <video
        className="vs-video"
        src="/videos/cafe.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="vs-overlay" />
      <div className="vs-content" data-aos="fade-up">
        <div className="vs-eyebrow">The Tigerlily Experience</div>
        <p className="vs-quote">
          "Every corner tells a story.<br />
          Every sip, a pause worth taking."
        </p>
      </div>
    </section>
  )
}
