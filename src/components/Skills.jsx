import { skills } from '../data/content'

export default function Skills() {
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
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-card" key={group}>
              <h3>{group}</h3>
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
