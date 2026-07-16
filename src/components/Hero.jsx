import { profile } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="hero-badge">Available for opportunities</span>

        <h1 className="hero-name">
          Hi, I’m Harsh — I build <em>full-stack products</em> with the MERN stack.
        </h1>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
          </a>
          <a className="btn btn-secondary" href={profile.resumeUrl} download>
            Download resume
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>3+</strong>
            <span>Years experience</span>
          </div>
          <div className="hero-stat">
            <strong>4</strong>
            <span>Product surfaces</span>
          </div>
          <div className="hero-stat">
            <strong>10+</strong>
            <span>API integrations</span>
          </div>
          <div className="hero-stat">
            <strong>MERN</strong>
            <span>Core stack</span>
          </div>
        </div>
      </div>
    </section>
  )
}
