import React from 'react'
import { NavLink } from 'react-router-dom'
import"./Navbar.scss"
import logo from '../assets/images/logonavbar.svg'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src= {logo} alt='logo'></img>
      </div>
      <div className='navbar__link'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </nav>
  )
}

export default Navbar