import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rabit from "../imgs/preattyRabit.png";
// import HeartBackground from './backgrounds/heartBackground';

export default function Main(){

    const navigate = useNavigate();

    const [cliked, setCliked] = useState(false);
    const handleClick = () => {
        setCliked(!cliked);
        navigate('/Letter')
    };

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: '100vh', width: '100vw'}}>
        {/* <HeartBackground/> */}
        <div className="p-4 text-center justify-content-center align-items-center m-4" 
        style={{backgroundColor:'#000',border: '10px', boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 20px #0ff', borderRadius: '20px', borderColor: '#0ff', height: '70vh', width: '75vw'}}>
            <h1 className="text-light">Para Mi Conejita Hermosa</h1>
            <img className="img-fluid m-3" style={{width: "180px"}} src={rabit} alt="rabit"/>

            <div className="container text-center justify-content-center align-items-center" style={{padding:'60px',}}>
                 <button className={`btn text-light p-3 ${cliked ? 'btn-danger':'btn-black'}`} onClick={handleClick} style={{border: '10px', boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 20px #ff00ff', borderRadius: '7px', borderColor: '#ff00ff'}}>Presiona Aqui sii🥺</button> 
            </div>
        </div>
        </div>
    )
}