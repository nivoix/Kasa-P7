import React from 'react'
import "./Banner.css"

function Banner(props) {
  return (
    <div className='banner'>
      <img className='imgbanner' src={props.imageURL} alt="bannière d'un paysage"></img>
      {props.title && <h1 className='tittlebanner'>{props.title}</h1>}
    </div>
  )
}

export default Banner