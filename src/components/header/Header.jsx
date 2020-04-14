import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="img/logo-white.png" alt="logo" className="header__logo" />
      </div>
      <div className="header__heading-container">
        <h1 className="heading">
          <span className="heading--main">Outdoors</span>
          <span className="heading--sub">is where life happens</span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
