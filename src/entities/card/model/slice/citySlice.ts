import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../thunk/cityThunks";
import { City } from "../types/types";

interface CityState {
  cities: City[];
  favoriteCityNames: string[];
  status: "idle" | "loading" | "failed";
}

const loadFavoriteCitiesFromLocalStorage = (): string[] => {
  return JSON.parse(localStorage.getItem("favoriteCities") || "[]");
};

const saveFavoritesToLocalStorage = (favorites: string[]) => {
  localStorage.setItem("favoriteCities", JSON.stringify(favorites));
};

const initialState: CityState = {
  cities: [],
  favoriteCityNames: loadFavoriteCitiesFromLocalStorage(),
  status: "idle",
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<City>) {
      if (!state.cities.some((city) => city.id === action.payload.id)) {
        state.cities.push(action.payload);
      }
    },

    removeCity(state, action: PayloadAction<string>) {
      state.cities = state.cities.filter(
        (city) => city.name !== action.payload
      );

      const checkFavorites = state.favoriteCityNames.filter(
        (name) => name !== action.payload
      );
      if (checkFavorites.length !== state.favoriteCityNames.length) {
        state.favoriteCityNames = checkFavorites;
        saveFavoritesToLocalStorage(checkFavorites);
      }
    },

    toggleFavoriteCity(state, action: PayloadAction<string>) {
      const cityName = action.payload;
      const isFavorite = state.favoriteCityNames.includes(cityName);

      if (isFavorite) {
        state.favoriteCityNames = state.favoriteCityNames.filter(
          (name) => name !== cityName
        );
      } else {
        state.favoriteCityNames.push(cityName);
      }

      saveFavoritesToLocalStorage(state.favoriteCityNames);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<City>) => {
        if (!state.cities.some((city) => city.id === action.payload.id)) {
          state.cities.push(action.payload);
        }
        state.status = "idle";
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addCity, removeCity, toggleFavoriteCity } = citySlice.actions;
export default citySlice.reducer;
