import React from "react";
import classes from "./RestaurantCard.module.css";

const RestaurantCard = ({
  name,
  image,
  location,
  isVisibleRadioButton,
  isEnabledRadioButton,
  onClick,
}) => {
  return (
    <div className={classes.card} onClick={onClick}>
      <div className={classes.card__image}>
        <img style={{ width: "100%" }} src={image} alt={name} />
      </div>
      <div className={classes.card__info}>
        <div>
          {name}
          {<p className={classes.card__location}>{location}</p>}
        </div>
        {isVisibleRadioButton && (
          <input
            type="radio"
            name="table"
            value={name}
            disabled={isEnabledRadioButton}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
