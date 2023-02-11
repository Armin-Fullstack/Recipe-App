import { useEffect, useState } from "react"


const Veggie = () => {
    const [veggie , setVeggie] = useState([])

    useEffect(() => {
        getVeggie()
    } , [])

    // fetch data
    const getVeggie = async () => {
        // getting the items from localstorage
        const check = localStorage.getItem("vegetarian")
        

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