import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

/* const Componente = ({titulo, contenido}) => {
    const {titulo, contenido} = props; 
  * O destructuring diectamente pasando los argumentos
 
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{contenido}</h2>
      <div></div>
    </div>
  );
}; */

ReactDOM.render(<App />, document.getElementById("root"));
