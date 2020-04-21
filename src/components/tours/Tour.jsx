import React from "react";

const Tour = ({
  image,
  title,
  titleClass,
  backClass,
  details,
  price,
  setModal,
}) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={image}>&nbsp;</div>
          <h4 className="card__heading">
            <span className={titleClass}>{title}</span>
          </h4>
          <div className="card__details">
            <ul>
              {details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={backClass}>
          <div className="card__action">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{price}</p>
            </div>
            <a
              href="#"
              className="btn btn--white"
              onClick={() => setModal(true)}
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
