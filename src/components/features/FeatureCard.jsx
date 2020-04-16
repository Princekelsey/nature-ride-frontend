import React from "react";

const FeatureCard = ({ title, info, icon }) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={icon}></i>
        <h3 className="heading-tertiary mb-sm"> {title}</h3>
        <p className="feature-box__text">{info}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
