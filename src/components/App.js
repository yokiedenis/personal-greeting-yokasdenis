
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
const [text,setText]=useState();
  const textInput=(e)=>{
    setText(e.target.value)
  }
  return (
    <div>
        <h1>Enter your name</h1><br></br>
        <input onChange={textInput}/>
        <p>{text}</p>
    </div>
  )
}

export default App
