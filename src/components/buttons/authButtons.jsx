import './buttons.css'

const LoginButton = ({ loginFn }) => {
  return (
    <>
      <li className="pure-menu-item">
        <a href="/" className="pure-menu-link" onClick={loginFn}>
          Log In
        </a>
      </li>
    </>
  )
}

const LogOutButton = () => {
  return (
    <>
      <li className="pure-menu-item">
        <a href="/" className="pure-menu-link">
          Log Out
        </a>
      </li>
    </>
  )
}

const SignUpButton = ({ registerFn }) => {
  return (
    <li className="pure-menu-item">
      <a href="/" className="pure-menu-link" onClick={registerFn}>
        Sign Up
      </a>
    </li>
  )
}

const ButtonMenu = ({ children }) => {
  return <ul className="pure-menu-list header-btn-group">{children}</ul>
}

export { LoginButton, LogOutButton, SignUpButton, ButtonMenu }
