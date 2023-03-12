import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.css'

function ApartmentCard() {
  return (
    <div className='apartmentcard'>
      <Link to="/apartment">
        <img src="/" alt=""></img>
        <h2 className='tittleApartmentCard'>Titre d'appartement</h2>
      </Link>
    </div>
  )
}

export default ApartmentCard