import styles from './StartMenu.module.css'

const Icons = {
  about: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="5" r="2" />
      <path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,11 6,6 9,9 14,3" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="12" height="9" rx="1" />
      <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="1" width="10" height="14" rx="1" />
      <line x1="6" y1="5" x2="10" y2="5" />
      <line x1="6" y1="8" x2="10" y2="8" />
      <line x1="6" y1="11" x2="9" y2="11" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="14" height="10" rx="1.5" />
      <polyline points="1,4 8,9 15,4" />
    </svg>
  ),
}

const APPS = [
  { id: 'about',    name: 'About Me',  desc: 'Who I am' },
  { id: 'skills',   name: 'Skills',    desc: 'Technologies I work with' },
  { id: 'projects', name: 'Projects',  desc: 'Things I have built' },
  { id: 'resume',   name: 'Resume',    desc: 'My CV' },
  { id: 'contact',  name: 'Contact',   desc: 'Get in touch' },
]

function StartMenu({ onClose, onOpenApp, onShutdown }) {
  function handleAppClick(appId) {
    onOpenApp(appId)
    onClose()
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.startMenu}>
        <div className={styles.header}>
          <div className={styles.username}>Rumejsa</div>
          <div className={styles.subtitle}>Portfolio OS</div>
        </div>

        <div className={styles.appGrid}>
          {APPS.map((app) => (
            <button
              key={app.id}
              className={styles.appItem}
              onClick={() => handleAppClick(app.id)}
            >
              <div className={styles.appIcon}>
                {Icons[app.id]}
              </div>
              <div>
                <div className={styles.appName}>{app.name}</div>
                <div className={styles.appDesc}>{app.desc}</div>
              </div>
            </button>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.shutdownBtn} onClick={onShutdown}>⏻ Shut down</button>
        </div>
      </div>
    </>
  )
}

export default StartMenu 