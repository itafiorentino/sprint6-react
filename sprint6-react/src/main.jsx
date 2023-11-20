import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import WelcomePage from "./Components/WelcomePage.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
