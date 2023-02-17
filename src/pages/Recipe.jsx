import { useState } from "react"
import { useParams } from "react-router-dom"


const Recipe = () => {
    const [details , setDetails] = useState({})
    let params = useParams()

    // fetch details 
    const getDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
            import.meta.env.VITE_APP_API_KEY
          }`)
          const data = api.json()
          setDetails(data)
          
    }


    return(
        null
    )
}

export default Recipe;