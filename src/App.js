import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

// import About from "./components/About";

function App() {
  let [mode, setMode] = useState("white");

  let toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        title="texutils "
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Textform
        title="Enter Text"
        sum="Summary"
        mode={mode}
        toggleMode={toggleMode}
      />
    </>
  );
}

export default App;
