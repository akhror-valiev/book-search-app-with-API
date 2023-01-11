import React, { useRef, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import "./SearchForm.css"
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef("")
    const navigate = useNavigate()


    useEffect(() => searchText.current.focus(), [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchItem = searchText.current.value.trim();
        if ((tempSearchItem.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("Search the books");
            setResultTitle("Please Enter Something...")
        } else {
            setSearchTerm(searchText.current.value)
        }
        navigate("/book")
    }

    return (
        <div className='search-form'>
            <div className="container">
                <div className="search-form-content">
                    <form onSubmit={handleSubmit} className='search-from'>
                        <div className="search-form-elem flex flex-sb bg-white">
                            <input type="text" className="form-control" placeholder='Search the books...' ref={searchText} />
                            <button onClick={handleSubmit} type="submit" className="flex flex-c">
                                <FaSearch className="text-purple" size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchForm