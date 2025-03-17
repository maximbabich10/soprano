import React from "react";

import styles from "./city-weather.module.css";

import WeatherDetails from "../../../../shared/ui/card-detail/WeatherDetails";
import { City } from "../../../../entities/card/model/types/types";

interface CityWeatherProps {
  city: City;
}

const CityWeather: React.FC<CityWeatherProps> = ({ city }) => {
  return (
    <div className={styles.weatherDetails}>
      <WeatherDetails city={city} />
    </div>
  );
};

export default CityWeather;
