import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.jsx";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div >
      <p>characters</p>
	  <div className="row flex-row flex-nowrap" style={{overflowX:"auto"}}>
      {store.characters.map((item,index) => (
			<Card key={index} name={item.name} gender={item.gender} 
			hairColor={item.hair_color} eyeColor={item.eye_color}/>
      ))}
	  </div>
    </div>
  );
};
