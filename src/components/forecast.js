import React from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityID: props.cityID,
      cityName: null,
      countryName: null,
      temperature: null,
      conditions: null,
      units: "f",
    };

    this.getCurrentWeather();
  }

  async getCurrentWeather() {
    const { cityID } = this.state;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${API_KEY}&units=imperial`
    );

    response.json().then((data) => {
      this.setState({
        cityName: data.name,
        countryName: data.sys.country,
        temperature: data.main.temp,
        conditions: data.weather[0].description,
      });
      console.log(this.state);
    });
  }

  render() {
    const { cityName, temperature, conditions } = this.state;
    return (
      <div className="currentWeather">
        <p>
          It is currently {temperature} degrees in {cityName} with {conditions}.
        </p>
      </div>
    );
  }
}

export default WeatherDisplay;
