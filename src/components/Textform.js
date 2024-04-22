import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("  ");

  const uppercase = () => {
    console.log("uppercase clicked" + text);
    let tt = text.toUpperCase();
    setText(tt);
    props.showAlert("converted to uppercase","success")
  };
  const copy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    // text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied","success")
  };
  const lower = () => {
    console.log("lower clicked" + text);
    let tt = text.toLowerCase();
    setText(tt);
    props.showAlert("converted to lowercase","success")
  };
  // const dark = () => {
  //   console.log("drak mode enabled");
  // };

  const clear = () => {
    console.log("uppercase clicked" + text);
    // let tt = text.toUpperCase();
    setText("");
    props.showAlert("cleared","success")
    
    
  };

  const handleonchange = (event) => {
    console.log("handleonchange");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>Example textarea</h1>
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            type="button"
            className="btn mx-2 btn-primary"
            onClick={uppercase}
          >
            upper case
          </button>
          <button type="button" className="btn btn-primary" onClick={clear}>
            clear
          </button>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={copy}>
            copy
          </button>
          <button
            type="button"
            className="btn mx-2 btn-primary"
            onClick={lower}
          >
            lower case
          </button>
        </div>
        <h3>{props.sum}</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words ,{text.length} letter
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "enter something to preview"}</p>
      </div>
    </>
  );
}
