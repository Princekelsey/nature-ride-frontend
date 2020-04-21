import React from "react";
import CustomInput from "../form/CustomInput";

const Booking = () => {
  return (
    <section className="booking-section" id="booking-section">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form">
              <div className="mb-md">
                <h2 className="heading-secondary">Start booking now </h2>
              </div>
              <CustomInput
                placeholder="Full Name"
                label="Full Name"
                id="name"
                type="text"
                isRequired={true}
              />
              <CustomInput
                placeholder="Email Address"
                label="Email Address"
                id="email"
                type="email"
                isRequired={true}
              />
              <div className="form__group mb-md">
                <CustomInput
                  type="radio"
                  id="small"
                  label="Small group tour"
                  name="size"
                />
                <CustomInput
                  type="radio"
                  id="large"
                  label="Large group tour"
                  name="size"
                />
              </div>
              <div className="form__group">
                <button className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
