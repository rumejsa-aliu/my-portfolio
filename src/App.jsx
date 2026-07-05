import { useState } from 'react'
import Desktop from './components/Desktop/Desktop'
import Boot from './components/Boot/Boot'
import MobileBoot from './components/MobileBoot/MobileBoot'
import MobileShell from './components/MobileShell/MobileShell'

const isMobile = window.innerWidth <= 768

function App() {
  const [phase, setPhase] = useState('boot')

  if (isMobile) {
    return (
      <>
        {phase === 'boot'     && <MobileBoot onComplete={() => setPhase('desktop')} />}
        {phase === 'desktop'  && <MobileShell onShutdown={() => setPhase('shutdown')} />}
        {phase === 'shutdown' && <MobileBoot onComplete={() => setPhase('desktop')} />}
      </>
    )
  }

  return (
    <>
      {phase === 'boot'     && <Boot onComplete={() => setPhase('desktop')} />}
      {phase === 'desktop'  && <Desktop onShutdown={() => setPhase('shutdown')} />}
      {phase === 'shutdown' && <Boot onComplete={() => setPhase('desktop')} shuttingDown />}
    </>
  )
}

export default App