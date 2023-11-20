import React, { useState, useEffect } from "react";
import Presupuestos from "./Presupuestos.jsx";
import WebComponent from "./WebComponent.jsx";

const myCheckBoxList = [
  {
    id: 1,
    name: "SEO",
    description: "Description for Service 1, SEO.",
    price: 100,
  },
  {
    id: 2,
    name: "Ads",
    description: "Description for Service 2, Ads.",
    price: 200,
  },
  {
    id: 3,
    name: "Web",
    description: "Description for Service 3, Web.",
    price: 300,
  },
];

//

const MultipleCheckBoxComponent = function () {
  // ****Initialize state as an object made of item name: boolean, all start false (unchecked)
  /* {
      SEO: true,
      Ads: true,
      Web: true
    } */
  // CHECKBOX STATE array.reduce(callback(accumulator, currentValue), initialValue);
  const [checkedItems, setCheckedItems] = useState(
    myCheckBoxList.reduce(function (obj, item) {
      obj[item.name] = false;
      return obj;
    }, {})
  );

  // WEB STATE State of the Web checkbox (all states go in the top)
  const [isWebChecked, setIsWebChecked] = useState(false);

  const [numPages, setNumPages] = useState(0);
  const [numLanguages, setNumLanguages] = useState(0);
  const [totalWebCost, setTotalWebCost] = useState(0);

  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(
    function () {
      // Recalculate totalWebCost whenever numPages or numLanguages change
      setTotalWebCost(numPages * numLanguages * 30);
    },
    [numPages, numLanguages]
  );

  useEffect(
    function () {
      if (!checkedItems["Web"]) {
        setNumLanguages(0);
        setNumPages(0);
      }
    },
    [checkedItems["Web"]]
  );

  useEffect(
    function () {
      setTotalBudget(
        myCheckBoxList.reduce(function (total, item) {
          return total + (checkedItems[item.name] ? item.price : 0);
        }, 0) + totalWebCost
      );
    },
    [checkedItems, totalWebCost]
  );

  // CHECKBOX HANDLER Event handler to toggle the checked state of a checkbox
  const handleCheckboxChange = function (name) {
    setCheckedItems(function (prevCheckedItems) {
      return {
        ...prevCheckedItems,
        [name]: !prevCheckedItems[name],
      };
    });

    if (name === "Web") {
      // If the "Web" checkbox is checked or unchecked, update the isWebChecked state accordingly
      setIsWebChecked(!isWebChecked);
    }
  };

  return (
    <div>
      {console.log("Ita, this is Checked Items:", checkedItems)}
      <h3>Services</h3> <br />
      <ul>
        {myCheckBoxList.map(function ({ name }, index) {
          return (
            <li key={index}>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    checked={checkedItems[name]}
                    onChange={function () {
                      handleCheckboxChange(name);
                    }}
                  />
                  {name}
                </label>
              </div>
              {checkedItems["Web"] && name === "Web" && (
                <WebComponent
                  setNumPages={setNumPages}
                  setNumLanguages={setNumLanguages}
                />
              )}
            </li>
          );
        })}
      </ul>
      <h2>Total Budget:{totalBudget}</h2>
      <Presupuestos
        checkedItems={checkedItems}
        numPages={numPages}
        numLanguages={numLanguages}
        myCheckBoxList={myCheckBoxList}
        totalWebCost={totalWebCost}
        totalBudget={totalBudget}
      />
    </div>
  );
};

export default MultipleCheckBoxComponent;
