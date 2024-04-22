import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("white");

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 800);
  }

  let toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode activated ","success")
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlert("light mode activated " ,"success")
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
        showAlert={showAlert}
      />
      <Alert alert={alert}/>
    </>
  );
}

export default App;
