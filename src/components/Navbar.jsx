import React from 'react'
import { Link } from 'react-router-dom'
import"./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src="/assets/logonavbar.svg" alt='logo'></img>
      </div>
      <div className='navbar__link'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  )
}

export default Navbar