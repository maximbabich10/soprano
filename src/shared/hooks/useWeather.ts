import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { fetchWeather } from "../../entities/card/model/thunk/cityThunks";
import {
  toggleFavoriteCity,
  removeCity,
} from "../../entities/card/model/slice/citySlice";

const useWeather = () => {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const cities = useSelector((state: RootState) => state.city.cities);
  const favoriteCityNames = useSelector(
    (state: RootState) => state.city.favoriteCityNames
  );
  const status = useSelector((state: RootState) => state.city.status);

  useEffect(() => {
    favoriteCityNames.forEach((cityName) => {
      if (!cities.some((city) => city.name === cityName)) {
        dispatch(fetchWeather(cityName));
      }
    });
  }, [dispatch, favoriteCityNames, cities]);

  const addCity = () => {
    if (cityName.trim() && status !== "loading") {
      dispatch(fetchWeather(cityName));
      setCityName("");
    }
  };

  const removeCityById = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, cityName: string) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch(removeCity(cityName));
    },
    [dispatch]
  );

  const isFavorite = useCallback(
    (cityName: string) => favoriteCityNames.includes(cityName),
    [favoriteCityNames]
  );

  const toggleFavorite = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, cityName: string) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch(toggleFavoriteCity(cityName));
    },
    [dispatch]
  );

  return {
    addCity,
    setCityName,
    removeCity: removeCityById,
    cities,
    favoriteCities: cities.filter((city) => isFavorite(city.name)),
    status,
    cityName,
    isFavorite,
    toggleFavorite,
  };
};

export default useWeather;
