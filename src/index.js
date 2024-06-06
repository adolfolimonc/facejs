import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="viewportContainer relative w-screen h-screen overflow-hidden">
      <App />
      <div className="circlePosition w-[75vw] h-[75vh] bg-[#C9FAF6] rounded-[100%] absolute z-[-1] top-[50%] left-[70%] transform translate-x-[-50%] translate-y-[-10%] blur-[10em]"></div>
      <div className="circlePosition w-[75vw] h-[75vh] bg-[#95D9F2] rounded-[100%] absolute z-[-1] top-[50%] left-[20%] transform translate-x-[-50%] translate-y-[-100%] blur-[10em]"></div>
      <div className="circlePosition w-[75vw] h-[75vh] bg-[#959CF1] rounded-[100%] absolute z-[-1] top-[50%] left-[70%] transform translate-x-[-50%] translate-y-[-100%] blur-[10em]"></div>
      <div className="circlePosition w-[75vw] h-[75vh] bg-[#88B4F4] rounded-[100%] absolute z-[-1] top-[50%] left-[20%] transform translate-x-[-50%] translate-y-[-10%] blur-[10em]"></div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
