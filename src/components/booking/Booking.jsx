import React from "react";
import CustomInput from "../form/CustomInput";

const Booking = () => {
  return (
    <section className="booking-section">
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
