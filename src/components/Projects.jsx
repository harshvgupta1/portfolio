import { projects } from '../data/content'

const icons = ['🖥️', '⚙️', '🔄', '🛠️']

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
                  <span className="project-icon" aria-hidden="true">
                    {icons[index % icons.length]}
                  </span>
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
