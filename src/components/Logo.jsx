import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi"

const Logo = () => {
    return (
      <div className="main-container px-6 my-12">
      <div className="flex max-w-sm space-x-1">
        <GiKnifeFork className="text-[2rem]"/>
        <Link to={"/"} className="text-[1.5rem] font-lobster">deliciousss</Link>
      </div>
      </div>
        
    )
}

export default Logo;