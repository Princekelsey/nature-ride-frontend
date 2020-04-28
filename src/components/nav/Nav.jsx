import React, { useState } from "react";

const Nav = () => {
  const [isChecked, setCheck] = useState(false);

  const hideNav = () => {
    setCheck(false);
  };

  return (
    <div className="nav">
      <input
        type="checkbox"
        checked={isChecked}
        className="nav__checkbox"
        id="nav-toggle"
        onChange={(e) => setCheck(e.target.checked)}
      />
      <label htmlFor="nav-toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
      <div className="nav__background">&nbsp;</div>
      <nav className="nav__item">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#about-section" className="nav__link" onClick={hideNav}>
              About Us
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#testmoinal-section"
              className="nav__link"
              onClick={hideNav}
            >
              Stories
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#tours-section" className="nav__link" onClick={hideNav}>
              Popular Tours
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#booking-section" className="nav__link" onClick={hideNav}>
              Book Now
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#footer" className="nav__link" onClick={hideNav}>
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
