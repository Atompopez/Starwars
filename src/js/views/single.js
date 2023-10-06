import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import img1 from "../../img/img1.png";
import "../../styles/single.css"

export const Single = (props) => {
	const { store } = useContext(Context);
	const {tipo} = useParams();
	const {theid} = useParams();
	

	if (tipo == "character") {
		return (
			<div id="cuerpo">
				<div className="head">
					<img className="imagen1" src={img1}></img>
					<div className="text">
						<h1>{store.characters[theid].name}</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est </p>
					</div>
				</div>
				<div className="bajo">
					<div>
						<p><b>Name</b></p>
						<p>{store.characters[theid].name}</p>
					</div>
					<div>
						<p><b>Birth Year</b></p>
						<p>{store.characters[theid].birth_year}</p>
					</div>
					<div>
						<p><b>Gender</b></p>
						<p>{store.characters[theid].gender}</p>
					</div>
					<div>
						<p><b>Height</b></p>
						<p>{store.characters[theid].height}</p>
					</div>
					<div>
						<p><b>Skin color</b></p>
						<p>{store.characters[theid].skin_color}</p>
					</div>
					<div>
						<p><b>Eye Color</b></p>
						<p>{store.characters[theid].eye_color}</p>
					</div>
				</div>
			</div>
		)
	}
	if (tipo == "planet") {
		return (
			<div id="cuerpo">
				<div className="head">
					<img className="imagen1" src={img1}></img>
					<div className="text">
						<h1>{store.planets[theid].name}</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est </p>
					</div>
				</div>
				<div className="bajo">
					<div>
						<p><b>Name</b></p>
						<p>{store.planets[theid].name}</p>
					</div>
					<div>
						<p><b>Climate</b></p>
						<p>{store.planets[theid].climate}</p>
					</div>
					<div>
						<p><b>Population</b></p>
						<p>{store.planets[theid].population}</p>
					</div>
					<div>
						<p><b>Orbital Period</b></p>
						<p>{store.planets[theid].orbital_period}</p>
					</div>
					<div>
						<p><b>Rotation Period</b></p>
						<p>{store.planets[theid].rotation_period}</p>
					</div>
					<div>
						<p><b>Diameter</b></p>
						<p>{store.planets[theid].diameter}</p>
					</div>
				</div>
			</div>
		)
	}
};

