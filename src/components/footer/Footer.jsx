import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img src="img/logo-green-2x.png" alt="logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built with <span className="heart"> &#10084; </span> by{" "}
            <a href="https://github.com/Princekelsey" className="footer__link">
              Prince Ajuobi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
