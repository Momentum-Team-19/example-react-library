import { useState } from 'react'
import Login from './components/Login'
import BookList from './components/BookList'

function App() {
  const [token, setToken] = useState('')

  return (
    <>
      <h1>React Library</h1>
      {token && <BookList token={token} />}
      {!token && <Login setToken={setToken} />}
    </>
  )
}

export default App
