import React from "react";

const CustomInput = ({
  placeholder,
  label,
  id,
  type,
  handleChange,
  isRequired,
}) => {
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
};

export default CustomInput;
