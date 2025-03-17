import React from "react";
import styles from "./add-city-form.module.css";
import { Input } from "../../../shared/ui/input/Input";
import { Button } from "../../../shared/ui/button/Button";
import useWeather from "../../../shared/hooks/useWeather";
import { FaSearch } from "react-icons/fa";

export const AddCityForm: React.FC = () => {
  const { addCity, status, cityName, setCityName } = useWeather();
  const disabled = status === "loading";

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };
  return (
    <div className={styles.form}>
      <Input
        type="text"
        value={cityName}
        onChange={onChangeHandler}
        placeholder="Введите город"
        className={styles.input}
      />

      <Button
        onClick={addCity}
        disabled={disabled}
        className={styles.searchButton}
      >
        <FaSearch className={styles.icon} />
      </Button>
    </div>
  );
};
