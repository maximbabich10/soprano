import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiThermometer,
  WiDirectionUp,
  WiDirectionDown,
} from "react-icons/wi";
import styles from "./weather-details.module.css";
import pictureWeather from "../../assets/weather.jpg";

interface WeatherDetailsProps {
  city: {
    name: string;
    temp: number;
    feelslike: number;
    humidity: number;
    windSpeed: number;
    pressure: number;
    icon: string;
    description: string;
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ city }) => {
  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherContent}>
        <div className={styles.imageContainer}>
          <img
            className={styles.cityImage}
            src={pictureWeather}
            alt="weather picture"
          />
        </div>

        <div className={styles.mainInfo}>
          <h2 className={styles.cityName}>{city.name}</h2>
          <div className={styles.weatherIconWrap}>
            <img
              src={`https://openweathermap.org/img/wn/${city.icon}@4x.png`}
              alt={city.description}
            />
            <p className={styles.temp}>{Math.ceil(city.temp)}°C</p>
          </div>
          <p className={styles.description}>{city.description}</p>
        </div>

        <div className={styles.detailedInfo}>
          <p className={styles.feelsWrap}>
            <WiThermometer size={18} /> <strong>Ощущается как:</strong>{" "}
            {Math.ceil(city.feelslike)}°C
          </p>
          <div className={styles.temperature}>
            <p>
              <WiDirectionUp size={18} color="red" /> <strong>Макс:</strong>{" "}
              {Math.ceil(city.temp + 2)}°C{" "}
            </p>
            <p>
              <WiDirectionDown size={18} color="blue" /> <strong>Мин:</strong>{" "}
              {Math.ceil(city.temp - 2)}°C
            </p>
          </div>
          <div className={styles.wrapdet}>
            <p>
              <WiHumidity size={18} /> <strong>Влажность:</strong>{" "}
              {city.humidity}%
            </p>

            <p>
              <WiStrongWind size={18} /> <strong>Ветер:</strong>{" "}
              {city.windSpeed} м/с
            </p>

            <p>
              <WiBarometer size={18} /> <strong>Давление:</strong>{" "}
              {city.pressure} гПа
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
