import React from "react";

const Review = ({ name, caption, review, image }) => {
  return (
    <div className="row">
      <div className="review">
        <figure className="review__shape">
          <img src={image} alt="review" className="review__image" />
          <figcaption className="review__caption">{name}</figcaption>
        </figure>
        <div className="review__text">
          <h3 className="heading-tertiary mb-sm">{caption}</h3>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
