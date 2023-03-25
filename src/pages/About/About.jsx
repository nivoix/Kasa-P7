import React from 'react'
import Banner from '../../components/Banner'
import ApartDetailsCard from '../../components/ApartDetailsCard'
import './About.css'
import '../../components/ApartDetailsCard.css'

const descripFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const descripRespect = "La bienveillance fait parti des valeurs fondatrices de Kasa; Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
const descripService = "Nos équipes de tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const descripSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

function About() {
  return (
    <main className='about'>
      <Banner imageURL='/assets/imgBannerAbout.png' />
      <div className='groupCard'>
      <ApartDetailsCard title="Fiabilité" description={descripFiabilite}/>
      <ApartDetailsCard title="Respect" description={descripRespect}/>
      <ApartDetailsCard title="Service" description={descripService}/>
      <ApartDetailsCard title="Sécurité" description={descripSecurite}/>
      </div>
    </main>
  )
}

export default About