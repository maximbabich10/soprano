export const getWeatherIcon = (iconCode?: string) => {
  return iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : "";
};
