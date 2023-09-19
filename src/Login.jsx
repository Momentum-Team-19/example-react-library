import axios from 'axios'
import { useState } from 'react'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitted')
    // make a request to the login endpoint
    // include the credentials the user typed in
    const loginUrl = 'http://127.0.0.1:8000/auth/token/login'
    axios
      .post(loginUrl, {
        username: username,
        password: password,
      })
      .then((res) => setToken(res.data.auth_token))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="username-input">
          <label htmlFor="name">Enter your username: </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </div>
        <div className="password-input">
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className="form-example">
          <input type="submit" value="Log In!" />
        </div>
      </form>
    </div>
  )
}

export default Login

// forms in React
// controlled form vs uncontrolled form
