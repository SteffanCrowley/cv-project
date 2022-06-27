import React, { Component } from "react";
import Overview from "./components/Overview";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueName: "",
      nameInput: "",
      valueEmail: "",
      emailInput: "",
      phoneInput: "",
      valuePhone: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      nameInput: this.state.valueName,
      emailInput: this.state.valueEmail,
      phoneInput: this.state.valuePhone,
    });
  };

  render() {
    const {
      valueName,
      valueEmail,
      nameInput,
      emailInput,
      phoneInput,
      valuePhone,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="genForm">
          {" "}
          <label>
            Name:
            <input
              name="valueName"
              type="text"
              value={valueName}
              onChange={this.handleChange}
              id="nameInput"
            />
          </label>
          <label>
            Email:
            <input
              name="valueEmail"
              type="email"
              value={valueEmail}
              onChange={this.handleChange}
              id="emailInput"
            />
          </label>
          <label>
            Phone:
            <input
              name="valuePhone"
              type="tel"
              value={valuePhone}
              onChange={this.handleChange}
              id="phoneInput"
            />
          </label>
          <input type="submit" value="Submit" />
        </div>

        <div>
          <Overview name={nameInput} email={emailInput} phone={phoneInput} />
        </div>
      </form>
    );
  }
}

export default App;
