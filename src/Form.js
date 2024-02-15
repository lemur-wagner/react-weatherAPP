import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input type="search" className="searchBar"></input>
        <input
          type="submit"
          className="submit"
          value="🔍
        "
        ></input>
      </form>
    </div>
  );
}
