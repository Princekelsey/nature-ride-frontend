import React from "react";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__logo-container">
        <img src="img/logo-white.png" alt="logo" className="header__logo" />
      </div>
      <div className="header__heading-container">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#tours-section" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
