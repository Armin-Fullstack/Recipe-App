import { useEffect, useState } from "react";

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
  };

  return (
    <>
        {/* section container */}
      <div className="my-[4rem]">
        <h1>Popular Picks</h1>

        {/* rendering cards */}
        {popular.map((element) => {
          return (
            // card container
            <div className="min-h-[25rem] rounded-[2rem] overflow-hidden">
              <p>{element.title}</p>
              <img
                src={element.image}
                alt={element.title}
                className="rounded-[2rem]"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Popular;
