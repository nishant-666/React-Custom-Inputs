import React from "react";

export default function Output({ outputValues, getOutputValues, sendValues }) {
  return (
    <div className="inputs output-container">
      {outputValues.map((output) => {
        return (
          <div className="output-inner">
            <label>{output.label}</label>

            <input
              onChange={getOutputValues}
              type={output.field.props.type}
              name={output.field.props.name}
            />
          </div>
        );
      })}

      <button onClick={sendValues}>Send!</button>
    </div>
  );
}
