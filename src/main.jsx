import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BackgroundFX from "./components/utils/BackGroundFX";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BackgroundFX />
    <App />
  </React.StrictMode>,
);
