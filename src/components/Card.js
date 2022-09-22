import React from 'react';
import star from '../images/star.png';
// C:\Users\Jay Fronczesko\repositories\airbnb-experiences-clone\src\images\star.png


export default function Card(props){
    return(
        <section className="card-section">
            <div className="card">
                <img src={props.coverImg} alt="Arbnb Expirience" className="card-image"/>
                {props.status && <p className="card-status">{props.status}</p>}
                <div className="card-opinion">
                    <img src={star} alt="Star" className="card-star"/>
                    <span>{props.rating}</span>
                    <span className="grey">({props.reviewCount}) • </span>
                    <span className="grey">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}