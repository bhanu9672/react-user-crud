import React from 'react'
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className='not-found-page'>
                <h1> Page Not Found. </h1>
                <Link to="/"> Back To Home </Link>
            </div>
        </>
    )
}

export default NotFound;