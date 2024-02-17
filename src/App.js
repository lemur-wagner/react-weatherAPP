import "./App.css";
import Form from "./Form";
import React from "react";

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
        <Form />{" "}
        <section>
          <h2>
            Prague<span>☀︎ 14°C</span>
          </h2>
          <p>
            <span>
              thursday 15:54, clouds <br />
              precipitation: 82%, wind: 4km/h
            </span>{" "}
          </p>
        </section>{" "}
        <br />
        <br />
        <section text align="center">
          FORECAST
        </section>
      </div>{" "}
      <footer>
        coded by Anna Wagner, can be accessed on{" "}
        <a
          href="https://github.com/lemur-wagner/react-weatherAPP"
          target="_blank"
        />{" "}
        GitHub
        <a /> and{" "}
        <a
          href="https://lemurs-react-weather-app.netlify.app/"
          target="_blank"
        />
        Netlify
        <a />
      </footer>
    </div>
  );
}

export default App;
