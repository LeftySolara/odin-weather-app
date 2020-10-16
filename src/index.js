import React from "react";
import ReactDOM from "react-dom";
import CityForm from "./components/cityForm";

import SearchForm from "./components/searchForm";
import WeatherDisplay from "./components/weatherDisplay";

// TODO: Implement display of current weather
// TODO: Implement location search
// TODO: Implement option for temperature unit display
// TODO: Change look of page based on current weather

function App() {
  return (
    <div>
      <WeatherDisplay />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
