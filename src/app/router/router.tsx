import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

import { store } from "../store/store";
import MainPage from "../../pages/main-page/MainPage";
import CityWeatherPage from "../../pages/weather-details/CityWeatherPage";

export const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    path: "/",
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/city/:cityName",
        element: <CityWeatherPage />,
      },
    ],
  },
]);
