import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, type,onClick }) => {
  return (
    <button type={type} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
