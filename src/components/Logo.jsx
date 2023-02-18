import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi"

const Logo = () => {
    return (
        <div className="flex justify-start items-center space-x-1 mx-[20rem] my-10">
        <GiKnifeFork className="text-[2rem]"/>
        <Link to={"/"} className="text-[1.5rem] font-normal">Deliciousss</Link>
      </div>
    )
}

export default Logo;