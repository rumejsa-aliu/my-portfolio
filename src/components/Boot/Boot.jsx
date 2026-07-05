import { useState, useEffect } from 'react'
import styles from './Boot.module.css'

const PowerIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M8 3v5"/>
    <path d="M5 4.5A5 5 0 1011 4.5"/>
  </svg>
)

const BOOT_LINES = [
  { text: 'RumejsaOS v1.0 — initializing...', delay: 0,    dim: false  },
  { text: 'Loading: About Me, Skills, Projects, Resume, Contact', delay: 300, dim: true },
  { text: 'Mounting desktop environment...', delay: 700,  dim: true   },
  { text: 'All systems ready.', delay: 1100, bright: true },
]

const SHUTDOWN_LINES = [
  { text: 'Saving session...', delay: 0,   dim: true  },
  { text: 'Closing applications...', delay: 400, dim: true  },
  { text: 'Shutting down RumejsaOS...', delay: 800, dim: false },
]

function Boot({ onComplete, shuttingDown = false }) {
  const [phase, setPhase] = useState(shuttingDown ? 'shuttingdown' : 'idle')
  const [visibleLines, setVisibleLines] = useState([])
  const [pressed, setPressed] = useState(false)

  // Handle shutdown sequence
  useEffect(() => {
    if (!shuttingDown) return

    SHUTDOWN_LINES.forEach((line) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
      }, line.delay)
    })

    setTimeout(() => {
      setPhase('off')
      setTimeout(() => {
        setVisibleLines([])
        setPhase('idle')
      }, 1500)
    }, 1800)
  }, [shuttingDown])

  function handlePower() {
    if (phase !== 'idle') return
    setPressed(true)
    setPhase('flicker')

    setTimeout(() => {
      setPhase('booting')
      setVisibleLines([])

      BOOT_LINES.forEach((line) => {
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line])
        }, line.delay)
      })

      setTimeout(() => {
        setPhase('done')
        setTimeout(onComplete, 600)
      }, 1800)
    }, 350)
  }

  const screenClass = [
    styles.screen,
    phase === 'idle'         ? styles.idle    : '',
    phase === 'flicker'      ? styles.off     : '',
    phase === 'booting'      ? styles.booting : '',
    phase === 'done'         ? styles.booting : '',
    phase === 'shuttingdown' ? styles.booting : '',
    phase === 'off'          ? styles.off     : '',
    phase === 'flicker'      ? styles.flicker : '',
  ].filter(Boolean).join(' ')

  return (
    <div className={styles.wrapper}>
      <svg className={styles.stars} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bootGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="700" fill="#060608"/>
        <rect width="1200" height="700" fill="url(#bootGlow)"/>
        <g fill="#ffffff" opacity="0.35">
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
          <circle cx="100" cy="200" r="0.6"/><circle cx="250" cy="180" r="0.5"/>
          <circle cx="400" cy="220" r="0.7"/><circle cx="550" cy="190" r="0.6"/>
          <circle cx="700" cy="210" r="0.5"/><circle cx="850" cy="175" r="0.8"/>
          <circle cx="1000" cy="195" r="0.6"/><circle cx="1150" cy="215" r="0.5"/>
        </g>
        <g fill="#ffffff" opacity="0.65">
          <circle cx="95" cy="48" r="1"/><circle cx="280" cy="32" r="1.2"/>
          <circle cx="470" cy="55" r="0.9"/><circle cx="660" cy="28" r="1.1"/>
          <circle cx="850" cy="60" r="1"/><circle cx="1020" cy="38" r="1.2"/>
          <circle cx="180" cy="110" r="0.9"/><circle cx="400" cy="95" r="1"/>
          <circle cx="590" cy="115" r="1.1"/><circle cx="780" cy="100" r="0.9"/>
        </g>
        <circle cx="1050" cy="55" r="1.8" fill="#ffffff" opacity="0.9"/>
        <circle cx="1050" cy="55" r="4" fill="#ffffff" opacity="0.08"/>
      </svg>

      <div className={styles.scene}>
        <div className={styles.computer}>
          <div className={styles.monitor}>
            <div className={styles.monitorInner}>
              <div className={styles.monitorBezel} />
              <div className={screenClass}>

                {phase === 'idle' && (
                  <div className={styles.idleContent}>
                    <div className={styles.idleName}>Rumejsa Aliu</div>
                    <div className={styles.idleDivider} />
                    <div className={styles.idleHint}>Press power to start</div>
                  </div>
                )}

                {(phase === 'booting' || phase === 'done') && (
                  <div className={styles.bootLines}>
                    {visibleLines.map((line, i) => (
                      <div
                        key={i}
                        className={[
                          styles.bootLine,
                          line.dim    ? styles.dim    : '',
                          line.bright ? styles.bright : '',
                        ].filter(Boolean).join(' ')}
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                )}

                {phase === 'shuttingdown' && (
                  <div className={styles.bootLines}>
                    {visibleLines.map((line, i) => (
                      <div
                        key={i}
                        className={[
                          styles.bootLine,
                          line.dim ? styles.dim : '',
                        ].filter(Boolean).join(' ')}
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '6px 0 10px',
              fontSize: '8px',
              letterSpacing: '0.15em',
              color: '#2A2A30',
              fontFamily: 'monospace',
            }}>
              RUMEJSA OS
            </div>
          </div>

          <div className={styles.stand} />
          <div className={styles.standBase} />
        </div>

        <div className={styles.tower}>
          <div className={styles.towerSlot2} />
          <div className={styles.towerSlot} />
          <div className={styles.towerSlot} />
          <div className={`${styles.towerLight} ${pressed ? styles.on : ''}`} />
          <button
            className={`${styles.powerBtn} ${pressed ? styles.pressed : ''}`}
            onClick={handlePower}
            title="Power on"
          >
            <PowerIcon />
          </button>
        </div>

        {phase === 'idle' && (
          <div className={styles.contextLine}>
            A portfolio built like a desktop OS — About Me, Skills, Projects, Resume & Contact inside.
          </div>
        )}
      </div>
    </div>
  )
}

export default Boot