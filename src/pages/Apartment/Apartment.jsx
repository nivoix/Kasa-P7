import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApartDetailsCard from '../../components/ApartDetailsCard'
import CarouselBanner from '../../components/CarouselBanner'
import Tags from '../../components/Tags'
import Stars from '../../components/Stars'
import Loader from '../../components/Loader'
import Error from '../../pages/Error/Error'
import './Apartment.css'

function Apartment() {
  const aptId   = useParams()
  const [selectedApart, setselectedApart] = useState()
  const [nofound, setnofound] = useState(false)

  useEffect (ApptDatas, [aptId.id]);
  
  function ApptDatas () {
    fetch("/db.json")
      .then((res) => res.json())
      .then((apts) => {
        const apartmentSelected = apts.find(apt => apt.id === aptId.id)
        apartmentSelected ? (setselectedApart(apartmentSelected)) : (setnofound(true))
      })
      .catch((error) => {
        console.log(error);
        setnofound(true)
      })
  }
if (nofound) return <Error />

return selectedApart ? (
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
                              <p>{selectedApart.host.name.split((" "))[0]}</p>
                              <p>{selectedApart.host.name.split((" "))[1]}</p>
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
  ) : (<Loader />)
}

export default Apartment