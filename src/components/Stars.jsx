import React from 'react'
import redstar from '../assets/images/RedStar.png'
import greystar from '../assets/images/GreyStar.png'

export default function Stars(props) {
  const rating = props.rating
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num, index) => 
      (<img key={index}  alt="star" src={rating >= num ? `${redstar}` : `${greystar}` }/>))}
    </div>
  )
}
