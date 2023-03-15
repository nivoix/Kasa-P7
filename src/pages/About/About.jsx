import React from 'react'
import Banner from '../../RouterLayout/Banner'
import './About.css'

function About() {
  return (
    <div className='about'>
      <Banner imageURL='/assets/imgBannerAbout.png' />
      <div>A propos</div>
    </div>
  )
}

export default About