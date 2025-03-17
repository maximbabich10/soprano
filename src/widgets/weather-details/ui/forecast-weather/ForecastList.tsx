import { ForecastCard } from "../../../../entities/forecast/ui/ForecastCard";
import styles from "./forecast-list.module.css";

import { ForecastItem } from "../../../../entities/forecast/model/types/types";
interface ForecastListProps {
  forecastList: ForecastItem[];
}
export const ForecastList: React.FC<ForecastListProps> = ({ forecastList }) => {
  return (
    <div className={styles.cardsWrapper}>
      {forecastList.length > 0 &&
        forecastList.map((day) => <ForecastCard key={day.dt_txt} card={day} />)}
    </div>
  );
};
