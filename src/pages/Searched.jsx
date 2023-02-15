import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
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


  return <h1>Searched</h1>;
};

export default Searched;
