import { profile } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About me</span>
          <h2 className="section-title">A developer who ships, end to end.</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-card">
            <div className="about-row">
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="about-row">
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="about-row">
              <span>Phone</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div className="about-row">
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                harsh-vardhan-g
              </a>
            </div>
            <div className="about-row">
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                harshvgupta1
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
