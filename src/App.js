import React, { Component } from "react";
import Edit from "./components/Edit";
import Edit2 from "./components/Edit2";
import Edit3 from "./components/Edit3";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: true,
    };

    this.previewPage = this.previewPage.bind(this);
    this.editPage = this.editPage.bind(this);
  }

  previewPage = () => {
    this.setState({ isEditMode: false });
  };

  editPage = () => {
    this.setState({ isEditMode: true });
  };

  render() {
    const isEditMode = this.state.isEditMode;
    console.log(isEditMode);
    let page;

    if (isEditMode) {
      page = <div>EDIT MODE</div>;
    } else {
      page = <div>PREVIEW MODE</div>;
    }

    return (
      <div>
        <button onClick={this.editPage}>EDIT</button>
        <button onClick={this.previewPage}>PREVIEW</button>
        {page}
        <Edit mode={isEditMode} />
        <Edit2 mode={isEditMode} />
        <Edit3 mode={isEditMode} />
      </div>
    );
  }
}

export default App;
