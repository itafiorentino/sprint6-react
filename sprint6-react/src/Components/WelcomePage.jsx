import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function WelcomePage() {
  return (
    <>
      <h1>This is the WelcomePage</h1>
      <button>
        <NavLink to="/app">Go to Budgets</NavLink>
      </button>
    </>
  );
}

export default WelcomePage;
