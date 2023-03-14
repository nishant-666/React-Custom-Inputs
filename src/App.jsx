import { useEffect, useState } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Output from "./components/Output";

function App() {
  const [inputValue, setInputValue] = useState([]);
  const [outputState, setOutputState] = useState({});
  const [outputValues, setOutputValues] = useState([
    {
      name: "text-input",
      label: "Text Input",
      field: <input type={"text"} name="text-input" />,
    },
    {
      name: "number-input",
      label: "Number Input",
      field: <input type={"number"} name="number-input" />,
    },
    {
      name: "color-input",
      label: "Color Input",
      field: <input type={"color"} name="color-input" />,
    },
  ]);
  const [fieldValues, setFieldValues] = useState([]);
  const handleCheckBoxes = (event) => {
    let { value, checked } = event.target;

    if (checked) {
      setInputValue([...inputValue, value]);
    } else {
      setInputValue(inputValue.filter((input) => input !== value));
    }
  };

  const getOutputValues = (event) => {
    let { name, value } = event.target;
    setOutputState({ ...outputState, [name]: value });
  };

  const sendValues = () => {
    console.log(outputState);
  };
  useEffect(() => {
    setFieldValues(
      outputValues.filter((output) => inputValue.includes(output.label))
    );
  }, [inputValue]);

  return (
    <div className="App">
      <div className="left-bar">
        <Inputs handleCheckBoxes={handleCheckBoxes} />
      </div>
      <div className="right-bar">
        <Output
          sendValues={sendValues}
          outputValues={fieldValues}
          getOutputValues={getOutputValues}
        />
      </div>
    </div>
  );
}

export default App;
