import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import { useDispatch } from "react-redux";

import Button from "./Button";
import { authActions } from "../redux/slices/auth";

const Navbar = ({ title }) => {
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <Fragment>
      <nav className={classes.nav}>
        <div></div>
        <h1 className={classes.nav__header}>{title}</h1>
        <div>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
