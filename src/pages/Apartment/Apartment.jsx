import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ApartDetailsCard from '../../components/ApartDetailsCard'
import CarouselBanner from '../../components/CarouselBanner'
import Tags from '../../components/Tags'
import Stars from '../../components/Stars'
import './Apartment.css'

function Apartment() {
  const  aptId  = useLocation()
  const [selectedApart, setselectedApart] = useState()
console.log(aptId)

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
      <main className='ApartmentPage'>
        <CarouselBanner pictures= {selectedApart.pictures}/>
        <div className='infoGenerales'>
              <div className='descriptionApartment'>
                    <h1 className='apartTitle'>{selectedApart.title}</h1>
                    <h2 className='apartCity'>{selectedApart.location}</h2>
                    <Tags tags= {selectedApart.tags}/>
              </div>
              <div className='descriptionproprio'>
                    <div className='infoProprio'>
                          <div className='nameproprio'>
                              <p>{name[0]}</p>
                              <p>{name[1]}</p>
                          </div>
                          <img className='headProprio' src={selectedApart.host.picture} alt="portrait" />
                    </div>
                    <Stars rating={selectedApart.rating}/>
              </div>
        </div>
        <div className='infoSecondaires'>
            <ApartDetailsCard 
              title="Description" 
              description={selectedApart.description}
            />
            <ApartDetailsCard 
              title="Equipements" 
              description={selectedApart.equipments.map((equip ,index) => <ul key={index}>{equip}</ul>)}
            />
        </div>
      </main>
    </>
  )
}

export default Apartment