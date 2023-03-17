import React, { useState } from 'react'
import './ApartDetailsCard.css'

function ApartDetailsCard(props) {
  const [isnovisible, setisnovisible] = useState(true)

  
  const showCard = () => {
    setisnovisible(!isnovisible)
  }
  const textCardClass = isnovisible ? ".is-novisible" : ""
  const rotate = isnovisible ? ".dropUp" : ""
  return (
    <>
      <div className='apartmentCard'>
                  <div className='titleCard'onClick={showCard}>{props.title}
                  <span><img className={`dropDown${rotate}`} src="/assets/dropdown.png"  alt="dropdown"/></span>
                  </div>
                  <div className={`textCard${textCardClass}`} >{isnovisible? "" : props.description}</div>
            </div>
    </>
  )
}

export default ApartDetailsCard