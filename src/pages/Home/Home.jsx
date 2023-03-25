import React from 'react'
import Banner from '../../components/Banner'
import ApartmentGrid from '../../components/ApartmentGrid'
import "./Home.css"

function home() {
  return (
    <>
      <main className='home'>
        <Banner imageURL='/assets/imgBanner.png' title='Chez vous, partout et ailleurs'/>
        <ApartmentGrid />
      </main>
    </>
  )
}

export default home
