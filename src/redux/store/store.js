import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import weatherReducer from "../slices/weather";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    auth: authReducer,
  },
});

export default store;
