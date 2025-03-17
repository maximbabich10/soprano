import React from "react";

import styles from "./city-list.module.css";
import CityCard from "../../../entities/card/ui/CityCard";
import useWeather from "../../../shared/hooks/useWeather";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../shared/ui/spinner/Spinner";

export const CityList: React.FC = () => {
  const { cities, isFavorite, removeCity, toggleFavorite, status } =
    useWeather();
  const navigate = useNavigate();

  if (status === "loading") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return (
    <div className={styles.cityList}>
      {cities.length === 0 ? <p>Нет добавленных городов</p> : null}
      {cities.map((city) => (
        <CityCard
          isFavorite={isFavorite}
          navigate={navigate}
          removeCity={removeCity}
          toggleFavorite={toggleFavorite}
          key={city.id}
          city={city}
        />
      ))}
    </div>
  );
};
