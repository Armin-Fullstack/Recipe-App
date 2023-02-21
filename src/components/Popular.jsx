import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {Link} from "react-router-dom"

import "@splidejs/react-splide/css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // fetch data
  const getPopular = async () => {
    // getting the items from localstorage
    const check = localStorage.getItem("popular");

    if (check) {
      // pulling back from local storage- string to an array
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
           import.meta.env.VITE_APP_API_KEY
        }&number=9`
      );
      const data = await api.json();
      // setting the items to local storage
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <div className="main-container px-6">
      {/* section container */}
      <div className="my-[4rem]">
        <h1 className="mb-5 font-bold">Popular Picks</h1>

        <Splide
          options={{
            perPage: 4,
            autoplay: true,
            breakpoints: {
              560: {
                perPage: 1,
                arrows: true,
                pagination: true,
                snap: true
              },
              1024: {
                perPage: 3
              }

            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {/* rendering the cards */}
          {popular.map((element) => {
            return (
              <SplideSlide key={element.id} className="cursor-pointer">
                {/* card container */}
                  <Link to={`/recipe/${element.id}`}>
                <div className="pickgradient relative rounded-[2rem] overflow-hidden">
                  <p
                    className="absolute z-10 left-1/2 bottom-[0%] -translate-x-1/2 translate-y-[0%]
                  text-white text-center text-[0.7rem] w-full font-bold h-[40%] flex justify-center items-center"
                  >
                    {element.title}
                  </p>
                  <img
                    src={element.image}
                    alt={element.title}
                    className="w-full rounded-[2rem]"
                  />
               
                </div>
                  </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Popular;
