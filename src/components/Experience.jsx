import { education, experience } from '../data/content'

export default function Experience() {
  return (
    <section className="section section-soft" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I’ve been building.</h2>
          <p className="section-lead">
            Full-stack delivery for Reelax — APIs, React apps, integrations, and AI automation.
          </p>
        </div>

        <div className="xp-timeline">
          {experience.map((job) => (
            <article className="xp-card" key={`${job.company}-${job.role}`}>
              <div className="xp-top">
                <h3>{job.role}</h3>
                <span className="xp-period">{job.period}</span>
              </div>
              <p className="xp-company">{job.company}</p>
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
      </div>
    </section>
  )
}
