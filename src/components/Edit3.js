import React, { Component } from "react";
import Preview3 from "./Preview3";
import "../styles/App.css";

class Edit3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueName: "",
      nameInput: "",
      valueEmail: "",
      emailInput: "",
      phoneInput: "",
      valuePhone: "",
      phoneInput2: "",
      valuePhone2: "",
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
    console.log(this.state.isEditMode);
    this.setState({
      nameInput: this.state.valueName,
      emailInput: this.state.valueEmail,
      phoneInput: this.state.valuePhone,
      phoneInput2: this.state.valuePhone2,
    });
  };

  render() {
    const isEditMode = this.props.mode;
    const {
      valueName,
      valueEmail,
      nameInput,
      emailInput,
      phoneInput,
      valuePhone,
      phoneInput2,
      valuePhone2,
    } = this.state;

    let page;

    if (isEditMode) {
      page = (
        <form onSubmit={this.handleSubmit}>
          <div className="genForm">
            {" "}
            <label>
              Company Name:
              <input
                name="valueName"
                type="text"
                value={valueName}
                onChange={this.handleChange}
                id="nameInput"
              />
            </label>
            <label>
              Position:
              <input
                name="valueEmail"
                type="text"
                value={valueEmail}
                onChange={this.handleChange}
                id="emailInput"
              />
            </label>
            <label>
              Start Date:
              <input
                name="valuePhone"
                type="date"
                value={valuePhone}
                onChange={this.handleChange}
                id="phoneInput"
              />
            </label>
            <label>
              End Date:
              <input
                name="valuePhone2"
                type="date"
                value={valuePhone2}
                onChange={this.handleChange}
                id="phoneInput2"
              />
            </label>
            <input type="submit" value="Save" />
          </div>
        </form>
      );
    } else {
      page = (
        <Preview3
          name={nameInput}
          email={emailInput}
          phone={phoneInput}
          phone2={phoneInput2}
        />
      );
    }

    return (
      <div>
        <div>{page}</div>
      </div>
    );
  }
}

export default Edit3;
