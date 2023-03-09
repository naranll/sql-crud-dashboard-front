import { useContext, useEffect, useState } from "react";
import { BtnContext } from "./contexts/ButtonContext";

function App() {
  const { buttons } = useContext(BtnContext);
  const [current, setCurrent] = useState(buttons[0]);

  useEffect(() => {
    if (localStorage.getItem("buttonVal")) {
      setCurrent(
        buttons.find((button) => button.value === localStorage.getItem("buttonVal"))
      )
    }
  }, [buttons])

  function currentStateHandler(button) {
    setCurrent(button);
    localStorage.setItem("buttonVal", button.value);
  }

  return (
    <div className="App">
      <div>
        {buttons.map((button, i) => {
          return <button key={i}
            onClick={() => currentStateHandler(button)}>{button.name}</button>
        })}
      </div>
      {current.component}
    </div>
  );
}

export default App;
