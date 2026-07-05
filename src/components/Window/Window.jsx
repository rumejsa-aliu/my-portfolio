import { useRef, useEffect, useCallback } from 'react'
import styles from './Window.module.css'

const ControlIcons = {
  minimize: (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="1" y1="5" x2="9" y2="5" />
    </svg>
  ),
  maximize: (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="8" height="8" />
    </svg>
  ),
  restore: (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="1" width="6" height="6" />
      <path d="M1 4v5h5" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="1" y1="1" x2="9" y2="9" />
      <line x1="9" y1="1" x2="1" y2="9" />
    </svg>
  ),
}

function Window({
  id,
  title,
  icon,
  children,
  position,
  size,
  isMinimized,
  isMaximized,
  isFocused,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  onPositionChange,
  zIndex,
  variant = 'default',
}) {
  const dragState = useRef(null)

  const handleTitleBarMouseDown = useCallback(
    (e) => {
      if (e.target.closest(`.${styles.controls}`)) return
      onFocus(id)
      dragState.current = {
        startX: e.clientX - position.x,
        startY: e.clientY - position.y,
      }
      e.preventDefault()
    },
    [id, position, onFocus]
  )

  useEffect(() => {
    function handleMouseMove(e) {
      if (!dragState.current) return
      onPositionChange(id, {
        x: Math.max(0, e.clientX - dragState.current.startX),
        y: Math.max(0, e.clientY - dragState.current.startY),
      })
    }

    function handleMouseUp() {
      dragState.current = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [id, onPositionChange])

  const windowStyle = isMaximized
    ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 48px)', zIndex }
    : { top: position.y, left: position.x, width: size.width, height: size.height, zIndex }

  const isTerminal = variant === 'terminal'

  const classNames = [
    styles.window,
    isFocused  ? styles.focused   : '',
    isMaximized ? styles.maximized : '',
    isMinimized ? styles.minimized : '',
    isTerminal ? styles.terminalVariant : '',
  ].filter(Boolean).join(' ')

  return (
    <div
      className={classNames}
      style={windowStyle}
      onMouseDown={() => onFocus(id)}
    >
      <div className={styles.titleBar} onMouseDown={handleTitleBarMouseDown}>
        <div className={styles.titleBarLeft}>
          <span className={styles.windowIcon}>{icon}</span>
          <span className={styles.windowTitle}>{title}</span>
        </div>
        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={() => onMinimize(id)} title="Minimize">
            {ControlIcons.minimize}
          </button>
          <button className={styles.controlBtn} onClick={() => onMaximize(id)} title={isMaximized ? 'Restore' : 'Maximize'}>
            {isMaximized ? ControlIcons.restore : ControlIcons.maximize}
          </button>
          <button className={`${styles.controlBtn} ${styles.close}`} onClick={() => onClose(id)} title="Close">
            {ControlIcons.close}
          </button>
        </div>
      </div>

      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default Window