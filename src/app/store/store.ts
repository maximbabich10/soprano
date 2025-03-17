import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "../../entities/card/model/slice/citySlice";
import forecastReducer from "../../entities/forecast/model/slice/forecastSlice";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    forecast: forecastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
