import React from "react";
import SearchForm from "./searchForm";

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      temperature: null,
      conditions: null,
    };
  }

  handleFormData = (data) => {
    this.setState({
      city: data.city,
      temperature: data.temperature,
      conditions: data.conditions,
    });
  };

  render() {
    const { city, temperature, conditions } = this.state;
    return (
      <div>
        <SearchForm handleData={this.handleFormData} />
        <p>
          It is currently {temperature} degrees in {city} with {conditions}.
        </p>
      </div>
    );
  }
}

export default WeatherDisplay;
