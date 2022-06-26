import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (country, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/current.json",
        {
          params: {
            q: country,
            key: "e2559b0c2cbf4aeea83175530222406",
            aqi: "no",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialWeatherState = {
  loading: false,
  weather: [],
  error: "",
};
const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  extraReducers: {
    [getWeather.pending]: (state, action) => {
      state.loading = true;
    },
    [getWeather.fulfilled]: (state, action) => {
      state.loading = false;
      state.weather = action?.payload;
    },
    [getWeather.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

export default weatherSlice.reducer;
