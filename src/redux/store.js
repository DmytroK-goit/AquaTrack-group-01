import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./UserAuth/slice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
