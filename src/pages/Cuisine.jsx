import { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    className="main-container grid gap-8 grid-cols-4">
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
    </motion.div>
      
  );
};

export default Cuisine;
