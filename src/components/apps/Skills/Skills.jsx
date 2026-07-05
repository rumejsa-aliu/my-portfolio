import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Skills.module.css'

const SKILLS_DATA = [
  { category: 'FRONTEND',  items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5 / CSS3', 'Tailwind', 'Bootstrap'] },
  { category: 'BACKEND',   items: ['Node.js', 'REST APIs', 'Strapi CMS', '.NET Core', 'SQL'] },
  { category: 'LANGUAGES', items: ['C++ / C / C#', 'Python', 'Java'] },
  { category: 'TOOLS',     items: ['Git / GitHub', 'VS Code / Visual Studio / IntelliJ', 'Vercel / Netlify', 'Swagger'] },
]

const PROMPT = 'PS C:\\Users\\Rumejsa>'
const CONFETTI_COLORS = ['#4A7AB5', '#4ec9b0', '#e5c07b', '#e06c75', '#c9b685', '#61afef']

let idCounter = 0
function makeLine(type, text) {
  idCounter += 1
  return { id: idCounter, type, text }
}

function skillsCatLines() {
  const lines = []
  SKILLS_DATA.forEach((group, i) => {
    lines.push(makeLine('header', group.category))
    group.items.forEach((item) => lines.push(makeLine('item', item)))
    if (i < SKILLS_DATA.length - 1) lines.push(makeLine('blank', ''))
  })
  return lines
}

function helpLines() {
  return [
    makeLine('text', 'Available commands:'),
    makeLine('blank', ''),
    makeLine('item', 'help               Show this help message'),
    makeLine('item', 'cat skills.txt     List my skills'),
    makeLine('item', 'cd hired rumejsa   ???'),
    makeLine('item', 'clear              Clear the terminal'),
  ]
}

function errorLines(cmd) {
  return [
    makeLine('error', `${cmd} : The term '${cmd}' is not recognized as the name of a cmdlet, function,`),
    makeLine('error', 'script file, or operable program. Check the spelling of the name, or if a path'),
    makeLine('error', 'was included, verify that the path is correct and try again.'),
  ]
}

const HIRE_SEQUENCE = [
  { type: 'muted',   text: '' },
  { type: 'muted',   text: 'Fetching candidate...    done' },
  { type: 'muted',   text: 'Verifying skills...      done' },
  { type: 'muted',   text: 'Installing enthusiasm... done' },
  { type: 'muted',   text: 'Resolving dependencies... done' },
  { type: 'text',    text: '' },
  { type: 'success', text: 'Added 1 package in 0.8s' },
  { type: 'text',    text: '' },
  { type: 'success', text: '+ rumejsa-aliu@hired' },
  { type: 'muted',   text: '  \u2713 Frontend Developer' },
  { type: 'muted',   text: '  \u2713 Full-Stack Ready' },
  { type: 'muted',   text: '  \u2713 Fast Learner' },
  { type: 'text',    text: '' },
  { type: 'muted',    text: "Let's build something great." },
  { type: 'link',    text: 'rumejsaaliu6@gmail.com' },
]

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

let confettiIdCounter = 0
function makeConfettiBurst(count = 60) {
  const pieces = []
  for (let i = 0; i < count; i++) {
    confettiIdCounter += 1
    pieces.push({
      id: confettiIdCounter,
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
      duration: 1.8 + Math.random() * 1.2,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      size: 6 + Math.random() * 5,
      drift: (Math.random() - 0.5) * 120,
    })
  }
  return pieces
}

function Skills() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(true)
  const [confetti, setConfetti] = useState([])
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const hasBooted = useRef(false)

  const appendLines = useCallback(async (lines, delay = 40) => {
    for (const line of lines) {
      setHistory((prev) => [...prev, line])
      await sleep(delay)
    }
  }, [])

  useEffect(() => {
    if (hasBooted.current) return
    hasBooted.current = true

    async function boot() {
      await appendLines([
        makeLine('command-echo', 'cat skills.txt'),
        makeLine('blank', ''),
        ...skillsCatLines(),
        makeLine('blank', ''),
      ])
      setIsProcessing(false)
    }
    boot()
  }, [appendLines])

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [history, isProcessing])

  useEffect(() => {
    if (!isProcessing) {
      inputRef.current?.focus()
    }
  }, [isProcessing])

  function focusInput() {
    inputRef.current?.focus()
  }

  function fireConfetti() {
    const pieces = makeConfettiBurst(70)
    setConfetti(pieces)
    setTimeout(() => setConfetti([]), 3200)
  }

  async function runCommand(raw) {
    const cmd = raw.trim()
    const normalized = cmd.toLowerCase()

    setHistory((prev) => [...prev, makeLine('command-echo', cmd)])

    if (normalized === '') return

    if (normalized === 'help') {
      await appendLines([makeLine('blank', ''), ...helpLines(), makeLine('blank', '')], 25)
      return
    }
    if (normalized === 'cat skills.txt'|| normalized === 'skills') {
      await appendLines([makeLine('blank', ''), ...skillsCatLines(), makeLine('blank', '')], 25)
      return
    }
    if (normalized === 'clear' || normalized === 'cls') {
      setHistory([])
      return
    }
    if (
      normalized === 'cd hired rumejsa' ||
      normalized === 'cd hire rumejsa' ||
      normalized.includes('hired rumejsa')
    ) {
      await sleep(150)
      await appendLines([makeLine('command-run', 'npm install rumejsa-aliu')], 0)
      fireConfetti()
      for (const step of HIRE_SEQUENCE) {
        setHistory((prev) => [...prev, makeLine(step.type, step.text)])
        await sleep(step.text === '' ? 130 : 280)
      }
      setHistory((prev) => [...prev, makeLine('blank', '')])
      return
    }

    await appendLines([makeLine('blank', ''), ...errorLines(cmd), makeLine('blank', '')], 15)
  }

  async function handleKeyDown(e) {
    if (e.key === 'Enter' && !isProcessing) {
      const value = input
      setInput('')
      setIsProcessing(true)
      await runCommand(value)
      setIsProcessing(false)
    }
  }

  function renderLine(line) {
    switch (line.type) {
      case 'command-echo':
      case 'command-run':
        return (
          <div className={styles.line}>
            <span className={styles.prompt}>{PROMPT}</span>
            <span className={styles.command}> {line.text}</span>
          </div>
        )
      case 'header':
        return <div className={`${styles.line} ${styles.header}`}>{line.text}</div>
      case 'item':
        return <div className={`${styles.line} ${styles.item}`}>{line.text}</div>
      case 'muted':
        return <div className={`${styles.line} ${styles.muted}`}>{line.text || '\u00A0'}</div>
      case 'success':
        return <div className={`${styles.line} ${styles.success}`}>{line.text}</div>
      case 'error':
        return <div className={`${styles.line} ${styles.error}`}>{line.text}</div>
      case 'link':
        return <div className={`${styles.line} ${styles.link}`}>{line.text}</div>
      case 'text':
        return <div className={styles.line}>{line.text || '\u00A0'}</div>
      case 'blank':
      default:
        return <div className={styles.blankLine} />
    }
  }

  return (
    <div className={styles.container} onClick={focusInput}>
      <div className={styles.codeArea} ref={bodyRef}>
        {history.map((line) => (
          <div key={line.id}>{renderLine(line)}</div>
        ))}

        {!isProcessing && (
          <div className={styles.line}>
            <span className={styles.prompt}>{PROMPT}</span>
            <input
              ref={inputRef}
              className={styles.terminalInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
        )}
      </div>

      {confetti.length > 0 && (
        <div className={styles.confettiLayer}>
          {confetti.map((p) => (
            <span
              key={p.id}
              className={styles.confettiPiece}
              style={{
                left: `${p.left}%`,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size * 0.4}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                '--rotation': `${p.rotation}deg`,
                '--drift': `${p.drift}px`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills