import React from 'react'
import { NavLink } from 'react-router-dom'
import"./Navbar.css"


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src="/assets/logonavbar.svg" alt='logo'></img>
      </div>
      <div className='navbar__link'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </nav>
  )
}

export default Navbar