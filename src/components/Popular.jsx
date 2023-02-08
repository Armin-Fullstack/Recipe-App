import { useEffect } from "react";



const Popular = () => {

    useEffect(() => {

        getPopular()
       
    } , [])

    
    const getPopular = async () => {
       const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`)
       const data = await api.json()
       console.log(data)
    } 

    return(
       null
    )
}

export default Popular;