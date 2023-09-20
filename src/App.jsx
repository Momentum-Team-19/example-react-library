import { useState } from 'react'
import Login from './components/Login'
import BookList from './components/BookList'
import 'purecss/build/pure.css'
import './App.css'
import {
  LoginButton,
  SignUpButton,
  ButtonMenu,
  LogOutButton,
} from './components/buttons/authButtons'

function App() {
  const [token, setToken] = useState('')

  return (
    <>
      <header className="site-header pure-menu pure-menu-horizontal pure-menu-fixed">
        <h1 className="header-text">React Library</h1>
        <ButtonMenu>
          {!token ? (
            <>
              <LoginButton />
              <SignUpButton />
            </>
          ) : (
            <LogOutButton />
          )}
        </ButtonMenu>
      </header>
      <main className="pure-g main">
        {token && <BookList token={token} />}
        {!token && <Login setToken={setToken} />}
      </main>
    </>
  )
}

export default App
