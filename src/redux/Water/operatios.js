import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { aquaTrack } from "../UserAuth/operations";

export const addWater = createAsyncThunk("addWater", async (body, thunkApi) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await aquaTrack.post("/water", body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const date = new Date().toISOString().split("T")[0];
    await thunkApi.dispatch(dayWater(date));
    toast.success("Water added");
    return data;
  } catch (error) {
    toast.error(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});
export const editWater = createAsyncThunk(
  "editWater",
  async ({ _id, updateData }, thunkApi) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await aquaTrack.patch(`/water/${_id}`, updateData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Water updated successfully!");
      console.log(data);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const delWater = createAsyncThunk("delWater", async (_id, thunkApi) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await aquaTrack.delete(`/water/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Water Deleted");
    console.log(data);
    return _id;
  } catch (error) {
    toast.error(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});
export const dayWater = createAsyncThunk("dayWater", async (date, thunkApi) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await aquaTrack.get(`/water/day/${date}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success(`Water data for ${date} fetched successfully.`);
    console.log(data);
    return data;
  } catch (error) {
    if (error.response?.status === 404) {
      toast.error(`No water data available for ${date}.`);
    }
    return thunkApi.rejectWithValue(error.message);
  }
});
export const monthWater = createAsyncThunk(
  "monthWater",
  async (date, thunkApi) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await aquaTrack.get(`/water/month/${date}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Water data for ${date} fetched successfully.`);
      console.log(data);
      return data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
