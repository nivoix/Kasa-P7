import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CarouselBanner from '../../components/CarouselBanner'
import './Apartment.css'

function Apartment() {
  const  aptId  = useLocation()
  const [selectedApart, setselectedApart] = useState()

  useEffect (ApptDatas, [aptId.state]);
  
  function ApptDatas () {
    fetch("db.json")
      .then((res) => res.json())
      .then((apts) => {
        const apartmentSelected = apts.find(apt => apt.id === aptId.state)
        setselectedApart(apartmentSelected)
      })
      .catch(console.error)
  }

//loading pour attendre selectedApart
if(!selectedApart) return <div>Loading...</div>

//spliter le nom de l'auteur pour avoir nom et prénom
const name = selectedApart.host.name.split((" "))
  return (
    <> 
      <div className='ApartmentPage'>
        <CarouselBanner pictures= {selectedApart.pictures}/>
        <div className='infoGenerales'>
              <div className='descriptionApartment'>
                    <h1 className='apartTitle'>{selectedApart.title}</h1>
                    <h2 className='apartCity'>{selectedApart.location}</h2>
                    <div className='apartTags'>{selectedApart.tags.map((tag , index) => (<span className='tag' key={index}>{tag}</span>))}</div>
              </div>
              <div className='descriptionproprio'>
                    <div className='infoProprio'>
                          <div className='nameproprio'>
                              <p>{name[0]}</p>
                              <p>{name[1]}</p>
                          </div>
                          <img className='headProprio' src={selectedApart.host.picture} alt="portrait" />
                    </div>
                    <div className='Stars'>
                      {[1, 2, 3, 4, 5].map((num, index) => (<img key={index}  alt="star" src={selectedApart.rating >= num ? "/assets/RedStar.png" : "/assets/GreyStar.png" }/>))}
                    </div>
              </div>
        </div>
        <div className='infoSecondaires'>
            <div className='descriptionApartmentCard'>
                  <div className='titleCard'>Description</div>
                  <div>{selectedApart.description}</div>
            </div>
            <div className='equipementApartmentCard'>
                  <div className='titleCard'>Equipements
                    <span className='dropDown'><img src="/assets/dropdown.png" alt="dropdown"/></span>
                  </div>
                  <div>{selectedApart.equipments.map((equip ,index) => <span key={index}>{equip}</span>)}</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Apartment