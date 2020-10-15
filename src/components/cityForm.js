import React from "react";

class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    alert(`A city name was submitted: ${value}`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form id="cityForm" name="cityForm" onSubmit={this.handleSubmit}>
        <label htmlFor="cityForm">
          City:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CityForm;
