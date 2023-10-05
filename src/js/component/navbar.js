import React , {useState , useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button>starwar</button>
			</Link>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button {store.contador}
				</button>
				<ul className="dropdown-menu">
				
					{store.favoritos.map((item,index)=>(
						<li key={index}>
							<a className="dropdown-item" href="#">{item}</a>
							<button onClick={()=>{actions.borrar(index)}}>bas</button>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
