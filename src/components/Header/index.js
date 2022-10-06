// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo"
        alt="wave"
      />
      <h1 className="heading-wave">Wave</h1>
    </div>
    <div className="navigate-items-container">
      <Link className="items-heading" to="/">
        Home
      </Link>
      <Link className="items-heading" to="/about">
        About
      </Link>
      <Link className="items-heading" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
