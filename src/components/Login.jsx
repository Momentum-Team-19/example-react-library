import axios from 'axios'
import { useState } from 'react'
import './Login.css'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

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
      .catch((err) => {
        console.log(err.response.data.non_field_errors)
        setError(err.response.data.non_field_errors[0])
      })
  }

  return (
    <div>
      {error && <div className="error p-1">{error}</div>}
      <form className="pure-form" onSubmit={handleSubmit}>
        <fieldset className="username-input">
          <label htmlFor="name">username </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={username}
            onFocus={() => setError(null)}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
        </fieldset>
        <fieldset className="password-input">
          <label htmlFor="password">password </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onFocus={() => setError(null)}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </fieldset>
        <div className="form-example">
          <input
            type="submit"
            value="Log In!"
            className="pure-button btn-primary"
          />
        </div>
      </form>
    </div>
  )
}

export default Login

// forms in React
// controlled form vs uncontrolled form
