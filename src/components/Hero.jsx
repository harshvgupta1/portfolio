import { profile } from '../data/content'

const stack = ['MongoDB', 'Express', 'React', 'Node.js']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb--blue" aria-hidden="true" />
      <div className="hero-orb hero-orb--violet" aria-hidden="true" />

      <div className="container">
        <span className="hero-badge">Available for opportunities</span>

        <h1 className="hero-name">
          Hi, I’m Harsh — I build <em>full-stack products</em> with the MERN stack.
        </h1>

        <p className="hero-tagline">{profile.tagline}</p>

        <ul className="hero-stack">
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a className="btn btn-secondary" href={profile.resumeUrl} download>
            Download resume
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>2+</strong>
            <span>Years experience</span>
          </div>
          <div className="hero-stat">
            <strong>4</strong>
            <span>Product surfaces</span>
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
