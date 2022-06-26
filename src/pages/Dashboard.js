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
  const { weather, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getWeather(country));
  }, [dispatch, country]);

  const navigateToRestaurants = () => {
    navigate("/restaurant");
  };

  const backHandler = () => {
    dispatch(authActions.logout());
  };

  const isError = Object.keys(error).length !== 0;

  return (
    <Fragment>
      <Card
        title={isError ? '' : `${checkDate(weather?.location?.localtime)}, ${name}`}
        backHandler={backHandler}
      >
        {isError && (
          <p className={classes.error}>Some thing went wrong!</p>
        )}

        {loading ? (
          <p>Loading ...</p>
        ) : (
          !isError && (
            <Fragment>
              <div className={classes.button__container}>
                <Button onClick={navigateToRestaurants}>Reserve a Table</Button>
              </div>
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
            </Fragment>
          )
        )}
      </Card>
    </Fragment>
  );
};

export default Dashboard;
