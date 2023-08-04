import React, { useEffect, useState } from 'react'
import SuperHeros from '../models/SuperHeros';
import Carte from '../components/carte/Carte';



const HeroLists = () => {

  const[heros, setHeros] = useState<SuperHeros[]>([]);

  const HerosList: SuperHeros[] = [
    {id: 1,
    name: "Batman",
    image: "https://www.superherodb.com/gallery2/075/395/39568.webp",
    civil: "Bruce Wayne",
    age: 35,
    ville: "Gotham City",
    },
    {
    id: 2,
    name: "Superman",
    image: "https://www.superherodb.com/gallery2/075/475/47594.webp",
    civil: "Clark Kent",
    age: 28,
    ville: "Metropolis",
    },
    {
    id: 3,
    name: "Green Lantern",
    image: "https://www.superherodb.com/gallery2/075/181/18105.webp",
    civil: "Hal Jordan",
    age: 30,
    ville: "Coast City",
    },
  ]

  useEffect(()=>{
    setHeros(HerosList)
  },[])



  return (
    <div>
      {heros.map((hero)=>(
        <Carte key={hero.id} heros={hero} />
      ))}
    </div>
  )
}

export default HeroLists