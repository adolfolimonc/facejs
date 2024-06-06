import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="circlePosition w-[650px] h-[550px] bg-[#95D9F2] rounded-[100%] absolute z-1 top-[40%] left-[30%] translate-x-[-100%] translate-y-[-100%] blur-[100px]"></div>
    <div className="circlePosition w-[650px] h-[550px] bg-[#88B4F4] rounded-[100%] absolute z-1 top-[40%] left-[30%] translate-x-[-100%] translate-y-[100%] blur-[100px]"></div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
