import { useState, useRef, useEffect } from 'react'
import styles from './Contact.module.css'

const SendIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2L2 7l5 2M14 2L9 14l-2-5"/>
  </svg>
)

const BackIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4L6 8l4 4"/>
  </svg>
)

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="3" x2="8" y2="13"/>
    <line x1="3" y1="8" x2="13" y2="8"/>
  </svg>
)

const CHATS = [
  {
    id: 'future',
    name: 'Future Me',
    preview: 'Hey. You were right to keep going.',
    time: 'someday',
    avatar: 'FM',
    messages: [
      { side: 'left',  text: 'Hey.', time: '' },
      { side: 'left',  text: 'You were right to keep going.', time: '' },
      { side: 'left',  text: 'The late nights, the constant redesigns, the moments you thought you weren\'t good enough — they all added up to something.', time: '' },
      { side: 'left',  text: 'Keep paying attention to the little details. Most people won\'t notice them, but the right people always do.', time: '' },
      { side: 'left',  text: 'Oh, and next time... push to Git before you start "just changing one thing."', time: 'someday' },
      { side: 'right', text: 'did we actually make it? like properly?', time: '' },
      { side: 'left',  text: 'Define "properly."', time: '' },
      { side: 'right', text: 'you know what i mean', time: '' },
      { side: 'left',  text: 'Yeah. We did.', time: 'someday' },
    ],
  },
  {
    id: 'parents',
    name: 'Mum & Dad',
    preview: 'We see how hard you work.',
    time: 'Sunday',
    avatar: '❤',
    messages: [
      { side: 'left',  text: 'We don\'t always understand what you\'re building.', time: '' },
      { side: 'left',  text: 'But we see how hard you work. And we\'re proud of you.', time: '' },
      { side: 'right', text: '❤️', time: '' },
      { side: 'left',  text: 'Now come eat something.', time: 'Sunday' },
      { side: 'right', text: '5 minutes', time: 'Sunday' },
    ],
  },
  {
    id: 'new',
    name: 'New Message',
    preview: 'Send me a message',
    time: 'now',
    avatar: '+',
    isContact: true,
  },
]

function Contact() {
  const [activeChat, setActiveChat] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [activeChat, status])

  async function handleSend() {
    if (!name.trim() || !email.trim() || !message.trim()) return
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xqevbrlk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const canSend = name.trim() && email.trim() && message.trim() && status !== 'sending'
  const current = CHATS.find((c) => c.id === activeChat)

  // ── Chat list view ──
  if (!activeChat) {
    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.topBarInfo}>
            <div className={styles.topBarName}>Messages</div>
          </div>
          <button className={styles.newChatBtn} onClick={() => setActiveChat('new')}>
            <PlusIcon />
          </button>
        </div>

        <div className={styles.chatList}>
          {CHATS.map((chat) => (
            <button
              key={chat.id}
              className={styles.chatItem}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className={styles.chatAvatar}>{chat.avatar}</div>
              <div className={styles.chatMeta}>
                <div className={styles.chatName}>{chat.name}</div>
                <div className={styles.chatPreview}>{chat.preview}</div>
              </div>
              <div className={styles.chatTime}>{chat.time}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── Contact form view ──
  if (current.isContact) {
    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <button className={styles.backBtn} onClick={() => { setActiveChat(null); setStatus(null) }}>
            <BackIcon />
          </button>
          <div className={styles.topBarInfo}>
            <div className={styles.topBarName}>New Message</div>
            <div className={styles.topBarSub}>rumejsaaliu6@gmail.com</div>
          </div>
        </div>

        <div className={styles.messages}>
          <div className={styles.messageGroup} style={{ alignItems: 'flex-start' }}>
            <div className={`${styles.bubble} ${styles.left}`}>
              Hey 👋 drop me a message and I'll get back to you.
            </div>
          </div>

          {status === 'success' && (
            <div className={styles.messageGroup} style={{ alignItems: 'flex-start' }}>
              <div className={`${styles.bubble} ${styles.left}`}>
                Got it! I'll reply as soon as I can 👋
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputArea}>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            className={styles.messageInput}
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className={styles.sendRow}>
            {status === 'error' && (
              <span className={styles.errorMsg}>Something went wrong — try again</span>
            )}
            {status !== 'error' && (
              <span className={styles.sendHint}>Goes straight to my inbox</span>
            )}
            <button className={styles.sendBtn} onClick={handleSend} disabled={!canSend}>
              <SendIcon />
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Message thread view ──
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => setActiveChat(null)}>
          <BackIcon />
        </button>
        <div className={styles.chatAvatar} style={{ width: 32, height: 32, fontSize: 12 }}>
          {current.avatar}
        </div>
        <div className={styles.topBarInfo}>
          <div className={styles.topBarName}>{current.name}</div>
        </div>
      </div>

      <div className={styles.messages}>
        {current.messages.map((msg, i) => (
          <div key={i} className={`${styles.messageGroup} ${styles[msg.side]}`}>
            <div className={`${styles.bubble} ${styles[msg.side]}`}>
              {msg.text}
            </div>
            {msg.time && <div className={styles.timestamp}>{msg.time}</div>}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default Contact