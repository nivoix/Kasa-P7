import React from 'react'
import './Footer.scss'
import logofooter from '../assets/images/logofooter.png'

function Footer() {
  return (
    <footer className='footer'>
      <img className='imageFooter' src={logofooter} alt="logo"/>
      <h3 className='textFooter'>©2023 Kasa. All rights reserved</h3>
    </footer>
  )
}

export default Footer

