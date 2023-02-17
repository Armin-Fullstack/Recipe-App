import Cuisine from "./Cuisine";
import Home from "./Home";
import {Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";

const Pages = () => {
  return (
    <>
      
        <Routes>
          {/* If the path matches / then render out Home component */}
          <Route path="/" element={<Home />} />
          {/* If the path matches /cuisine then render out Home component */}
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
          </Routes>
        
      
    </>
  );
};

export default Pages;
