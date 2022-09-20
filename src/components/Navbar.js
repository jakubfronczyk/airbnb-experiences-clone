import React from 'react';
import airbnb from '../images/arbnb-logo.png';

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={airbnb} alt="Airbnb Logo" className="navbar-logo"/>
        </nav>
    )
}