import React from "react";

export default function Inputs({ handleCheckboxChange }) {
  return (
    <div>
      <div className="input-container">
        <div>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            name="text-input"
            value="Text Input"
          />
          <label for="text-input"> Text Input</label>
        </div>
      </div>
      <div className="input-container">
        <div>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            name="number-input"
            value="Number Input"
          />
          <label for="number-input"> Number Input</label>
        </div>

        <div></div>
      </div>
      <div className="input-container">
        <div>
          <input
            onChange={handleCheckboxChange}
            type="checkbox"
            name="file-input"
            value="File Input"
          />
          <label for="file-input"> File Input</label>
        </div>
      </div>
    </div>
  );
}
