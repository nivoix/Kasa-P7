import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.css'

function ApartmentCard(props) {
  return (
    <div className='apartmentcard'>
      <Link to={`/apartment/${props.id}`}>
        <img src={props.imageURL} alt=""></img>
        <h2 className='tittleApartmentCard'>{props.title}</h2>
      </Link>
    </div>
  )
}

export default ApartmentCard