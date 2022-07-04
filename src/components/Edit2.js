import React, { Component } from "react";
import Preview2 from "./Preview2";
import "../styles/App.css";

class Edit2 extends Component {
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
    console.log(this.state.isEditMode);
    this.setState({
      nameInput: this.state.valueName,
      emailInput: this.state.valueEmail,
      phoneInput: this.state.valuePhone,
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
    } = this.state;

    let page;

    if (isEditMode) {
      page = (
        <form onSubmit={this.handleSubmit}>
          <div className="genForm">
            {" "}
            <label>
              School Name:
              <input
                name="valueName"
                type="text"
                value={valueName}
                onChange={this.handleChange}
                id="nameInput"
              />
            </label>
            <label>
              Degree:
              <input
                name="valueEmail"
                type="text"
                value={valueEmail}
                onChange={this.handleChange}
                id="emailInput"
              />
            </label>
            <label>
              Date Finished:
              <input
                name="valuePhone"
                type="date"
                value={valuePhone}
                onChange={this.handleChange}
                id="phoneInput"
              />
            </label>
            <input type="submit" value="Save" />
          </div>
        </form>
      );
    } else {
      page = (
        <Preview2 name={nameInput} email={emailInput} phone={phoneInput} />
      );
    }

    return (
      <div>
        <div>{page}</div>
      </div>
    );
  }
}

export default Edit2;
