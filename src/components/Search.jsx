import {FaSearch} from "react-icons/fa"

const Search = () => {
    return(
        <>
            <form action="#" className="mx-[20rem]">
                <div className="relative">
                    <FaSearch className="absolute top-1/2 left-0 text-white translate-x-full
                     -translate-y-1/2"/>
                    <input type="text" className="form-input"/>
                </div>
            </form>
        </>
    )
}

export default Search;