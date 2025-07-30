// import React, { useEffect, useState } from "react";
// import Song from './mp3/EminemNotAfraid.mp3';

// const TypewriterMessage = () => {
//   const message = "I'm not afraid, to take a stand. Everybody, come take my hand.";
//   const [displayedText, setDisplayedText] = useState("");
//   const [isComplete, setIsComplete] = useState(false);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + message.charAt(index));
//       index++;
//       if (index === message.length) {
//         clearInterval(interval);
//         setIsComplete(true);
//       }
//     }, 100); // velocidad de escritura

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (isComplete) {
//       const audio = new Audio(Song); // ejemplo genérico
//       // ⚠️ Reemplaza el enlace por el de la canción real si tienes permiso, o un archivo tuyo.
//       audio.play();
//     }
//   }, [isComplete]);

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.text}>{displayedText}</h1>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     background: "transparent",
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 2000,
//     position: "relative"
//   },
//   text: {
//     fontFamily: "tahoma",
//     color: "#ffffff",
//     fontSize: "2rem",
//     whiteSpace: "pre-wrap",
//   },
// };

// export default TypewriterMessage;

import { useEffect, useState } from "react";
import Song from './mp3/EminemNotAfraid.mp3';

const TypewriterMessage = () => {
  const message = `Doon't be afraid, Recuerda que todos tus sueños se van a hacer realidad mi conejita 🐇💓, y si no, es porque algo mejor te tiene preparado Dios para ti 🥰.`;
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [audio] = useState(() => new Audio(Song)); // o link externo

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + message.charAt(index));
      index++;
      if (index === message.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [message]);

  const handlePlayAudio = () => {
    audio.play();
  };

  return (
    <div className="container-fluid text-align-center" style={styles.container}>
      <h1 style={styles.text}>{displayedText}</h1>
      {isComplete && (
        <button onClick={handlePlayAudio} style={styles.button}>
          ▶ Reproduce tu Cancion Aqui
        </button>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const styles = {
  container: {
    background: "transparent",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    position: "relative",
    textAlign: "center",
  },
  text: {
    fontFamily: "monospace",
    color: "#ffffff",
    fontSize: "1.5rem",
    whiteSpace: "pre-wrap",
  },
  button: {
    marginTop: "1rem",
  padding: "12px 24px",
  fontSize: "1rem",
  background: "transparent",
  color: "#ffffff",
  border: "2px solid #1DB954",
  borderRadius: "10px",
  cursor: "pointer",
  textAlign: "center",
  zIndex: 9999,
  position: "relative",
  display: "inline-block",
  lineHeight: "1.2",
  },
};

export default TypewriterMessage;
