import {FaSearch} from "react-icons/fa"
import {useState} from "react"

const Search = () => {
    const [input , setInput] = useState("")

    const getUserInput = (e) => {
        setInput(e.target.value)
    }

    return(
        <>
            <form action="#" className="mx-[20rem]">
                <div className="relative">
                    <FaSearch className="absolute top-1/2 left-0 text-white translate-x-full
                     -translate-y-1/2"/>
                    <input onChange={getUserInput} type="text" value={input} className="form-input"/>
                    
                </div>
            </form>
        </>
    )
}

export default Search;