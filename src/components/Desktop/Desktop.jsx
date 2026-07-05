import { useState, useCallback } from 'react'
import styles from './Desktop.module.css'
import Taskbar from '../Taskbar/Taskbar'
import StartMenu from '../StartMenu/StartMenu'
import Window from '../Window/Window'
import DesktopIcons from '../DesktopIcons/DesktopIcons'
import AboutMe from '../apps/AboutMe/AboutMe'
import Skills from '../apps/Skills/Skills'
import Projects from '../apps/Projects/Projects'
import Resume from '../apps/Resume/Resume'
import Contact from '../apps/Contact/Contact'

let zCounter = 10

const APP_META = {
  about: {
    title: 'About Me',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
        <circle cx="8" cy="5" r="2" />
        <path d="M4 13c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      </svg>
    ),
  },
  skills: {
    title: 'terminal',
    variant: 'terminal',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
        <polyline points="2,11 6,6 9,9 14,3" />
      </svg>
    ),
  },
  projects: {
    title: 'Projects',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
        <rect x="2" y="4" width="12" height="9" rx="1" />
        <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
      </svg>
    ),
  },
  resume: {
    title: 'Resume',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
        <rect x="3" y="1" width="10" height="14" rx="1" />
        <line x1="6" y1="5" x2="10" y2="5" />
        <line x1="6" y1="8" x2="10" y2="8" />
        <line x1="6" y1="11" x2="9" y2="11" />
      </svg>
    ),
  },
  contact: {
    title: 'Contact',
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
        <rect x="1" y="3" width="14" height="10" rx="1.5" />
        <polyline points="1,4 8,9 15,4" />
      </svg>
    ),
  },
}

const Wallpaper = () => (
  <svg
    className={styles.wallpaper}
    viewBox="0 0 1200 700"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#060608"/>
        <stop offset="55%" stopColor="#0C0C10"/>
        <stop offset="80%" stopColor="#1a0a0e"/>
        <stop offset="100%" stopColor="#2d0d15"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="100%" r="60%">
        <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.35"/>
        <stop offset="40%" stopColor="#1E3A5F" stopOpacity="0.08"/>
        <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="glowRight" cx="80%" cy="90%" r="30%">
        <stop offset="0%" stopColor="#0F1F3A" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#0F1F3A" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="mountain1grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a22"/>
        <stop offset="100%" stopColor="#0e0e14"/>
      </linearGradient>
      <linearGradient id="mountain2grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#141418"/>
        <stop offset="100%" stopColor="#0a0a0e"/>
      </linearGradient>
      <linearGradient id="mountain3grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f0f13"/>
        <stop offset="100%" stopColor="#080809"/>
      </linearGradient>
      <linearGradient id="foggrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0"/>
        <stop offset="50%" stopColor="#1E3A5F" stopOpacity="0.06"/>
        <stop offset="100%" stopColor="#0A1420" stopOpacity="0.4"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="700" fill="url(#sky)"/>
    <rect width="1200" height="700" fill="url(#glow)"/>
    <rect width="1200" height="700" fill="url(#glowRight)"/>

    <g fill="#ffffff" opacity="0.4">
      <circle cx="45" cy="30" r="0.7"/><circle cx="120" cy="15" r="0.5"/>
      <circle cx="200" cy="45" r="0.6"/><circle cx="310" cy="20" r="0.8"/>
      <circle cx="390" cy="60" r="0.5"/><circle cx="480" cy="10" r="0.7"/>
      <circle cx="560" cy="35" r="0.6"/><circle cx="650" cy="18" r="0.5"/>
      <circle cx="740" cy="50" r="0.8"/><circle cx="820" cy="22" r="0.6"/>
      <circle cx="900" cy="40" r="0.5"/><circle cx="980" cy="12" r="0.7"/>
      <circle cx="1060" cy="55" r="0.6"/><circle cx="1140" cy="28" r="0.8"/>
      <circle cx="80" cy="80" r="0.5"/><circle cx="170" cy="95" r="0.6"/>
      <circle cx="260" cy="70" r="0.7"/><circle cx="350" cy="100" r="0.5"/>
      <circle cx="440" cy="75" r="0.8"/><circle cx="530" cy="90" r="0.6"/>
      <circle cx="620" cy="65" r="0.5"/><circle cx="710" cy="85" r="0.7"/>
      <circle cx="800" cy="72" r="0.6"/><circle cx="890" cy="92" r="0.5"/>
      <circle cx="970" cy="68" r="0.8"/><circle cx="1050" cy="88" r="0.6"/>
      <circle cx="1130" cy="75" r="0.5"/><circle cx="25" cy="130" r="0.7"/>
      <circle cx="145" cy="140" r="0.5"/><circle cx="290" cy="120" r="0.6"/>
      <circle cx="420" cy="150" r="0.7"/><circle cx="575" cy="130" r="0.5"/>
      <circle cx="695" cy="145" r="0.6"/><circle cx="840" cy="115" r="0.8"/>
      <circle cx="960" cy="135" r="0.5"/><circle cx="1100" cy="125" r="0.7"/>
    </g>

    <g fill="#ffffff" opacity="0.7">
      <circle cx="95" cy="48" r="1"/><circle cx="280" cy="32" r="1.2"/>
      <circle cx="470" cy="55" r="0.9"/><circle cx="660" cy="28" r="1.1"/>
      <circle cx="850" cy="60" r="1"/><circle cx="1020" cy="38" r="1.2"/>
      <circle cx="180" cy="110" r="0.9"/><circle cx="400" cy="95" r="1"/>
      <circle cx="590" cy="115" r="1.1"/><circle cx="780" cy="100" r="0.9"/>
      <circle cx="1000" cy="108" r="1"/><circle cx="1160" cy="90" r="1.2"/>
    </g>

    <circle cx="1050" cy="55" r="1.8" fill="#ffffff" opacity="0.9"/>
    <circle cx="1050" cy="55" r="4" fill="#ffffff" opacity="0.08"/>

    <path d="M0 420 L60 310 L130 380 L200 260 L280 340 L360 200 L420 310 L500 180 L560 290 L620 220 L680 320 L740 160 L800 280 L860 190 L920 300 L980 240 L1040 310 L1100 200 L1160 290 L1200 340 L1200 700 L0 700 Z" fill="url(#mountain1grad)"/>
    <path d="M0 480 L40 420 L100 460 L160 380 L240 440 L310 360 L380 430 L450 340 L520 410 L590 370 L650 440 L720 350 L790 420 L850 380 L920 450 L990 370 L1060 440 L1120 390 L1180 450 L1200 460 L1200 700 L0 700 Z" fill="url(#mountain2grad)"/>
    <path d="M0 560 L50 520 L110 540 L170 490 L240 530 L300 500 L370 545 L440 480 L510 535 L580 510 L640 550 L710 490 L770 540 L840 505 L910 555 L970 510 L1040 560 L1110 520 L1160 550 L1200 545 L1200 700 L0 700 Z" fill="url(#mountain3grad)"/>
    <rect x="0" y="460" width="1200" height="240" fill="url(#foggrad)"/>
  </svg>
)

