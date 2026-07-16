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

        {education.map((edu) => (
          <div className="edu-card" key={edu.school}>
            <div>
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
