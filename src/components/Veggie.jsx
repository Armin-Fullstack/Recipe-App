import { useEffect, useState } from "react"


const Veggie = () => {
    const [veggie , setVeggie] = useState([])

    useEffect(() => {
        getVeggie()
    } , [])

    // fetch data
    const getVeggie = async () => {
        // getting the items from local storage
        const check = localStorage.getItem("vegetarian")
        if(check) {
            // pulling back from local storage- string to an array
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${
                import.meta.env.VITE_APP_API_KEY
              }&number=9&tags=vegetarian`)
              const data = await api.json()
              // setting the items to local storage
              localStorage.setItem("vegetarian" , JSON.stringify(data.recipes))
              setVeggie(data.recipes)
        }
    }
    
    return(
       <>
        {/* veggie container  */}
       <div className="my-[4rem] container">
            
       </div>
       
       </>
    )
}

export default Veggie;