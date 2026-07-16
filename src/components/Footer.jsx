import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}
        </p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github.com/harshvgupta1
          </a>
          {' · '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </div>
    </footer>
  )
}
