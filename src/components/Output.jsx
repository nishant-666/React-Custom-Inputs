import React from "react";

export default function Output({ output, selectedFields }) {
  return (
    <div>
      {output.map((item) => {
        return <>{item.field}</>;
      })}

      <button onClick={selectedFields}>Save</button>
    </div>
  );
}
