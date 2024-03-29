import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App_V2";
import StarRating from "./StarRating";

function Test() {

  const [movieRating, setMovieRating] = useState(0);
  return <div>
    <StarRating color="gold" maxRating={10} onSetRating={setMovieRating} />
    <p>This movie was rated {movieRating} Stars. </p>
  </div>
}

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
