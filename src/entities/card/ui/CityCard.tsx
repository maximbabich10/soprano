import React from "react";
import styles from "./city-card.module.css";
import { NavigateFunction } from "react-router-dom";
import { City } from "../model/types/types";

interface CityCardProps {
  toggleFavorite: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cityName: string
  ) => void;
  isFavorite: (cityName: string) => boolean;
  removeCity: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cityName: string
  ) => void;
  navigate: NavigateFunction;
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({
  city,
  toggleFavorite,
  removeCity,
  isFavorite,
  navigate,
}) => {
  return (
    <div className={styles.card} onClick={() => navigate(`/city/${city.name}`)}>
      <button
        onClick={(e) => removeCity(e, city.name)}
        className={styles.closeButton}
      >
        ✖
      </button>

      <button
        onClick={(e) => toggleFavorite(e, city.name)}
        className={styles.favoriteButton}
      >
        {isFavorite(city.name) ? "❤️" : "🤍"}
      </button>

      <div className={styles.main}>
        <div className={styles.icon}>
          <img
            src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
            alt={city.description}
          />
        </div>
        <div className={styles.data}>
          <h3 className={styles.cityName}>
            {city.name}, {city.codeCountry}
          </h3>
          <span className={styles.date}>{city.dateNow}</span>
        </div>
      </div>
      <div className={styles.middle}>
        <span className={styles.temp}>{Math.ceil(Number(city.temp))} </span>°C
      </div>
      <div className={styles.weather}>
        <p>{city.description}</p>
      </div>
    </div>
  );
};

export default React.memo(CityCard);
