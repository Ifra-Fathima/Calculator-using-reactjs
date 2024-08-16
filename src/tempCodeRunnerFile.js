import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [prev,updateinput]=useState("")
  const inputdisplay=(value)=>{
    updateinput((prev=>prev+value));
  }

  const clearDisplay=()=>{
    updateinput("");
  }

  const delOne=()=>{
    let del=prev.slice(0,-1);
    updateinput(del);
  }

  const result=()=>{
    updateinput(eval(prev).toString());
  }
    
  return (
    <div className="mycal">
      <div><input className="display" type="text" placeholder="0" value={prev}/>
      </div>
      <div className="buttons">
            <button onClick={clearDisplay}>AC</button> 
            <button onClick={delOne}>DEL</button>
            <button onClick={()=>inputdisplay('/')}>/</button>
            <button onClick={()=>inputdisplay('*')}>*</button>
    
            <button onClick={()=>inputdisplay('7')}>7</button>
            <button onClick={()=>inputdisplay('8')}>8</button>
            <button onClick={()=>inputdisplay('9')}>9</button>
            <button onClick={()=>inputdisplay('-')}>-</button>
    
            <button onClick={()=>inputdisplay('4')}>4</button>
            <button onClick={()=>inputdisplay('5')}>5</button>
            <button onClick={()=>inputdisplay('6')}>6</button>
            <button onClick={()=>inputdisplay('+')}>+</button>
            
            <button onClick={()=>inputdisplay('1')}>1</button>
            <button onClick={()=>inputdisplay('2')}>2</button>
            <button onClick={()=>inputdisplay('3')}>3</button>
            <button className="equalto" onClick={result}>=</button>
            
            <button onClick={()=>inputdisplay('0')}>0</button>
            <button onClick={()=>inputdisplay('00')}>00</button>
            <button onClick={()=>inputdisplay('.')}>.</button>
      </div>
    </div>
  );
};

export default App;
