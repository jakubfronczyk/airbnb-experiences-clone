import React from 'react';
import experience from '../images/experience-1.png';
import star from '../images/star.png';


export default function Card(){
    return(
        <section>
            <div className="card">
                <img src={experience} alt="Arbnb Expirience" className="card-image"/>
                <p className="card-status">SOLD OUT</p>
                <div className="card-opinion">
                    <img src={star} alt="Star" className="card-star"/>
                    <span>5.0</span>
                    <span className="grey">(6) • </span>
                    <span className="grey">USA</span>
                </div>
                <p >Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </section>
    )
}