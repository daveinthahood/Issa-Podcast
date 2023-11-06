import { useState } from 'react'
import WaitingRoom from './Components/WaitingRoom'
import { Analytics } from '@vercel/analytics/react';

function App() {
  

  return (
    <>
      <WaitingRoom />
      <Analytics />
    </>
  )
}

export default App
