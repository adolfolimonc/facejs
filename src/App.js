import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        {/*
      <logo />
      <ImageLinkForm />
      <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;