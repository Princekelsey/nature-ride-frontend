import React from "react";

const Modal = ({ setModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__left-content">
          <img src="img/nat-8.jpg" alt="Tour Left" className="modal__img" />
          <img src="img/nat-9.jpg" alt="Tour Right" className="modal__img" />
        </div>
        <div className="modal__right-content">
          <span className="modal__close" onClick={() => setModal(false)}>
            &times;
          </span>
          <h2 className="heading-secondary mb-sm">
            Start Your Amazing Experience now
          </h2>
          <h3 className="heading-tertiary mb-sm">
            {" "}
            Important &ndash; terms and conditions apply
          </h3>
          <p className="modal__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
            cum iste non delectus, quos libero sint magni eligendi corrupti
            dicta saepe numquam quasi assumenda quo iure nisi adipisci
            asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Libero, praesentium. Molestias cupiditate nesciunt laborum
            dicta a quaerat odio nobis voluptatibus minima illum, libero beatae,
            error debitis et culpa corrupti tempore.
          </p>
          <a
            href="#booking-section"
            className="btn btn--green"
            onClick={() => setModal(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
