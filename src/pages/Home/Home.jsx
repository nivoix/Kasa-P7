import React from 'react'

import Banner from '../../components/Banner'
import ApartmentGrid from '../../components/ApartmentGrid'

import "./Home.css"

function home() {
  return (
    <div>
      <div className='home'>
        <Banner />
        <ApartmentGrid />
      </div>
    </div>
  )
}

export default home
