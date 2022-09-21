import React from 'react';
import grid from '../images/photo-grid.png';

export default function Hero(){
    return (
        <section className="hero-section">
            <img src={grid} alt="Aribnb Experiences" className="hero-photo" />
            <div className="hero-info">    
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>    
        </section>
    )
}