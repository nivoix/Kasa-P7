import React, { useState } from 'react'
import './CarouselBanner.css'
import Loader from './Loader'

function CarouselBanner(props) {
  const images = props.pictures
  const[currentPicture, setcurrentPicture]= useState(0)

  const showArrow = () => {
    return images.length !== 1
  }
  
  const next = () => {
    const isLastSlide = currentPicture === images.length - 1
    const newIndex = isLastSlide ? 0 : currentPicture + 1
    setcurrentPicture(newIndex)
  }

  const previous = () => {
    const isFirstSlide = currentPicture === 0
    const newIndex = isFirstSlide ? images.length -1 : currentPicture -1
    setcurrentPicture(newIndex)
  }

//if(!images) return <div>Loading...</div>
  return images ? (
    <div className='carouselCard'>
      <div className='carouselImage'>
        {
          images.map((image, i) => (
            <img src={image} key={i} alt="" className={i === currentPicture ? 'show' : ''}/>
        ))}
      </div>
      {showArrow() && <>
      <img className='drop left' src="/assets/dropleft.png" alt='drop' onClick={previous}></img>
      <img className='drop right' src="/assets/dropright.png" alt='drop' onClick={next}></img>
      <p className='counterimage'>{currentPicture + 1}/{images.length}</p>
      </>
      }
    </div>
  ) : (<Loader />)
}

export default CarouselBanner