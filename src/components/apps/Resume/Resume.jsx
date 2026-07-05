import styles from './Resume.module.css'

const DownloadIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v8M5 7l3 3 3-3"/>
    <path d="M2 13h12"/>
  </svg>
)

const SKILLS = [
  { category: 'Languages',  list: 'JavaScript, C#, Python, Java, C++, C' },
  { category: 'Frontend',   list: 'React, Next.js, HTML, CSS, TypeScript, Tailwind, Bootstrap' },
  { category: 'Backend',    list: '.NET Core MVC, REST APIs, Web Services, Strapi CMS, SQL' },
  { category: 'Tools',      list: 'Git, GitHub, Vercel, Netlify, Swagger, VS Code, Visual Studio, IntelliJ' },
]

const PROJECTS = [
  {
    name: 'Mihralb - Full-Stack Journalism Portal',
    stack: 'Next.js · React · Tailwind CSS · Strapi CMS · REST API',
    points: [
    'Co-built a journalism website for a real client, working on everything from the design of components to getting it live on the web.',
    'Built 7 reusable React components, so the same UI pieces could be used across every page instead of rewriting them each time.',
    'Connected Strapi CMS to the site using REST API, so the clients editor could add articles, images, and a daily quote by themselves, no coding needed after launch.',
    'Handled the full deployment process, from local development to handing the finished project over to the client.',
    ],
  },
  {
  name: 'RumejsaOS - Personal Portfolio',
  stack: ' Next.js · React · Vite ',
  points: [
    'Built a personal portfolio designed to work like a desktop operating system, every section opens as a draggable window, just like a real OS.',
    'Designed and coded everything from scratch with no UI libraries, the icons, wallpaper, taskbar, start menu, and window system are all hand-built.',
    'Added small details that make it feel personal, a constellation map for skills, a messaging-style contact page, and a boot screen with an illustrated computer you have to turn on to enter.',
  ],
},
]

const EDUCATION = [
  {
    name: 'Bachelor of Computer Engineering',
    sub: 'International Balkan University, Skopje · Year 2 of 4 · GPA: 9.23 / 10 · Expected May 2028',
    detail: '',
  },
  {
    name: 'Full-Stack Development Course',
    sub: 'Infotech Academy, Skopje',
    detail: 'Curriculum: HTML & CSS, JavaScript, React, C#, .NET Core MVC, Web Services & REST API fundamentals',
  },
]

const LANGUAGES = [
  { name: 'Albanian',   level: 'Native',        fill: 100 },
  { name: 'English',    level: 'Fluent',         fill: 90  },
  { name: 'Macedonian', level: 'Conversational', fill: 50  },
]

function Resume() {
  return (
    <div className={styles.container}>

<div className={styles.toolbar}>
  <span className={styles.toolbarTitle}>resume.pdf</span>
  <a
    className={styles.downloadBtn}
    href="https://docs.google.com/document/d/1FKl-m7ApkQ1ZBd2DyLqDvoCnyPwgmSXuib-UUyIt4e4/export?format=pdf"
    target="_blank"
    rel="noreferrer"
    download
  >
    <DownloadIcon /> Download PDF
  </a>
</div>

      <div className={styles.doc}>

        {/* Header */}
        <div className={styles.docHeader}>
          <div className={styles.docName}>Rumejsa Aliu</div>
          <div className={styles.docRole}>Frontend Developer · React · Next.js · Full-Stack</div>
          <div className={styles.docContact}>
            <span className={styles.docContactItem}>Skopje, North Macedonia</span>
            <a className={styles.docContactItem} href="mailto:rumejsaaliu6@gmail.com">rumejsaaliu6@gmail.com</a>
            <a className={styles.docContactItem} href="https://github.com/rumejsa-aliu" target="_blank" rel="noreferrer">GitHub</a>
            <a className={styles.docContactItem} href="https://www.linkedin.com/in/rumejsa--aliu/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Profile */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Profile</div>
          <p className={styles.prose}>
           I'm a second-year Computer Engineering student at International Balkan University with a GPA of 9.23/10. My focus is frontend development. I enjoy building interfaces that feel considered and easy to use.  but I'm comfortable working across the stack when a project calls for it, from REST APIs to CMS integration.

          </p>
          <p className={styles.prose}>
           I've worked with React, Next.js, and .NET across personal, academic, and client projects, including taking a production application from idea to deployment for a real client. That experience taught me how much maintainable code, clear communication, and attention to detail matter once something actually has users.

          </p>
          <p className={styles.prose}>
           I'm early in my career, but I learn quickly and take ownership of what I build. I'm looking for an internship or junior role where I can keep growing as a frontend focused developer, contribute real value, and learn from people more experienced than me.
          </p>
        </div>

        {/* Skills */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Technical Skills</div>
          <div className={styles.skillsGrid}>
            {SKILLS.map((s) => (
              <div key={s.category} className={styles.skillRow}>
                <span className={styles.skillCategory}>{s.category}</span>
                <span className={styles.skillList}>{s.list}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Projects</div>
          <div className={styles.projects}>
            {PROJECTS.map((p) => (
              <div key={p.name} className={styles.project}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectName}>{p.name}</span>
                </div>
                <div className={styles.projectStack}>{p.stack}</div>
                <div className={styles.projectPoints}>
                  {p.points.map((point, i) => (
                    <div key={i} className={styles.projectPoint}>
                      <div className={styles.pointDot} />
                      <span className={styles.pointText}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Education</div>
          <div className={styles.eduItems}>
            {EDUCATION.map((e) => (
              <div key={e.name} className={styles.eduItem}>
                <div className={styles.eduName}>{e.name}</div>
                <div className={styles.eduSub}>{e.sub}</div>
                <div className={styles.eduSub}>{e.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — Languages + Volunteer */}
        <div className={styles.section}>
          <div className={styles.twoCol}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className={styles.sectionTitle}>Languages</div>
              {LANGUAGES.map((l) => (
                <div key={l.name} className={styles.langItem}>
                  <span className={styles.langName}>{l.name}</span>
                  <div className={styles.langBar}>
                    <div className={styles.langFill} style={{ width: `${l.fill}%` }} />
                  </div>
                  <span className={styles.langLevel}>{l.level}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className={styles.sectionTitle}>Volunteer</div>
              <div className={styles.volunteer}>Kalliri i Mirësisë</div>
              <div className={styles.volunteerSub}>Skopje · 2025 – Present</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume