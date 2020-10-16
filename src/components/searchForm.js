import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = (event) => {
    const { city } = this.state;
    const { handleData } = this.props;
    const temperature = 100; // Temporary for testing
    const conditions = "cloudy skies"; // Temporary for testing

    const data = { city, temperature, conditions };

    handleData(data);
    event.preventDefault();
  };

  render() {
    return (
      <form id="cityForm" name="cityForm" onSubmit={this.handleSubmit}>
        <label htmlFor="cityForm">
          Enter city name:
          <br />
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
