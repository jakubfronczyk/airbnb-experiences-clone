import React from 'react';
import star from '../images/star.png';


export default function Card(props){
    let badgeText

    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    } else if (props.openSpots > 0) {
        badgeText = "OPEN"
    }

    return(
            <div className="card">
                <img src={props.coverImg} alt="Arbnb Expirience" className="card-image"/>
                {
                badgeText && 
                <p className="card-status">{badgeText}</p>
                }
                <div className="card-opinion">
                    <img src={star} alt="Star" className="card-star"/>
                    <span>{props.stats.rating}</span>
                    <span className="grey">({props.stats.reviewCount}) • </span>
                    <span className="grey">{props.location}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-description"><span className="bold">From ${props.price}</span> / person</p>
            </div>
    )
}