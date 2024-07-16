import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Productstore from "./components/Context/Productstore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Productstore>
      <App />
    </Productstore>
  </React.StrictMode>
);
