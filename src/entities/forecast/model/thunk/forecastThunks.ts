import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getForecastWeather = createAsyncThunk<any, string>(
  "forecast/getForecastWeather",
  async (city, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&lang=ru&units=metric`
      );

      const now = new Date();
      now.setDate(now.getDate() + 1);
      const tomorrow = now.toISOString().split("T")[0];

      const filteredForecast = data.list
        .filter((item: any) => item.dt_txt.startsWith(tomorrow))
        .filter((item: any) => {
          const hours = new Date(item.dt_txt).getHours();
          return [0, 6, 12, 18].includes(hours);
        });

      return {
        forecastList: filteredForecast,
        data: data,
      };
    } catch (error: any) {
      console.error("Ошибка при загрузке прогноза погоды:", error);
      return rejectWithValue(error.response?.data || "Ошибка загрузки");
    }
  }
);
