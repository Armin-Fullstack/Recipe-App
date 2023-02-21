import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
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
      <div className="main-container px-6">
        {/* Details container  */}
        <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:space-x-12">
          {/* title and image container  */}
          <div className="flex flex-col space-y-3 sm:w-1/2">
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} className="w-full"/>
          </div>

          {/* info container  */}
          <div className="flex flex-col space-y-4 sm:w-1/2">
            {/* button container  */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setActiveTab("Instructions")}
                className={`${
                  activeTab === "Instructions" ? "active-btn" : ""
                } px-5 py-2 border-2 border-black `}
              >
                Instructions
              </button>

              <button
                onClick={() => setActiveTab("Ingredients")}
                className={`${
                  activeTab === "Ingredients" ? "active-btn" : ""
                } px-5 py-2 border-2 border-black `}
              >
                Ingredients
              </button>
            </div>
            {activeTab === "Instructions" && (
              <>
                <p
                  dangerouslySetInnerHTML={{ __html: details.summary }}
                  className="max-w-md font-semibold"
                ></p>
                <p
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                  className="max-w-md font-semibold"
                ></p>
              </>
            )}
            {activeTab === "Ingredients" && (
              <ul className="space-y-2 list-disc">
                {details.extendedIngredients.map((element) => (
                  <li key={element.id} className="ml-6">{element.original}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;
