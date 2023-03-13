import React, { useState } from "react";

export default function Output({ getInputValues, output, submit }) {
  return (
    <div>
      {output.map((item) => {
        return (
          <>
            <input
              onChange={(event) => getInputValues(event)}
              name={item.id}
              type={item.field.props.type}
            />
          </>
        );
      })}

      <button onClick={submit}>Save</button>
    </div>
  );
}
