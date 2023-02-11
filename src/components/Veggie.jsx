import { useEffect, useState } from "react"


const Veggie = () => {
    const [veggie , setVeggie] = useState([])

    useEffect(() => {
        getVeggie()
    } , [])

    const getVeggie = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_APP_API_KEY
          }&number=9&tags=vegetarian`)
          const data = await api.json()
          console.log(data)
    }

    return(
       null
    )
}

export default Veggie;