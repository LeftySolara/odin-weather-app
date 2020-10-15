import React from "react";
import ReactDOM from "react-dom";

import CityForm from "./components/cityForm";
import WeatherDisplay from "./components/forecast";

// TODO: Implement display of current weather
// TODO: Implement location search
// TODO: Implement option for temperature unit display
// TODO: Change look of page based on current weather

ReactDOM.render(
  <div>
    <WeatherDisplay cityID="5809844" />
    <CityForm />
  </div>,
  document.getElementById("root")
);
