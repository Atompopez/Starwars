import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = (props) => {
    const {store , actions} = useContext(Context)
    
    return(
        <div className="card mx-3" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Population: {props.population}</p>
                <p className="card-text">Terrain: {props.terrain}</p>
                <Link to={`/single/planet/${props.index}`} className="btn btn-primary">learn more!</Link>
                <a onClick={()=>{actions.anadir(props.name)}} className="btn btn-primary">13</a>
            </div>
        </div>
    )
}