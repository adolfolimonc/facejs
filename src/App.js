import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageLinkForm />
        {/*
      
      
      <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
