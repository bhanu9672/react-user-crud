import React from 'react'
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className='not-found-page'>
                <h2> Page Not Found. </h2>
                <h3><Link to="/"> Back To Home </Link></h3>
            </div>
        </>
    )
}

export default NotFound;