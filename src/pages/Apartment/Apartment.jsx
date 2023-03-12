import React from 'react'
import CarouselBanner from '../../components/CarouselBanner'
import './Apartment.css'

function Apartment() {
  return (
    <div className='ApartmentPage'>
          <CarouselBanner />
          <div className='infoGenerales'>
                <div className='descriptionApartment'>
                      <h1>Name Apartement</h1>
                      <h2>ville</h2>
                      <p>tags</p>
                      <p>tags</p>
                      <p>tags</p>
                </div>
                <div className='descriptionproprio'>
                      <div className='infoProprio'>
                            <div>
                                <p>prénom</p>
                                <p>nom</p>
                            </div>
                            <img src="./assets/Host.png" alt="portrait" />
                      </div>
                      <div className='Stars'>
                            <img src="/assets/GreyStar.png" alt="star" />
                            <img src="/assets/GreyStar.png" alt="star" />
                            <img src="/assets/GreyStar.png" alt="star" />
                            <img src="/assets/GreyStar.png" alt="star" />
                            <img src="/assets/GreyStar.png" alt="star" />
                      </div>
                </div>
          </div>
          <div className='infoSecondaires'>
              <div className='descriptionApartment'>description
                    <div>titre description</div>
                    <div>textdescription</div>
              </div>
              <div className='equipementApartment'>équipement
                    <div>titre équipement</div>
                    <div>textéquipement</div>
              </div>
          </div>
    </div>
  )
}

export default Apartment