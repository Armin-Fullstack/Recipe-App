import { useState } from "react"

const Cuisine = () => {
    const [cuisine , setCuisine] = useState([])
    //Fetch api
    const getCuisine = async (type) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${
            import.meta.env.VITE_APP_API_KEY
          }&cuisine=${type}`)
          const data = await api.json()
          setCuisine(data.results)
    }

    return (

        <>

        null
        
        </>
    )
}

export default Cuisine