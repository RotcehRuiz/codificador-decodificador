import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  // Función para codificar el texto
  const codificar = (texto) => {
    const reglas = {
      a: "qwer",
      e: "asdf",
      i: "zxcv",
      o: "yuio",
      u: "nhyt",
    };
    return texto
      .split("")
      .map((char) => reglas[char] || char)
      .join("");
  };

  // Función para decodificar el texto
  const decodificar = (texto) => {
    const reglasInvertidas = {
      "qwer": "a",
      "asdf": "e",
      "zxcv": "i",
      "yuio": "o",
      "nhyt": "u",
    };
    const regex = new RegExp(Object.keys(reglasInvertidas).join("|"), "g");
    return texto.replace(regex, (code) => reglasInvertidas[code]);
  };

  // Manejar el clic en codificar
  const handleCodificar = () => {
    setOutputText(codificar(inputText));
  };

  // Manejar el clic en decodificar
  const handleDecodificar = () => {
    setOutputText(decodificar(inputText));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Codificador / Decodificador</h1>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escribe aquí tu texto..."
        ></textarea>

        <div className="buttons">
          <button onClick={handleCodificar}>Codificar</button>
          <button onClick={handleDecodificar}>Decodificar</button>
        </div>

        <textarea
          value={outputText}
          readOnly
          placeholder="El resultado aparecerá aquí..."
        ></textarea>
      </div>
    </div>
  );
};

export default App;
