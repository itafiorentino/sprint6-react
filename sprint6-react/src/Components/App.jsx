import React, { useState, useEffect } from "react";
import MultipleCheckBoxComponent from "./MultipleCheckBoxComponent.jsx";
import { NavLink } from "react-router-dom";
import "../Styles/App.css";

function App() {
  return (
    <div>
      <MultipleCheckBoxComponent />
      <button>
        <NavLink to="/">Go to WelcomePage</NavLink>
      </button>
    </div>
  );
}

export default App;
