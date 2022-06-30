import React, { Component } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.previewPage = this.previewPage.bind(this);
    this.editPage = this.editPage.bind(this);
    this.state = { isEditMode: true };
  }

  previewPage = () => {
    this.setState({ isEditMode: false });
  };

  editPage = () => {
    this.setState({ isEditMode: true });
  };

  render() {
    const isEditMode = this.state.isEditMode;

    let page;

    if (isEditMode) {
      page = <Edit />;
    } else {
      page = (
        <Preview
          name="steffan"
          email="steffan@gmail.com"
          phone="949-444-5555"
        />
      );
    }

    return (
      <div>
        <div>
          <button onClick={this.editPage}>EDIT</button>
          <button onClick={this.previewPage}>PREVIEW</button>
          {page}
        </div>
      </div>
    );
  }
}

// function EditPage(props) {
//   return <Edit />;
// }

// function PreviewPage(props) {
//   return (
//     <Preview name="steffan" email="steffan@gmail.com" phone="949-444-5555" />
//   );
// }

export default App;
