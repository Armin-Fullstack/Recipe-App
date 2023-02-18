import Cuisine from "./Cuisine";
import Home from "./Home";
import {Route, Routes, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from "framer-motion"

const Pages = () => {
  let location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      
        <Routes location={location} key={location.pathname}>
          {/* If the path matches / then render out Home component */}
          <Route path="/" element={<Home />} />
          {/* If the path matches /cuisine then render out Home component */}
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/recipe/:name" element={<Recipe/>}/>
          </Routes>
        
      
    </AnimatePresence>
  );
};

export default Pages;