function Desktop({ onShutdown }) {
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [windows, setWindows] = useState([])

  function handleStartClick() {
    setStartMenuOpen((prev) => !prev)
  }

  function handleCloseStartMenu() {
    setStartMenuOpen(false)
  }

  function handleOpenApp(appId) {
    const existing = windows.find((w) => w.id === appId)
    if (existing) {
      handleFocus(appId)
      setWindows((prev) =>
        prev.map((w) =>
          w.id === appId ? { ...w, isMinimized: false } : w
        )
      )
      return
    }

    zCounter += 1
    const meta = APP_META[appId]

    const newWindow = {
      id: appId,
      title: meta.title,
      icon: meta.icon,
      variant: meta.variant || 'default',
      position: { x: 80 + windows.length * 24, y: 60 + windows.length * 24 },
      size: { width: 600, height: 420 },
      isMinimized: false,
      isMaximized: false,
      zIndex: zCounter,
    }

    setWindows((prev) => [...prev, newWindow])
  }

  const handleFocus = useCallback((id) => {
    zCounter += 1
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: zCounter } : w))
    )
  }, [])

  const handleClose = useCallback((id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const handleMinimize = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      )
    )
  }, [])

  const handleMaximize = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      )
    )
  }, [])

  const handlePositionChange = useCallback((id, position) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, position } : w))
    )
  }, [])

  const handleTaskbarClick = useCallback((id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      )
    )
  }, [])

  const focusedId = [...windows].sort((a, b) => b.zIndex - a.zIndex)[0]?.id

  return (
    <div className={styles.desktop}>
      <Wallpaper />

      <DesktopIcons onOpenApp={handleOpenApp} />

      {windows.map((win) => (
        <Window
          key={win.id}
          {...win}
          isFocused={win.id === focusedId}
          onFocus={handleFocus}
          onClose={handleClose}
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
          onPositionChange={handlePositionChange}
        >
          {win.id === 'about'    && <AboutMe />}
          {win.id === 'skills'   && <Skills />}
          {win.id === 'projects' && <Projects />}
          {win.id === 'resume'   && <Resume />}
          {win.id === 'contact'  && <Contact />}
        </Window>
      ))}

      {startMenuOpen && (
        <StartMenu
          onClose={handleCloseStartMenu}
          onOpenApp={handleOpenApp}
          onShutdown={onShutdown}
        />
      )}

      <Taskbar
        onStartClick={handleStartClick}
        windows={windows}
        onWindowClick={handleTaskbarClick}
      />
    </div>
  )
}

export default Desktop