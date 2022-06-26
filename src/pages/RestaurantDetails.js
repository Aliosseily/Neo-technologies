import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import classes from "./RestaurantDetails.module.css";
import restaurantTablesList from "../assets/tables.json";
import RestaurantCard from "../components/RestaurantCard";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import image from "../assets/table.jpg";

const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);
  const { weather } = useSelector((state) => state.weather);
  const {current: { condition }} = weather;

  useEffect(() => {
    const restaurantTables = restaurantTablesList.filter(
      (table) => table.restaurantId === id
    );
    setTables(restaurantTables);
  }, [id]);

  const backHandler = () => {
    navigate('/restaurant');
  }

  return (
    <Card title="Tables list" backHandler={backHandler}>
      <div className={classes.tables__info}>
        {tables.map(({ id, number, location }) => (
          <RestaurantCard
            key={id}
            name={number}
            image={image}
            location={location}
            isVisibleRadioButton={true}
            isEnabledRadioButton={
              condition.text === "Cloudy" && location === "outdoor"
            }
            onClick={() => {}}
          />
        ))}
      </div>
    </Card>
  );
};

export default RestaurantDetails;
