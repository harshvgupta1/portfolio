import { projects } from '../data/content'

const icons = [
  <svg key="fe" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
  <svg key="be" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 7h16M4 12h16M4 17h10"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <circle cx="18" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.7" />
  </svg>,
  <svg key="ms" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M20 12a8 8 0 0 1-8 8v-4a4 4 0 0 0 4-4h4Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="ad" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4V7Z"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path d="M4 11h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">What I’ve built on Reelax.</h2>
          <p className="section-lead">
            An influencer marketing platform — I work across its frontend apps, core API, and
            background services.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const CardTag = project.liveUrl ? 'a' : 'article'
            const linkProps = project.liveUrl
              ? { href: project.liveUrl, target: '_blank', rel: 'noreferrer' }
              : {}

            return (
              <CardTag className="project-card" key={project.title} {...linkProps}>
                <div className="project-top">
                  <span className="project-icon">{icons[index % icons.length]}</span>
                  {project.liveUrl ? (
                    <svg
                      className="project-arrow"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12L12 4M12 4H5.5M12 4v6.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </div>
                <span className="project-tag">{project.role}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
