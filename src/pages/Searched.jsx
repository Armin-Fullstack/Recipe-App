import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Searched = () => {
    const [searchedRecipes , setSearchedRecipes] = useState([])
    const params = useParams()

  //Fetch data
  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&query=${name}`
    );

    const data = await api.json();
    setSearchedRecipes(data.results)
  };

  useEffect(() => {
    getSearched(params.search)
  } , [params.search])


  return (
    <div className="main-container px-6">

    {/* searched container  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col md:flex-row gap-4">
      {/* rendering the items  */}
      {searchedRecipes.map(element => {
        return (
          <div key={element.id}>
            <Link to={`/recipe/${element.id}`}>
            <img src={element.image} alt={element.title} className="w-full rounded-[2rem]" />
            <h4 className="text-center p-[1rem]">{element.title}</h4>
            </Link>
            
          </div>
        )
      })}
    </div>
    
    </div>
    
  )
};

export default Searched;
