import React from 'react'
import ApartmentCard from './ApartmentCard'
import './ApartmentGrid.css'

function ApartmentGrid() {
  return (
    <div className='bgapartmentgrid'>
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/>
      <ApartmentCard/>
    </div>
  )
}

export default ApartmentGrid