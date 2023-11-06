import { useState } from 'react'
import WaitingRoom from './Components/WaitingRoom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WaitingRoom />
    </>
  )
}

export default App
