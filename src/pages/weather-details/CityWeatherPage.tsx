import React from "react";
import { BackButton } from "../../feature/back-button/BackButton";
import styles from "./city-weather-page.module.css";
import { ForecastList } from "../../widgets/weather-details/ui/forecast-weather/ForecastList";
import CityWeather from "../../widgets/weather-details/ui/city-weather/CityWeather";
import { useForcastWeather } from "../../shared/hooks/useForcastWeather";
import Spinner from "../../shared/ui/spinner/Spinner";

const CityWeatherPage: React.FC = () => {
  const { city, status, forecastList } = useForcastWeather();
  if (status === "loading") {
    return <Spinner />;
  }

  if (!city || status === "failed") {
    return <p className={styles.error}>Город не найден</p>;
  }
  return (
    <div className={styles.wrapper}>
      <BackButton />
      <h1 className={styles.title}>Текущая погода</h1>

      <div className={styles.containerForecast}>
        <CityWeather city={city} />
        <h1 className={styles.title}>Прогноз</h1>
        <ForecastList forecastList={forecastList} />
      </div>
    </div>
  );
};

export default CityWeatherPage;
