import React from 'react'
import Banner from '../../components/Banner'
import ApartmentGrid from '../../components/ApartmentGrid'
import "./Home.scss"
import imagebanner from '../../assets/images/imgBanner.png'

function home() {
  return (
    <>
      <main className='home'>
        <Banner imageURL={imagebanner} title='Chez vous, partout et ailleurs'/>
        <ApartmentGrid />
      </main>
    </>
  )
}

export default home
