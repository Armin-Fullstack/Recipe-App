import {FaPizzaSlice , FaHamburger} from "react-icons/fa"
import {GiNoodles , GiChopsticks} from "react-icons/gi"
import { NavLink } from "react-router-dom"

const Category = () => {
    return (
        <div className="main-container px-6 md:px-0 my-12">
        {/* Icons container */}
        <div className="flex flex-wrap justify-evenly">
                {/* Icons 1 */}
                <NavLink to={"/cuisine/Italian"} className="navlink">
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </NavLink>
                {/* Icons 2 */}
                <NavLink to={"/cuisine/American"} className="navlink">
                    <FaHamburger/>
                    <h4>American</h4>
                </NavLink>
                {/* Icons 3 */}
                <NavLink to={"/cuisine/Thai"} className="navlink">
                    <GiNoodles/>
                    <h4>Thai</h4>
                </NavLink>
                {/* Icons 4 */}
                <NavLink to={"/cuisine/Japanese"} className="navlink">
                    <GiChopsticks/>
                    <h4>Japanese</h4>
                </NavLink>
        </div>
        
        </div>
    )
}

export default Category;