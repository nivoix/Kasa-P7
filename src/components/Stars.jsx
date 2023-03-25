import React from 'react'

export default function Stars(props) {
  const rating = props.rating
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num, index) => (<img key={index}  alt="star" src={rating >= num ? "/assets/RedStar.png" : "/assets/GreyStar.png" }/>))}
    </div>
  )
}
