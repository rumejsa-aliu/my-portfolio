import { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import projects from '../../../data/projects/index'

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4h4l2 2h6a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6"/>
    <path d="M2 8h12M8 2a10 10 0 010 12M8 2a10 10 0 000 12"/>
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1C4.1 1 1 4.1 1 8c0 3.1 2 5.7 4.8 6.6.4.1.5-.2.5-.4v-1.4c-2 .4-2.5-.5-2.7-1-.1-.2-.5-.8-.8-1-.3-.1-.7-.5 0-.5.6 0 1 .6 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.3c0 .2.1.5.5.4C13 13.7 15 11.1 15 8c0-3.9-3.1-7-7-7z"/>
  </svg>
)

const EmptyFolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4h4l2 2h6a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1z"/>
  </svg>
)

function StatusBadge({ status }) {
  if (status === 'live') return <span className={`${styles.statusBadge} ${styles.live}`}>LIVE</span>
  if (status === 'in-progress') return <span className={`${styles.statusBadge} ${styles.inProgress}`}>IN PROGRESS</span>
  return null
}

function DetailPanel({ project }) {
  if (!project) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}><EmptyFolderIcon /></div>
        <span className={styles.emptyText}>Select a project to view details</span>
      </div>
    )
  }

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <div className={styles.detailName}>{project.name}</div>
        <div className={styles.detailTagline}>{project.tagline}</div>
        <div className={styles.detailHeaderRow}>
          <StatusBadge status={project.status} />
          <span style={{ fontSize: '10px', color: 'var(--color-text-3)' }}>{project.year}</span>
        </div>
      </div>

      <div className={styles.detailSection}>
        <div className={styles.detailSectionLabel}>About</div>
        <p className={styles.detailDesc}>{project.description}</p>
      </div>

      <div className={styles.detailSection}>
        <div className={styles.detailSectionLabel}>Stack</div>
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <span key={s} className={styles.stackTag}>{s}</span>
          ))}
        </div>
      </div>

      {project.highlights?.length > 0 && (
        <div className={styles.detailSection}>
          <div className={styles.detailSectionLabel}>Highlights</div>
          <div className={styles.highlights}>
            {project.highlights.map((h, i) => (
              <div key={i} className={styles.highlight}>
                <div className={styles.highlightDot} />
                <span className={styles.highlightText}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.links}>
        {project.links.live ? (
          <a className={styles.linkBtn} href={project.links.live} target="_blank" rel="noreferrer">
            <GlobeIcon /> View Live
          </a>
        ) : (
          <span className={`${styles.linkBtn} ${styles.disabled}`}>
            <GlobeIcon /> Not live yet
          </span>
        )}
        {project.links.github ? (
          <a className={styles.linkBtn} href={project.links.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        ) : (
          <span className={`${styles.linkBtn} ${styles.disabled}`}>
            <GithubIcon /> Private repo
          </span>
        )}
      </div>
    </div>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return isMobile
}

function ProjectsMobile() {
  const [expandedId, setExpandedId] = useState(null)

  return (
    <div className={styles.mobileContainer}>
      {projects.map((project) => {
        const isOpen = expandedId === project.id
        return (
          <div key={project.id} className={styles.mobileCard}>
            <button
              className={styles.mobileCardHeader}
              onClick={() => setExpandedId(isOpen ? null : project.id)}
            >
              <div className={styles.projectIcon}><FolderIcon /></div>
              <div className={styles.projectMeta}>
                <span className={styles.projectName}>{project.name}</span>
                <span className={styles.projectYear}>{project.year}</span>
              </div>
              <StatusBadge status={project.status} />
            </button>
            {isOpen && (
              <div className={styles.mobileCardBody}>
                <DetailPanel project={project} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function Projects() {
  const isMobile = useIsMobile()
  const [selected, setSelected] = useState(null)

  if (isMobile) return <ProjectsMobile />

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>Projects</div>
        {projects.map((project) => (
          <button
            key={project.id}
            className={`${styles.projectItem} ${selected?.id === project.id ? styles.active : ''}`}
            onClick={() => setSelected(project)}
          >
            <div className={styles.projectIcon}>
              <FolderIcon />
            </div>
            <div className={styles.projectMeta}>
              <span className={styles.projectName}>{project.name}</span>
              <span className={styles.projectYear}>{project.year}</span>
            </div>
            <StatusBadge status={project.status} />
          </button>
        ))}
      </div>

      <DetailPanel project={selected} />
    </div>
  )
}

export default Projects