import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Recipe = () => {
    const [details , setDetails] = useState({})
    let params = useParams()

    // fetch details 
    const getDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
            import.meta.env.VITE_APP_API_KEY
          }`)
          const data = await api.json()
          
          setDetails(data)
   
    }

    useEffect(()=> {
        getDetails()
    } , [params.name])

    return(

        // Details section 
        <section>
            {/* main container  */}
            <div className="container max-w-5xl mx-auto">
                
            </div>
        </section>
    )
}

export default Recipe;