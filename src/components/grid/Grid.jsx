import React from "react";
import "./grid.css";
import Image1 from "../../assets/content_img1.jpg";
import Image2 from "../../assets/content_img2.jpg";
import Image3 from "../../assets/content_img3.png";
function Grid() {
  // add card div
  // add title
  // add image
  // add Text
  // add button
  return (
    <div className="grid__container">
      <div className="card">
        <div className="title">Amazing Ski</div>
        <div className="image">
          <img src={Image1} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* second card */}
      <div className="card">
        <div className="title">Project 2</div>
        <div className="image">
          <img src={Image2} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* third card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image3} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* fourth card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image1} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* fourth card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image2} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* fourth card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image3} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* fourth card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image1} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* fourth card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image2} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>

      {/* fourth card */}
      <div className="card">
        <div className="title">Project 3</div>
        <div className="image">
          <img src={Image3} />
        </div>
        <div className="text">Project description</div>
        <button className="view__btn">View Project</button>
      </div>
      {/* end div */}
    </div>
  );
}

export default Grid;
