interface Sys {
  country: string;
}

interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}

interface Wind {
  speed: number;
}

interface Weather {
  description: string;
  icon: string;
}

export interface CityResponse {
  id: number;
  name: string;
  sys: Sys;
  main: Main;
  wind: Wind;
  weather: Weather[];
}

export interface City {
  id: number;
  name: string;
  codeCountry: string;
  temp: number;
  description: string;
  icon: string;
  dateNow: string;
  feelslike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
}
