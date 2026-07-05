import { useState, useEffect } from 'react'
import styles from './Taskbar.module.css'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateString = time.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div className={styles.clock}>
      <span className={styles.clockTime}>{timeString}</span>
      <span className={styles.clockDate}>{dateString}</span>
    </div>
  )
}

function Taskbar({ onStartClick, windows, onWindowClick }) {
  return (
    <div className={styles.taskbar}>
      <button className={styles.startButton} onClick={onStartClick}>
       <svg viewBox="0 0 32 32" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="9" fill="none" stroke="rgba(30,58,95,0.4)" strokeWidth="1.2"/>
  <path d="M16 7 A9 9 0 1 1 9.6 22.4" fill="none" stroke="#1E3A5F" strokeWidth="2.2" strokeLinecap="round"/>
  <circle cx="16" cy="7" r="2" fill="#1E3A5F"/>
  <circle cx="9.6" cy="22.4" r="1.2" fill="#1E3A5F" opacity="0.4"/>
  <circle cx="16" cy="16" r="1.8" fill="#1E3A5F" opacity="0.6"/>
</svg>
        Start
      </button>

      <div className={styles.taskbarCenter}>
        {windows.map((win) => (
          <button
            key={win.id}
            className={`${styles.taskbarBtn} ${!win.isMinimized ? styles.taskbarBtnActive : ''}`}
            onClick={() => onWindowClick(win.id)}
            title={win.title}
          >
            <span className={styles.taskbarBtnIcon}>{win.icon}</span>
            <span className={styles.taskbarBtnLabel}>{win.title}</span>
          </button>
        ))}
      </div>

      <Clock />
    </div>
  )
}

export default Taskbar