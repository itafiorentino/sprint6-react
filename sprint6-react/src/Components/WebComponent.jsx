import React, { useState, useEffect } from "react";

function WebComponent({
  setNumPages,
  setNumLanguages,
  numPages,
  numLanguages,
}) {
  return (
    <div>
      <label>
        Number of Pages:
        <input
          type="number"
          onChange={(e) => setNumPages(parseInt(e.target.value))}
          min="0"
        />
      </label>
      <label>
        Number of Languages:
        <input
          type="number"
          value={numLanguages}
          onChange={(e) => setNumLanguages(parseInt(e.target.value))}
          min="0"
        />
      </label>
    </div>
  );
}

export default WebComponent;
