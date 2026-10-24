import { education, experience, languages } from '../data/content'

export default function Experience() {
  return (
    <section className="section section-soft" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I’ve been building.</h2>
          <p className="section-lead">
            Full-stack delivery &amp; Next.js platforms — 60+ REST APIs, microservices, payment gateways, and AI automation.
          </p>
        </div>

        <div className="xp-timeline">
          {experience.map((job) => (
            <article className="xp-card" key={`${job.company}-${job.role}`}>
              <div className="xp-top">
                <h3>{job.role}</h3>
                <span className="xp-period">{job.period}</span>
              </div>
              <p className="xp-company">
                {job.company}
                {job.location ? ` · ${job.location}` : ''}
              </p>
              {job.summary && <p className="xp-summary">{job.summary}</p>}
              <ul className="xp-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {education.map((edu) => (
          <div className="edu-card" key={edu.school}>
            <div className="edu-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 13v4.5c0 .8 2.2 2.5 5 2.5s5-1.7 5-2.5V13"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="edu-copy">
              <h4>{edu.degree}</h4>
              <p>{edu.school}</p>
            </div>
            <span className="edu-badge">
              {edu.period} · {edu.detail}
            </span>
          </div>
        ))}

        {languages && languages.length > 0 && (
          <div className="edu-card languages-card">
            <div className="edu-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="edu-copy">
              <h4>Languages</h4>
              <p>
                {languages.map((l) => `${l.name} (${l.proficiency})`).join(' · ')}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
