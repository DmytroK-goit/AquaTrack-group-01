import { createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from "js-cookies";
import axios from "axios";
import toast from "react-hot-toast";

export const aquaTrack = axios.create({
  baseURL: "https://aquatrack-01.onrender.com/",
});

const setAuthHeader = (token) => {
  if (token) {
    aquaTrack.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete aquaTrack.defaults.headers.common.Authorization;
  }
};
const token = localStorage.getItem("token");
if (token) {
  setAuthHeader(token);
}

axios.defaults.withCredentials = true;

export const registerUser = createAsyncThunk(
  "registerUser",
  async (credentials, thunkApi) => {
    try {
      const { data } = await aquaTrack.post("users/register", credentials);
      toast.success("Registration successful");
      const loginResponse = await thunkApi.dispatch(login(credentials));
      return loginResponse.payload;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
