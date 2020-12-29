import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "../public/style.css";
import animalFacts from './data.jsx';

ReactDOM.render(<App animalFacts={animalFacts}/>, document.getElementById("app"));
