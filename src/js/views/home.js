import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.jsx";
import { Planet } from "../component/planet.jsx";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="home">
      <div >
        <p className="titulo">Characters</p>
        <div className="row flex-row flex-nowrap" style={{overflowX:"auto"}}>
          {store.characters.map((item,index) => (
          <Card key={index} name={item.name} gender={item.gender} 
          hairColor={item.hair_color} eyeColor={item.eye_color} index={index}/>
          ))}
        </div>
      </div>
      <div>
        <p className="titulo">Planets</p>
        <div className="row flex-row flex-nowrap" style={{overflowX:"auto"}}>
          {store.planets.map((item,index) => (
          <Planet key={index} name={item.name} population={item.population} 
          hairColor={item.hair_color} eyeColor={item.eye_color} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};
