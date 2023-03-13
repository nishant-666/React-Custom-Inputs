import "./App.css";
import Inputs from "./components/Inputs";
import { useState, useEffect } from "react";
import Output from "./components/Output";

function App() {
  const [inputs, setInputs] = useState([]);
  const [output, setOutput] = useState([]);
  const [formFields, setFormFields] = useState({});
  const fields = [
    {
      name: "Text Input",
      id: "text",
      field: <input name="text" type="text" placeholder="Text Input" />,
    },
    {
      id: "number",
      name: "Number Input",
      field: <input type="number" placeholder="Number Input" />,
    },
    {
      id: "file",
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

  const getInputValues = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const submit = () => {
    console.log(formFields);
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
        <Output
          formFields={formFields}
          output={output}
          getInputValues={getInputValues}
          submit={submit}
        />
      </div>
    </div>
  );
}

export default App;
