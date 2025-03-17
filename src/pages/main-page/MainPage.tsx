import React from "react";
import styles from "../main-page/main-page.module.css";
import { AddCityForm } from "../../feature/add-city/ui/AddCityForm";
import { CityList } from "../../widgets/city-list/ui/CityList";

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AddCityForm />
      <CityList />
    </div>
  );
};

export default MainPage;
