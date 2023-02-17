import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Link} from "react-router-dom"
import "@splidejs/react-splide/css";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  // fetch data
  const getVeggie = async () => {
    // getting the items from local storage
    const check = localStorage.getItem("vegetarian");
    if (check) {
      // pulling back from local storage- string to an array
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_APP_API_KEY
        }&number=9&tags=vegetarian`
      );
      const data = await api.json();
      // setting the items to local storage
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <>
      {/* veggie container  */}
      <div className="my-[4rem] container">
        <h1 className="mb-5">Vegetarian Picks</h1>

        <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem"
        }}>
          {/* rendering the cards */}
          {veggie.map((element) => {
            return (
              <SplideSlide key={element.id}>
                {/* card container */}
                <div className="pickgradient relative rounded-[2rem] overflow-hidden">
                  <Link to={`/recipe/${element.id}`}>
                  <p
                    className="absolute z-10 left-1/2 bottom-[0%] -translate-x-1/2 translate-y-[0%]
                  text-white text-center text-[0.7rem] w-full font-bold h-[40%] flex justify-center items-center"
                  >
                    {element.title}
                  </p>

                  <img
                    src={element.image}
                    alt={element.title}
                    className="w-full rounded-[2rem] cursor-pointer"
                  />
                  </Link>
               
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Veggie;
