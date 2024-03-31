import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App_V2";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} size={40} color="red" />
    <StarRating maxRating={5} size={24} color="blue" defaultRating={3} />
    <Test /> */}
    <App />
    {/* <StarRating  maxRating={10} />
    <StarRating /> */}
  </React.StrictMode>
);
