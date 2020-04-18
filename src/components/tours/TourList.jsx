import React from "react";
import tourData from "./data";
import Tour from "./Tour";

const TourList = () => {
  return (
    <section className="tours-section">
      <div className="center-text mb-lg">
        <h2 className="heading-secondary">Popular Tours </h2>
      </div>
      <div className="row">
        {tourData.map((tour) => (
          <Tour
            key={tour.id}
            image={tour.image}
            title={tour.title}
            titleClass={tour.titleClass}
            details={tour.details}
            price={tour.price}
            backClass={tour.backClass}
          />
        ))}
      </div>
      <div className="center-text mt-lg">
        <a href="#" className="btn btn--green">
          Explore all tours
        </a>
      </div>
    </section>
  );
};

export default TourList;
