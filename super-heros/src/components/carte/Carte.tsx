import React from 'react'
import SuperHeros from '../../models/SuperHeros'

type Heros = {
  heros: SuperHeros,
}

const Carte:React.FC<Heros> = ({heros}) => {
  return (
    <div className='carte'>
        
        <h2>Nom : {heros.name}</h2>
        <div className='carteBody'>
            <img src={heros.image} alt={heros.name} />
        </div>

        <div className='cartedesc'>
            <p className='desc'>Nom civil : {heros.civil}</p>
            <p className='desc'>Age : {heros.age} ans</p>
            <p className='desc'>Ville : {heros.ville}</p>
        </div>
    </div>
  )
}

export default Carte