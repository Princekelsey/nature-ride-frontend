import React from "react";
import reviewData from "./data";
import Review from "./Review";

const Testmonial = () => {
  return (
    <section className="testmoinal-section" id="testmoinal-section">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="img/video.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className="center-text mb-lg">
        <h2 className="heading-secondary">We make you happy </h2>
      </div>
      {reviewData.map((data) => (
        <Review
          key={data.id}
          name={data.name}
          caption={data.caption}
          review={data.review}
          image={data.image}
        />
      ))}
      <div className="center-text mt-lg">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Testmonial;
