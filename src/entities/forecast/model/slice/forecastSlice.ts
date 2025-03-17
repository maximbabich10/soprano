import { createSlice } from "@reduxjs/toolkit";
import { Forecast, ForecastItem } from "../types/types";
import { getForecastWeather } from "../thunk/forecastThunks";

interface ForecastState {
  forecast: Forecast | null;
  status: "idle" | "loading" | "failed";
  forecastList: ForecastItem[];
}

const initialState: ForecastState = {
  forecast: null,
  forecastList: [],
  status: "idle",
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getForecastWeather.pending, (state) => {
      state.forecastList = [];
      state.status = "loading";
    });
    builder.addCase(getForecastWeather.fulfilled, (state, action) => {
      state.forecastList = action.payload.forecastList;
      state.status = "idle";
    });
    builder.addCase(getForecastWeather.rejected, (state) => {
      state.forecastList = [];
      state.status = "failed";
    });
  },
});

export default forecastSlice.reducer;
