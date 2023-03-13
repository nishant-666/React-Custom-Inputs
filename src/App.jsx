import "./App.css";
import Inputs from "./components/Inputs";
import { useState, useEffect } from "react";
import Output from "./components/Output";

function App() {
  const [inputs, setInputs] = useState([]);
  const [output, setOutput] = useState([]);
  const fields = [
    {
      name: "Text Input",
      field: <input type="text" placeholder="Text Input" />,
    },
    {
      name: "Number Input",
      field: <input type="number" placeholder="Number Input" />,
    },
    {
      name: "File Input",
      field: <input type="file" placeholder="File Input" />,
    },
  ];

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setInputs([...inputs, event.target.value]);
    } else {
      setInputs(inputs.filter((item) => item !== event.target.value));
    }
  };

  const selectedFields = () => {
    console.log(output);
  };

  useEffect(() => {
    setOutput([...fields.filter((field) => inputs.includes(field.name))]);
  }, [inputs]);

  return (
    <div className="App">
      <div className="left-bar">
        <Inputs handleCheckboxChange={handleCheckboxChange} />
      </div>
      <div className="right-bar">
        <Output output={output} selectedFields={selectedFields} />
      </div>
    </div>
  );
}

export default App;
