import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";

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
    <div className="container max-w-5xl mx-auto px-10 grid gap-8 grid-cols-4">
        {/* rendering the items */}
        {cuisine.map(element => {
          return (
            <div key={element.id}>
              <Link to={`/recipe/${element.id}`}>
              <img src={element.image} alt={element.title} className="w-full rounded-[2rem]"/>
              <h4 className="text-center p-[1rem]">{element.title}</h4>
              </Link>
              
            </div>
          )
        })}
    </div>
      
  );
};

export default Cuisine;
