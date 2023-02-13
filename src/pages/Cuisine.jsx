import { useState } from "react"
import { useParams } from "react-router-dom"

const Cuisine = () => {
    const [cuisine , setCuisine] = useState([])
    let params = useParams()
    //Fetching api
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