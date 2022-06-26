import React from "react";
import classes from "./Input.module.css";

const Input = ({ id, label, isValid, type, value, onChange, errorMessage }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${classes.input} ${
          isValid === false ? classes.invalid : ""
        }`}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
      {isValid === false && (
        <span className={classes.error_text}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
