import React, { useEffect, useState } from 'react'
import SuperHeros from '../models/SuperHeros'

const HeroDetails = () => {
    //On va utiliser le hook useState pour stocker les heros
    const [hero, setHero] = useState<SuperHeros>();

    const { id } = useParams<{id: string}>();

    useEffect(()=>{
        if(id){
            herosLists.forEach((hero)=>{
                if (hero.id === +id){
                    setHero(hero);
                }
            })
        }
    })


  return (
    <div>HeroDetails</div>
  )
}

export default HeroDetails