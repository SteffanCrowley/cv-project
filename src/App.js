import React, { Component } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <EditButton onClick={this.handleLogoutClick} />;
    } else {
      button = <PreviewButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      </div>
    );
  }
}

function EditPage(props) {
  return <Edit />;
}

function PreviewPage(props) {
  return (
    <Preview name="steffan" email="steffan@gmail.com" phone="949-444-5555" />
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <PreviewPage />;
  }
  return <EditPage />;
}

function EditButton(props) {
  return <button onClick={props.onClick}>EDIT</button>;
}

function PreviewButton(props) {
  return <button onClick={props.onClick}>PREVIEW</button>;
}

export default App;
