import React from "react";
import Fireworks from "./fireworks";
import Love from "../imgs/rabbitAndChicken.png";
import "./css/favorites.css";
import TypewriterMessage from "./TypewriterMessage";

export default function Favorites(){
    return(
        <>
        <Fireworks/>
        <div className="continer-fluid">
            <TypewriterMessage/>
        </div>
        <div className="containerLove">
            <img src={Love} alt="" className="Img-love"/>
            <div className="pasto">
            </div>
        </div>
        </>
    );
};