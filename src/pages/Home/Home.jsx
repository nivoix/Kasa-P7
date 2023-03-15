import React from 'react'
import Banner from '../../RouterLayout/Banner'
import ApartmentGrid from '../../components/ApartmentGrid'
import "./Home.css"

function home() {
  return (
    <div>
      <div className='home'>
        <Banner imageURL='/assets/imgBanner.png' title='Chez vous, partout et ailleurs'/>
        <ApartmentGrid />
      </div>
    </div>
  )
}

export default home
