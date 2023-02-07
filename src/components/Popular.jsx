import { useEffect } from "react"


const Popular = () => {

    useEffect(() => {
        getPopular()
    },[])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_KEY_API_KEY}&number=9`)
        const data = await api.json()
        console.log(data)
    }




    return(
        git
        null
    )
}

export default Popular;