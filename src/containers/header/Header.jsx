import React from "react";
import logo from "../../assets/spark_logo3.svg";
import { Divider, Navbar } from "../../components";
import "./header.css";
import phone from "../../assets/phone_banner.png";

function Header() {
  return (
    <div>
      {/* <div className="header__banner">
        <div className="phone_section">
          <img src={phone} className="phone_img" />
          <p>(999) 999-9999</p>
        </div>
      </div> */}
      <img
        className="header__logo"
        src={logo}
        width="300px"
        height="300px"
      ></img>
      <div>
        <Navbar />
      </div>
      <Divider />
    </div>
  );
}

export default Header;
