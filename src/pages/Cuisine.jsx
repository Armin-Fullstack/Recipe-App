import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  //Fetching api
  const getCuisine = async (type) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&cuisine=${type}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  // Invoking the getCuisine function
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
        // cuisine container 
    <div className="max-w-5xl mx-auto px-10 grid gap-4 grid-cols-4">
        
    </div>
      
  );
};

export default Cuisine;
