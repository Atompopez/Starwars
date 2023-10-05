import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import img1 from "../../img/img1.png";

export const Single = (props) => {
	const { store } = useContext(Context);
	const {tipo} = useParams();
	const {theid} = useParams();
	

	if (tipo == "character") {
		return (
			<>
				<div>
					<img src={img1}></img>
					<div>
						<h1>titulo</h1>
						<p>lorem ipsum kjdjdjddddddddddddddddddddddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
					</div>
				</div>
				<div>
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
			</>
		)
	}
	if (tipo == "planet") {
		return (
			<>
				<div>
					<img src={img1}></img>
					<div>
						<h1>titulo</h1>
						<p>lorem ipsum kjdjdjddddddddddddddddddddddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
					</div>
				</div>
				<div>
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
			</>
		)
	}
};

