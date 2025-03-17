import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { City, CityResponse } from "../types/types";

export const fetchWeather = createAsyncThunk(
  "city/fetchWeather",
  async (cityName: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<CityResponse>(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric&lang=ru`
      );
      return {
        id: response.data.id,
        name: response.data.name,
        codeCountry: response.data.sys.country,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        feelslike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        pressure: response.data.main.pressure,
        dateNow: new Date().toLocaleDateString(),
      } as City;
    } catch {
      return rejectWithValue("Ошибка при загрузке данных о погоде");
    }
  }
);
