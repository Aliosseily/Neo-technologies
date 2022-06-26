import React, { Fragment, useEffect } from "react";
import classes from "./Dashboard.module.css";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../redux/slices/weather";
import { checkDate } from "../helpers/helpers";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { authActions } from "../redux/slices/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { country, name } = useSelector((state) => state.auth);
  const { weather, loading } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getWeather(country));
  }, [dispatch, country]);

  const navigateToRestaurants = () => {
    navigate("/restaurant");
  };

  const backHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      <Card
        title={`${checkDate(weather?.location?.localtime)}, ${name}`}
        backHandler={backHandler}
      >
        <div className={classes.button__container}>
          <Button onClick={navigateToRestaurants}>Reserve a Table</Button>
        </div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div className={classes.weather__container}>
            <div className={classes.weather__container_country}>
              <h3>{weather?.location?.country}</h3>
            </div>
            <div>
              {Math.round(weather?.current?.temp_c)}
              <sup>&deg;C</sup>
            </div>
            <div>
              <img
                src={weather?.current?.condition?.icon}
                alt={weather?.current?.condition?.text}
              />
            </div>
            <div>
              <p>{weather?.current?.condition?.text}</p>
            </div>
          </div>
        )}
      </Card>
    </Fragment>
  );
};

export default Dashboard;
