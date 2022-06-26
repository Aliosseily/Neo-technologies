import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  name: "",
  email: "",
  country: "",
  isAthenticated: false,
};
const authSlice = createSlice({
  name: "userAuthentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      const { name, email, country } = action.payload;
      state.name = name;
      state.email = email;
      state.country = country;
      state.isAthenticated = true;
    },
    logout(state) {
      return initialAuthState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
