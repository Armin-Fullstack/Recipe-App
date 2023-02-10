import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // fetch data
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data)
  };

  return (
    <>
      {/* section container */}
      <div className="my-[4rem] container">
        <h1>Popular Picks</h1>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {/* rendering the cards */}
          {popular.map((element) => {
            return (
              <SplideSlide key={element.id}>
                {/* card container */}
                <div className="pickgradient relative rounded-[2rem] overflow-hidden">
                  <p>
                    {element.title}
                  </p>
                  <img
                    src={element.image}
                    alt={element.title}
                    className="rounded-[2rem] cursor-pointer"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Popular;
