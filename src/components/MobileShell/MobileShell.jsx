import { useState, useEffect } from 'react'
import styles from './MobileShell.module.css'
import AboutMe from '../apps/AboutMe/AboutMe'
import Skills from '../apps/Skills/Skills'
import Projects from '../apps/Projects/Projects'
import Resume from '../apps/Resume/Resume'
import Contact from '../apps/Contact/Contact'

const BackIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4L6 8l4 4"/>
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4l4 4-4 4"/>
  </svg>
)

const PowerIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M8 3v5"/>
    <path d="M5 4.5A5 5 0 1011 4.5"/>
  </svg>
)

const ICONS = {
  about: (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="18" height="14" rx="2" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
      <circle cx="10" cy="12" r="3" fill="#242429" stroke="#1E3A5F" strokeWidth="1.2"/>
      <circle cx="10" cy="11" r="1.2" fill="#4A7AB5"/>
      <path d="M7.5 14.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5" stroke="#4A7AB5" strokeWidth="1" strokeLinecap="round" fill="none"/>
      <line x1="15" y1="11" x2="20" y2="11" stroke="#3A3A42" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="15" y1="13.5" x2="19" y2="13.5" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="4" y="6" width="18" height="2.5" rx="2" fill="#1E3A5F" opacity="0.8"/>
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="5" r="2" fill="#4A7AB5" stroke="#4A7AB5" strokeWidth="0.5"/>
      <circle cx="5" cy="18" r="2" fill="#242429" stroke="#3A3A42" strokeWidth="1"/>
      <circle cx="21" cy="18" r="2" fill="#242429" stroke="#3A3A42" strokeWidth="1"/>
      <circle cx="13" cy="14" r="2.5" fill="#1C1C21" stroke="#1E3A5F" strokeWidth="1.2"/>
      <line x1="13" y1="7" x2="13" y2="11.5" stroke="#4A7AB5" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
      <line x1="11" y1="15.5" x2="6.5" y2="17" stroke="#3A3A42" strokeWidth="1" strokeLinecap="round"/>
      <line x1="15" y1="15.5" x2="19.5" y2="17" stroke="#3A3A42" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="13" cy="14" r="1" fill="#4A7AB5"/>
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="9" width="22" height="14" rx="2" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
      <path d="M2 11V9.5A1.5 1.5 0 013.5 8h5l2 2H22.5A1.5 1.5 0 0124 11.5V11" fill="#242429" stroke="#2A2A30" strokeWidth="1"/>
      <path d="M3.5 8h5l1.5 1.5H3.5A1.5 1.5 0 012 8z" fill="#1E3A5F" opacity="0.6"/>
      <path d="M9 16l-2 2 2 2" stroke="#4A7AB5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 16l2 2-2 2" stroke="#4A7AB5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14" y1="15" x2="12" y2="21" stroke="#3A3A42" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="16" height="22" rx="1.5" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
      <rect x="4" y="2" width="16" height="7" rx="1.5" fill="#242429"/>
      <circle cx="9" cy="5.5" r="2" fill="#4A7AB5" opacity="0.8"/>
      <line x1="13" y1="4.5" x2="18" y2="4.5" stroke="#3A3A42" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="13" y1="6.5" x2="16" y2="6.5" stroke="#2A2A30" strokeWidth="1" strokeLinecap="round"/>
      <line x1="7" y1="12" x2="19" y2="12" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="7" y1="14.5" x2="19" y2="14.5" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="7" y1="17" x2="15" y2="17" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="7" y1="19.5" x2="19" y2="19.5" stroke="#1E3A5F" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="22" height="15" rx="2" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
      <path d="M2 8l11 8 11-8" stroke="#3A3A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M2 21l7-6" stroke="#242429" strokeWidth="1" strokeLinecap="round"/>
      <path d="M24 21l-7-6" stroke="#242429" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="13" cy="13" r="1.5" fill="#4A7AB5" opacity="0.8"/>
      <rect x="2" y="6" width="22" height="2" rx="1" fill="#1E3A5F" opacity="0.4"/>
    </svg>
  ),
}

const APPS = [
  { id: 'about',    name: 'About Me',  desc: 'Who I am'                 },
  { id: 'skills',   name: 'Skills',    desc: 'Technologies I work with'  },
  { id: 'projects', name: 'Projects',  desc: 'Things I have built'       },
  { id: 'resume',   name: 'Resume',    desc: 'My CV'                     },
  { id: 'contact',  name: 'Contact',   desc: 'Get in touch'              },
]

const APP_CONTENT = {
  about:    <AboutMe />,
  skills:   <Skills />,
  projects: <Projects />,
  resume:   <Resume />,
  contact:  <Contact />,
}

