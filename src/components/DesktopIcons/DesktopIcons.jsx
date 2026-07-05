import DesktopIcon from '../DesktopIcon/DesktopIcon'
import styles from './DesktopIcons.module.css'

const ICONS = [
  {
    id: 'about',
    label: 'About Me',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Card background */}
        <rect x="4" y="6" width="18" height="14" rx="2" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
        {/* Avatar circle */}
        <circle cx="10" cy="12" r="3" fill="#242429" stroke="#1E3A5F" strokeWidth="1.2"/>
        {/* Avatar person */}
        <circle cx="10" cy="11" r="1.2" fill="#1E3A5F"/>
        <path d="M7.5 14.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5" stroke="#1E3A5F" strokeWidth="1" strokeLinecap="round" fill="none"/>
        {/* Text lines */}
        <line x1="15" y1="11" x2="20" y2="11" stroke="#3A3A42" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="15" y1="13.5" x2="19" y2="13.5" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="15" y1="16" x2="20" y2="16" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Top accent bar */}
        <rect x="4" y="6" width="18" height="2.5" rx="2" fill="#1E3A5F" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nodes */}
        <circle cx="13" cy="5" r="2" fill="#1E3A5F" stroke="#1E3A5F" strokeWidth="0.5"/>
        <circle cx="5" cy="18" r="2" fill="#242429" stroke="#3A3A42" strokeWidth="1"/>
        <circle cx="21" cy="18" r="2" fill="#242429" stroke="#3A3A42" strokeWidth="1"/>
        <circle cx="13" cy="14" r="2.5" fill="#1C1C21" stroke="#1E3A5F" strokeWidth="1.2"/>
        {/* Connecting lines */}
        <line x1="13" y1="7" x2="13" y2="11.5" stroke="#1E3A5F" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
        <line x1="11" y1="15.5" x2="6.5" y2="17" stroke="#3A3A42" strokeWidth="1" strokeLinecap="round"/>
        <line x1="15" y1="15.5" x2="19.5" y2="17" stroke="#3A3A42" strokeWidth="1" strokeLinecap="round"/>
        {/* Inner dot */}
        <circle cx="13" cy="14" r="1" fill="#1E3A5F"/>
        {/* Outer ring hint */}
        <circle cx="13" cy="13" r="8" stroke="#2A2A30" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Folder back */}
        <rect x="2" y="9" width="22" height="14" rx="2" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
        {/* Folder tab */}
        <path d="M2 11V9.5A1.5 1.5 0 013.5 8h5l2 2H22.5A1.5 1.5 0 0124 11.5V11" fill="#242429" stroke="#2A2A30" strokeWidth="1"/>
        {/* Accent tab highlight */}
        <path d="M3.5 8h5l1.5 1.5H3.5A1.5 1.5 0 012 8z" fill="#1E3A5F" opacity="0.5"/>
        {/* Code brackets inside */}
        <path d="M9 16l-2 2 2 2" stroke="#1E3A5F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 16l2 2-2 2" stroke="#1E3A5F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="15" x2="12" y2="21" stroke="#3A3A42" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Page */}
        <rect x="4" y="2" width="16" height="22" rx="1.5" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
        {/* Header block */}
        <rect x="4" y="2" width="16" height="7" rx="1.5" fill="#242429"/>
        <rect x="4" y="7" width="16" height="2" fill="#242429"/>
        {/* Avatar in header */}
        <circle cx="9" cy="5.5" r="2" fill="#1E3A5F" opacity="0.8"/>
        {/* Name line in header */}
        <line x1="13" y1="4.5" x2="18" y2="4.5" stroke="#3A3A42" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="13" y1="6.5" x2="16" y2="6.5" stroke="#2A2A30" strokeWidth="1" strokeLinecap="round"/>
        {/* Body lines */}
        <line x1="7" y1="12" x2="19" y2="12" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="7" y1="14.5" x2="19" y2="14.5" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="7" y1="17" x2="15" y2="17" stroke="#2A2A30" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Accent underline */}
        <line x1="7" y1="19.5" x2="19" y2="19.5" stroke="#1E3A5F" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Envelope body */}
        <rect x="2" y="6" width="22" height="15" rx="2" fill="#1C1C21" stroke="#2A2A30" strokeWidth="1"/>
        {/* Envelope flap fold lines */}
        <path d="M2 8l11 8 11-8" stroke="#3A3A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Flap top */}
        <path d="M2 6.5l11 8 11-8.5" stroke="#2A2A30" strokeWidth="1" fill="none"/>
        {/* Bottom fold lines */}
        <path d="M2 21l7-6" stroke="#242429" strokeWidth="1" strokeLinecap="round"/>
        <path d="M24 21l-7-6" stroke="#242429" strokeWidth="1" strokeLinecap="round"/>
        {/* Accent seal dot */}
        <circle cx="13" cy="13" r="1.5" fill="#1E3A5F" opacity="0.8"/>
        {/* Top accent line */}
        <rect x="2" y="6" width="22" height="2" rx="1" fill="#1E3A5F" opacity="0.25"/>
      </svg>
    ),
  },
]

function DesktopIcons({ onOpenApp }) {
  return (
    <div className={styles.grid}>
      {ICONS.map((item) => (
        <DesktopIcon
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          onOpen={onOpenApp}
        />
      ))}
    </div>
  )
}

export default DesktopIcons