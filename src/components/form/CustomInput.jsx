import React from "react";

const CustomInput = ({
  placeholder,
  label,
  id,
  type,
  name,
  handleChange,
  isRequired,
}) => {
  const renderInputType = () => {
    if (type === "radio") {
      return (
        <div className="form__radio-group">
          <input
            type="radio"
            className="form__radio-input"
            id={id}
            name={name}
          />
          <label htmlFor={id} className="form__radio-label" name={name}>
            <span className="form__radio-button"></span>
            {label}
          </label>
        </div>
      );
    } else {
      return (
        <div className="form__group">
          <input
            type={type}
            id={id}
            className="form__input"
            placeholder={placeholder}
            required={isRequired}
            onChange={handleChange}
          />
          <label htmlFor={id} className="form__label">
            {label}
          </label>
        </div>
      );
    }
  };
  return renderInputType();
};

export default CustomInput;
