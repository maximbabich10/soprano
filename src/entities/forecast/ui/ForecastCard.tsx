import React from "react";
import styles from "./forecast-card.module.css";
import { ForecastItem } from "../model/types/types";
import { getWeatherIcon } from "../../../shared/utils/getWeatherIcon";
import { getPeriodName } from "../../../shared/utils/getPeriodName";

interface ForecastCardProps {
  card: ForecastItem;
}

export const ForecastCard: React.FC<ForecastCardProps> = React.memo(
  ({ card }) => {
    return (
      <ul className={styles.card}>
        <li className={styles.period}>
          {getPeriodName(card.dt_txt.split(" ")[1])}
        </li>
        <li className={styles.temp}>
          {Math.ceil(card.main.temp)}
          <span className={styles.cels}>°C</span>
        </li>
        <li className={styles.picture}>
          <img
            src={getWeatherIcon(card.weather[0]?.icon)}
            alt={card.weather[0]?.description || "Нет данных"}
            className={styles.icon}
          />
        </li>
        <li className={styles.weather}>
          {card.weather[0]?.description || "Нет данных"}
        </li>
      </ul>
    );
  }
);
