import React from "react";

const ImageComposition = () => {
  return (
    <div className="composition">
      <img
        src="img/nat-1-large.jpg"
        alt="photo1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src="img/nat-2-large.jpg"
        alt="photo2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src="img/nat-3-large.jpg"
        alt="photo3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default ImageComposition;
