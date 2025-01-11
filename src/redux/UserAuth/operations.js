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

axios.defaults.withCredentials = true;

export const registerUser = createAsyncThunk(
  "registerUser",
  async (credentials, thunkApi) => {
    try {
      const { data } = await aquaTrack.post("users/register", credentials);
      toast.success("Success");
      setAuthHeader(data.data.accessToken);
      return data;
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
      toast.success("Success");
      setAuthHeader(data.data.accessToken);
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
    setAuthHeader("");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("refresh", async (_, thunkApi) => {
  try {
    const { auth } = thunkApi.getState();
    const token = auth.token;

    if (!token) {
      throw new Error("No token available for refresh");
    }

    const { data } = await aquaTrack.get("user/refresh", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setAuthHeader(data.accessToken);
    toast.success("Session refreshed");
    return data;
  } catch (error) {
    toast.error(error.message || "Failed to refresh session");
    return thunkApi.rejectWithValue(
      error.message || "Failed to refresh session"
    );
  }
});
