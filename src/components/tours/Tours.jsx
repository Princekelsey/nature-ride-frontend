import React from "react";

const Tours = () => {
  return (
    <section className="tours-section">
      <div className="center-text mb-lg">
        <h2 className="heading-secondary">Popular Tours </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__image card__image--1">&nbsp;</div>
              <h4 className="card__heading">The Sea Explorer</h4>
              <div className="card__details">Details</div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              Back
            </div>
          </div>
        </div>
        <div className="col-1-of-3">2</div>
        <div className="col-1-of-3">3</div>
      </div>
    </section>
  );
};

export default Tours;
