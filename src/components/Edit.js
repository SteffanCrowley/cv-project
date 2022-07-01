import React, { Component } from "react";
import Preview from "./Preview";
import "../styles/App.css";

class Edit extends Component {
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
            <input type="submit" value="Save" />
          </div>
        </form>
      );
    } else {
      page = <Preview name={nameInput} email={emailInput} phone={phoneInput} />;
    }

    return (
      <div>
        <div>{page}</div>
      </div>
    );
  }
}

export default Edit;
