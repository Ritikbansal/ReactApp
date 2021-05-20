
import React, {Component} from "react";
import  { useRef,useState, useEffect } from 'react';
function App() {
    
  const [count, setCount] = useState(0);

 
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
   <>
      
      <div class="value-button" id="decrease" onClick={handleDecrement} style={{"cursor":"pointer","margin":"1%","display": "inline-block"}} value="Decrease Value"><span class="badge badge-info">-</span></div>
      <span style={{"cursor":"pointer","display": "inline-block"}} class="badge badge-secondary">{count}</span>
      <div class="value-button" id="increase" onClick={handleIncrement} style={{"cursor":"pointer","margin":"1%","display": "inline-block"}} value="Increase Value"><span class="badge badge-info">+</span></div>
      <br/>
      <span onClick={() => setCount(0)  }class="badge badge-danger">Set to 0</span>
    </>
  );
  }

export default function Quantity()
{ 
    return(
         <App/>
       
    )
}