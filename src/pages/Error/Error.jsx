import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "./Error.scss"
import quatrecentquatre from '../../assets/images/404.svg'

const StyledLink =styled(Link)`
color: #FF6060;
font-size: 18px;
font-weight: 500;
margin-top:180px;
margin-bottom: 160px;
text-align: center;
`

function Error() {
  return (
    <>
      <div className='error'>
        <div className='cardError'>
          <img className='imgageError' src={quatrecentquatre} alt="404"/>
          <div className='textError'>Oups! La page que vous demandez n'existe pas.</div>
        <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </div>
      </div>
    </>
  )
}

export default Error