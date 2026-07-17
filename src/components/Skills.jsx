import { skills } from '../data/content'

export default function Skills() {
  const entries = Object.entries(skills)

  return (
    <section className="section section-soft" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">My toolbox.</h2>
          <p className="section-lead">
            The technologies and practices I rely on to ship reliable product features.
          </p>
        </div>

        <div className="skills-grid">
          {entries.map(([group, items], index) => (
            <div className="skill-card" key={group}>
              <div className="skill-card-head">
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{group}</h3>
              </div>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
