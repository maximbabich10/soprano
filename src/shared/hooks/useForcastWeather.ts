import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store/store";
import { useEffect } from "react";
import { fetchWeather } from "../../entities/card/model/thunk/cityThunks";
import { getForecastWeather } from "../../entities/forecast/model/thunk/forecastThunks";

export const useForcastWeather = () => {
  const { cityName } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.city.status);

  const city = useSelector((state: RootState) =>
    state.city.cities.find(
      (c) => c.name.toLowerCase() === cityName?.toLowerCase()
    )
  );
  const forecastList = useSelector(
    (state: RootState) => state.forecast.forecastList
  );

  useEffect(() => {
    if (cityName) {
      dispatch(getForecastWeather(cityName));
    }
  }, [cityName, dispatch]);

  useEffect(() => {
    if (cityName) {
      if (!city) {
        dispatch(fetchWeather(cityName));
      }
    }
  }, [city, cityName, dispatch]);

  return {
    status,
    city,
    forecastList,
  };
};
