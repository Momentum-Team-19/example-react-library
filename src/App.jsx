import Login from './Login'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState('')
  return (
    <>
      <h1>React Library</h1>
      <Login setToken={setToken} />
    </>
  )
}

export default App
