import React from "react";
import classes from "./Card.module.css";

const Card = ({ title, backHandler, children }) => {
  return (
    <div className={classes.card}>
      <p className={classes.card__back} onClick={backHandler}>
        <i className={`${classes.card__arrow} ${classes.card__left}`}></i> Back
      </p>

      <h1 className={classes.card__title}>{title}</h1>
      {children}
    </div>
  );
};

export default Card;
