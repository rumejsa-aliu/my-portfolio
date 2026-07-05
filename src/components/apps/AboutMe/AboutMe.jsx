import styles from './AboutMe.module.css'

const LocationIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2C5.8 2 4 3.8 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.2-1.8-4-4-4z"/>
    <circle cx="8" cy="6" r="1.2"/>
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1C4.1 1 1 4.1 1 8c0 3.1 2 5.7 4.8 6.6.4.1.5-.2.5-.4v-1.4c-2 .4-2.5-.5-2.7-1-.1-.2-.5-.8-.8-1-.3-.1-.7-.5 0-.5.6 0 1 .6 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.3c0 .2.1.5.5.4C13 13.7 15 11.1 15 8c0-3.9-3.1-7-7-7z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="1" width="14" height="14" rx="2"/>
    <path d="M5 7v4M5 5v.5"/>
    <path d="M8 11V8.5C8 7.7 8.7 7 9.5 7S11 7.7 11 8.5V11"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="14" height="10" rx="1.5"/>
    <polyline points="1,4 8,9 15,4"/>
  </svg>
)

const LANGUAGES = [
  { name: 'Albanian',   level: 'Native',        fill: 100 },
  { name: 'English',    level: 'Fluent',         fill: 90  },
  { name: 'Macedonian', level: 'Conversational', fill: 55  },
]

const ArtPanel = () => (
  <svg
    className={styles.leftSvg}
    viewBox="0 0 180 600"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <radialGradient id="aboutGlow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.07"/>
        <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0"/>
      </radialGradient>
    </defs>

    <rect width="180" height="600" fill="#0a0a0c"/>
    <rect width="180" height="600" fill="url(#aboutGlow)"/>

    <text
      x="90"
      y="340"
      textAnchor="middle"
      fontSize="280"
      fontWeight="700"
      fontFamily="'Segoe UI', system-ui, sans-serif"
      fill="#1E3A5F"
      opacity="0.04"
      letterSpacing="-20"
    >
      RA
    </text>

    <circle cx="90" cy="300" r="100" stroke="#1E3A5F" strokeWidth="0.4" fill="none" strokeDasharray="3 5" opacity="0.12"/>
    <circle cx="90" cy="300" r="65" stroke="#1E3A5F" strokeWidth="0.4" fill="none" opacity="0.08"/>

    <path d="M90 160 L160 420 L20 420 Z" stroke="#1E3A5F" strokeWidth="0.4" fill="none" opacity="0.07"/>

    <line x1="90" y1="20" x2="90" y2="100" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.12" strokeLinecap="round"/>
    <line x1="90" y1="500" x2="90" y2="580" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.12" strokeLinecap="round"/>
    <line x1="0" y1="300" x2="30" y2="300" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.12" strokeLinecap="round"/>
    <line x1="150" y1="300" x2="180" y2="300" stroke="#1E3A5F" strokeWidth="0.5" opacity="0.12" strokeLinecap="round"/>

    <circle cx="20" cy="40" r="1.5" fill="#1E3A5F" opacity="0.25"/>
    <circle cx="160" cy="560" r="1.5" fill="#1E3A5F" opacity="0.25"/>

    <line x1="84" y1="20" x2="96" y2="20" stroke="#2A2A30" strokeWidth="0.5" opacity="0.4"/>
    <line x1="84" y1="580" x2="96" y2="580" stroke="#2A2A30" strokeWidth="0.5" opacity="0.4"/>
  </svg>
)

function AboutMe() {
  return (
    <div className={styles.container}>

      <div className={styles.left}>
        <ArtPanel />
      </div>

      <div className={styles.right}>

        <div className={styles.section}>
          <div className={styles.name}>Hi, I'm Rumejsa.</div>
          <div className={styles.role}>Frontend Developer · React · Next.js</div>
          <div className={styles.location}>
            <LocationIcon />
            Skopje, North Macedonia
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>About</div>
          <p className={styles.bio}>
            I'm a Computer Engineering student with a passion for building
            thoughtful, user-focused web applications. What I enjoy most
            isn't just writing code, it's taking an idea, shaping it piece
            by piece, and turning it into something that feels intuitive,
            polished, and genuinely enjoyable to use.
          </p>
          <p className={styles.bio}>
            I've always believed that good software is about more than
            functionality. Every detail matters, starting from the way an interface
            looks to the way it responds, because great user experiences
            are built through hundreds of small decisions.
          </p>
          <p className={styles.bio}>
            I'm still early in my journey, but I've already had the
            opportunity to develop software for a real client alongside
            my academic projects. Every new challenge is another chance
            to learn and become a better developer than I was yesterday.
          </p>
        </div>

        <div className={styles.pullQuote}>
          <div className={styles.pullQuoteLine} />
          <p className={styles.pullQuoteText}>
            Outside of programming, I'm drawn to art in all its forms,
            especially drawing and painting. That perspective naturally
            influences how I approach software. I don't just want to build
            applications that work; I want to build experiences that people remember.
          </p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>Languages</div>
          <div className={styles.languages}>
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className={styles.language}>
                <span className={styles.languageName}>{lang.name}</span>
                <div className={styles.languageBar}>
                  <div
                    className={styles.languageBarFill}
                    style={{ width: `${lang.fill}%` }}
                  />
                </div>
                <span className={styles.languageLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>Find me</div>
          <div className={styles.links}>
            <a className={styles.link} href="https://github.com" target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a className={styles.link} href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe