interface Main {
  temp: number;
}
interface Weather {
  description: string;
  icon: string;
}

export interface ForecastItem {
  dt_txt: string;
  main: Main;
  weather: Weather[];
}

export interface Forecast {
  city: string;
  forecastList: ForecastItem[];
}
