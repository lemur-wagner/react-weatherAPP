import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <section>
      <h2>
        Prague
        <span>
          ☀︎ 14 <span className="unit"> °C I °F</span>
        </span>
      </h2>
      <p>
        <span className="description">
          thursday 15:54, clouds <br />
          precipitation: 82%, wind: 4km/h
        </span>{" "}
      </p>
    </section>
  );
}
