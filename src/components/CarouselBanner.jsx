import React, { useState } from 'react'
import './CarouselBanner.scss'
/* import Loader from './Loader' */
import dropleft from '../assets/images/dropleft.png'
import dropright from '../assets/images/dropright.png'
import noPictures from '../assets/images/no_pictures.png'

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

  return images ? (
    <div className='carouselCard'>
      <div className='carouselImage'>
        {
          images.map((image, i) => (
            <img src={image} key={i} alt="" className={i === currentPicture ? 'show' : ''}/>
        ))}
      </div>
      {showArrow() && <>
      <img className='drop left' src={dropleft} alt='drop' onClick={previous}></img>
      <img className='drop right' src={dropright} alt='drop' onClick={next}></img>
      <p className='counterimage'>{currentPicture + 1}/{images.length}</p>
      </>
      }
    </div>
  ) : <img src={noPictures} alt="" className='noPictures'/>
}

export default CarouselBanner