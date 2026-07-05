import { useState } from 'react'
import styles from './MobileBoot.module.css'

function MobileBoot({ onComplete }) {
  const [leaving, setLeaving] = useState(false)

  function handleTap() {
    setLeaving(true)
    setTimeout(onComplete, 400)
  }

  return (
    <div
      className={`${styles.wrapper} ${leaving ? styles.leaving : ''}`}
      onClick={handleTap}
    >
      <svg className={styles.logo} viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="18" fill="none" stroke="rgba(30,58,95,0.3)" strokeWidth="2"/>
        <path d="M32 14 A18 18 0 1 1 19.2 44.8" fill="none" stroke="#4A7AB5" strokeWidth="3.5" strokeLinecap="round"/>
        <circle cx="32" cy="14" r="4" fill="#4A7AB5"/>
        <circle cx="19.2" cy="44.8" r="2.5" fill="#4A7AB5" opacity="0.4"/>
        <circle cx="32" cy="32" r="3.5" fill="#4A7AB5" opacity="0.6"/>
      </svg>

      <div className={styles.name}>Rumejsa Aliu</div>
      <div className={styles.role}>Frontend Developer · React · Next.js</div>

      <div className={styles.hint}>
        <svg className={styles.hintIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11.5V6a1.5 1.5 0 013 0v4.5" />
          <path d="M12 10.5V5a1.5 1.5 0 013 0v6" />
          <path d="M15 10v-2a1.5 1.5 0 013 0v6c0 3.5-2 6-5.5 6h-1C8.5 21 7 19 6 17l-2-4c-.5-1 .3-2 1.3-1.7.5.15.9.5 1.2 1L8 14" />
        </svg>
        Tap to enter
      </div>
    </div>
  )
}

export default MobileBoot