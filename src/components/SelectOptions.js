import React, { Fragment } from "react";
import classes from "./SelectOptions.module.css";

const SelectOptions = ({ label, options, onChange, isValid }) => {
  return (
    <Fragment>
      <label>{label}</label>
      <select 
      className={`${classes.select} ${isValid === false ? classes.invalid : ""}`}
      onChange={onChange}>
        {options.map((option) => {
          return (
            <option key={option.code} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </Fragment>
  );
};

export default SelectOptions;
