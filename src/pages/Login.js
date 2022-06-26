import React, { useReducer, useState } from "react";
import Input from "../components/Input";
import SelectOptions from "../components/SelectOptions";
import classes from "./Login.module.css";
import countryList from "../assets/countryList.json";
import { isValidEmail } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: isValidEmail(action.val) };
  }
  return { value: "", isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [country, setCountry] = useState(countryList[0].name);
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameState.isValid && emailState.isValid) {
      const loginInfo = {
        name: nameState.value,
        email: emailState.value,
        country: country,
      };
      dispatch(authActions.login(loginInfo));
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <form onSubmit={submitHandler} autoComplete="off" className={classes.form}>
      <section className={classes.form__header}>
        <h1>Neo-Tech</h1>
        <h2>Login</h2>
      </section>
      <section className={classes.form__inputs}>
        <Input
          label="Full name"
          type="text"
          id="name"
          isValid={nameState.isValid}
          errorMessage="please enter name"
          onChange={nameChangeHandler}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          isValid={emailState.isValid}
          errorMessage="please enter valid email"
          onChange={emailChangeHandler}
        />
        <SelectOptions
          label="Country"
          options={countryList}
          onChange={countryChangeHandler}
        />
        <Button type="submit">Sign in</Button>
      </section>
    </form>
  );
};

export default Login;
