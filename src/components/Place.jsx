import React from "react";

export default function Place(props){

    return(
        <div className="content">
            <div className="left">
                <img src={props.img} alt="" />
            </div>
            
            <div className="right">
                <div className="top">
                    <img src={props.locImg} alt="" />
                    <p>{props.location}</p>
                    <a href={props.url}>{props.link}</a>
                </div>
                <h2>{props.name}</h2>
                <p className="date">{props.date}</p>
                <p className="pullout">{props.text}</p>
                
            </div>
            
            
            
        </div> 
       
            
    )
}