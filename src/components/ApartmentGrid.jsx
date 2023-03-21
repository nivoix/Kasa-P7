import React, { useEffect, useState } from 'react'
import ApartmentCard from './ApartmentCard'
import './ApartmentGrid.css'

function ApartmentGrid() {
  const [dataAppts, setdataAppts] = useState ([]);
  
  useEffect (dataAppt, []);
  
  function dataAppt () {
    fetch("db.json")
      .then((res) => res.json())
      .then((res) => setdataAppts(res))
      .catch(console.error)
  }

  return (
    <div className='bgapartmentgrid'>
      {dataAppts.map((dataAppt) => (<ApartmentCard key={dataAppt.id} id={dataAppt.id} title={dataAppt.title} imageURL= {dataAppt.cover}/>))}
    </div>
  )
}

export default ApartmentGrid