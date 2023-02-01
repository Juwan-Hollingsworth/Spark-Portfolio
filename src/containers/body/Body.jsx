import React from "react";
import { Grid } from "../../components";
import "./body.css";

function Body() {
  return (
    <div className="body__main">
      <div className="project__nav">
        <h4>
          <a href="https://www.w3schools.com">#️⃣Web Development </a>
          <a href="https://www.w3schools.com"> #️⃣Copy Writing </a>
          <a href="https://www.w3schools.com"> #️⃣Graphic Design </a>
          <a href="https://www.w3schools.com"> #️⃣Paid Search </a>
          <a href="https://www.w3schools.com"> #️⃣Search Engine Optimization</a>
        </h4>
      </div>
      <Grid />
    </div>
  );
}

export default Body;
