import {useState} from "react"
const Searched = () => {
    const [searchedRecipes , setSearchedRecipes] = useState([])

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

  return <h1>Searched</h1>;
};

export default Searched;
