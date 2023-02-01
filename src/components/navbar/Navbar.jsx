import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav__menu">
      <ul>
        <li>
          <a href="news.asp">Home</a>
        </li>
        <li>
          <a href="default.asp">Portfolio</a>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
