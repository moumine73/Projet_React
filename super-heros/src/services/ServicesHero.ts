class ServiceHero{

    getAllHero = () =>{
        return fetch("http://localhost:3000/heros")
        .then((Response) => Response.json())
        .then((error) => console.error(error))
    }

    getHero = (id: string) =>{
        return fetch(`http://localhost:3000/heros/${id}`)
        .then((Response) => Response.json())
        .then((error) => console.error(error))
    }
}