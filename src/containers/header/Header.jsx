import React from "react";
import logo from "../../assets/spark_logo3.svg";
import { Navbar } from "../../components";
import "./header.css";

function Header() {
  return (
    <div>
      <img
        className="header__logo"
        src={logo}
        width="300px"
        height="300px"
      ></img>
      <div>
        <Navbar />
      </div>
      <div className="page__divider">
        <hr />
        <h4 className="project__nav">
          #️⃣ Web Development #️⃣ Copy Writing #️⃣ Graphic Design #️⃣ Paid Search #️⃣
          Search Engine Optimization
        </h4>
      </div>
    </div>
  );
}

export default Header;
