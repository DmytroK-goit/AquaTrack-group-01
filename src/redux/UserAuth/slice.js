import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, registerUser, updateUser } from "./operations";

const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    gender: "",
    weight: 0,
    activeTime: 0,
    dailyNorm: 0,
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { user, accessToken } = action.payload.data;
        state.user = user;
        state.token = accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state, action) => {
        console.error("Login failed", action.error);
        state.isLoggedIn = false;
      })

      .addCase(registerUser.rejected, (state, action) => {
        console.error("Registration failed", action.error);
        state.isLoggedIn = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      });
  },
});
export const authSlice = slice.reducer;
