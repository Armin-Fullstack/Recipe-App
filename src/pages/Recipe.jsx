import { useParams } from "react-router-dom"


const Recipe = () => {
    
    let params = useParams()

    // fetch details 
    const getDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
            import.meta.env.VITE_APP_API_KEY
          }`)
          const data = api.json()
          
    }


    return(
        null
    )
}

export default Recipe;