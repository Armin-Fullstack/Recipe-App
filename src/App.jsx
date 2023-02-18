import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import Logo from "./components/Logo"

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Logo/>
    <Search/>
    <Category/>
    <Pages/>
    </BrowserRouter>
    
    
    </>
    
  )
}

export default App;