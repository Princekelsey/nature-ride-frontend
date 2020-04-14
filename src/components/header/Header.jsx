import React from "react";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="img/logo-white.png" alt="logo" className="logo" />
      </div>
      <div className="heading-container">
        <h1 className="heading">
          <span className="heading-main">Outdoors</span>
          <span className="heading-sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn-white">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
