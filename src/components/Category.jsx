import {FaPizzaSlice , FaHamburger} from "react-icons/fa"
import {GiNoodles , GiChopsticks} from "react-icons/gi"
import { NavLink } from "react-router-dom"

const Category = () => {
    return (
        <>
        {/* Icons container */}
        <div className="flex justify-center items-center my-[2rem]">
                {/* Icons 1 */}
                <NavLink to={"/cuisine/Italian"}>
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </NavLink>
        </div>
        
        </>
    )
}

export default Category;