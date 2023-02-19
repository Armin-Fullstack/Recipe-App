import {FaSearch} from "react-icons/fa"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const Search = () => {
    const [input , setInput] = useState("")
    const navigate = useNavigate()

    const getUserInput = (e) => {
        setInput(e.target.value)
        
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate(`/searched/${input}`)
    }


    return(
        <div className="main-container px-6 md:px-0">
            <form onSubmit={onSubmitHandler} className="max-w-xl mx-auto">
                <div className="relative">
                    <FaSearch className="absolute top-1/2 left-0 text-white translate-x-full
                     -translate-y-1/2 cursor-pointer"/>
                    <input onChange={getUserInput} type="text" value={input} className="form-input"/>
                    
                </div>
            </form>
        </div>
    )
}

export default Search;