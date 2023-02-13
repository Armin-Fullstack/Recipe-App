import Cuisine from "./Cuisine";
import Home from "./Home";
import {Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      
        <Routes>
          {/* If the path matches / then render out Home component */}
          <Route path="/" element={<Home />} />
          {/* If the path matches /cuisine then render out Home component */}
          <Route path="/cuisine" element={<Cuisine />} />
        </Routes>
      
    </>
  );
};

export default Pages;
