import "./App.css";
import Form from "./Form";
import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>
        neon weather app
        <span className="cloud"> ☁︎</span>
      </h1>
      <div className="container">
        <header>
          {" "}
          <span>barcelona</span>
          <span>london</span>
          <span>tokyo</span>
          <span>canberra</span>{" "}
        </header>
        <Form />
        <Weather />
        <br />
        <br />
        <Forecast />
      </div>{" "}
      <footer>
        project coded by Anna Wagner and can be seen on
        <a href="https://github.com/lemur-wagner"> GitHub</a> or{" "}
        <a href="https://lemurs-react-weather-app.netlify.app/"> Netlify </a>
      </footer>
    </div>
  );
}

export default App;
