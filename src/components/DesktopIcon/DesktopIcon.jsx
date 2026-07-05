import styles from './DesktopIcon.module.css'

function DesktopIcon({ id, label, icon, onOpen }) {
  function handleDoubleClick() {
    onOpen(id)
  }

  return (
    <div className={styles.icon} onDoubleClick={handleDoubleClick}>
      <div className={styles.iconImage}>
        {icon}
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default DesktopIcon