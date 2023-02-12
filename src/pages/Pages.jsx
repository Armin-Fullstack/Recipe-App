import Cuisine from "./Cuisine";
import Home from "./Home";
import { BrowserRouter , Route , Routes } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <Home />
      <Cuisine />
    </>
  );
};

export default Pages;
