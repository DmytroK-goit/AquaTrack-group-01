import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addWater,
  dayWater,
  delWater,
  editWater,
  monthWater,
} from "./operatios";

const initialState = {
  itemsDay: [],
  itemsMonth: [],
  totalWaterPerDay: 0,
  waterPercentage: 0,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "water",
  initialState: initialState,
  reducers: {
    resetWaterState: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(addWater.fulfilled, (state, action) => {
        state.itemsDay.push(action.payload);
      })
      .addCase(editWater.fulfilled, (state, action) => {
        state.itemsDay = state.itemsDay.map((water) =>
          water._id === action.payload._id
            ? { ...water, ...action.payload }
            : water
        );
      })
      .addCase(delWater.fulfilled, (state, action) => {
        state.itemsDay = state.itemsDay.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(dayWater.pending, (state) => {
        state.itemsDay = [];
        state.totalWaterPerDay = "";
        state.waterPercentage = "";
      })
      .addCase(dayWater.fulfilled, (state, action) => {
        state.itemsDay = action.payload?.data || [];
        state.totalWaterPerDay = action.payload?.totalWaterPerDay || 0;
        state.waterPercentage = action.payload?.waterPercentage || "0";
      })
      .addCase(monthWater.fulfilled, (state, action) => {
        state.itemsMonth = action.payload.data;
      })
      .addMatcher(
        isAnyOf(dayWater.pending, monthWater.pending, addWater.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          dayWater.fulfilled,
          monthWater.fulfilled,
          addWater.fulfilled,
          editWater.fulfilled,
          delWater.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          dayWater.rejected,
          monthWater.rejected,
          addWater.rejected,
          editWater.rejected,
          delWater.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload || "An error occurred";
        }
      );
  },
});

export const { resetWaterState } = slice.actions;
export const waterReducer = slice.reducer;
