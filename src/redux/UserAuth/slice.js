import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";
import { login, logout, register } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
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
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = { ...state.user, name: name };
        state.token = accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      });
    //   .addCase(refresh.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.accessToken;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    //   })
    //   .addCase(refresh.rejected, (state) => {
    //     state.isRefreshing = false;
    //   });
  },
});
export const authSlice = slice.reducer;
