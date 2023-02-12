import Cuisine from "./Cuisine";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* If the path matches / then render out Home component */}
          <Route path="/" element={<Home />} />
          {/* If the path matches /cuisine then render out Home component */}
          <Route path="/cuisine" element={<Cuisine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages;
