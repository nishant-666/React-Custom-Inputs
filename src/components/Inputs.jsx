import React from "react";

export default function Inputs({ handleCheckBoxes }) {
  return (
    <div className="inputs">
      <div className="input-container">
        <div>
          <input
            onChange={handleCheckBoxes}
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
            onChange={handleCheckBoxes}
            type="checkbox"
            name="number-input"
            value="Number Input"
          />
          <label for="number-input"> Number Input</label>
        </div>
      </div>
      <div className="input-container">
        <div>
          <input
            onChange={handleCheckBoxes}
            type="checkbox"
            name="color-input"
            value="Color Input"
          />
          <label for="color-input"> Color Input</label>
        </div>
      </div>
    </div>
  );
}
