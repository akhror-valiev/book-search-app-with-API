import React from 'react'
import "./Loader.css"
import loadImg from "../../assets/images/loader.svg"

const Loader = () => {
    return (
        <div className='loader flex flex-c'>
            <img src={loadImg} alt="loader" />
        </div>
    )
}

export default Loader