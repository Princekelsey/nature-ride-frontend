import React from "react";
import ImageComposition from "./ImageComposition";
import TextComposition from "./TextComposition";

const About = () => {
  return (
    <section className="about-section">
      <div className="center-text mb-lg">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <TextComposition />
        </div>
        <div className="col-1-of-2">
          <ImageComposition />
        </div>
      </div>
    </section>
  );
};

export default About;
