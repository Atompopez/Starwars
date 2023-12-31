import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import img1 from "../../img/img1.png";

export const Planet = (props) => {
    const {store , actions} = useContext(Context)
    
    return(
        <div className="card mx-3" style={{width:'400px'}}>
            <img src={img1} className="card-img-top" style={{height:'200px'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="my-3">
                    <p className="card-text m-0">Population: {props.population}</p>
                    <p className="card-text m-0">Terrain: {props.terrain}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <Link to={`/single/planet/${props.index}`} className="btn btn-outline-primary">learn more!</Link>
                    <a onClick={()=>{actions.anadir(props.name)}} className="btn btn-outline-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}