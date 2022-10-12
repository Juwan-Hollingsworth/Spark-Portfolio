import React from "react";
import "./grid.css";
import Image1 from "../../assets/content_img1.jpg";

function Grid() {
  // add card div
  // add title
  // add image
  // add Text
  // add button
  return (
    <div className="grid__list">
      <div className="card">
        <div className="title">Project 1</div>
        <div className="image">
          <img src={Image1} />
        </div>
        <div className="text">Project description</div>
      </div>
    </div>
  );
}

export default Grid;
