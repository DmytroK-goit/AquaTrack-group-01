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
export const login = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await aquaTrack.post("users/login", credentials);
      toast.success("Login succsesful");
      localStorage.setItem("token", data.data.accessToken);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (updateData, thunkApi) => {
    try {
      const { data } = await aquaTrack.patch("users/update", updateData);
      toast.success(`User updated ${data.name}`);
      return data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update user");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await aquaTrack.post("users/logout");
    localStorage.removeItem("token");
    setAuthHeader(null);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const { data } = await aquaTrack.get("users/refresh", {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.setItem("token", data.accessToken);
    setAuthHeader(data.accessToken);
    return data;
  } catch (error) {
    localStorage.removeItem("token");
    return thunkApi.rejectWithValue(error.message);
  }
});
