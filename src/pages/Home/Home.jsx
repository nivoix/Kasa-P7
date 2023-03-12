import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import ApartmentGrid from '../../components/ApartmentGrid'
import Footer from '../../components/Footer'
import "./Home.css"

function home() {
  return (
    <div>
      <div className='home'>
        <Navbar />
        <Banner />
        <ApartmentGrid />
      </div>
      <Footer />
    </div>
  )
}

export default home
