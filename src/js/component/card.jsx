import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = (props) => {
    const {store , actions} = useContext(Context)
    
    return(
        <div className="card mx-3" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {props.gender}</p>
                <p className="card-text">Hair color: {props.hairColor}</p>
                <p className="card-text">Eye color: {props.eyeColor}</p>
                <a href="#" className="btn btn-primary">learn more!</a>
                <a onClick={()=>{actions.anadir()}} className="btn btn-primary">13</a>
            </div>
        </div>
    )
}