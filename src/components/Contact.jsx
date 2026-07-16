import { profile } from '../data/content'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <h2>Have a project or a role in mind?</h2>
          <p>
            I’m open to full-stack opportunities and collaborations. Drop me an email or connect on
            LinkedIn — I usually reply within a day.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a
              className="btn btn-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
