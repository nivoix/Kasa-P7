import React, { useState } from 'react'
import './CarouselBanner.css'

function CarouselBanner(props) {
  const images = props.pictures
  const[currentPicture, setcurrentPicture]= useState(0)
  
  const getClassName = (i) => {
    if(i === currentPicture) return "show"
  }

  const next = () => {
    setcurrentPicture((currentPicture + 1) % images.length)
  }

  const previous = () => {
    const newCurrentPicture = currentPicture -1
    if(newCurrentPicture < 0) {
      setcurrentPicture(images.length - 1)
    }else {
      setcurrentPicture((currentPicture - 1))
    }
  }

if(!images) return <div>Loading...</div>
  return (
    <div className='carouselCard'>
      <img className='dropleft' src='./assets/dropleft.png' alt='drop' onClick={previous}></img>
      <div className='carouselImage'>
          {images.map((image, i) => (
              <img src={image} key={i} alt="" className={getClassName(i)}/>
          ))} 
      </div> 
      <img className='dropright' src='./assets/dropright.png' alt='drop' onClick={next}></img>
      <p className='counterimage'>{currentPicture + 1}/{images.length}</p>
    </div>
  )
}

export default CarouselBanner