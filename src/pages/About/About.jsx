import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Error from '../Error/Error'
import Loader from '../../components/Loader'
import ApartDetailsCard from '../../components/ApartDetailsCard'
import './About.scss'
import '../../components/ApartDetailsCard.scss'
import imgbannerabout from '../../assets/images/imgBannerAbout.png'


function About() {
  const [textAbouts, settextAbouts] = useState([])
  const [nofound, setnofound] = useState(false)

  useEffect(() => {
    setTimeout(() => {textAbout()}, 2000)
    return() => clearTimeout()
   }, [])

  function textAbout () {
    fetch("/textabout.json")
    .then((res) => res.json())
    .then((data) => {
      data ? settextAbouts(data): setnofound(true)
    })
    .catch((error) => {
      console.log(error);
      setnofound(true)
    })
  }
  if(nofound) return <Error />
  return (
    <>
      {textAbouts.length < 1 && <Loader />}
        <main className='about'>
          <Banner imageURL={imgbannerabout} />
          <div className='groupCard'>
            {textAbouts.map((infoAbout) => (<ApartDetailsCard key={infoAbout.id} title={infoAbout.title} description={infoAbout.text}/>))}
          </div>
        </main>
    </>
  )
}

export default About