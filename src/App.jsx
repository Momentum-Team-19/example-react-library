import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
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
import BookDetail from './components/BookDetail'

function App() {
  const [token, setToken] = useLocalStorageState('booksToken', '')
  const loginButtonText = 'Log In'

  return (
    <>
      <header className="site-header pure-menu pure-menu-horizontal pure-menu-fixed">
        <h1 className="header-text">React Library</h1>
        <ButtonMenu>
          {!token ? (
            <>
              <LoginButton>{loginButtonText}</LoginButton>
              <SignUpButton />
            </>
          ) : (
            <LogOutButton />
          )}
        </ButtonMenu>
      </header>
      <>
        <Routes>
          <Route path="/" element={<BookList token={token} />} />
          <Route path="/books" element={<BookList token={token} />} />
          <Route path="/books/:bookId" element={<BookDetail token={token} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
      <main className="pure-g main">
        {!token && <Login setToken={setToken} />}
      </main>
    </>
  )
}
export default App
