import React, { useState, useEffect } from "react";

function Presupuestos({
  checkedItems,
  numPages,
  numLanguages,
  myCheckBoxList,
  totalWebCost,
  totalBudget,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [savedBudgets, setSavedBudgets] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveBudget = () => {
    const newBudget = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      services: Object.values(checkedItems).filter((value) => value).length,
      webPages: numPages.toString(),
      languages: numLanguages.toString(),
      totalBudget: totalBudget.toString(),
    };

    setSavedBudgets((prevBudgets) => [...prevBudgets, newBudget]);
  };

  return (
    <>
      {console.log(
        "this is the checked items: " + JSON.stringify(checkedItems)
      )}
      <h2>Submit Budget</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button onClick={saveBudget}>Submit</button>

      {/* BUDGETS LIST */}
      {savedBudgets.map((budget, index) => (
        <div key={index}>
          <p>Name: {budget.name}</p>
          <p>Phone: {budget.phone}</p>
          <p>Email: {budget.email}</p>
          <p>Hired services: {budget.services}</p>
          <p>Total Budget: {budget.totalBudget}</p>
        </div>
      ))}
    </>
  );
}

export default Presupuestos;
