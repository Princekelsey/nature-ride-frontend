import React from "react";

const ImageComposition = () => {
  return (
    <div className="composition">
      <img
        srcSet="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
        src="img/nat-1-large.jpg"
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="photo1"
        className="composition__photo composition__photo--p1"
      />

      <img
        srcSet="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
        src="img/nat-2-large.jpg"
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="photo2"
        className="composition__photo composition__photo--p2"
      />

      <img
        srcSet="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
        src="img/nat-3-large.jpg"
        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
        alt="photo3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default ImageComposition;
