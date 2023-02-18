import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab , setActiveTab] = useState("Instructions")
  let params = useParams();

  // fetch details
  const getDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    const data = await api.json();

    setDetails(data);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    // Details section
    <section>
      {/* main container  */}
      <div className="container max-w-5xl mx-auto">
        {/* Details container  */}
        <div className="flex justify-around">
          {/* title and image container  */}
          <div className="flex flex-col space-y-3">
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
          </div>

          {/* info container  */}
          <div className="flex flex-col space-y-4 items-start">
            {/* button container  */}
            <div className="flex justify-center items-center space-x-4">
              <button onClick={() => setActiveTab("Instructions")} className={`${activeTab === "Instructions" ? "active-btn" : ""} px-5 py-2 border-2 border-black`}>Instructions</button>

              <button onClick={() => setActiveTab("Ingredients")} className={`${activeTab === "Ingredients" ? "active-btn" : ""} px-5 py-2 border-2 border-black`}>Ingredients</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
