import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import classes from "./Restaurant.module.css";
import Card from "../components/Card";
import restaurantList from "../assets/restaurants.json";
import { useNavigate } from "react-router-dom";
import image from "../assets/res.jpg";

const Restaurant = () => {
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/restaurant/${id}`);
  };

  const backHandler = () => {
    navigate('/dashboard');
  }
  return (
    <Card title="Restaurants list" backHandler={backHandler}>
      <div className={classes.restaurant__info}>
        {restaurantList.map(({ id, name }) => (
          <RestaurantCard
            key={id}
            name={name}
            image={image}
            isVisibleRadioButton={false}
            onClick={() => navigateToDetails(id)}
          />
        ))}
      </div>
    </Card>
  );
};

export default Restaurant;