function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function MobileShell({ onShutdown }) {
  const [activeApp, setActiveApp] = useState(null)
  const [showShutdown, setShowShutdown] = useState(false)
  const current = APPS.find((a) => a.id === activeApp)

  return (
    <div className={styles.shell}>

      {/* Wallpaper */}
      <svg className={styles.wallpaper} viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="msky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#060608"/>
            <stop offset="55%" stopColor="#0C0C10"/>
            <stop offset="80%" stopColor="#0a0e1a"/>
            <stop offset="100%" stopColor="#0d1528"/>
          </linearGradient>
          <radialGradient id="mglow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="mm1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a22"/><stop offset="100%" stopColor="#0e0e14"/>
          </linearGradient>
          <linearGradient id="mm2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#141418"/><stop offset="100%" stopColor="#0a0a0e"/>
          </linearGradient>
          <linearGradient id="mm3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f0f13"/><stop offset="100%" stopColor="#080809"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="700" fill="url(#msky)"/>
        <rect width="1200" height="700" fill="url(#mglow)"/>
        <g fill="#ffffff" opacity="0.25">
          <circle cx="45" cy="30" r="0.7"/><circle cx="200" cy="45" r="0.6"/>
          <circle cx="390" cy="60" r="0.5"/><circle cx="560" cy="35" r="0.6"/>
          <circle cx="740" cy="50" r="0.8"/><circle cx="900" cy="40" r="0.5"/>
          <circle cx="310" cy="20" r="0.8"/><circle cx="650" cy="18" r="0.5"/>
          <circle cx="820" cy="22" r="0.6"/><circle cx="480" cy="10" r="0.7"/>
        </g>
        <path d="M0 420 L60 310 L130 380 L200 260 L280 340 L360 200 L420 310 L500 180 L560 290 L620 220 L680 320 L740 160 L800 280 L860 190 L920 300 L980 240 L1040 310 L1100 200 L1160 290 L1200 340 L1200 700 L0 700 Z" fill="url(#mm1)"/>
        <path d="M0 480 L40 420 L100 460 L160 380 L240 440 L310 360 L380 430 L450 340 L520 410 L590 370 L650 440 L720 350 L790 420 L850 380 L920 450 L990 370 L1060 440 L1120 390 L1180 450 L1200 460 L1200 700 L0 700 Z" fill="url(#mm2)"/>
        <path d="M0 560 L50 520 L110 540 L170 490 L240 530 L300 500 L370 545 L440 480 L510 535 L580 510 L640 550 L710 490 L770 540 L840 505 L910 555 L970 510 L1040 560 L1110 520 L1160 550 L1200 545 L1200 700 L0 700 Z" fill="url(#mm3)"/>
      </svg>

      {/* Status bar */}
      <div className={styles.statusBar}>
        <span className={styles.statusTime}><Clock /></span>
        <div className={styles.statusRight}>
          <button className={styles.shutdownBtn} onClick={() => setShowShutdown(true)}>
            <PowerIcon />
          </button>
          <svg viewBox="0 0 32 32" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="9" fill="none" stroke="rgba(30,58,95,0.4)" strokeWidth="1.2"/>
            <path d="M16 7 A9 9 0 1 1 9.6 22.4" fill="none" stroke="#4A7AB5" strokeWidth="2.2" strokeLinecap="round"/>
            <circle cx="16" cy="7" r="2" fill="#4A7AB5"/>
            <circle cx="9.6" cy="22.4" r="1.2" fill="#4A7AB5" opacity="0.4"/>
            <circle cx="16" cy="16" r="1.8" fill="#4A7AB5" opacity="0.6"/>
          </svg>
        </div>
      </div>

      {/* Home */}
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <div className={styles.homeName}>Rumejsa Aliu</div>
          <div className={styles.homeRole}>Frontend Developer · React · Next.js</div>
        </div>

        <div className={styles.appList}>
          {APPS.map((app) => (
            <button
              key={app.id}
              className={styles.appItem}
              onClick={() => setActiveApp(app.id)}
            >
              <div className={styles.appItemIcon}>
                {ICONS[app.id]}
              </div>
              <div className={styles.appItemInfo}>
                <div className={styles.appItemName}>{app.name}</div>
                <div className={styles.appItemDesc}>{app.desc}</div>
              </div>
              <div className={styles.appItemArrow}>
                <ArrowIcon />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* App screen */}
      {activeApp && (
        <div className={styles.appScreen}>
          <div className={styles.appBar}>
            <button className={styles.backBtn} onClick={() => setActiveApp(null)}>
              <BackIcon />
            </button>
            <span className={styles.appBarTitle}>{current?.name}</span>
            <div className={styles.appBarIcon}>
              {ICONS[activeApp]}
            </div>
          </div>
          <div className={styles.appContent}>
            {APP_CONTENT[activeApp]}
          </div>
        </div>
      )}

      {/* Shutdown confirm */}
      {showShutdown && (
        <div className={styles.shutdownOverlay}>
          <div className={styles.shutdownCard}>
            <div className={styles.shutdownCardTitle}>Shut down?</div>
            <div className={styles.shutdownCardSub}>You'll be taken back to the start screen.</div>
            <div className={styles.shutdownCardBtns}>
              <button className={styles.cancelBtn} onClick={() => setShowShutdown(false)}>Cancel</button>
              <button className={styles.confirmBtn} onClick={onShutdown}>Shut down</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default MobileShell